'use client';

import React, { useState } from 'react';
import {instructorsData} from "@/lib/@fake-db/instructors";
import {useParams} from "next/navigation";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import {SocialMediaLinks} from "@/components/common/tiny-collection";
import Link from 'next/link'
import {PlayCircleFill, Star, Users} from "@/assets/icons/common-icons";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {CourseCard} from "@/components/CourseCard";
import StudentsFeedback from "@/components/common/StudentsFeedback";
import {instructorReviews} from "@/lib/@fake-db/reviews";
import {coursesData} from "@/lib/@fake-db/courses"

const TeacherDetail = () => {
    const [activeTab, setActiveTab] = useState('courses');

    const params = useParams();
    const id = params?.id;

    instructorsData.forEach((instructor) => {
        instructor.courses = coursesData.filter(
            (course) =>
                course.instructor.id === instructor.id ||
                course.coInstructor?.id === instructor.id
        );
    });

    const teacher = instructorsData.find((c) => c.id === Number(id)) || instructorsData[0];

    // const teacherCourses = courses.slice(0, 2);

    return (
        <DefaultLayout>
            <section className="py-20 relative">
                <div className="bg-primary-100 h-[280px] absolute top-0 w-full"></div>
                    <div className="container relative z-20">
                        <div className="bg-white p-10 border border-primary-200">
                            <div className="flex flex-col lg:flex-row items-center gap-8">
                                {/* Profile Image */}
                                <div className="flex-shrink-0">
                                    <div className="relative">
                                        <img
                                            src={teacher?.avatar}
                                            alt={teacher?.name}
                                            className="size-[200px] rounded-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Profile Info */}
                                <div className="flex-1">
                                    <div className="flex justify-between items-center">
                                        <div className="">
                                            <div className="flex items-center gap-3 mb-2.5">
                                                <h3>{teacher?.name}</h3>
                                                {teacher?.rating > 4.5 && (
                                                    <div className="bg-primary-100 flex gap-1.5 items-center text-primary-500 px-3 py-2 text-sm font-semibold">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                            <path d="M3.52565 15.314C3.54513 15.3961 3.58103 15.4735 3.6312 15.5414C3.68136 15.6093 3.74474 15.6664 3.81753 15.7092C3.89033 15.752 3.97102 15.7796 4.05477 15.7904C4.13851 15.8012 4.22357 15.7949 4.30483 15.772C8.03055 14.7433 11.9653 14.7429 15.6912 15.7709C15.7725 15.7938 15.8575 15.8 15.9412 15.7893C16.0249 15.7785 16.1056 15.7509 16.1784 15.7081C16.2511 15.6653 16.3145 15.6083 16.3647 15.5404C16.4148 15.4725 16.4507 15.3952 16.4702 15.3131L18.4616 6.85085C18.4882 6.73756 18.4827 6.61908 18.4457 6.50876C18.4086 6.39843 18.3415 6.30064 18.2519 6.22639C18.1623 6.15214 18.0537 6.1044 17.9384 6.08852C17.8231 6.07265 17.7057 6.08929 17.5993 6.13655L13.6475 7.89293C13.5048 7.95636 13.3435 7.96406 13.1954 7.91453C13.0473 7.86501 12.9231 7.76183 12.8473 7.62533L10.5463 3.48358C10.4922 3.38615 10.413 3.30496 10.3169 3.24844C10.2209 3.19192 10.1114 3.16211 9.99997 3.16211C9.88851 3.16211 9.77908 3.19192 9.68302 3.24844C9.58695 3.30496 9.50775 3.38615 9.45362 3.48358L7.15266 7.62533C7.07682 7.76183 6.95263 7.865 6.80454 7.91453C6.65644 7.96406 6.49517 7.95635 6.35247 7.89293L2.40002 6.13629C2.29369 6.08903 2.17628 6.07239 2.061 6.08825C1.94573 6.10411 1.83718 6.15183 1.74756 6.22604C1.65794 6.30025 1.59081 6.39801 1.55374 6.5083C1.51668 6.6186 1.51113 6.73705 1.53774 6.85033L3.52565 15.314Z" stroke="#FF6636" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M7.5 12.6311C9.16208 12.4563 10.8379 12.4563 12.5 12.6311" stroke="#FF6636" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                        Top Rated
                                                    </div>
                                                )}
                                            </div>
                                            <p className="text-gray-600 text-lg mb-6">Web Designer & Best-Selling Instructor</p>

                                            {/* Stats */}
                                            <div className="flex items-center gap-5 mb-4">
                                                <div className="flex items-center gap-1.5">
                                                    <Star />
                                                    <span className="text-gray-600 text-sm">
                                                        <span className="text-base font-medium text-gray-900">{teacher?.rating} </span>
                                                        ({teacher?.students.toLocaleString()} reviews)
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-1.5 [&>svg]:text-secondary-500">
                                                    <Users />
                                                    <span className="text-gray-600 text-sm">
                                                        <span className="text-base font-medium text-gray-900">{teacher?.students.toLocaleString()} </span>
                                                        students
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <PlayCircleFill />
                                                    <span className="text-gray-600 text-sm">
                                                        <span className="text-base font-medium text-gray-900">{teacher?.courses?.length} </span>
                                                            courses
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Social Links */}
                                        <div className="flex flex-col gap-4">
                                            <div className="flex items-center justify-end gap-1.5">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none">
                                                    <path
                                                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                                        stroke="#564FFD" strokeWidth="1.5" strokeMiterlimit="10"/>
                                                    <path d="M3 12H21" stroke="#564FFD" strokeWidth="1.5"
                                                          strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path
                                                        d="M12 20.759C14.0711 20.759 15.75 16.8377 15.75 12.0006C15.75 7.16346 14.0711 3.24219 12 3.24219C9.92893 3.24219 8.25 7.16346 8.25 12.0006C8.25 16.8377 9.92893 20.759 12 20.759Z"
                                                        stroke="#564FFD" strokeWidth="1.5" strokeMiterlimit="10"/>
                                                </svg>
                                                <Link href="/" className="text-secondary-500 font-medium hover:opacity-60">
                                                    https://www.vakoshvili.com
                                                </Link>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <SocialMediaLinks inverted={true}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 my-10">
                            <div className="border p-6 space-y-4 w-full max-w-[424px] shrink-0">
                                <h4 className="text-lg">ABOUT ME</h4>
                                <p>
                                    One day Vako had enough with the 9-to-5 grind, or more like 9-to-9 in his case, and quit his job, or more like got himself fired from his own startup.

                                    He decided to work on his dream: be his own boss, travel the world, only do the work he enjoyed, and make a lot more money in the process. No more begging for vacation days and living from paycheck to paycheck. After trying everything from e-commerce stores to professional poker his lucky break came when he started freelance design. Vako fell in love with the field that gives him the lifestyle of his dreams.

                                    Vako realizes that people who take courses on Udemy want to transform their lives. Today with his courses and mentoring Vako is helping thousands of people transform their lives, just like he did once.
                                </p>
                            </div>
                            <div className="flex-1">
                                <Tabs defaultValue="courses" className="mt-4">
                                    <TabsList className="w-full grid grid-cols-4 gap-6 border-b">
                                        <TabsTrigger value="courses">Courses</TabsTrigger>
                                        <TabsTrigger value="reviews">Review</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="courses">
                                        <div className="flex flex-col mt-10 space-y-6">
                                            <h4>Courses <span className="font-normal">({teacher?.courses?.length})</span></h4>
                                            <div className="grid grid-cols-2 gap-6">
                                                {teacher?.courses?.map(course => {
                                                    return (
                                                        <CourseCard key={course.id} course={course} cardBig={true} />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="reviews">
                                        <StudentsFeedback
                                            reviews={instructorReviews}
                                            rating={teacher.rating}
                                            showRatingSummary={false}
                                        />
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </div>
                    </div>

            </section>
        </DefaultLayout>
        // <div className="min-h-screen bg-gray-50">
        //     {/* Header Section */}
        //     <div className="bg-white border-b border-gray-200">
        //     </div>
        //
        //     {/* Content Section */}
        //     <div className="container mx-auto px-4 py-8">
        //         <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        //             <TabsList className="grid w-full grid-cols-3 mb-8">
        //                 <TabsTrigger value="about">ABOUT ME</TabsTrigger>
        //                 <TabsTrigger value="courses">Courses</TabsTrigger>
        //                 <TabsTrigger value="reviews">Review</TabsTrigger>
        //             </TabsList>
        //
        //             <div className="grid lg:grid-cols-3 gap-8">
        //                 {/* Left Column - About Me */}
        //                 <div className="lg:col-span-1">
        //                     <TabsContent value="about" className="mt-0">
        //                         <div className="bg-white rounded-lg p-6 border border-gray-200">
        //                             <h3 className="font-semibold text-lg mb-4">ABOUT ME</h3>
        //                             <div className="text-gray-600 leading-relaxed whitespace-pre-line">
        //                                 {teacher.about}
        //                             </div>
        //                         </div>
        //                     </TabsContent>
        //                 </div>
        //
        //                 {/* Right Column - Courses */}
        //                 <div className="lg:col-span-2">
        //                     <TabsContent value="courses" className="mt-0">
        //                         <div className="mb-6">
        //                             <h3 className="text-xl font-semibold">Vako Courses ({teacherCourses.length.toString().padStart(2, '0')})</h3>
        //                         </div>
        //
        //                         <div className="grid md:grid-cols-2 gap-6">
        //                             {teacherCourses.map((course) => (
        //                                 <div key={course.id} className="bg-white rounded-lg overflow-hidden border border-gray-200">
        //                                     <img
        //                                         src={course.image}
        //                                         alt={course.title}
        //                                         className="w-full h-48 object-cover"
        //                                     />
        //                                     <div className="p-4">
        //                                         <div className="mb-2">
        //                                             <Badge variant="secondary" className="text-xs uppercase">
        //                                                 {course.category}
        //                                             </Badge>
        //                                         </div>
        //                                         <h4 className="font-semibold text-lg mb-2 line-clamp-2">{course.title}</h4>
        //                                         <div className="flex items-center justify-between">
        //                                             <div className="flex items-center gap-4">
        //                                                 <div className="flex items-center gap-1">
        //                                                     <Star className="h-4 w-4 text-yellow-500 fill-current" />
        //                                                     <span className="font-medium">{course.rating}</span>
        //                                                 </div>
        //                                                 <div className="flex items-center gap-1">
        //                                                     <Users className="h-4 w-4 text-gray-400" />
        //                                                     <span className="text-sm text-gray-500">
        //                         {(course.studentsCount / 1000).toFixed(1)}K students
        //                       </span>
        //                                                 </div>
        //                                             </div>
        //                                             <span className="text-orange-500 font-bold text-xl">${course.price}</span>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             ))}
        //                         </div>
        //                     </TabsContent>
        //
        //                     <TabsContent value="reviews" className="mt-0">
        //                         <div className="bg-white rounded-lg p-6 border border-gray-200">
        //                             <h3 className="font-semibold text-lg mb-4">Reviews</h3>
        //                             <p className="text-gray-500">Reviews content will be displayed here.</p>
        //                         </div>
        //                     </TabsContent>
        //                 </div>
        //             </div>
        //         </Tabs>
        //     </div>
        // </div>
    );
};

export default TeacherDetail;
