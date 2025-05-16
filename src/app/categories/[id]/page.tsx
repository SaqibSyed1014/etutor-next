"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { courseCategories } from "@/lib/@fake-db/courseCategories";
import { coursesData } from "@/lib/@fake-db/courses";
import { CourseCard } from "@/components/CourseCard";
import { Card } from "@/components/ui/card";
import { ArrowRight, ArrowLeft } from "@/assets/icons/common-icons";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import TopInstructors from "@/components/sections/TopInstructors";
import CourseListing from "@/app/courses/CourseListing";
import { useCourseFilter } from "@/hooks/useCourseFilter";
import DefaultLayout from "@/components/layouts/DefaultLayout";

interface Tool {
    id: number;
    name: string;
    coursesCount: number;
    isHighlighted?: boolean;
}

const tools: Tool[] = [
    { id: 1, name: "HTML 5", coursesCount: 2736 },
    { id: 2, name: "CSS 3", coursesCount: 13932 },
    { id: 3, name: "Javascript", coursesCount: 52822 },
    { id: 4, name: "Saas", coursesCount: 20126 },
    { id: 5, name: "Laravel", coursesCount: 6196 },
    { id: 6, name: "Django", coursesCount: 22649 },
    { id: 7, name: "React", coursesCount: 35689 },
    { id: 8, name: "Vue.js", coursesCount: 12543 },
    { id: 9, name: "Angular", coursesCount: 18932 },
    { id: 10, name: "Node.js", coursesCount: 28765 },
];

const keywords = [
    "HTML 5",
    "Web Development",
    "Responsive Developments",
    "Developments",
    "Programming",
    "Website",
    "Technology",
    "Wordpress",
];

const Page = () => {
    const params = useParams();
    const id = params?.id;

    const [activeKeyword, setActiveKeyword] = useState("Developments");

    if (!id) return <div>Category ID is missing</div>;

    // Find category by id
    const category = Object.values(courseCategories).find(
        (cat) => {
            return cat.id === Number(id)
        }
    );

    if (!category) return <div>Category not found</div>;

    // Filter courses by category id and isBestSelling
    const categoryCourses = coursesData.filter(
        (course) => course.category.id === Number(id) && course.isBestSelling
    );

    const { filters } = useCourseFilter();
    filters.categories = [category.title.toLowerCase()];

    return (
        <>
            <DefaultLayout>
                <section className="pt-[100px] pb-20">
                    <div className="container">
                        <div className="section-layout">
                            <h2 className="section-heading">
                                Best selling courses in {category.title}
                            </h2>

                            <div className="grid grid-cols-5 gap-4">
                                {categoryCourses.map((course) => (
                                    <CourseCard course={course} key={course.id}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pb-20">
                    <div className="container">
                        <div className="section-layout">
                            <div className="flex flex-col gap-6">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-2xl font-bold">Popular tools</h2>
                                    <div className="flex gap-2">
                                        <button
                                            type="button"
                                            className="size-12 flex items-center justify-center rounded-full text-primary-500 transition hover:bg-primary-100 disabled:hover:bg-transparent disabled:text-primary-100"
                                        >
                                            <ArrowLeft className="h-4 w-4"/>
                                        </button>
                                        <button
                                            type="button"
                                            className="size-12 flex items-center justify-center rounded-full text-primary-500 transition hover:bg-primary-100 disabled:hover:bg-transparent disabled:text-primary-100"
                                        >
                                            <ArrowRight className="h-4 w-4"/>
                                        </button>
                                    </div>
                                </div>

                                <Carousel opts={{align: "start", loop: true}}>
                                    <CarouselContent>
                                        {tools.map((tool) => (
                                            <CarouselItem
                                                key={tool.id}
                                                className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5 xl:basis-1/6"
                                            >
                                                <Card
                                                    className="p-6 h-[94px] flex flex-col items-center hover:text-primary-500 transition-all justify-center text-center hover:shadow-[0_12px_32px_0_#1D20261A]">
                                                    <div className="font-medium text-base text-gray-900">
                                                        {tool.name}
                                                    </div>
                                                    <div className="text-xs text-gray-500 mt-2">
                                                        {tool.coursesCount.toLocaleString()} Courses
                                                    </div>
                                                </Card>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <div className="hidden">
                                        <CarouselPrevious/>
                                        <CarouselNext/>
                                    </div>
                                </Carousel>
                            </div>

                            <div className="flex gap-6 items-center mt-6">
                                <h3 className="text-lg">Popular keyword:</h3>
                                <div className="flex flex-wrap gap-3">
                                    {keywords.map((keyword) => (
                                        <button
                                            key={keyword}
                                            onClick={() => setActiveKeyword(keyword)}
                                            className={`px-3 py-1.5 font-medium text-sm transition ${
                                                activeKeyword === keyword
                                                    ? "bg-primary-500 text-white"
                                                    : "bg-gray-50 text-gray-900 hover:bg-primary-500 hover:text-white"
                                            }`}
                                        >
                                            {keyword}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="bg-gray-50">
                    <TopInstructors title={`Popular instructor in ${category.title}`}/>
                </div>

                <div className="py-10">
                    <CourseListing preSelectedFilters={filters}/>
                </div>
            </DefaultLayout>
        </>
    );
};

export default Page;
