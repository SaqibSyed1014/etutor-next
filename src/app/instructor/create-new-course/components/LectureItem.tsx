
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import EditSectionDialog from './EditSectionDialog';
import LectureVideoDialog from './LectureVideoDialog';
import AttachFileDialog from './AttachFileDialog';
import LectureCaptionDialog from './LectureCaptionDialog';
import LectureDescriptionDialog from './LectureDescriptionDialog';
import LectureNotesDialog from './LectureNotesDialog';
import {ChevronUp, ChevronDown, PencilLine, ThreeBars, Trash} from "@/assets/icons/common-icons";
import {DraggableProvidedDragHandleProps} from "@hello-pangea/dnd";

interface Lecture {
  id: string;
  name: string;
  duration: string;
  type: 'video' | 'attachment' | 'caption' | 'description' | 'notes';
}

interface LectureItemProps {
  lecture: Lecture;
  index: number;
  sectionId: string;
  onUpdateLecture: (sectionId: string, lectureId: string, updatedLecture: Partial<Lecture>) => void;
  onDeleteLecture: (sectionId: string, lectureId: string) => void;
  dragHandleProps?: DraggableProvidedDragHandleProps | null
}

const LectureItem: React.FC<LectureItemProps> = ({
  lecture,
  index,
  sectionId,
  onUpdateLecture,
  onDeleteLecture,
  dragHandleProps
}) => {
  const [editLectureDialog, setEditLectureDialog] = useState(false);
  const [videoDialog, setVideoDialog] = useState(false);
  const [attachFileDialog, setAttachFileDialog] = useState(false);
  const [captionDialog, setCaptionDialog] = useState(false);
  const [descriptionDialog, setDescriptionDialog] = useState(false);
  const [notesDialog, setNotesDialog] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleContentAction = (action: string) => {
    switch (action) {
      case 'video':
        setVideoDialog(true);
        break;
      case 'attach':
        setAttachFileDialog(true);
        break;
      case 'caption':
        setCaptionDialog(true);
        break;
      case 'description':
        setDescriptionDialog(true);
        break;
      case 'notes':
        setNotesDialog(true);
        break;
    }
  };

  return (
        <div
          className={`flex items-center justify-between p-3 bg-white`}
        >
          <div className="flex items-center space-x-3">
            <div className="cursor-grab text-gray-500" {...dragHandleProps}>
              <ThreeBars />
            </div>
            <span className="text-sm text-gray-900">{lecture.name.length ? lecture.name : 'Lecture name'}</span>
          </div>

          <div className="flex items-center space-x-3">
            <DropdownMenu onOpenChange={setIsOpen} open={isOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="text-primary-500 font-bold flex items-center text-sm leading-[40px] [&_svg]:size-3">
                  Contents {isOpen ? <ChevronUp /> : <ChevronDown />}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white">
                <DropdownMenuItem className="hover:bg-primary-500 hover:text-white" onClick={() => handleContentAction('video')}>
                  Video
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-primary-500 hover:text-white" onClick={() => handleContentAction('attach')}>
                  Attach File
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-primary-500 hover:text-white" onClick={() => handleContentAction('caption')}>
                  Captions
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-primary-500 hover:text-white" onClick={() => handleContentAction('description')}>
                  Description
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-primary-500 hover:text-white" onClick={() => handleContentAction('notes')}>
                  Lecture Notes
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div
                onClick={() => setEditLectureDialog(true)}
                className="[&_svg]:size-5 text-gray-500 hover:text-gray-900 transition cursor-pointer"
            >
              <PencilLine />
            </div>
            <div
                onClick={() => onDeleteLecture(sectionId, lecture.id)}
                className="[&_svg]:size-5 text-gray-500 hover:text-error-500 transition cursor-pointer"
            >
              <Trash/>
            </div>
          </div>

          {/* Dialogs */}
          <EditSectionDialog
            isOpen={editLectureDialog}
            sectionName={lecture.name}
            title="Edit Lecture Name"
            placeholder="Write your lecture name here..."
            onClose={() => setEditLectureDialog(false)}
            onSave={(newName) => {
              onUpdateLecture(sectionId, lecture.id, { name: newName });
              setEditLectureDialog(false);
            }}
          />

          <LectureVideoDialog
            isOpen={videoDialog}
            onClose={() => setVideoDialog(false)}
            onSave={() => setVideoDialog(false)}
          />

          <AttachFileDialog
            isOpen={attachFileDialog}
            onClose={() => setAttachFileDialog(false)}
            onSave={() => setAttachFileDialog(false)}
          />

          <LectureCaptionDialog
            isOpen={captionDialog}
            onClose={() => setCaptionDialog(false)}
            onSave={() => setCaptionDialog(false)}
          />

          <LectureDescriptionDialog
            isOpen={descriptionDialog}
            onClose={() => setDescriptionDialog(false)}
            onSave={() => setDescriptionDialog(false)}
          />

          <LectureNotesDialog
            isOpen={notesDialog}
            onClose={() => setNotesDialog(false)}
            onSave={() => setNotesDialog(false)}
          />
        </div>
  );
};

export default LectureItem;
