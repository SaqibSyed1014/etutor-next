'use client';

import { Button } from "@/components/ui/button";
import {ArrowRight} from "@/assets/icons/common-icons";


const BecomeInstructor = () => {
  return (
    <section className="bg-gray-50 pt-20 pb-80">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative overflow-hidden p-8 md:p-10" style={{ background: 'linear-gradient(90deg, #CC522B 0%, #FF6636 100%)' }}>
            <h3 className="mb-3 text-white">Become an instructor</h3>
            <p className="mb-6 text-white w-full max-w-[311px]">
              Instructors from around the world teach millions
              of students on Udemy. We provide the tools
              and skills to teach what you love.
            </p>
            <Button
              variant="outlineInvert"
            >
              Start Teaching <ArrowRight />
            </Button>

            <img src="/images/boy-pointing.png" alt="Boy Pointing" className="absolute w-[320px] top-3 bottom-0 right-3"/>
          </div>

          <div className="bg-white p-10 md:p-10">
            <h3 className="mb-6">Your teaching & earning steps</h3>

            <div className="grid grid-cols-2 gap-5 text-base">
              <div className="flex items-center gap-4">
                <div className="bg-secondary-100 text-secondary-500 font-semibold text-2xl size-[52px] rounded-full flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="text-gray-900 !text-base">Apply to become instructor</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-error-100 text-primary-500 font-semibold text-2xl size-[52px] rounded-full flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="text-gray-900 !text-base">Build & edit your profile</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-error-100 text-primary-500 font-semibold text-2xl size-[52px] rounded-full flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="text-gray-900 !text-base">Create your new course</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-success-100 text-success-500 font-semibold text-2xl size-[52px] rounded-full flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div>
                  <p className="text-gray-900 !text-base">Start teaching & earning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeInstructor;
