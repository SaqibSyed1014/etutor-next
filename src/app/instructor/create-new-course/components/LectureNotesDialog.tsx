
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
  const [notesFiles, setNotesFiles] = useState<File[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length > 0) {
      setNotesFiles((prev) => [...prev, ...files]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setNotesFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    if (notes.trim() || notesFiles.length > 0) {
      onSave();
      setNotes('');
      setNotesFiles([]);
    }
  };

  return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Add Lecture Notes</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-6 px-[22px]">
            <div>
              <Label htmlFor="notes">Notes</Label>
              <textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Write your lecture Notes here..."
                  className="resize-none w-full"
                  rows={5}
              />
            </div>

            <div>
              <div className="border flex flex-col gap-2 justify-center text-center py-6">
                <div className="text-base font-medium">Upload Notes</div>
                <div className="text-gray-500 mb-2">
                  Drag and drop files or{' '}
                  <button
                      type="button"
                      className="text-gray-900"
                      onClick={() => document.getElementById('notes-upload')?.click()}
                  >
                    browse files
                  </button>
                </div>
                <input
                    type="file"
                    id="notes-upload"
                    className="hidden"
                    multiple
                    onChange={handleFileUpload}
                />
              </div>

              {notesFiles.length > 0 && (
                  <div className="text-sm text-gray-900 mt-2 space-y-1">
                    {notesFiles.map((file, index) => (
                        <div key={index} className="flex justify-between items-center border px-3 py-1">
                          <span className="truncate">{file.name}</span>
                          <button
                              type="button"
                              onClick={() => handleRemoveFile(index)}
                              className="text-error-500 text-xs hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                    ))}
                  </div>
              )}
            </div>

            <div className="flex justify-between">
              <Button variant="gray" onClick={onClose}>
                Cancel
              </Button>
              <Button
                  onClick={handleSave}
                  disabled={!notes.trim() && notesFiles.length === 0}
              >
                Add Notes
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
  );
};


export default LectureNotesDialog;
