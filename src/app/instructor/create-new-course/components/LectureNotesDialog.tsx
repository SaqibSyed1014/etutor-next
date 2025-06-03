
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { X } from 'lucide-react';

interface LectureNotesDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const LectureNotesDialog: React.FC<LectureNotesDialogProps> = ({
  isOpen,
  onClose,
  onSave
}) => {
  const [notes, setNotes] = useState('');
  const [notesFile, setNotesFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setNotesFile(file);
    }
  };

  const handleSave = () => {
    if (notes.trim() || notesFile) {
      onSave();
      setNotes('');
      setNotesFile(null);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Lecture Notes</DialogTitle>
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
          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Write your lecture Notes here..."
              className="min-h-[120px]"
            />
          </div>

          <div className="space-y-2">
            <Label>Upload Notes</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <div className="text-gray-500 mb-2">
                Drag an drop a file or{' '}
                <button
                  className="text-blue-500 underline"
                  onClick={() => document.getElementById('notes-upload')?.click()}
                >
                  browse file
                </button>
              </div>
              <input
                type="file"
                id="notes-upload"
                className="hidden"
                onChange={handleFileUpload}
              />
              {notesFile && (
                <div className="text-sm text-green-600 mt-2">
                  Selected: {notesFile.name}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disabled={!notes.trim() && !notesFile}
              className="bg-orange-500 hover:bg-orange-600"
            >
              Add Content
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LectureNotesDialog;
