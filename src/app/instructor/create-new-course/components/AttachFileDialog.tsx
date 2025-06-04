
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface AttachFileDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const AttachFileDialog: React.FC<AttachFileDialogProps> = ({
  isOpen,
  onClose,
  onSave
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSave = () => {
    if (selectedFile) {
      onSave();
      setSelectedFile(null);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Attach File</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-6 px-[22px]">
          <div>
            <div className="border py-6 flex flex-col gap-2 justify-center text-center">
              <div className="text-base font-medium">Attach File</div>
              <div className="text-gray-500">
                Drag an drop a file or{' '}
                <button
                    className="text-gray-900"
                    onClick={() => document.getElementById('file-upload')?.click()}
                >
                  browse file
                </button>
              </div>
              <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={handleFileUpload}
              />
            </div>

            {selectedFile && (
                <div className="text-sm text-gray-900 mt-2 space-y-1">
                  <div className="flex justify-between items-center border px-3 py-1">
                    {selectedFile.name}
                    <button
                        type="button"
                        onClick={() => setSelectedFile(null)}
                        className="text-error-500 text-xs hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
            )}</div>

          <div className="flex justify-between">
            <Button variant="gray" onClick={onClose}>
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disabled={!selectedFile}
            >
              Attach File
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AttachFileDialog;
