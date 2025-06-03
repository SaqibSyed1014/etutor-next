
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

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setHasUploadedFile(true);
    }
  };

  const handleSave = () => {
    if (hasUploadedFile) {
      onSave();
      setSelectedFile(null);
      setHasUploadedFile(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Lecture Video</DialogTitle>
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-4 top-4"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <div className="space-y-4">
          {!hasUploadedFile ? (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <div className="space-y-4">
                <div className="text-gray-500">Upload Files</div>
                <input
                  type="file"
                  id="video-upload"
                  className="hidden"
                  accept=".mp4,.mov,.avi,.mkv"
                  onChange={handleFileUpload}
                />
                <Button
                  variant="outline"
                  onClick={() => document.getElementById('video-upload')?.click()}
                >
                  Upload File
                </Button>
                <p className="text-xs text-gray-500">
                  Note: All files should be at least 720p and less than 4.0 GB.
                </p>
              </div>
            </div>
          ) : (
            <div className="border rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-12 bg-gray-200 rounded flex items-center justify-center">
                  <Upload className="w-6 h-6 text-gray-400" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-green-600">UPLOADED • 1:55</div>
                  <div className="text-sm text-gray-600">
                    Conduct-ux-research_01 - Introduction to Course 4 Conduct UX Research and Test Early Concepts.mp4
                  </div>
                  <Button variant="link" className="text-blue-500 text-xs p-0 h-auto">
                    Replace Video
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button 
              onClick={handleSave}
              disabled={!hasUploadedFile}
              className="bg-orange-500 hover:bg-orange-600"
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
