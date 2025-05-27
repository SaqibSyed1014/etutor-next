"use client";

import React, {useEffect, useRef, useState} from "react";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Heart, Stack, Clock, BarChart, DotsThree} from "@/assets/icons/common-icons";
import {CategoryBadge, Rating, StudentCount} from "@/components/common/tiny-collection";
import {Course, CourseProgress} from "@/lib/@fake-db/courses/type";
import Link from 'next/link'

interface CourseCardProps {
    course: Course;
    inListForm?: boolean;
    showStudentIcon: boolean;
    cardBig?: boolean;
    showDetailPopup?: boolean;
    showCourseOptions?: boolean
}

export const CourseCard = ({
   course,
   inListForm,
   showStudentIcon = true,
   cardBig,
   showDetailPopup = true,
   showCourseOptions = false
}: CourseCardProps) => {
    const popupRef = useRef<HTMLDivElement>(null);
    const [positionLeft, setPositionLeft] = useState(false);

    useEffect(() => {
        const checkPosition = () => {
            if (!popupRef.current) return;
            const rect = popupRef?.current?.getBoundingClientRect();
            const willOverflowRight = rect.left + rect.width > window.innerWidth;
            setPositionLeft(willOverflowRight);
        };

        // Run once after mount
        checkPosition();

        // Optional: Recheck on resize
        window.addEventListener("resize", checkPosition);
        return () => window.removeEventListener("resize", checkPosition);
    }, []);

    return (
        <div className="relative group text-primary-100">
            {inListForm ?
                <Card className="overflow-hidden flex flex-col md:flex-row border-0 hover:shadow-[0_2px_6px_0px_#1D20260F] transition">
                    <div className="w-full md:w-[220px] md:h-[195px] shrink-0">
                        <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col border border-gray-100 flex-1">
                        <CardContent className="flex-1 p-4">
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between items-center">
                                        <CategoryBadge category={course.category} />
                                        <div className="flex items-center gap-1">
                                            <span className="text-lg text-gray-900">$14.00</span>
                                            <span className="text-gray-400" style={{textDecoration: 'line-through'}}>$26.00</span>
                                        </div>
                                    </div>
                                    <h3 className="text-base md:text-lg line-clamp-1 font-medium">
                                        {course.title}
                                    </h3>
                                </div>

                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="size-7 shrink-0 rounded-full overflow-hidden">
                                            <img src={course.instructor.avatar} alt={course.instructor.name}
                                                 className="w-full h-full object-cover"/>
                                        </div>
                                        <span className="text-gray-700">{course.instructor.name}</span>
                                    </div>
                                    <Rating rating={course.rating} showCount={true} />
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <div className="flex flex-col md:flex-row justify-between flex-1 text-sm text-gray-700">
                                <StudentCount showIcon={showStudentIcon} />
                                <div className="flex items-center gap-1.5">
                                    <div className="text-error-500">
                                        <BarChart />
                                    </div>
                                    <span>Beginner</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="text-success-500">
                                        <Clock/>
                                    </div>
                                    <span>{course.duration} hour</span>
                                </div>
                            </div>
                        </CardFooter>
                    </div>
                </Card>
                :
                <Card className="overflow-hidden h-full group-hover:shadow-[0_2px_6px_0px_#1D20260F]">
                    <div className="aspect-[4/3] w-full overflow-hidden">
                        <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <CardContent className="p-4">
                        <div className="flex justify-between">
                            <CategoryBadge category={course.category}/>
                            {!showCourseOptions && <span
                                className={`font-semibold text-primary-500 ${cardBig && 'text-2xl'}`}>${course.price}</span>}
                        </div>
                        <h3 className={`font-medium line-clamp-2 ${cardBig ? 'text-lg mt-2':'text-sm'}`}>
                            {course.title}
                        </h3>
                    </CardContent>
                    <CardFooter className="flex-col items-start p-0">
                        <div className="flex items-center justify-between w-full p-4">
                            <Rating
                                rating={Number.isInteger(course.rating) ? `${course.rating}.0` : course.rating}
                                showCount={false}
                            />
                            <StudentCount count={course.students} showIcon={showStudentIcon}/>
                        </div>
                        {showCourseOptions && <div className="flex items-center justify-between w-full p-4 border-t border-gray-100">
                            <span className="font-semibold text-primary-500 text-lg">${course.price}</span>
                            <div className="text-gray-600 hover:text-gray-900 cursor-pointer">
                                <DotsThree/>
                            </div>
                        </div>}

                    </CardFooter>
                </Card>
            }

            {/*Popup*/}
            {showDetailPopup && <div
                ref={popupRef}
                className={`w-[433px] invisible group-hover:visible group-hover:opacity-100 transition bg-white pt-6 shadow-lg absolute z-20 top-1/2 -translate-y-1/2 ${
                    positionLeft ? "right-full" : "left-full"
                }`}
                style={{boxShadow: "0px 4px 20px 0px #1D20261F"}}
            >
                <div className="px-6">
                    <CategoryBadge category={course.category}/>

                    <h3 className="text-xl font-bold mb-4">{course.title}</h3>

                    <div className="flex flex-col gap-5">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="size-12 shrink-0 rounded-full overflow-hidden">
                                    <img src={course.instructor.avatar} alt={course.instructor.name}
                                         className="w-full h-full object-cover"/>
                                </div>
                                <div className="flex flex-col text-sm">
                                    <span className="text-gray-500">Course By</span>
                                    <span className="text-gray-900">{course.instructor.name}</span>
                                </div>
                            </div>
                            <Rating showCount={true}/>
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex flex-col md:flex-row justify-between flex-1 text-sm text-gray-700">
                                <StudentCount showIcon={true}/>
                                <div className="flex items-center gap-1.5">
                                    <div className="text-error-500">
                                        <BarChart/>
                                    </div>
                                    <span>Beginner</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="text-success-500">
                                        <Clock/>
                                    </div>
                                    <span>{course.duration} hour</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-1 mb-4 px-6">
                    <div className="text-2xl text-gray-900">${course.price.toFixed(2)}</div>
                    <div className="text-sm text-gray-500 line-through">
                        {course.originalPrice && `$${course.originalPrice.toFixed(2)}`}
                    </div>
                    <div className="text-xs bg-etutor-primary-light text-etutor-primary px-2 py-1 rounded ml-1.5">50%
                        OFF
                    </div>
                    <Button
                        variant="outline"
                        size="icon"
                        className="ml-auto h-8 w-8 group grid place-items-center text-primary-500 hover:text-white transition"
                    >
                        <Heart/>
                    </Button>
                </div>


                {course?.learningPoints?.length && <div className="py-5 border-y border-gray-100 px-6">
                    <h4 className="text-xs font-medium mb-2 text-gray-900">WHAT YOU'LL LEARN</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                        {course.learningPoints?.map((point, index) => (
                            <li key={index} className="flex gap-2">
                                {/*<Check className="h-5 w-5 text-green-500 flex-shrink-0"/>*/}
                                <span className="text-sm">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>}


                <div className="px-6 pt-5 flex flex-col items-stretch gap-3 mb-10">
                    <Link href="/shopping-cart">
                        <Button className="w-full">
                            Add To Cart
                        </Button>
                    </Link>

                    <Link href={`/courses/${course.id}`}>
                        <Button variant="outline" className="w-full">
                            Course Detail
                        </Button>
                    </Link>
                </div>
            </div>}
        </div>
    );
};


export const CourseProgressCard = ({ course } : { course: CourseProgress }) => {
    return (
        <div className="flex flex-col h-full border border-gray-100 relative hover:shadow-[0_12px_48px_0_#1D20261F] transition-shadow">
            <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-4 space-y-1.5">
                <p className="text-xs text-gray-600 line-clamp-1">{course.title}</p>
                <p className="font-medium text-gray-900 text-sm">{course.lectureNumber}. {course.currentLecture}</p>
            </div>
            <div className="p-4 mt-auto border-t border-gray-100">
                <div className="flex justify-between items-center">
                    <Link
                        href={`/course/${course.id}/watch-course`}
                        className="w-full flex-1"
                    >
                        <Button variant="outline" className="w-full">Watch Lecture</Button>
                    </Link>
                    {course.progress && <span className="text-success-500 font-medium text-sm flex-1 text-end">{course.progress}% Completed</span>}
                    {course.progress && <div className="bg-primary-500 h-[2px] absolute bottom-0 left-0" style={{ width: `${course.progress}%` }}></div>}
                </div>
            </div>
        </div>
    )
}
