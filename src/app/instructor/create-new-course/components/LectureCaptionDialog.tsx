
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { X } from 'lucide-react';

interface LectureCaptionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const LectureCaptionDialog: React.FC<LectureCaptionDialogProps> = ({
  isOpen,
  onClose,
  onSave
}) => {
  const [caption, setCaption] = useState('');

  const handleSave = () => {
    if (caption.trim()) {
      onSave();
      setCaption('');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Lecture Caption</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 px-[22px] py-6">
          <div className="">
            <Label htmlFor="caption">Caption</Label>
            <textarea
              id="caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Write your lecture caption here..."
              className="w-full resize-none"
              rows={5}
            />
          </div>

          <div className="flex justify-between space-x-2">
            <Button variant="gray" onClick={onClose}>
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disabled={!caption.trim()}
            >
              Add Caption
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LectureCaptionDialog;
