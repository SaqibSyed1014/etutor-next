"use client";


import { recentlyAddedCourses } from "@/lib/@fake-db/courses";

import { Button } from "@/components/ui/button";
import {CourseCard} from "@/components/CourseCard";
import {ArrowRight} from "@/assets/icons/common-icons";
import Link from "next/link";

const RecentCourses = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container">
        <div className="section-layout">
            <h2 className="section-heading">Recently added courses</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {recentlyAddedCourses.slice(0, 4).map((course) => (
                  <div
                      key={course.id}
                      className="cursor-pointer"
                  >
                    <CourseCard course={course} />
                  </div>
              ))}
          </div>

            <Link href="/courses" className="mx-auto">
                <Button variant="outline">
                    Browse All Course <ArrowRight classes="scale-150 ml-1" />
                </Button>
            </Link>
        </div>

      </div>
    </section>
  );
};

export default RecentCourses;
