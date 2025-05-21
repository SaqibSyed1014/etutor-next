'use client';

import {Card, CardContent, CardFooter} from "@/components/ui/card";
import { topInstructors } from "@/lib/@fake-db/instructors";
import Link from "next/link";
import {Rating, StudentCount} from "@/components/common/tiny-collection";
import {ArrowRight} from "@/assets/icons/common-icons";

const InstructorCard = ({ instructor }: { instructor: typeof topInstructors[0] }) => {
  return (
    <Card className="overflow-hidden text-center">
      <div className="aspect-square w-full overflow-hidden bg-yellow-500">
        <img
          src={instructor.avatar}
          alt={instructor.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="flex flex-col gap-1 p-4">
        <p className="text-base font-medium text-gray-900">{instructor.name}</p>
        <p className="text-sm text-gray-500">{instructor.role}</p>
      </CardContent>
        <CardFooter className="flex items-center justify-between">
            <Rating rating={instructor.rating} showCount={false} />
            <StudentCount count={instructor.students} showIcon={false}/>
        </CardFooter>
    </Card>
  );
};

const TopInstructors = ({ title, aboveTheSection, showBottomLine } : { title: string; aboveTheSection?: boolean; showBottomLine?:boolean }) => {
  return (
    <div className={`py-20 relative ${aboveTheSection ? '-top-[320px] mb-[-320px]' : ''}`}>
        <div className={`${aboveTheSection ? 'bg-white border border-gray-100 p-20 mx-auto w-fit' : ''} `}>
          <div className={`container ${aboveTheSection ? 'm-0' : ''} `}>
              <div className="section-layout">
                  <h2 className="section-heading">{title}</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                      {topInstructors.map((instructor) => (
                          <InstructorCard key={instructor.id} instructor={instructor}/>
                      ))}
                  </div>
                  {showBottomLine && <div className="flex gap-2 items-center mx-auto">
                      <p>Thousands of students waiting for a instructor. Start teaching &
                          earning now.</p>
                      <Link href="/become-instructor" className="plain-link">
                          Become Instructor <ArrowRight/>
                      </Link>
                  </div>
                  }
              </div>
          </div>
        </div>
    </div>
  );
};

export default TopInstructors;
