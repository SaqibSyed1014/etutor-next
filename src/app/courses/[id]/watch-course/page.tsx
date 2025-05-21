'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Clock, ChevronLeft } from 'lucide-react';
import VideoPlayer from '@/components/common/VideoPlayer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';
// import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import StackedAvatars from '@/components/common/StackedAvatars';
import DefaultLayout from "@/components/layouts/DefaultLayout";
import CourseLength from "@/components/common/CourseLength";
import {ArrowLeft, ArrowRight} from "@/assets/icons/common-icons";
import {Button} from "@/components/ui/button";

const WatchCourse = () => {
    const [completionPercentage, setCompletionPercentage] = useState(15);

    return (
        <DefaultLayout>
            <div className="space-y-8">
                {/* Back button and course title */}
                <div className="bg-gray-50 px-8 py-5">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <div
                                className="bg-white rounded-full size-[58px] grid place-items-center hover:bg-primary-500 hover:text-white cursor-pointer">
                                <ArrowLeft/>
                            </div>
                            <div className="space-y-3">
                                <h1 className="text-lg font-medium">
                                    Complete Website Responsive Design: from Figma to Webflow to Website Design
                                </h1>
                                <CourseLength/>
                            </div>
                        </div>
                        <div className="flex">
                            <Button variant="outlineInvert">Write a Review</Button>

                            <Button>Next lecture</Button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-8">
                    {/* Video Player Column */}
                    <div className="col-span-2">
                        <VideoPlayer/>

                        {/* Lecture Title and Controls */}
                        <div
                            className="mt-4 flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
                            <h2 className="text-xl font-medium">2. Sign up in Webflow</h2>
                            <div className="flex space-x-2">
                                <button className="px-4 py-2 text-primary hover:bg-primary/10 rounded-md">
                                    Write A Review
                                </button>
                                <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
                                    Next Lecture
                                </button>
                            </div>
                        </div>

                        {/* Students watching */}
                        <div className="mt-6 flex items-center">
                            <StackedAvatars
                                avatars={[
                                    {
                                        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
                                        alt: "Student 1"
                                    },
                                    {
                                        src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
                                        alt: "Student 2"
                                    },
                                    {
                                        src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
                                        alt: "Student 3"
                                    },
                                    {
                                        src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
                                        alt: "Student 4"
                                    },
                                    {
                                        src: "https://images.unsplash.com/photo-1521119989659-a83eee488004",
                                        alt: "Student 5"
                                    }
                                ]}
                                size={36}
                                max={5}
                            />
                            <div className="ml-3">
                                <div className="text-sm font-medium">512</div>
                                <div className="text-xs text-gray-500">Students watching</div>
                            </div>

                            <div className="ml-auto text-sm text-gray-500">
                                <div>Last updated: Oct 26, 2020</div>
                                <div>Comments: 154</div>
                            </div>
                        </div>
                    </div>

                    {/* Course Content Column */}
                    <div className="col-span-1">
                        <div className="border border-gray-100 rounded-lg p-4">
                            <div className="mb-4">
                                <h3 className="text-lg font-medium mb-2">Course Contents</h3>
                                <Progress value={completionPercentage} className="h-2"/>
                                <div className="text-sm text-green-500 mt-1">{completionPercentage}% Completed</div>
                            </div>

                            <Accordion type="single" collapsible className="w-full">
                                {/* Getting Started Section */}
                                <AccordionItem value="section-1" className="border-b border-gray-100">
                                    <AccordionTrigger className="py-3 hover:no-underline">
                                        <div className="flex items-start">
                                            <ChevronRight className="h-5 w-5 mr-2 text-primary"/>
                                            <div>
                                                <div className="text-left font-medium">Getting Started</div>
                                                <div className="flex items-center text-xs text-gray-500 mt-1">
                                                    <span className="mr-2">4 lectures</span>
                                                    <span>51m</span>
                                                    <span className="ml-2 text-green-500">25% finish (1/4)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="ml-7 space-y-3">
                                            {/* Completed lecture */}
                                            <div className="flex items-center py-1">
                                                <div
                                                    className="h-5 w-5 bg-primary rounded-full flex items-center justify-center mr-3">
                                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24"
                                                         stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth={2} d="M5 13l4 4L19 7"/>
                                                    </svg>
                                                </div>
                                                <span className="text-sm">1. What is Webflow?</span>
                                                <span className="ml-auto text-xs text-gray-500">07:31</span>
                                            </div>

                                            {/* Current lecture */}
                                            <div className="flex items-center py-1">
                                                <div className="h-5 w-5 border-2 border-primary rounded-full mr-3">
                                                    <span
                                                        className="flex items-center justify-center h-full text-xs text-primary">▶</span>
                                                </div>
                                                <span className="text-sm font-medium">2. Sign up in Webflow</span>
                                                <span className="ml-auto text-xs text-gray-500">07:31</span>
                                            </div>

                                            {/* Upcoming lectures */}
                                            <div className="flex items-center py-1">
                                                <div className="h-5 w-5 border border-gray-300 rounded-full mr-3"></div>
                                                <span className="text-sm">3. Teaser of Webflow</span>
                                                <span className="ml-auto text-xs text-gray-500">07:31</span>
                                            </div>

                                            <div className="flex items-center py-1">
                                                <div className="h-5 w-5 border border-gray-300 rounded-full mr-3"></div>
                                                <span className="text-sm">4. Figma Introduction</span>
                                                <span className="ml-auto text-xs text-gray-500">07:31</span>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>

                                {/* Other course sections */}
                                {[
                                    {
                                        title: "Secret of Good Design",
                                        lectures: 52,
                                        duration: "5h 49m"
                                    },
                                    {
                                        title: "Practice Design Like an Artist",
                                        lectures: 43,
                                        duration: "51m"
                                    },
                                    {
                                        title: "Web Development (webflow)",
                                        lectures: 137,
                                        duration: "10h 6m"
                                    },
                                    {
                                        title: "Secrets of Making Money Freelancing",
                                        lectures: 21,
                                        duration: "38m"
                                    },
                                    {
                                        title: "Advanced",
                                        lectures: 39,
                                        duration: "1h 31m"
                                    },
                                    {
                                        title: "What's Next",
                                        lectures: 7,
                                        duration: "1h 17m"
                                    }
                                ].map((section, index) => (
                                    <AccordionItem
                                        key={`section-${index + 2}`}
                                        value={`section-${index + 2}`}
                                        className="border-b border-gray-100"
                                    >
                                        <AccordionTrigger className="py-3 hover:no-underline">
                                            <div className="flex items-start">
                                                <ChevronRight className="h-5 w-5 mr-2"/>
                                                <div>
                                                    <div className="text-left font-medium">{section.title}</div>
                                                    <div className="flex items-center text-xs text-gray-500 mt-1">
                                                        <span className="mr-2">{section.lectures} lectures</span>
                                                        <span>{section.duration}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="ml-7">
                                                <p className="text-sm text-gray-500">Course content will appear here</p>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default WatchCourse;
