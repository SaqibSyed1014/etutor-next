'use client';

import React, { useState } from 'react';
import VideoPlayer from '@/components/common/VideoPlayer';
import { Progress } from '@/components/ui/progress';
import StackedAvatars from '@/components/common/StackedAvatars';
import DefaultLayout from "@/components/layouts/DefaultLayout";
import CourseLength from "@/components/common/CourseLength";
import {
    ArrowLeft, DownloadSimple, PaperPlaneRight, PaperPlaneRightSolid, Star,
} from "@/assets/icons/common-icons";
import {Button} from "@/components/ui/button";
import CourseCurriculum from "@/components/sections/CourseCurriculum";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import CommentsSection from "@/components/sections/CommentsSection";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog"
import {useRouter} from "next/navigation";

const WatchCourse = () => {
    const [completionPercentage, setCompletionPercentage] = useState(15);

    const router = useRouter();

    return (
        <DefaultLayout>
            <div className="space-y-8 pb-20">
                {/* Back button and course title */}
                <div className="bg-gray-50 px-8 py-5">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <div
                                onClick={() => router.back()}
                                className="bg-white rounded-full size-[58px] grid place-items-center hover:bg-primary-500 hover:text-white cursor-pointer"
                            >
                                <ArrowLeft/>
                            </div>
                            <div className="space-y-3">
                                <h1 className="text-lg font-medium">
                                    Complete Website Responsive Design: from Figma to Webflow to Website Design
                                </h1>
                                <CourseLength/>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outlineInvert">Write a Review</Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl">
                                    <DialogHeader>
                                        <DialogTitle>Write a Review</DialogTitle>
                                    </DialogHeader>
                                        <div className="space-y-6 px-[22px] py-6">
                                            <div className="flex flex-col items-center gap-3">
                                                <h4 className="text-xl font-bold">
                                                    4.5 <span
                                                    className="text-lg font-normal text-gray-500">(Good/Amazing)</span>
                                                </h4>
                                                <div className="flex [&_svg]:size-12">
                                                    <Star/>
                                                    <Star/>
                                                    <Star/>
                                                    <Star/>
                                                    <Star/>

                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1 mt-6">
                                                <label htmlFor="">Feedback</label>
                                                <textarea rows={4} placeholder="Write down your feedback here..."
                                                          className="w-full resize-none"/>
                                            </div>
                                            <div className="flex justify-between">
                                                    <Button variant="gray">Cancel</Button>
                                                <Button>
                                                    Submit Review
                                                    <PaperPlaneRightSolid />
                                                </Button>
                                        </div>
                                        </div>
                                </DialogContent>
                            </Dialog>

                            <Button>Next lecture</Button>
                        </div>
                    </div>
                </div>

                <div className="flex gap-6 px-8">
                    {/* Video Player Column */}
                    <div className="flex-1">
                        <VideoPlayer/>

                        {/* Lecture Title and Controls */}
                        <div
                            className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
                            <h3>2. Sign up in Webflow</h3>
                        </div>

                        {/* Students watching */}
                        <div className="mt-5 mb-6 flex gap-3 items-center">
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
                                size={32}
                                max={5}
                            />
                            <div>
                                <div className="text-sm font-semibold">512</div>
                                <div className="text-xs text-gray-600">Students watching</div>
                            </div>

                            <div className="ml-auto flex gap-6 text-sm text-gray-600">
                                <div className="shrink-0">Last updated: <span className="text-gray-900">Oct 26, 2020</span></div>
                                <div className="shrink-0">Comments: <span className="text-gray-900">154</span></div>
                            </div>
                        </div>

                        <hr/>
                        <Tabs defaultValue="description" className="w-full space-y-10">
                            <TabsList className="w-full grid grid-cols-4 border-b border-gray-100">
                                <TabsTrigger value="description">Description</TabsTrigger>
                                <TabsTrigger value="notes">Lectures Notes</TabsTrigger>
                                <TabsTrigger value="files">
                                    <div className="flex gap-3 items-center">
                                        Attach File
                                        <div className="flex items-center bg-primary-100 text-primary-500 px-1.5 py-1 text-xs">
                                            01
                                        </div>
                                    </div>
                                </TabsTrigger>
                                <TabsTrigger value="comments">Comments</TabsTrigger>
                            </TabsList>

                            {/* Overview Tab */}
                            <TabsContent value="description">
                                <div className="space-y-5">
                                    <h4>Lectures Description</h4>
                                    <p>
                                        We cover everything you need to build your first website. From creating your first page through to uploading your website to the internet. We’ll use the world’s most popular (and free) web design tool called Visual Studio Code. There are exercise files you can download and then work along with me. At the end of each video I have a downloadable version of where we are in the process so that you can compare your project with mine. This will enable you to see easily where you might have a problem. We will delve into all the good stuff such as how to create your very own mobile burger menu from scratch learning some basic JavaScript and jQuery.

                                        If that all sounds a little too fancy - don’t worry, this course is aimed at people new to web design and who have never coded before. We’ll start right at the beginning and work our way through step by step.
                                    </p>
                                </div>
                            </TabsContent>

                            <TabsContent value="notes">
                                <div className="space-y-5">
                                    <div className="flex justify-between">
                                        <h4>Lecture Notes</h4>
                                        <Button variant="outline">
                                            <DownloadSimple />
                                            Download Notes
                                        </Button>
                                    </div>
                                    <p>
                                        In ut aliquet ante. Curabitur mollis tincidunt turpis, sed aliquam mauris finibus vel. Praesent eget mi in mi maximus egestas. Mauris eget ipsum in justo bibendum pellentesque. Sed id arcu in arcu ullamcorper eleifend condimentum quis diam. Phasellus tempus, urna ut auctor mattis, nisi nunc tincidunt lorem, eu egestas augue lectus sit amet sapien. Maecenas tristique aliquet massa, a venenatis augue tempor in. Aliquam turpis urna, imperdiet in lacus a, posuere suscipit augue.
                                    </p>
                                    <p>
                                        Nullam non quam a lectus finibus varius nec a orci. Aliquam efficitur sem cursus elit efficitur lacinia
                                        <ul className="list-disc ml-5">
                                            <li>Morbi sit amet pretium tellus. Donec blandit <b>fermentum tincidunt.</b></li>
                                            <li>Proin iaculis sem et imperdiet tristique. Nam varius ac nisl id sodales. Donec iaculis interdum mattis.</li>
                                            <li>Curabitur posuere ultricies diam in egestas.</li>
                                            <li>Donec id diam et lacus pharetra vestibulum a id est. Mauris vestibulum massa quis elit feugiat, dictum maximus ipsum pellentesque.</li>
                                        </ul>
                                    </p>

                                    <p>
                                        Donec congue aliquam lorem nec congue. Suspendisse eu risus mattis, interdum ante sed, fringilla urna. Praesent mattis dictum sapien a lacinia. Ut scelerisque magna aliquet, blandit arcu quis, consequat purus. Suspendisse eget scelerisque felis. Integer vulputate urna laoreet purus vehicula condimentum. Donec quis luctus quam. Curabitur quis molestie ante. Nam pharetra sagittis varius. Sed ullamcorper facilisis bibendum.
                                    </p>
                                </div>
                            </TabsContent>

                            <TabsContent value="files">
                                <div className="space-y-5">
                                    <h4>Attach Files <span className="font-normal">(01)</span></h4>
                                    <div className="bg-gray-50 p-6 flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                                                 viewBox="0 0 48 48" fill="none">
                                                <path
                                                    d="M37.499 42H10.4976C10.0997 42 9.7182 41.842 9.4369 41.5607C9.15559 41.2794 8.99756 40.8978 8.99756 40.5V7.5C8.99756 7.10218 9.15559 6.72064 9.4369 6.43934C9.7182 6.15804 10.0997 6 10.4976 6H28.499L38.999 16.5V40.5C38.999 40.697 38.9602 40.892 38.8848 41.074C38.8095 41.256 38.699 41.4214 38.5597 41.5607C38.4204 41.7 38.255 41.8104 38.0731 41.8858C37.8911 41.9612 37.696 42 37.499 42Z"
                                                    stroke="#FF6636" strokeWidth="2.5" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                                <path d="M28.5 6V16.5H39.0015" stroke="#FF6636" strokeWidth="2.5"
                                                      strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M18 25.5H30" stroke="#FF6636" strokeWidth="2.5"
                                                      strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M18 31.5H30" stroke="#FF6636" strokeWidth="2.5"
                                                      strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <div>
                                                <p className="text-base text-gray-900 font-medium">
                                                    Create account on webflow.pdf
                                                </p>
                                                <p className="text-gray-600">
                                                    12.6 MB
                                                </p>
                                            </div>
                                        </div>
                                        <Button>
                                            Download File
                                        </Button>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="comments">
                                <CommentsSection />
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Course Content Column */}
                    <div className="w-[500px] 2xl:w-[600px] shrink-0">
                        <div className="">
                            <div className="flex justify-between items-center mb-4">
                                <h4>Course Contents</h4>
                                <div className="text-base font-bold text-success-500">
                                    {completionPercentage}% Completed
                                </div>
                            </div>

                            <Progress value={completionPercentage} className="h-1 mb-6"/>

                            <CourseCurriculum
                                showHeader={false}
                                showFinishedStat={true}
                                showControlHandles={true}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default WatchCourse;
