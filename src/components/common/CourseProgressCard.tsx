'use client';

import React from 'react';
import Link from 'next/link';
import {Button} from "@/components/ui/button";

interface CourseProgressCardProps {
    image: string;
    courseTitle: string;
    currentLecture: string;
    lectureNumber: string;
    slug: string;
    progress?: number;
}

const CourseProgressCard: React.FC<CourseProgressCardProps> = ({
                                                                   image,
                                                                   courseTitle,
                                                                   currentLecture,
                                                                   lectureNumber,
                                                                   slug,
                                                                   progress
                                                               }) => {
    return (
        <div className="flex flex-col h-full border border-gray-100 relative">
            <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                    src={image}
                    alt={courseTitle}
                    className="w-full h-full object-cover"
                /></div>
            <div className="p-4 space-y-1.5">
                <p className="text-xs text-gray-600">{courseTitle}</p>
                <p className="font-medium text-gray-900 text-sm">{lectureNumber}. {currentLecture}</p>
            </div>
            <div className="p-4 mt-auto border-t border-gray-100">
                <div className="flex justify-between items-center">
                    <Link
                        href={`/course/${slug}/watch-course`}
                        className="w-full flex-1"
                    >
                        <Button variant="outline" className="w-full">Watch Lecture</Button>
                    </Link>
                    {progress && <span className="text-success-500 font-medium text-sm flex-1 text-end">{progress}% Completed</span>}
                    {progress && <div className="bg-primary-500 h-[2px] absolute bottom-0 left-0" style={{ width: `${progress}%` }}></div>}
                </div>
            </div>
        </div>
    );
};

export default CourseProgressCard;
