'use client';

import { Button } from "@/components/ui/button";
import statsData from "@/lib/@fake-db/stats";

const CtaSection = () => {
  return (
    <div className="bg-gray-900 text-white py-[100px] shadow-[0_-1px_0_0_#363B4780_inset]">
      <div className="container">
        <div className="flex items-center">
          <div className="flex flex-col gap-8 max-w-[536px] w-full">
            <h2 className="section-heading !text-left text-white">
              Start learning with 67.1k students around the world.
            </h2>

            <div className="flex flex-col md:flex-row gap-4">
              <Button>
                Join The Family
              </Button>
              <a href="/courses">
                <Button variant="dark">
                  Browse All Courses
                </Button>
              </a>
            </div>
          </div>

          <div className="flex justify-end gap-6 flex-1">
            {statsData.map((stat) => (
                <div key={stat.id} className="max-w-[200px] w-full shrink-0">
                  <div className="section-heading !text-left text-white mb-3">{stat.value}</div>
                  <div className="text-gray-300">{stat.title}</div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
