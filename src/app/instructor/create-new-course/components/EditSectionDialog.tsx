'use client';

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { X } from 'lucide-react';

interface EditSectionDialogProps {
    isOpen: boolean;
    sectionName: string;
    title?: string;
    placeholder?: string;
    onClose: () => void;
    onSave: (newName: string) => void;
}

const EditSectionDialog: React.FC<EditSectionDialogProps> = ({
                                                                 isOpen,
                                                                 sectionName,
                                                                 title = "Edit Section Name",
                                                                 placeholder = "Write your section name here...",
                                                                 onClose,
                                                                 onSave
                                                             }) => {
    const [name, setName] = useState(sectionName);

    useEffect(() => {
        setName(sectionName);
    }, [sectionName]);

    const handleSave = () => {
        if (name.trim()) {
            onSave(name.trim());
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-6 px-[22px] py-6">
                    <div className="">
                        <Label htmlFor="section-name">Section</Label>
                        <Input
                            id="section-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder={placeholder}
                        />
                    </div>
                    <div className="flex justify-between">
                        <Button variant="gray" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button
                            onClick={handleSave}
                            disabled={!name.trim()}
                        >
                            Save Changes
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default EditSectionDialog;
