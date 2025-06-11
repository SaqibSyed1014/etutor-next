'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import CurriculumSection from '@/app/instructor/create-new-course/components/CurriculumSection';
import EditSectionDialog from '@/app/instructor/create-new-course/components/EditSectionDialog';
import MultiStepFormHeader from "@/app/instructor/create-new-course/components/MultiStepFormHeader";
import MultiFormStepFooter from "@/app/instructor/create-new-course/components/MultiFormStepFooter";
import {useToast} from "@/hooks/use-toast";
import MultiStepFormBody from "@/app/instructor/create-new-course/components/MultiStepFormBody";
import {DragDropContext, Droppable, Draggable, DropResult} from "@hello-pangea/dnd";
import {useRouter} from "next/navigation";
import {useStepContext} from "@/context/CreateCourseContext";

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

const Page = () => {
    const { toast } = useToast();
    const router = useRouter();
    const { setStepComplete, setCurrentTab, stepsComplete } = useStepContext();


    const [sections, setSections] = useState<Section[]>([
        {
            id: '1',
            name: 'Section name',
            lectures: [
                { id: '1', name: 'Lecture name', duration: '10:30', type: 'video' },
                { id: '2', name: 'Lecture name', duration: '08:15', type: 'video' }
            ]
        }
    ]);
    const [editSectionDialog, setEditSectionDialog] = useState<{
        isOpen: boolean;
        sectionId?: string;
        sectionName?: string;
    }>({ isOpen: false });

    const addSection = () => {
        const newSection: Section = {
            id: Date.now().toString(),
            name: 'New Section',
            lectures: []
        };
        setSections([...sections, newSection]);
    };

    const updateSectionName = (sectionId: string, newName: string) => {
        setSections(sections.map(section =>
            section.id === sectionId ? { ...section, name: newName } : section
        ));
    };

    const deleteSection = (sectionId: string) => {
        setSections(sections.filter(section => section.id !== sectionId));
    };

    const addLecture = (sectionId: string) => {
        const newLecture: Lecture = {
            id: Date.now().toString(),
            name: 'New Lecture',
            duration: '00:00',
            type: 'video'
        };
        setSections(sections.map(section =>
            section.id === sectionId
                ? { ...section, lectures: [...section.lectures, newLecture] }
                : section
        ));
    };

    const updateLecture = (sectionId: string, lectureId: string, updatedLecture: Partial<Lecture>) => {
        setSections(sections.map(section =>
            section.id === sectionId
                ? {
                    ...section,
                    lectures: section.lectures.map(lecture =>
                        lecture.id === lectureId ? { ...lecture, ...updatedLecture } : lecture
                    )
                }
                : section
        ));
    };

    const deleteLecture = (sectionId: string, lectureId: string) => {
        setSections(sections.map(section =>
            section.id === sectionId
                ? { ...section, lectures: section.lectures.filter(lecture => lecture.id !== lectureId) }
                : section
        ));
    };

    function onDragEnd(result :DropResult) {
        const { source, destination, type } = result;
        if (!destination) return;

        if (type === 'section') {
            const newSections = Array.from(sections);
            const [moved] = newSections.splice(source.index, 1);
            newSections.splice(destination.index, 0, moved);
            setSections(newSections);
        }

        if (type === 'lecture') {
            const sourceSection = sections.find(s => s.id === source.droppableId);
            const destSection = sections.find(s => s.id === destination.droppableId);

            if (!sourceSection || !destSection) return;

            const sourceLectures = Array.from(sourceSection.lectures);
            const [movedLecture] = sourceLectures.splice(source.index, 1);

            if (sourceSection === destSection) {
                sourceLectures.splice(destination.index, 0, movedLecture);
                const updatedSections = sections.map(s =>
                    s.id === sourceSection.id ? { ...s, lectures: sourceLectures } : s
                );
                setSections(updatedSections);
            } else {
                const destLectures = Array.from(destSection.lectures);
                destLectures.splice(destination.index, 0, movedLecture);

                const updatedSections = sections.map(s => {
                    if (s.id === sourceSection.id) return { ...s, lectures: sourceLectures };
                    if (s.id === destSection.id) return { ...s, lectures: destLectures };
                    return s;
                });
                setSections(updatedSections);
            }
        }
    }

    const onFormSubmit = () => {
        setStepComplete('step3');
        setCurrentTab('publish-course');
        router.push('/instructor/create-new-course/publish-course')
        toast({
            title: "Changes saved",
            description: "Your account settings have been updated successfully.",
        });
    };

    return (
        <div className="">
            <MultiStepFormHeader title="Curriculum" formStepIndex={2} submitForm={onFormSubmit} enablePreviewBtn={!stepsComplete.step4} />

            <MultiStepFormBody>
                <div className="p-10 space-y-8">
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="sections-droppable" type="section">
                            {(provided) => (
                                <div ref={provided.innerRef} {...provided.droppableProps} className="space-y-4">
                                    {sections.map((section, index) => (
                                        <Draggable draggableId={section.id} index={index} key={section.id}>
                                            {(provided) => (
                                                <div ref={provided.innerRef} {...provided.draggableProps}>
                                                    <CurriculumSection
                                                        section={section}
                                                        index={index}
                                                        dragHandleProps={provided.dragHandleProps}
                                                        onEditSection={(sectionId, sectionName) =>
                                                            setEditSectionDialog({ isOpen: true, sectionId, sectionName })
                                                        }
                                                        onDeleteSection={deleteSection}
                                                        onAddLecture={addLecture}
                                                        onUpdateLecture={updateLecture}
                                                        onDeleteLecture={deleteLecture}
                                                    />
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>


                    <Button
                        onClick={addSection}
                        className="w-full"
                        variant="outline"
                    >
                        <Plus className="w-4 h-4 mr-2"/>
                        Add Sections
                    </Button>

                </div>
            </MultiStepFormBody>



            <EditSectionDialog
                isOpen={editSectionDialog.isOpen}
                sectionName={editSectionDialog.sectionName || ''}
                onClose={() => setEditSectionDialog({ isOpen: false })}
                onSave={(newName) => {
                    if (editSectionDialog.sectionId) {
                        updateSectionName(editSectionDialog.sectionId, newName);
                    }
                    setEditSectionDialog({ isOpen: false });
                }}
            />

            <MultiFormStepFooter formStepIndex={2} submitForm={onFormSubmit} />
        </div>
    );
};

export default Page;
