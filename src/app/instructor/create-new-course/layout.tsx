'use client';

import React from "react";
import { useEffect, useState } from "react"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import BasicInformation from "@/app/instructor/create-new-course/basic-information/page"
import PublishCourse from "@/app/instructor/create-new-course/publish-course/page"
import { useRouter, usePathname } from "next/navigation"

const Layout = () => {
    const tabRoutes = [
        "basic-information",
        "advance-information",
        "curriculum",
        "publish-course"
    ]
    const router = useRouter()
    const pathname = usePathname()
    const [currentTab, setCurrentTab] = useState("basic-information")

    useEffect(() => {
        const path = pathname.split("/")[3];
        if (tabRoutes.includes(path)) {
            setCurrentTab(path)
        }
    }, [pathname])

    const handleTabChange = (value: string) => {
        setCurrentTab(value)
        router.push(`/instructor/create-new-course/${value}`)
    }


    return (
        <div className="">
            <section className="py-10">
                    <div className="bg-white">
                        <Tabs value={currentTab} onValueChange={handleTabChange}>
                            <TabsList className="w-full grid grid-cols-4 border-b border-gray-100 [&_button]:h-16 [&_button]:justify-start">
                                <TabsTrigger value="basic-information">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.2" d="M3 7.5L12 12.75L21 7.5L12 2.25L3 7.5Z" fill="#6E7485"/>
                                        <path d="M3 16.5L12 21.75L21 16.5" stroke="#6E7485" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M3 12L12 17.25L21 12" stroke="#6E7485" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M3 7.5L12 12.75L21 7.5L12 2.25L3 7.5Z" stroke="#6E7485" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Basic Information
                                </TabsTrigger>
                                <TabsTrigger value="advance-information">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.2" d="M15 3.75C15.488 4.39855 15.7512 5.18842 15.75 6V6.75H8.25V6C8.24877 5.18842 8.51205 4.39855 8.99995 3.75H5.25C5.15151 3.75 5.05398 3.76939 4.96298 3.80708C4.87199 3.84477 4.78931 3.90002 4.71966 3.96966C4.65002 4.03931 4.59477 4.12199 4.55708 4.21298C4.51939 4.30398 4.5 4.40151 4.5 4.5V20.25C4.5 20.3485 4.51939 20.446 4.55708 20.537C4.59477 20.628 4.65002 20.7107 4.71966 20.7803C4.78931 20.85 4.87199 20.9052 4.96298 20.9429C5.05398 20.9806 5.15151 21 5.25 21H18.75C18.8485 21 18.946 20.9806 19.037 20.9429C19.128 20.9052 19.2107 20.85 19.2803 20.7803C19.35 20.7107 19.4052 20.628 19.4429 20.537C19.4806 20.446 19.5 20.3485 19.5 20.25V4.5C19.5 4.40151 19.4806 4.30398 19.4429 4.21298C19.4052 4.12199 19.35 4.03931 19.2803 3.96966C19.2107 3.90002 19.128 3.84477 19.037 3.80708C18.946 3.76939 18.8485 3.75 18.75 3.75H15Z" fill="#6E7485"/>
                                        <path d="M9 14.25H15" stroke="#6E7485" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9 11.25H15" stroke="#6E7485" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M15.0002 3.75H18.75C18.9489 3.75 19.1397 3.82902 19.2803 3.96967C19.421 4.11032 19.5 4.30109 19.5 4.5V20.25C19.5 20.4489 19.421 20.6397 19.2803 20.7803C19.1397 20.921 18.9489 21 18.75 21H5.25C5.05109 21 4.86032 20.921 4.71967 20.7803C4.57902 20.6397 4.5 20.4489 4.5 20.25V4.5C4.5 4.30109 4.57902 4.11032 4.71967 3.96967C4.86032 3.82902 5.05109 3.75 5.25 3.75H8.9998" stroke="#6E7485" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M8.25 6.75V6C8.25 5.00544 8.64509 4.05161 9.34835 3.34835C10.0516 2.64509 11.0054 2.25 12 2.25C12.9946 2.25 13.9484 2.64509 14.6517 3.34835C15.3549 4.05161 15.75 5.00544 15.75 6V6.75H8.25Z" stroke="#6E7485" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Advance Information
                                </TabsTrigger>
                                <TabsTrigger value="teachers">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.2" d="M19.5 4.5H4.5C4.10218 4.5 3.72065 4.65804 3.43934 4.93934C3.15804 5.22065 3 5.60218 3 6V16.5C3 16.8978 3.15804 17.2794 3.43934 17.5607C3.72065 17.842 4.10218 18 4.5 18H19.5C19.8978 18 20.2794 17.842 20.5607 17.5607C20.842 17.2794 21 16.8978 21 16.5V6C21 5.60218 20.842 5.22065 20.5607 4.93934C20.2794 4.65804 19.8978 4.5 19.5 4.5ZM10.5 14.25V8.25L15 11.25L10.5 14.25Z" fill="#6E7485"/>
                                        <path d="M4.5 18L19.5 18C20.3284 18 21 17.3284 21 16.5V6C21 5.17157 20.3284 4.5 19.5 4.5L4.5 4.5C3.67157 4.5 3 5.17157 3 6V16.5C3 17.3284 3.67157 18 4.5 18Z" stroke="#6E7485" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M15 21H9" stroke="#6E7485" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M15 11.25L10.5 8.25V14.25L15 11.25Z" stroke="#6E7485" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Curriculum
                                </TabsTrigger>
                                <TabsTrigger value="publish-course">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.2" d="M12 3C10.22 3 8.47991 3.52784 6.99987 4.51677C5.51983 5.50571 4.36628 6.91131 3.68509 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558C3.5202 15.5016 4.37737 17.1053 5.63604 18.364C6.89472 19.6226 8.49836 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4442 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C20.4722 15.5201 21 13.78 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46391 19.1997 6.47176 18.364 5.63603C17.5282 4.8003 16.5361 4.13737 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3ZM10.5 15V9L15 12L10.5 15Z" fill="#6E7485"/>
                                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#6E7485" strokeWidth="1.5" strokeMiterlimit="10"/>
                                        <path d="M15 12L10.5 9V15L15 12Z" stroke="#6E7485" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Publish Course
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="basic-information">
                                <BasicInformation />
                            </TabsContent>
                            <TabsContent value="advance-information">
                                <div>ad</div>
                            </TabsContent>
                            <TabsContent value="publish-course">
                                <PublishCourse />
                            </TabsContent>
                        </Tabs>
                    </div>
            </section>
        </div>
    );
};

export default Layout;
