'use client';

import React, {useEffect, useState} from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose, DialogFooter
} from "@/components/ui/dialog";

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import DropdownMenuWrapper from "@/components/DropdownMenuWrapper";
import {Instructor, instructorsData} from "@/lib/@fake-db/instructors";
import {PaperPlaneRightSolid} from "@/assets/icons/common-icons";
import {DropdownOption} from "../../../../types";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

interface ComposeMessageDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSendMessage: (teacherName: Instructor, message: string) => void;
}

const ComposeMessageDialog = ({ open, onOpenChange, onSendMessage }: ComposeMessageDialogProps) => {
  const [selectedTeacherID, setSelectedTeacherID] = useState<string>('');
  const [teachersList, setTeachers] = useState<DropdownOption[]>([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setTeachers(instructorsData.map(item => ({
      value: String(item.id),
      label: item.name
    })))
  }, [instructorsData]);

  const handleSend = () => {
    const selectedTeacher = instructorsData.find(item => String(item.id) == selectedTeacherID)
    if (selectedTeacher && message.trim()) {
      onSendMessage(selectedTeacher, message);
      setSelectedTeacherID('');
      setMessage('');
    }
  };

  // const handleCancel = () => {
  //   setSelectedTeacherID(null);
  //   setMessage('');
  //   onOpenChange(false);
  // };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>New Message</DialogTitle>
          </div>
        </DialogHeader>
        <div className="p-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="teacher">Teacher:</Label>
              <Select value={selectedTeacherID} onValueChange={(val) => {
                setSelectedTeacherID(val);
              }}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select..."/>
                </SelectTrigger>

                <SelectContent>
                  {teachersList.map(item => (
                      <SelectItem value={item.value}>{item.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <textarea
                  id="message"
                  placeholder="Write your message here..."
                  value={message}
                  rows={4}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none"
              />
            </div>
          </div>

        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="gray">Cancel</Button>
          </DialogClose>
          <Button
              onClick={handleSend}
              disabled={!selectedTeacherID || !message.trim()}
          >
            Send Message
            <PaperPlaneRightSolid />
          </Button>
        </DialogFooter>

      </DialogContent>
    </Dialog>
  );
};

export default ComposeMessageDialog;
