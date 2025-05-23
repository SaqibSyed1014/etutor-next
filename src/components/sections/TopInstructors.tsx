'use client';

import { topInstructors } from "@/lib/@fake-db/instructors";
import Link from "next/link";
import {ArrowRight} from "@/assets/icons/common-icons";
import InstructorCard from "@/components/InstructorsCard";



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
