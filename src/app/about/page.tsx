'use client';

import TrustedCompanies from "@/components/sections/TrustedCompanies.tsx";
import {Breadcrumbs} from "@/components/Breadcrumbs.tsx";
import {trustedCompanies} from "@/lib/@fake-db/collections/index.tsx";
import {OurGallery} from "@/components/OurGallery.tsx";
import DefaultLayout from "@/components/layouts/DefaultLayout";

const About = () => {
  return (
    <>
        <DefaultLayout>
            <Breadcrumbs/>

            <section className="py-20">
                <div className="container">
                    <div className="flex items-center gap-28">
                        <div className="max-w-[535px] w-full">
                            <div className="text-[80px] leading-[80px] font-bold text-gray-100">2007-2023</div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl mt-4 mb-8">
                                We share knowledge with the world
                            </h2>
                            <p className="text-gray-600 text-xl">
                                Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fermentum
                                quam mauris. Fusce tempor et augue a aliquet. Donec non ipsum non risus
                                egestas tincidunt at vitae nulla.
                            </p>
                        </div>
                        <div className="md:w-1/2 relative">
                            <div className="w-[24px] bg-white absolute top-0 bottom-0 right-[200px]"></div>
                            <img
                                src="/images/team.jpg"
                                alt="Business professional"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <TrustedCompanies title="We Just keep growing with 6.3k Companies" showStats={true}/>


            {/* Mission Section */}
            <section className="bg-primary-100 py-20 relative">
                <div className="container">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="absolute top-0 bottom-0 left-[10%]">
                            <img
                                src="/images/discussion.png"
                                alt="Team collaborating"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="max-w-[535px] w-full ml-auto">
                            <div className="text-primary-500 font-medium">OUR ONE BILLION MISSION</div>
                            <h2 className="section-heading !text-left mt-2 mb-6">
                                Our one billion mission sounds bold, We agree.
                            </h2>
                            <p>
                                "We cannot solve our problems with the same thinking we used when we created
                                them."—Albert Einstein.
                                Institutions are slow to change. Committees are where good ideas and innovative thinking
                                go to die.
                                Choose agility over dogma. Embrace and drive change. We need to wipe the slate clean and
                                begin with bold, radical thinking.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <OurGallery showButton={true}/>

            {/* Testimonials Section */}
            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {trustedCompanies.map((item, index) => {
                            if ([0, 1, 7].includes(index)) {
                                return (
                                    <div className="relative">
                                        <div className="flex flex-col gap-5 bg-gray-50 p-6 text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="22"
                                                 viewBox="0 0 28 22" fill="none">
                                                <path
                                                    d="M22.746 11.242C25.88 11.242 28 13.426 28 16.662C28 19.574 25.568 22 22.274 22C18.666 22 16 19.088 16 14.64C16 4.53 23.372 0.486 28 0V4.448C24.862 5.014 21.334 8.168 21.176 11.648C21.334 11.568 21.96 11.242 22.746 11.242Z"
                                                    fill="#FF6636"/>
                                                <path
                                                    d="M6.746 11.242C9.882 11.242 12 13.426 12 16.662C12 19.574 9.568 22 6.274 22C2.666 22 0 19.088 0 14.64C0 4.53 7.372 0.486 12 0V4.448C8.862 5.014 5.334 8.168 5.176 11.648C5.334 11.568 5.96 11.242 6.746 11.242Z"
                                                    fill="#FF6636"/>
                                            </svg>
                                            <p className="text-lg text-center">
                                                Eduguard fit us like a glove. Their team curates fresh, up-to-date
                                                courses
                                                from their marketplace and makes them available to customers.
                                            </p>
                                            <svg className="ml-auto" xmlns="http://www.w3.org/2000/svg" width="28"
                                                 height="22" viewBox="0 0 28 22" fill="none">
                                                <path
                                                    d="M5.254 10.758C2.12 10.758 0 8.574 0 5.338C0 2.426 2.432 0 5.726 0C9.334 0 12 2.912 12 7.36C12 17.47 4.628 21.514 0 22V17.552C3.138 16.986 6.666 13.832 6.824 10.352C6.666 10.432 6.04 10.758 5.254 10.758Z"
                                                    fill="#FF6636"/>
                                                <path
                                                    d="M21.254 10.758C18.118 10.758 16 8.574 16 5.338C16 2.426 18.432 0 21.726 0C25.334 0 28 2.912 28 7.36C28 17.47 20.628 21.514 16 22V17.552C19.138 16.986 22.666 13.832 22.824 10.352C22.666 10.432 22.04 10.758 21.254 10.758Z"
                                                    fill="#FF6636"/>
                                            </svg>
                                        </div>
                                        <div className="flex flex-col items-center ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16"
                                                 viewBox="0 0 24 16" fill="none">
                                                <path d="M12 16L24 0H0L12 16Z" fill="#F5F7FA"/>
                                            </svg>

                                            <div className="flex flex-col gap-1.5 items-center mt-5">
                                                <div className="font-medium">{item.reviewer}</div>
                                                <div className="text-sm text-gray-500">
                                                    {item.designation} of <span
                                                    className="text-blue-600 font-medium">{item.name}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </section>
        </DefaultLayout>
    </>
  );
};

export default About;
