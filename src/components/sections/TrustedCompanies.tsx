'use client';

import { trustedCompanies } from "@/lib/@fake-db/collections";
import {Stats} from "@/components/common/tiny-collection"

const TrustedCompanies = ({ title, showStats, BGColor } : { title?: string; showStats?: boolean; BGColor?: string }) => {
  return (
      <section className={`bg-gray-50 py-16 ${BGColor}`}>
          <div className="container">
            <div className="flex flex-col gap-20">
              <div className="flex max-md:flex-col items-center justify-between gap-20">
                <div className="flex flex-col gap-6 max-w-[424px] w-full shrink-0">
                  <h3>
                    {title ?? '6.3k+ trusted companies'}
                  </h3>
                  <p className="text-gray-600 md:mr-28">
                    Nullam imperdiet tellus at enim ornare tristique.
                    Class aptent taciti sociosqu ad litora torquent
                    per conubia nostra.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {trustedCompanies.map((company) => (
                      <div key={company.id}
                           className="h-[100px] px-7 xl:px-10 bg-white flex items-center justify-center shadow-custom">
                        {company.logo}
                      </div>
                  ))}
                </div>
              </div>

              {showStats && <Stats />}
            </div>
          </div>
      </section>
  );
};

export default TrustedCompanies;
