"use client";

import { bestSellingCourses } from "@/lib/@fake-db/courses";
import {CourseCard} from "@/components/CourseCard";


const BestSellingCourses = () => {
  return (
    <div className="w-full bg-gray-50 pt-20 pb-80">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-10">Best selling courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {bestSellingCourses.slice(0, 10).map((course) => (
              <CourseCard key={course.id} course={course} showStudentIcon={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellingCourses;
