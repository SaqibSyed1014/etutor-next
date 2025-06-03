'use client';

import React, { useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { Button } from '@/components/ui/button';
import { Plus, Edit, GripVertical } from 'lucide-react';
import LectureItem from './LectureItem';
import {Trash, PencilLine, ThreeBars} from "@/assets/icons/common-icons";

interface Lecture {
    id: string;
    name: string;
    duration: string;
    type: 'video' | 'attachment' | 'caption' | 'description' | 'notes';
}

interface Section {
    id: string;
    name: string;
    lectures: Lecture[];
}

interface CurriculumSectionProps {
    section: Section;
    index: number;
    onEditSection: (sectionId: string, sectionName: string) => void;
    onDeleteSection: (sectionId: string) => void;
    onAddLecture: (sectionId: string) => void;
    onUpdateLecture: (sectionId: string, lectureId: string, updatedLecture: Partial<Lecture>) => void;
    onDeleteLecture: (sectionId: string, lectureId: string) => void;
}

const CurriculumSection: React.FC<CurriculumSectionProps> = ({
                                                                 section,
                                                                 index,
                                                                 onEditSection,
                                                                 onDeleteSection,
                                                                 onAddLecture,
                                                                 onUpdateLecture,
                                                                 onDeleteLecture
                                                             }) => {
    return (
        <Draggable draggableId={section.id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    className={`bg-gray-50 p-6 ${snapshot.isDragging ? 'shadow-lg' : ''}`}
                >
                    <div className="flex flex-row items-center justify-between py-4">
                        <div className="flex items-center space-x-3 text-gray-900 text-base">
                            <div {...provided.dragHandleProps} className="cursor-grab">
                                <ThreeBars />
                            </div>
                            <span className="font-medium">Sections {String(index + 1).padStart(2, '0')}:</span>
                            <span className="">{section.name}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div
                                onClick={() => onAddLecture(section.id)}
                                className="size-6 text-gray-500 hover:text-gray-900 transition cursor-pointer"
                            >
                                <Plus />
                            </div>

                            <div
                                onClick={() => onEditSection(section.id, section.name)}
                                className="text-gray-500 hover:text-gray-900 transition cursor-pointer"
                            >
                                <PencilLine />
                            </div>
                            <div
                                onClick={() => onDeleteSection(section.id)}
                                className="text-gray-500 hover:text-error-500 transition cursor-pointer"
                            >
                                <Trash/>
                            </div>
                        </div>
                    </div>
                    <div className="pt-0">
                        <Droppable droppableId={section.id} type="LECTURE">
                            {(provided) => (
                                <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-2">
                                    {section.lectures.map((lecture, lectureIndex) => (
                                        <LectureItem
                                            key={lecture.id}
                                            lecture={lecture}
                                            index={lectureIndex}
                                            sectionId={section.id}
                                            onUpdateLecture={onUpdateLecture}
                                            onDeleteLecture={onDeleteLecture}
                                        />
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                </div>
            )}
        </Draggable>
    );
};

export default CurriculumSection;
