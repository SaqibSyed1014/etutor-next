'use client';

import {Card} from "@/components/ui/card";
import {CourseProgressCard} from "@/components/CourseCard";
import {useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';
import {Button} from "@/components/ui/button";
import {ArrowLeft, ArrowRight} from "@/assets/icons/common-icons";
import { courseProgressData } from "@/lib/@fake-db/courses";

const Page = () => {
    const stats = [
        {
            count: 957,
            label: 'Enrolled Courses',
            bgColor: 'bg-primary-100',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path opacity="0.2" d="M16 4C13.6266 4 11.3066 4.70379 9.33316 6.02236C7.35977 7.34094 5.8217 9.21509 4.91345 11.4078C4.0052 13.6005 3.76756 16.0133 4.23058 18.3411C4.6936 20.6689 5.83649 22.8071 7.51472 24.4853C9.19295 26.1635 11.3312 27.3064 13.6589 27.7694C15.9867 28.2324 18.3995 27.9948 20.5922 27.0866C22.7849 26.1783 24.6591 24.6402 25.9776 22.6668C27.2962 20.6935 28 18.3734 28 16C28 14.4241 27.6896 12.8637 27.0866 11.4078C26.4835 9.95189 25.5996 8.62901 24.4853 7.51471C23.371 6.40041 22.0481 5.51649 20.5922 4.91344C19.1363 4.31038 17.5759 4 16 4ZM14 20V12L20 16L14 20Z" fill="#FF6636"/>
                <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="#FF6636" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M20 16L14 12V20L20 16Z" stroke="#FF6636" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>,
        },
        {
            count: 6,
            label: 'Active Courses',
            bgColor: 'bg-secondary-100',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path opacity="0.2" d="M5.5 5.5V24.5L7.5 26.5H26.5V5.5H5.5Z" fill="#564FFD"/>
                <path d="M5.49994 17.9091V6.5C5.49994 6.23478 5.6053 5.98043 5.79283 5.79289C5.98037 5.60536 6.23472 5.5 6.49994 5.5H25.4999C25.7652 5.5 26.0195 5.60536 26.207 5.79289C26.3946 5.98043 26.4999 6.23478 26.4999 6.5V25.5C26.4999 25.7652 26.3946 26.0196 26.207 26.2071C26.0195 26.3946 25.7652 26.5 25.4999 26.5H16.9544" stroke="#564FFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 19L8 27L4 23" stroke="#564FFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        },
        {
            count: 951,
            label: 'Completed Courses',
            bgColor: 'bg-success-100',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path opacity="0.2" d="M7 7V13.887C7 18.8496 10.9693 22.963 15.9318 22.9997C17.1194 23.0088 18.297 22.7826 19.3968 22.3344C20.4966 21.8861 21.4968 21.2246 22.3398 20.388C23.1828 19.5514 23.8518 18.5563 24.3084 17.4599C24.7649 16.3635 25 15.1876 25 14V7C25 6.73478 24.8946 6.48043 24.7071 6.29289C24.5196 6.10536 24.2652 6 24 6H8C7.73478 6 7.48043 6.10536 7.29289 6.29289C7.10536 6.48043 7 6.73478 7 7Z" fill="#23BD33"/>
                <path d="M7 7V13.887C7 18.8496 10.9693 22.963 15.9318 22.9997C17.1194 23.0088 18.297 22.7826 19.3968 22.3344C20.4966 21.8861 21.4968 21.2246 22.3398 20.388C23.1828 19.5514 23.8518 18.5563 24.3084 17.4599C24.7649 16.3635 25 15.1876 25 14V7C25 6.73478 24.8946 6.48043 24.7071 6.29289C24.5196 6.10536 24.2652 6 24 6H8C7.73478 6 7.48043 6.10536 7.29289 6.29289C7.10536 6.48043 7 6.73478 7 7Z" stroke="#23BD33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 28H20" stroke="#23BD33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 23V28" stroke="#23BD33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M24.7767 16H25.9998C27.0606 16 28.0781 15.5786 28.8282 14.8284C29.5784 14.0783 29.9998 13.0609 29.9998 12V10C29.9998 9.73478 29.8944 9.48043 29.7069 9.29289C29.5194 9.10536 29.265 9 28.9998 9H24.9998" stroke="#23BD33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.24564 16H5.98425C4.92339 16 3.90597 15.5786 3.15583 14.8284C2.40568 14.0783 1.98425 13.0609 1.98425 12V10C1.98425 9.73478 2.08961 9.48043 2.27715 9.29289C2.46468 9.10536 2.71904 9 2.98425 9H6.98425" stroke="#23BD33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        },
        {
            count: 241,
            label: 'Course Instructors',
            bgColor: 'bg-warning-100',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path opacity="0.2" d="M11 20C14.5899 20 17.5 17.0899 17.5 13.5C17.5 9.91015 14.5899 7 11 7C7.41015 7 4.5 9.91015 4.5 13.5C4.5 17.0899 7.41015 20 11 20Z" fill="#FD8E1F"/>
                <path d="M11 20C14.5899 20 17.5 17.0899 17.5 13.5C17.5 9.91015 14.5899 7 11 7C7.41015 7 4.5 9.91015 4.5 13.5C4.5 17.0899 7.41015 20 11 20Z" stroke="#FD8E1F" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M19.4266 7.24166C20.3207 6.98977 21.2583 6.93239 22.1764 7.07338C23.0944 7.21437 23.9716 7.55046 24.7489 8.05901C25.5261 8.56756 26.1853 9.23677 26.6822 10.0216C27.179 10.8063 27.5019 11.6885 27.6291 12.6086C27.7563 13.5287 27.6848 14.4653 27.4195 15.3555C27.1543 16.2456 26.7013 17.0686 26.0912 17.7689C25.4811 18.4693 24.728 19.0307 23.8826 19.4155C23.0372 19.8003 22.1192 19.9994 21.1903 19.9995" stroke="#FD8E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.99951 24.6746C3.01468 23.2306 4.36238 22.052 5.92882 21.2384C7.49527 20.4248 9.23448 20.0001 10.9996 20C12.7648 19.9999 14.504 20.4246 16.0705 21.238C17.637 22.0515 18.9848 23.23 20.0001 24.6739" stroke="#FD8E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.1902 20C22.9555 19.9987 24.6951 20.4228 26.2617 21.2364C27.8284 22.05 29.1759 23.2291 30.1902 24.6739" stroke="#FD8E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        },
    ]


    const [swiper, setSwiper] = useState<SwiperType | null>(null)

    return (
        <div className="flex flex-col gap-10 mt-10">
            <div className="flex flex-col gap-6">
                <h4>Dashboard</h4>
                <div className="grid grid-cols-4 gap-6">{stats.map((item) => {
                    return (
                        <Card key={item.label} className={`${item.bgColor} border-0 p-6 flex items-center gap-6`}>
                            <div className="bg-white size-[60px] grid place-items-center">
                                {item.icon}
                            </div>
                            <div>
                                <div className="text-2xl text-gray-900">{item.count}</div>
                                <div className="text-sm text-gray-700">{item.label}</div>
                            </div>
                        </Card>
                    )
                })}</div>
            </div>

            <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center">
                    <h4>Let’s start learning, Kevin</h4>
                    <div className="flex gap-2">
                        <Button variant="outline" className="size-10" onClick={() => swiper?.slidePrev()}>
                            <ArrowLeft />
                        </Button>

                        <Button variant="outline" className="size-10" onClick={() => swiper?.slideNext()}>
                            <ArrowRight />
                        </Button>
                    </div>
                </div>

                <div className="w-full">
                    <Swiper
                        spaceBetween={24}
                        slidesPerView={4}
                        loop={true}
                        onSwiper={(swiperInstance) => setSwiper(swiperInstance)}
                    >
                        {courseProgressData.map((course, index) => {
                            return (
                                <SwiperSlide key={index} className="w-full">
                                    <CourseProgressCard course={course}/>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Page;
