'use client'

import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';
import { Card, CardContent } from "@/components/ui/card";
import {ArrowLeft, ArrowRight} from "@/assets/icons/common-icons";

interface Testimonial {
    id: number;
    name: string;
    position: string;
    rating: number;
    text: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Emma Thompson",
        position: "Photography Instructor",
        rating: 5,
        text: "Becoming an instructor on this platform has been the best decision of my career. The support team is amazing, and the platform makes course creation so intuitive.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
        id: 2,
        name: "John Davis",
        position: "Business Instructor",
        rating: 5,
        text: "I've been able to reach students across the globe and share my knowledge. The analytics tools help me improve my courses continuously and grow my audience.",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
        id: 3,
        name: "Sarah Johnson",
        position: "Design Instructor",
        rating: 5,
        text: "After joining as an instructor, I was able to quit my 9-5 job and focus on teaching full-time. The platform makes it easy to create engaging content for my students.",
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b"
    },
    {
        id: 4,
        name: "Michael Chen",
        position: "Technology Instructor",
        rating: 5,
        text: "What sets this platform apart is the community of instructors. We collaborate, share tips, and help each other grow. It's more than just a teaching platform.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    }
];

const TestimonialSlider = () => {
    const [swiper, setSwiper] = useState<SwiperType | null>(null)

    return (
        <div>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                onSwiper={(swiperInstance) => setSwiper(swiperInstance)}
            >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id} className="w-full">
                            <Card className="border-none shadow-lg bg-primary-100">
                                <CardContent className="p-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                        <path opacity="0.2" d="M23.625 31.5H8.75C8.28587 31.5 7.84075 31.3156 7.51256 30.9874C7.18437 30.6593 7 30.2141 7 29.75V15.75C7 15.2859 7.18437 14.8408 7.51256 14.5126C7.84075 14.1844 8.28587 14 8.75 14H21.875C22.3391 14 22.7842 14.1844 23.1124 14.5126C23.4406 14.8408 23.625 15.2859 23.625 15.75V31.5Z" fill="#FF6636"/>
                                        <path opacity="0.2" d="M49 31.5H34.125C33.6609 31.5 33.2158 31.3156 32.8876 30.9874C32.5594 30.6593 32.375 30.2141 32.375 29.75V15.75C32.375 15.2859 32.5594 14.8408 32.8876 14.5126C33.2158 14.1844 33.6609 14 34.125 14H47.25C47.7141 14 48.1592 14.1844 48.4874 14.5126C48.8156 14.8408 49 15.2859 49 15.75V31.5Z" fill="#FF6636"/>
                                        <path d="M23.625 31.5H8.75C8.28587 31.5 7.84075 31.3156 7.51256 30.9874C7.18437 30.6592 7 30.2141 7 29.75V15.75C7 15.2859 7.18437 14.8408 7.51256 14.5126C7.84075 14.1844 8.28587 14 8.75 14H21.875C22.3391 14 22.7842 14.1844 23.1124 14.5126C23.4406 14.8408 23.625 15.2859 23.625 15.75V35C23.625 37.3206 22.7031 39.5462 21.0622 41.1872C19.4212 42.8281 17.1956 43.75 14.875 43.75" stroke="#FF6636" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M49 31.5H34.125C33.6609 31.5 33.2158 31.3156 32.8876 30.9874C32.5594 30.6592 32.375 30.2141 32.375 29.75V15.75C32.375 15.2859 32.5594 14.8408 32.8876 14.5126C33.2158 14.1844 33.6609 14 34.125 14H47.25C47.7141 14 48.1592 14.1844 48.4874 14.5126C48.8156 14.8408 49 15.2859 49 15.75V35C49 37.3206 48.0781 39.5462 46.4372 41.1872C44.7962 42.8281 42.5706 43.75 40.25 43.75" stroke="#FF6636" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p className="text-gray-900 text-lg mt-5">{testimonial.text}</p>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                    ))}
            </Swiper>

            <div className="flex gap-3 mt-8">
                <button type="button" onClick={() => swiper?.slidePrev()} className="bg-gray-50 text-black size-12 flex justify-center items-center hover:bg-primary-500 hover:text-white hover:shadow-[0_6px_20px_0px_#CC522B80] transition-colors">
                    <ArrowLeft />
                </button>
                <button type="button" onClick={() => swiper?.slideNext()} className="bg-gray-50 text-black size-12 flex justify-center items-center hover:bg-primary-500 hover:text-white hover:shadow-[0_6px_20px_0px_#CC522B80] transition-colors">
                    <ArrowRight />
                </button>
            </div>
        </div>
    );
};

export default TestimonialSlider;
