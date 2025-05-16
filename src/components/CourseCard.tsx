"use client";

import {useEffect, useRef, useState} from "react";
import {Card, CardContent, CardFooter} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Heart} from "@/assets/icons/common-icons.tsx";
import {CategoryBadge, Rating, StudentCount} from "@/components/tiny/tiny-collection.tsx";
import {Course} from "@/lib/@fake-db/courses/type.ts";
import Link from 'next/link'

export const CourseCard = ({ course, inListForm }: { course: Course, inListForm?: boolean }) => {
    const popupRef = useRef<HTMLDivElement>(null);
    const [positionLeft, setPositionLeft] = useState(false);

    useEffect(() => {
        const checkPosition = () => {
            if (!popupRef.current) return;
            const rect = popupRef.current.getBoundingClientRect();
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
                                <StudentCount showIcon={true} />
                                <div className="flex items-center gap-1.5">
                                    {/*<Clock className="h-4 w-4 text-gray-400"/>*/}
                                    <span>Beginner</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    {/*<Clock className="h-4 w-4 text-gray-400"/>*/}
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
                        <span className="font-bold text-etutor-primary">${course.price}</span>
                    </div>
                    <h3 className="text-sm font-medium line-clamp-2">
                        {course.title}
                    </h3>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                    <Rating
                        rating={Number.isInteger(course.rating) ? `${course.rating}.0` : course.rating}
                        showCount={false}
                    />
                    <StudentCount count={course.students} showIcon={true} />
                </CardFooter>
            </Card>}

            {/*Popup*/}
            <div
                ref={popupRef}
                className={`w-[433px] invisible group-hover:visible group-hover:opacity-100 transition bg-white pt-6 shadow-lg absolute z-20 top-1/2 -translate-y-1/2 ${
                    positionLeft ? "right-full" : "left-full"
                }`}
                style={{ boxShadow: "0px 4px 20px 0px #1D20261F" }}
            >
                <div className="px-6">
                    <CategoryBadge category={course.category} />

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
                                    {/*<Clock className="h-4 w-4 text-gray-400"/>*/}
                                    <span>Beginner</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    {/*<Clock className="h-4 w-4 text-gray-400"/>*/}
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
                    <div className="text-xs bg-etutor-primary-light text-etutor-primary px-2 py-1 rounded ml-1.5">50% OFF</div>
                    <Button
                        variant="outline"
                        size="icon"
                        className="ml-auto h-8 w-8 group"
                    >
                        <Heart className="h-4 w-4 text-etutor-primary group-hover:text-white transition" />
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

                    <Link href={`/course-detail/${course.id}`}>
                        <Button variant="outline" className="w-full">
                            Course Detail
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
