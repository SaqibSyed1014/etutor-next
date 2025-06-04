
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { X } from 'lucide-react';

interface LectureDescriptionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const LectureDescriptionDialog: React.FC<LectureDescriptionDialogProps> = ({
  isOpen,
  onClose,
  onSave
}) => {
  const [description, setDescription] = useState('');

  const handleSave = () => {
    if (description.trim()) {
      onSave();
      setDescription('');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add Lecture Description</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 px-[22px] py-6">
          <div className="">
            <Label htmlFor="description">Description</Label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write your lecture description here..."
              className="resize-none w-full"
              rows={5}
            />
          </div>

          <div className="flex justify-between">
            <Button variant="gray" onClick={onClose}>
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disabled={!description.trim()}
            >
              Add Description
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LectureDescriptionDialog;
