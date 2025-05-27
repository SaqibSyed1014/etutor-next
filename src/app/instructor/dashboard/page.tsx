'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import AnalyticsCard from '@/app/instructor/components/AnalyticsCard';
import RevenueChart from '@/app/instructor/components/RevenueChart';
import ProfileViewChart from '@/app/instructor/components/ProfileViewChart';
import CourseRatingCard from '@/app/instructor/components/CourseRatingCard';
import CourseOverviewChart from '@/app/instructor/components/CourseOverviewChart';
import RecentActivityList from '@/app/instructor/components/RecentActivityList';
import {statsData, additionalStats} from "@/lib/@fake-db/dashboard";
import {Button} from "@/components/ui/button";
import {ArrowDown} from "@/assets/icons/common-icons";

const Dashboard = () => {


    return (
        <div className="container mx-auto px-4 py-8 space-y-6">
            <h1 className="text-3xl font-bold mb-6">Dashboard Analytics</h1>

            {/* First Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statsData.map((stat, index) => (
                    <AnalyticsCard key={index} {...stat} />
                ))}
            </div>

            {/* Second Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {additionalStats.map((stat, index) => (
                    <AnalyticsCard key={index} {...stat} />
                ))}
            </div>

            {/* Profile Section */}
            <Card className="bg-secondary-900 text-white p-10">
                <div className="flex items-center gap-7">
                    <div className="flex items-center gap-6">
                        <img
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
                            alt="Vako Shvili"
                            className="size-20 rounded-full"
                        />
                        <div className="space-y-1">
                            <h3 className="text-xl text-white">Vako Shvili</h3>
                            <p className="text-white">vako.shvili@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex gap-6 items-center justify-center text-center flex-1">
                        <p className="text-sm text-white opacity-60 shrink-0">1/4 Steps</p>
                        <div className="max-w-[312px] w-full shrink-0 bg-white/20 h-4">
                            <div className="bg-success-500 h-full w-1/4"></div>
                        </div>
                        <p className="text-lg text-white font-semibold shrink-0">25% Completed</p>
                    </div>
                    <div className="flex items-center gap-4">

                        <div className="flex gap-3">
                            <Button>
                                Edit Biography
                            </Button>
                            <div className="size-12 text-white bg-white/5 grid place-items-center cursor-pointer hover:bg-white/10">
                                <ArrowDown />
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Charts Section */}
            <div className="flex items-stretch gap-6">
                {/* Recent Activity */}
                <div className="w-full max-w-[424px] h-[424px]">
                    <RecentActivityList />
                </div>

                {/* Revenue Chart */}
                <div className="grow h-full">
                    <RevenueChart />
                </div>

                {/* Profile View Chart */}
                <div className="w-full max-w-[312px] h-[424px] shrink-0">
                    <ProfileViewChart />
                </div>
            </div>

            {/* Bottom Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <CourseRatingCard />
                <CourseOverviewChart />
            </div>
        </div>
    );
};

export default Dashboard;
