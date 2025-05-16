'use client';

import {Breadcrumbs} from "@/components/Breadcrumbs.tsx";
import Link from "next/link"
import {CardContent, Card, CardFooter} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {CheckCircle, ArrowRight, MapPin, BriefCase, ClipboardText} from "@/assets/icons/common-icons.tsx";
import {OurGallery} from "@/components/OurGallery.tsx";
import {perksAndBenefits, openPositions} from "@/lib/@fake-db/collections/index.tsx";
import TrustedCompanies from "@/components/sections/TrustedCompanies.tsx";
import DefaultLayout from "@/components/layouts/DefaultLayout";


const Career = () => {
  return (
    <>
        <DefaultLayout>
            <Breadcrumbs />

            {/* Hero Section */}
            <section className="" style={{ boxShadow: '0px -1px 0px 0px #E9EAF0 inset' }}>
                <div className="container relative pt-[180px] pb-[148px]">
                    <div className="flex flex-col items-start gap-6 max-w-[536px]">
                        <h1 className="text-5xl">Join the most incredible & creative team.</h1>
                        <p className="text-lg">
                            Proin gravida enim augue, dapibus ultrices eros feugiat et. Pellentesque bibendum orci felis, sit amet efficitur felis lacinia ac. Mauris gravida justo ac nunc consectetur.                    </p>
                        <Button>
                            View Open Positions
                        </Button>
                    </div>
                    <div className="absolute bottom-0 -right-20">
                        <img
                            src="/images/people/girl-2.png"
                            alt="Customer Support Representative"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Join Our Team Section */}
            <section className="bg-gray-50 py-20">
                <div className="container flex flex-col-reverse md:flex-row items-stretch justify-between">
                    <div className="w-full max-w-[648px] relative">
                        <div className="w-[24px] bg-gray-50 absolute top-0 bottom-0 right-[220px]"></div>
                        <div className="w-[24px] bg-gray-50 absolute top-0 bottom-0 left-[220px]"></div>
                        <div className="w-[35%] h-[94px] bg-gray-50 absolute bottom-0 left-0"></div>
                        <div className="w-[35%] h-[94px] bg-gray-50 absolute top-0 right-0"></div>
                        <img
                            src="/images/business-team.jpg"
                            alt="Team"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col gap-10 w-full max-w-[535px]">
                        <div className="flex flex-col gap-4">
                            <h1 className="section-heading !text-left">Why you will join our team</h1>
                            <p className="text-lg ">
                                Quisque leo leo, suscipit sed arcu sit amet, laculis feugiat felis.
                                Vestibulum non consectetur tortor. Morbi at orci vehicula,
                                vehicula mi ut, vestibulum odio.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white p-8 shadow-[0_4px_50px_0_#1D20260D]">
                                <div className="flex items-start gap-3">
                                    <div className="shrink-0">
                                        <CheckCircle />
                                    </div>
                                    <div>
                                        <p className="text-base font-medium text-gray-900">Ut justo ligula, vehicula sed
                                            egestas vel.</p>
                                        <p className="text-gray-600 mt-2">
                                            Quisque leo leo, suscipit sed arcu sit amet, laculis feugiat felis.
                                            Vestibulum non consectetur tortor. Morbi at orci vehicula,
                                            vehicula mi ut, vestibulum odio.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 shadow-[0_4px_50px_0_#1D20260D]">
                                <div className="flex items-start gap-3">
                                    <div className="shrink-0">
                                        <CheckCircle />
                                    </div>
                                    <div>
                                        <p className="text-base font-medium text-gray-900">
                                            Aenean vitae leo leo praesent ullamcorper ac.
                                        </p>
                                        <p className="text-gray-600 mt-2">
                                            Aenean vitae leo leo. Praesent ullamcorper ac libero et mattis. Aenean vel erat at neque viverra feugiat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Perks & Benefits Section */}
            <section className="py-20 border-t border-gray-100">
                <div className="container">
                    <div className="section-layout">
                        <h2 className="section-heading">Our Perks & Benefits</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {perksAndBenefits.map((perk) => (
                                <div
                                    key={perk.id}
                                    className={`${perk.bgColor} p-8`}
                                >
                                    <div className="bg-white size-[72px] flex items-center justify-center mb-8">
                                        {perk.icon}
                                    </div>
                                    <p className="font-medium text-lg text-gray-900">{perk.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="pb-40">
                <OurGallery BGColor="bg-white" />
            </div>

            {/* Open Positions Section */}
            <section className="bg-gray-50 relative ">
            <div className="relative -top-[180px] mb-[-180px]">
                <div className="bg-white border border-gray-100 px-20 mx-auto w-fit">
                    <TrustedCompanies
                        title="We Just keep growing with 6.3k Companies"
                        BGColor="bg-white"
                    />
                </div>
            </div>


            <div className="py-20">
                <div className="container">
                    <div className="section-layout">
                        <h2 className="section-heading">
                            Our all open positions ({openPositions.length})
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {openPositions.map((job) => (
                                <Card key={job.id} className="bg-white overflow-hidden">
                                    <CardContent className="p-6">
                                        <div className="flex flex-col gap-5">
                                            <h3 className="font-medium text-xl">{job.title}</h3>
                                            <div className="flex items-center gap-4 text-sm text-gray-700">
                                                <div className="flex items-center gap-1.5">
                                                    <MapPin classes="text-secondary-500"/>
                                                    <span>{job.location.city}, {job.location.country}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <BriefCase classes="text-success-500"/>
                                                    <span>{job.type}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <ClipboardText classes="text-warning-500"/>
                                                    <span>{job.vacancies} Vacancy</span>
                                                </div>
                                            </div>

                                        </div>
                                    </CardContent>

                                    <CardFooter>
                                        <div className="flex items-center justify-between flex-1">
                                            <div className="flex items-center text-sm text-gray-500">
                                                {/*<CalendarDays className="h-4 w-4 mr-1" />*/}
                                                <span><span
                                                    className="text-primary-500">Deadline:</span> {job.deadline}</span>
                                            </div>
                                            <Link href={`/career/${job.id}`} className="shrink-0">
                                                <Button variant="outline" className="size-12">
                                                    <ArrowRight className="h-5 w-5 text-orange-500"/>
                                                </Button>
                                            </Link>
                                        </div>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </DefaultLayout>
    </>
  );
};

export default Career;
