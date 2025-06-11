'use client';

import React from 'react';
import {useParams} from "next/navigation";
import {coursesData} from "@/lib/@fake-db/courses"
import {Course} from "@/lib/@fake-db/courses/type";
import CourseRatingCard from "@/app/instructor/components/CourseRatingCard";
import RevenueChart from "@/app/instructor/components/RevenueChart";
import CourseOverviewChart from "@/app/instructor/components/CourseOverviewChart";
import {courseStatsData} from "@/lib/@fake-db/dashboard";
import AnalyticsCard from "@/app/instructor/components/AnalyticsCard";
import StackedAvatars from "@/components/common/StackedAvatars";
import {Rating} from "@/components/common/tiny-collection";
import {DotsThree, Star} from "@/assets/icons/common-icons";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

const Page = () => {
    const params = useParams();
    const id = params?.id;

    const course :Course =
        coursesData.find((c) => c.id === Number(id)) || coursesData[0];

    return (
        <div className="border">
            <div className="space-y-6">
                <div className="space-y-4">
                    <div className="space-x-2 text-sm text-gray-600">
                        <Link href="/instructor/my-courses">Course</Link>
                        <span>/</span>
                        <Link href="/instructor/my-courses">My Courses</Link>
                        <span>/</span>
                        <span>Development</span>
                        <span>/</span>
                        <span>{course.category.title}</span>
                        <span>/</span>
                        <span className="text-gray-900">{course.title}</span>
                    </div>
                    <div className="bg-white p-6">
                        <div className="flex gap-6">
                            <div className="w-[352px] h-[264px] overflow-hidden">
                                <img src={course.image} alt={course.title} className="size-full object-cover"/>
                            </div>
                            <div className="space-y-6 grow">
                                <div className="flex flex-col gap-3">
                                    <div className="flex gap-4 text-gray-500 text-xs">
                                        <div>
                                            Uploaded:
                                            <span className="text-gray-700"> Jan 21, 2020</span>
                                        </div>
                                        <div>
                                            Last Updated:
                                            <span className="text-gray-700">  Sep 11, 2021</span>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl">{course.title}</h3>
                                        <p className="text-gray-600">3 in 1 Course: Learn to design websites with Figma, build with Webflow, and make a living freelancing.</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-start">
                                    <div className="flex gap-3">
                                        <StackedAvatars
                                            avatars={[
                                                {
                                                    src: course.instructor.avatar,
                                                    alt: course.instructor.name
                                                },
                                                ...(course.coInstructor
                                                    ? [{
                                                        src: course.coInstructor.avatar,
                                                        alt: course.coInstructor.name
                                                    }]
                                                    : [])
                                            ]}
                                            size={50}
                                            max={course.coInstructor ? 2 : 1}
                                        />
                                        <div>
                                            <div className="text-gray-600 text-sm">Created By:</div>
                                            <span className="text-gray-900 text-base font-medium">
                                            {course.instructor.name}
                                                {course.coInstructor && `• ${course.coInstructor.name}`}
                                        </span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <div className="flex">{[1, 2, 3, 4, 5].map(star => (
                                            <Star
                                                key={star}
                                            />
                                        ))}</div>
                                        <p className="text-gray-600 text-sm">
                                            <span className="text-gray-900 text-base font-medium">{course.rating} </span>
                                            ({course.reviewCount.toLocaleString()} Rating)
                                        </p>
                                    </div>
                                </div>

                                <hr/>
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-8 items-center">
                                        <div className="space-y-1">
                                            <h4 className="text-xl font-normal">$13.99</h4>
                                            <p className="text-gray-600">Course prices</p>
                                        </div>
                                        <div className="h-10 w-px bg-gray-100"></div>
                                        <div className="space-y-1">
                                            <h4 className="text-xl font-normal">$131,800,455.82</h4>
                                            <p className="text-gray-600">USD dollar revenue</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <Button>Withdrew Money</Button>

                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button size="icon" variant="onlyIcon">
                                                    <DotsThree />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end" className="bg-white">
                                                <DropdownMenuItem className="hover:bg-primary-500 hover:text-white">
                                                    Edit Course
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="hover:bg-error-500 hover:text-white">
                                                    <Link href="/instructor/my-courses">
                                                        Delete Course
                                                    </Link>
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {courseStatsData.map((stat, index) => (
                                <AnalyticsCard key={index} {...stat} />
                            ))}
                        </div>
                    <CourseRatingCard />
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <RevenueChart chartColor="#23BD33" />
                    <CourseOverviewChart />
                </div>
            </div>
        </div>
    );
};

export default Page;
