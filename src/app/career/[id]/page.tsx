'use client';

import { useMemo } from "react";
import {useParams} from "next/navigation";
import Link from "next/link";
import { openPositions } from "@/lib/@fake-db/collections";
import { ArrowRight, MapPin, BriefCase, ClipboardText, Check } from "@/assets/icons/common-icons";
import { Button } from "@/components/ui/button";
import DefaultLayout from "@/components/layouts/DefaultLayout.tsx";

const CareerDetail = () => {
    const params = useParams();
    const id = params?.id;


    const job = useMemo(() => openPositions.find(job => job.id === Number(id)), [id]);

    if (!job) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <h2 className="text-2xl font-bold">Job not found</h2>
                    <p className="mt-2 mb-6 text-gray-600">The position you're looking for doesn't exist.</p>
                    <Link href="/career">
                        <Button>Back to Careers</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <DefaultLayout>
                {/* Job Header Section */}
                <section className="bg-gray-50 py-20">
                    <div className="container">
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                            <div>
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
                                <h1 className="section-heading pt-3 pb-10">{job.title}</h1>

                                <div className="grid grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <p className="text-base font-medium text-primary-500">ADDRESS</p>
                                        <p className="text-base text-gray-900 max-w-[200px]">{job.address}</p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-medium text-primary-500">CONTACT</h3>
                                        <div>
                                            <p className="text-base text-gray-900">career.eduguard@gamil.com</p>
                                            <p className="text-base text-gray-900">(219) 555-0114</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Button>
                                Apply Now <ArrowRight/>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Job Details Section */}
                <section className="pt-10 pb-20">
                    <div className="container">
                        <div className="w-full max-w-[648px] mx-auto">
                            <div className="flex flex-col gap-10 [&_p]:text-gray-600">
                                {/* Who we are */}
                                <div className="flex flex-col gap-4">
                                    <h2 className="font-medium text-xl">Who we are</h2>
                                    <p>Sed lacinia accumsan eros in pretium. Praesent vitae eros condimentum, elementum
                                        nisl quis, vestibulum nulla. Aenean quis nibh ullamcorper, suscipit magna et,
                                        pretium nisi. Sed sed egestas mi. Donec viverra efficitur ipsum, ut cursus risus
                                        fringilla id.</p>
                                </div>

                                {/* Requirements */}
                                <div className="flex flex-col gap-4">
                                    <h2 className="font-medium text-xl">Requirements</h2>
                                    <ul className="flex flex-col gap-2.5 list-disc [&_li]:ml-5 [&_li]:text-gray-600">
                                        <li>Vestibulum hendrerit facilisis libero, pretium condimentum ipsum vulputate
                                            at.
                                        </li>
                                        <li>Quisque varius auctor augue id blandit.</li>
                                        <li>Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                                            ridiculus mus.
                                        </li>
                                        <li>Ut ut magna condimentum, pharetra est nec, lacinia nulla.</li>
                                        <li>Aliquam tempus mollis sem eget ullamcorper.</li>
                                        <li>Donec non orci eget lorem laoreet ullamcorper et et magna.</li>
                                        <li>Curabitur quis ipsum sollicitudin, sagittis elit in, sodales felis.</li>
                                    </ul>
                                </div>

                                {/* Benefits */}
                                <div className="flex flex-col gap-4">
                                    <h2 className="font-medium text-xl">Benefits</h2>
                                    <ul className="flex flex-col gap-2.5 [&_li]:text-gray-700 [&_li]:flex [&_li]:items-center [&_li]:gap-2">
                                        <li><Check classes="text-success-500"/> Nulla facilisi. Integer non euismod
                                            neque.
                                        </li>
                                        <li><Check classes="text-success-500"/> Suspendisse a ligula posuere, convallis
                                            dui et, commodo nisl.
                                        </li>
                                        <li><Check classes="text-success-500"/> Suspendisse a ligula posuere, convallis
                                            dui et, commodo nisl aliquam iaculis tristique nulla.
                                        </li>
                                        <li><Check classes="text-success-500"/> Donec dolor nunc, ultrices ac imperdiet
                                            eu, dignissim ut purus
                                        </li>
                                    </ul>
                                </div>

                                {/* Salary */}
                                <div className="flex flex-col gap-4 [&_p]:text-gray-700">
                                    <h2 className="font-medium text-xl">Salary</h2>
                                    <p>Based on Skills [20K - 40K (USD) and Other Benefits]</p>
                                </div>

                                {/* Job Nature */}
                                <div className="flex flex-col gap-4 [&_p]:text-gray-700">
                                    <h2 className="font-medium text-xl">Job Nature</h2>
                                    <p>Job Type: Full Time <br/>
                                        Office Hours: 9 AM to 5 PM (Sat-Thurs) 6 days (We will consider remote as well)
                                    </p>
                                    <p><strong>Location:</strong> 1702 Olympic Boulevard, Santa Monica, CA 90404</p>
                                </div>

                                <div className="flex justify-center">
                                    <Button>
                                        Apply Now <ArrowRight/>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </DefaultLayout>
        </>
    );
};

export default CareerDetail;
