'use client';

import { featuredCourses } from "@/lib/@fake-db/courses";
import Link from "next/link";
import RecentCourses from "@/components/RecentCourses";
import {CourseCard} from "@/components/CourseCard";

const FeaturedCourses = () => {
  return (
    <section className="py-20 relative -top-[350px] mb-[-350px]">
      <div className="bg-white border border-gray-100 p-16 xl:p-20 mx-auto w-fit">
        <div className="container m-0">
          <div className="section-layout">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <h2 className="section-heading">Our feature courses</h2>
              <p className="text-sm w-full max-w-[424px]">
                Vestibulum sed dolor sed diam mollis maximus vel nec dolor.
                Donec varius purus et eleifend porta.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredCourses.map((course) => (
                  <Link key={course.id} href={`/courses/${course.id}`}>
                    <CourseCard course={course} inListForm={true} />
                  </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <RecentCourses />
    </section>
  );
};

export default FeaturedCourses;
