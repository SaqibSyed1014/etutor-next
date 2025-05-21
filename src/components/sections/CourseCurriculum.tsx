'use client';

import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Clock, Play, FolderNotchOpen, File, PlayCircle } from "@/assets/icons/common-icons"
import { Button } from "@/components/ui/button";
import {useParams} from "next/navigation";
import Link from "next/link";
import CourseLength from "@/components/common/CourseLength";

interface CurriculumSection {
    id: number;
    title: string;
    lectures: number;
    duration: string;
    items: {
        id: number;
        title: string;
        duration: string;
        type: "video" | "file";
        size?: string;
    }[];
}

const CourseCurriculum = () => {
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

    const curriculumData: CurriculumSection[] = [
        {
            id: 1,
            title: "Getting Started",
            lectures: 4,
            duration: "51m",
            items: [
                { id: 101, title: "What's is Webflow?", duration: "07:31", type: "video" },
                { id: 102, title: "Sign up in Webflow", duration: "07:31", type: "video" },
                { id: 103, title: "Webflow Terms & Conditions", duration: "", type: "file", size: "5.3 MB" },
                { id: 104, title: "Teaser of Webflow", duration: "07:31", type: "video" },
                { id: 105, title: "Practice Project", duration: "", type: "file", size: "5.3 MB" }
            ]
        },
        {
            id: 2,
            title: "Secret of Good Design",
            lectures: 52,
            duration: "5h 49m",
            items: [
                { id: 201, title: "Introduction to Design Principles", duration: "12:45", type: "video" },
                { id: 202, title: "Color Theory Basics", duration: "15:22", type: "video" },
                { id: 203, title: "Typography in Web Design", duration: "18:10", type: "video" },
                { id: 204, title: "Layout and Composition", duration: "20:05", type: "video" }
            ]
        },
        {
            id: 3,
            title: "Practice Design Like an Artist",
            lectures: 43,
            duration: "53m",
            items: [
                { id: 301, title: "Finding Inspiration", duration: "09:18", type: "video" },
                { id: 302, title: "Sketching for Web Design", duration: "11:45", type: "video" },
                { id: 303, title: "Design Practice Guide", duration: "", type: "file", size: "3.2 MB" }
            ]
        },
        {
            id: 4,
            title: "Web Development (webflow)",
            lectures: 137,
            duration: "10h 6m",
            items: [
                { id: 401, title: "Introduction to Webflow", duration: "08:22", type: "video" },
                { id: 402, title: "Setting Up Your First Project", duration: "15:47", type: "video" },
                { id: 403, title: "Basic Layout Structure", duration: "12:33", type: "video" }
            ]
        },
        {
            id: 5,
            title: "Secrets of Making Money Freelancing",
            lectures: 21,
            duration: "38m",
            items: [
                { id: 501, title: "Freelance Business Basics", duration: "10:15", type: "video" },
                { id: 502, title: "Finding Your First Clients", duration: "08:42", type: "video" },
                { id: 503, title: "Pricing Your Services", duration: "12:36", type: "video" }
            ]
        },
        {
            id: 6,
            title: "Advanced",
            lectures: 39,
            duration: "91m",
            items: [
                { id: 601, title: "Advanced Animations", duration: "16:28", type: "video" },
                { id: 602, title: "Responsive Design Mastery", duration: "18:55", type: "video" },
                { id: 603, title: "Integration with External Services", duration: "22:10", type: "video" }
            ]
        }
    ];

    return (
        <div className="space-y-5">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl">Curriculum</h2>
                <CourseLength />
            </div>

            <div className="divide-y-2 divide-gray-100 border border-gray-100">
                {curriculumData.map(section => (
                    <Collapsible
                        key={section.id}
                        open={openSections.includes(section.id)}
                        onOpenChange={() => toggleSection(section.id)}
                        className="  overflow-hidden"
                    >
                        <CollapsibleTrigger asChild>
                            <Button
                                variant="ghost"
                                className="flex justify-between items-center w-full p-4 hover:!bg-transparent"
                            >
                                <div className="flex items-center">
                                    {openSections.includes(section.id) ? (
                                        <ChevronUp size={16} className="mr-2 text-orange-500"/>
                                    ) : (
                                        <ChevronDown size={16} className="mr-2 text-orange-500"/>
                                    )}
                                    <p className={`${openSections.includes(section.id) ? 'font-medium text-primary-500':'font-normal'} font-medium`}>{section.title}</p>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-gray-500 font-normal">
                                    <div className="flex items-center gap-1">
                                        <PlayCircle/>
                                        <p>{section.lectures} lectures</p>
                                    </div>
                                    <div className="flex items-center gap-1 [&>svg]:text-warning-500">
                                        <Clock/>
                                        <p>{section.duration}</p>
                                    </div>
                                </div>
                            </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="">
                            <div className="space-y-[14px]">
                                {section.items.map(item => (
                                    <div key={item.id}
                                         className="flex justify-between items-center px-5 last:pb-4">
                                        <div className="flex items-center gap-2">
                                            {item.type === 'video' ? (
                                                <Link href={`/courses/${id}/watch-course`}><Play className="mr-3 text-gray-500"/></Link>
                                            ) : (
                                                <File className="mr-3 text-gray-500"/>
                                            )}
                                            <p>{item.title}</p>
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {item.type === 'video' ? item.duration : item.size}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                ))}
            </div>
        </div>
    );
};

export default CourseCurriculum;
