
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, Upload } from 'lucide-react';

interface LectureVideoDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const LectureVideoDialog: React.FC<LectureVideoDialogProps> = ({
  isOpen,
  onClose,
  onSave
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [hasUploadedFile, setHasUploadedFile] = useState(false);
  const [thumbnail, setThumbnail] = useState<string>('');
  const [selectedVideoDuration, setVideoDuration] = useState('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const video = document.createElement('video');
      video.preload = 'metadata';

      video.onloadedmetadata = function () {
        setVideoDuration(formatTime(video.duration));
      };
      video.src = URL.createObjectURL(file);

      const reader = new FileReader();
      reader.onload = (e) => {
        setThumbnail(e.target?.result as string);
      };
      reader.readAsDataURL(file);

      setSelectedFile(file);
      setHasUploadedFile(true);
    }
  };

  function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  const handleSave = () => {
    if (hasUploadedFile) {
      onSave();
      setSelectedFile(null);
      setHasUploadedFile(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Lecture Video</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-6 px-[22px]">
          {!hasUploadedFile ? (
            <div className="">
              <div className="space-y-4">
                <div className="flex items-center pl-[18px] border">
                  <div className="text-gray-500 flex-1  ">Upload Files</div>
                  <input
                      type="file"
                      id="video-upload"
                      className="hidden"
                      accept=".mp4,.mov,.avi,.mkv"
                      onChange={handleFileUpload}
                  />
                  <Button
                      variant="gray"
                      onClick={() => document.getElementById('video-upload')?.click()}
                  >
                    Upload File
                  </Button>
                </div>
                <p className="text-gray-900">
                  <b>Note:</b> All files should be at least 720p and less than 4.0 GB.
                </p>
              </div>
            </div>
          ) : (
            <div className="">
              <div className="flex items-start space-x-3">
                <div className="w-40 h-[90px] shrink-0 flex items-center justify-center">
                  <video src={thumbnail} id="videoPreview" controls={false} loop={true} autoPlay={true} className="size-full object-cover"></video>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="space-y-0.5">
                    <div className="text-xs font-medium text-success-500">FILE UPLOADED <span className="text-gray-700"> • {selectedVideoDuration}</span>
                    </div>
                    <div className="text-sm text-gray-900">
                      {selectedFile?.name}
                    </div>
                  </div>
                  <button
                      onClick={() => document.getElementById('video-upload')?.click()}
                      className="text-secondary-500 font-medium text-sm cursor-pointer"
                  >
                    Replace Video
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between space-x-2">
            <Button variant="gray" onClick={onClose}>
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disabled={!hasUploadedFile}
            >
              Upload Video
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LectureVideoDialog;
