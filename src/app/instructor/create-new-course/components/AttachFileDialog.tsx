
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
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Attach File</DialogTitle>
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
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <div className="space-y-4">
              <div className="text-lg font-medium">Attach File</div>
              <div className="text-gray-500">
                Drag an drop a file or{' '}
                <button
                  className="text-blue-500 underline"
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
          </div>
          
          {selectedFile && (
            <div className="text-sm text-green-600">
              Selected: {selectedFile.name}
            </div>
          )}
          
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button 
              onClick={handleSave}
              disabled={!selectedFile}
              className="bg-orange-500 hover:bg-orange-600"
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
