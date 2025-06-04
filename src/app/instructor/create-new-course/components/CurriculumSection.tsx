'use client';

import React from 'react';
import { Plus } from 'lucide-react';
import LectureItem from './LectureItem';
import {Trash, PencilLine, ThreeBars} from "@/assets/icons/common-icons";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import { DraggableProvidedDragHandleProps } from "@hello-pangea/dnd";

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
    dragHandleProps?: DraggableProvidedDragHandleProps | null
}

const CurriculumSection: React.FC<CurriculumSectionProps> = ({
                                                                 section,
                                                                 index,
                                                                 onEditSection,
                                                                 onDeleteSection,
                                                                 onAddLecture,
                                                                 onUpdateLecture,
                                                                 onDeleteLecture,
                                                                 dragHandleProps
                                                             }) => {
    return (

                <div
                    className="bg-gray-50 p-6"
                >
                    <div className="flex flex-row items-center justify-between py-4">
                        <div className="flex items-center space-x-3 text-gray-900 text-base">
                            <div className="cursor-grab" {...dragHandleProps}>
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
                        <Droppable droppableId={section.id} type="lecture">
                            {(provided) => (
                                <div ref={provided.innerRef} {...provided.droppableProps} className="space-y-2 mt-4">
                                    {section.lectures.map((lecture, index) => (
                                        <Draggable draggableId={lecture.id} index={index} key={lecture.id}>
                                            {(provided) => (
                                                <div ref={provided.innerRef} {...provided.draggableProps}>
                                                    <LectureItem
                                                        lecture={lecture}
                                                        sectionId={section.id}
                                                        index={index}
                                                        dragHandleProps={provided.dragHandleProps}
                                                        onUpdateLecture={onUpdateLecture}
                                                        onDeleteLecture={onDeleteLecture}
                                                    />
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                </div>
    );
};

export default CurriculumSection;
