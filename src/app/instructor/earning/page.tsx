'use client';

import React from 'react';
import {earningStatsData} from "@/lib/@fake-db/dashboard";
import AnalyticsCard from "@/app/instructor/components/AnalyticsCard";
import RevenueChart from "@/app/instructor/components/RevenueChart";
import WithdrawMoney from "@/app/instructor/components/WithdrawMoney";
import WithdrawHistory from "@/app/instructor/components/WithdrawHistory";
import InstructorCard from "@/app/instructor/components/InstructorCards";

const Page = () => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {earningStatsData.map((stat, index) => (
                    <AnalyticsCard key={index} {...stat} />
                ))}
            </div>

            <div className="flex items-stretch gap-6">
                {/* Revenue Chart */}
                <div className="grow">
                    <RevenueChart cardTitle="Statistics" chartColor="#23BD33" />
                </div>
                <InstructorCard />
            </div>
            <div className="flex items-stretch gap-6">
                <WithdrawMoney />
                <WithdrawHistory />
            </div>
        </div>
    );
};

export default Page;
