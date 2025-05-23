'use client';

import React from "react";
import { useEffect, useState } from "react"
import DefaultLayout from "@/components/layouts/DefaultLayout";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "@/assets/icons/common-icons";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import StudentDashboard from "./dashboard/page"
import StudentCourses from "./courses/page"
import StudentTeachers from "./teachers/page"
import WishList from "./wishlist/page"
import { useRouter, usePathname } from "next/navigation"

export default function StudentLayout({
                                          children,
                                      }: {
    children: React.ReactNode;
}) {

    const tabRoutes = [
        "dashboard",
        "courses",
        "teachers",
        "message",
        "wishlist",
        "purchaseHistory",
        "settings",
    ]
     const router = useRouter()
        const pathname = usePathname()
        const [currentTab, setCurrentTab] = useState("dashboard")

        useEffect(() => {
            const path = pathname.split("/")[2] // gets 'dashboard' from '/student/dashboard'
            if (tabRoutes.includes(path)) {
                setCurrentTab(path)
            }
        }, [pathname])

        const handleTabChange = (value: string) => {
            setCurrentTab(value)
            router.push(`/student/${value}`)
        }


    return (
        <div className="min-h-screen">
            <DefaultLayout>
                <section className="py-20 relative">
                    <div className="bg-primary-100 h-[280px] absolute top-0 w-full"></div>
                    <div className="container relative z-10">
                        <div className="bg-white">
                            <div className=" p-10 border-b border-primary-100">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-6 items-center">
                                        <Avatar className="size-[110px]">
                                            <AvatarImage src="/images/people/student-1.jpg"></AvatarImage>
                                        </Avatar>
                                        <div className="space-y-3">
                                            <h4>Kevin Gilbert</h4>
                                            <p className="text-base text-gray-600">Web Designer & Best-Selling
                                                Instructor</p>
                                        </div>
                                    </div>
                                    <Button variant="outline">
                                        Become Instructor
                                        <ArrowRight/>
                                    </Button>
                                </div>
                            </div>

                            <Tabs value={currentTab} onValueChange={handleTabChange} className="mt-4">
                                <TabsList className="w-full grid grid-cols-7 border-b border-primary-100">
                                    <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                                    <TabsTrigger value="courses">Courses</TabsTrigger>
                                    <TabsTrigger value="teachers">Teachers</TabsTrigger>
                                    <TabsTrigger value="message">Message</TabsTrigger>
                                    <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
                                    <TabsTrigger value="purchaseHistory">Purchase History</TabsTrigger>
                                    <TabsTrigger value="settings">Settings</TabsTrigger>
                                </TabsList>
                                <TabsContent value="dashboard">
                                    <StudentDashboard />
                                </TabsContent>
                                <TabsContent value="courses">
                                    <StudentCourses />
                                </TabsContent>
                                <TabsContent value="teachers">
                                    <StudentTeachers />
                                </TabsContent>
                                <TabsContent value="wishlist">
                                    <WishList />
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </section>
            </DefaultLayout>
        </div>
    );
}
