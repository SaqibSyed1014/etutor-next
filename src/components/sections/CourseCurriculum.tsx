'use client';

import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Clock, Checks, Play, File, PlayCircle, ChevronUp, ChevronDown } from "@/assets/icons/common-icons"
import {useParams} from "next/navigation";
import Link from "next/link";
import CourseLength from "@/components/common/CourseLength";
import {curriculumData} from "@/lib/@fake-db/collections";
import { Checkbox } from "@/components/ui/checkbox";

const CourseCurriculum = ({ showHeader = true, showFinishedStat, showControlHandles }: { showHeader?: boolean; showFinishedStat?: boolean; showControlHandles?: boolean }) => {
    const params = useParams();
    const id = params?.id;

    const [openSections, setOpenSections] = useState<number[]>([1]);

    const toggleSection = (sectionId: number) => {
        setOpenSections(prev =>
            prev.includes(sectionId)
                ? prev.filter(id => id !== sectionId)
                : [...prev, sectionId]
        );
    };

    const [selectedItems, setSelectedItems] = useState<number[]>([]); // track selected video IDs

    const handleCheckboxChange = (itemId: number, checked: boolean) => {
        setSelectedItems((prev) =>
            checked ? [...prev, itemId] : prev.filter((id) => id !== itemId)
        );
    };

    return (
        <div className="space-y-5">
            {showHeader && <div className="flex justify-between items-center">
                <h2 className="text-2xl">Curriculum</h2>
                <CourseLength/>
            </div>}

            <div className="divide-y-2 divide-gray-100 border border-gray-100">
                {curriculumData.map((section, index) => (
                    <Collapsible
                        key={section.id}
                        open={openSections.includes(section.id)}
                        onOpenChange={() => toggleSection(section.id)}
                        className="overflow-hidden"
                    >
                        <CollapsibleTrigger asChild>
                            <button
                                className={`flex justify-between items-center w-full p-4 ${openSections.includes(section.id) ? 'bg-gray-50': 'hh'}`}
                            >
                                <div className={`flex items-center gap-2 text-base ${openSections.includes(section.id) ? 'font-medium [&>p]:text-primary-500 [&>svg]:text-primary-500':'font-normal [&>svg]:text-gray-600 [&>p]:text-gray-900'}`}>
                                    {openSections.includes(section.id) ? (
                                        <ChevronUp />
                                    ) : (
                                        <ChevronDown />
                                    )}
                                    <p>{section.title}</p>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-gray-700 font-normal">
                                    <div className="flex items-center gap-1">
                                        <PlayCircle/>
                                        <p>{section.lectures} lectures</p>
                                    </div>
                                    <div className="flex items-center gap-1 [&>svg]:text-warning-500">
                                        <Clock/>
                                        <p>{section.duration}</p>
                                    </div>
                                    {showFinishedStat && index === 0 && <div className="flex items-center gap-1 [&>svg]:text-warning-500">
                                        <Checks/>
                                        <p>25% finish <span className="text-gray-500">(1/4)</span></p>
                                    </div>}
                                </div>
                            </button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="">
                            <div>
                                {showControlHandles ?
                                <div className="py-3">
                                    {section.items.filter((item) => item.type === 'video').map((item, index) => (
                                        <div key={item.id}
                                             className="flex justify-between items-center px-5 hover:bg-primary-100 group py-3 cursor-pointer"
                                             onClick={() =>
                                                 handleCheckboxChange(item.id, !selectedItems.includes(item.id))
                                             }
                                        >
                                            <div className="flex items-center gap-3">
                                                <Checkbox
                                                    id={`item-${item.id}`}
                                                    checked={selectedItems.includes(item.id)}
                                                    onClick={(e) => e.stopPropagation()}
                                                />
                                                <p className="group-hover:text-gray-900">{index}. {item.title}</p>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-900">
                                                <Play/>
                                                {item.duration}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                :
                                <div className="space-y-[14px] py-4">
                                    {section.items.map(item => (
                                        <div key={item.id}
                                             className="flex justify-between items-center px-5">
                                            <div className="flex items-center gap-2">
                                                {item.type === 'video' ? (
                                                    <Link href={`/courses/${id}/watch-course`}>
                                                        <Play/>
                                                    </Link>
                                                ) : (
                                                    <File/>
                                                )}
                                                <p>{item.title}</p>
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                {item.type === 'video' ? item.duration : item.size}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            }</div>
                        </CollapsibleContent>
                    </Collapsible>
                ))}
            </div>
        </div>
    );
};

export default CourseCurriculum;
