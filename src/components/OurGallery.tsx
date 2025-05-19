"use client";

import {Button} from "@/components/ui/button";
import { ArrowRight } from "@/assets/icons/common-icons";

export const OurGallery = ({ showButton, BGColor } : { showButton?: boolean, BGColor?: string }) => {
    return (
        <section className={`bg-gray-50 py-20 ${BGColor}`}>
            <div className="container overflow-visible">
                <div className="flex flex-col md:flex-row gap-28 items-center">
                    <div className="max-w-[424px] shrink-0 w-full">
                        <div className="text-orange-500 font-medium">OUR GALLERY</div>
                        <h2 className="section-heading !text-left mt-2">
                            We've been here almost 17 years
                        </h2>
                        <p className="my-6">
                            Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet.
                            Sed sed nunc libero. Curabitur in urna ligula, torquent per conubia nostra.
                        </p>
                        {showButton && <Button>Join Our Team <ArrowRight  /> </Button>}
                    </div>
                    <div className="shrink-0">
                        <div className="flex flex-col items-center gap-5">
                            <div className="flex gap-6 items-end">
                                <img
                                    src="/images/workplace.png"
                                    alt="Office space"
                                    className="w-[280px]"
                                />
                                <img
                                    src="/images/working.png"
                                    alt="Team meeting"
                                    className="w-[312px]"
                                />
                                <img
                                    src="/images/caller.png"
                                    alt="Support team"
                                    className="w-full object-cover"
                                />
                            </div>
                            <div className="flex gap-6 items-start">
                                <img
                                    src="/images/work.png"
                                    alt="Office space"
                                    className="w-[224px]"
                                />
                                <img
                                    src="/images/meeting.png"
                                    alt="Team meeting"
                                    className="w-[424px]"
                                />
                                <div className="flex flex-col gap-6">
                                    <img
                                        src="/images/two-people-discussion.png"
                                        alt="Support team"
                                        className="w-[238px]"
                                    />
                                    <img
                                        src="/images/girl-talking.png"
                                        alt="Support team"
                                        className="w-[124px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
