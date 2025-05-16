'use client';

import { ArrowRight } from "@/assets/icons/common-icons";
import { topCourses } from "@/lib/@fake-db/courses";
import Link from 'next/link'


type CategoryCardProps = {
  icon: React.ReactNode;
  title: string;
  courses: string;
  bgColor: string;
};

const CategoryCard = ({ icon, title, courses, bgColor }: CategoryCardProps) => {
  const colorVariants = {
    primary: "bg-primary-100",
    secondary: "bg-secondary-100",
    warning: "bg-warning-100",
    success: "bg-success-100",
    error: "bg-error-100",
    white: "bg-white shadow-[0_12px_32px_0_#1D20261A]",
    gray: "bg-gray-50",
  };
  return (
    <div className={`p-5 rounded-lg cursor-pointer transition hover:shadow-[0_12px_32px_0px_rgba(29,32,38,0.1)] ${colorVariants[bgColor]}`}>
      <div className="flex items-center space-x-5">
        <div className="flex justify-center items-center size-16" style={{ background: (title == 'Personal Development' ? '#FF6636' : '#fff') }}>
          <div className="mt-1">{icon}</div>
        </div>
        <div>
          <h3 className="text-base font-medium text-etutor-darkblue">{title}</h3>
          <p className="text-sm text-gray-600">{courses} Courses</p>
        </div>
      </div>
    </div>
  );
};

const CourseCategories = () => {
  return (
    <div className="container py-20">
      <div className="section-layout">
        <h2 className="section-heading">Browse top category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topCourses.map((category, index) => (
              <Link key={category.id} href={`/categories/${category.id}`}>
                <CategoryCard
                    key={index}
                    icon={category.icon}
                    title={category.title}
                    courses={category.courses}
                    bgColor={category.color}
                />
              </Link>
          ))}
        </div>
        <div className="flex gap-3 items-center text-sm mx-auto">
          <p>We have more category & subcategory.</p>
          <a href="" className="plain-link">
            Browse All <ArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCategories;
