"use client";

import React from 'react';
import Dashboard from "@/app/instructor/dashboard/page";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter();

    useEffect(() => {
        router.replace('/instructor/dashboard');
    }, [router]);

    return (
        <Dashboard />
    );
};

export default Page;
