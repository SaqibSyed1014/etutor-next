'use client';

import React from 'react';
import SearchInput from "@/components/common/SearchInput";
import {Bell} from "@/assets/icons/common-icons";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import { usePathname } from 'next/navigation'

const TopBar = () => {
    const pathname = usePathname()

    const getPageTitle = () => {
        if (pathname === '/instructor/dashboard') return 'Dashboard'
        if (pathname === '/instructor/my-courses') return 'My Courses'
        if (pathname === '/instructor/earning') return 'My Earning'
        if (pathname === '/instructor/chats') return 'Messages (3)'
        if (pathname === '/instructor/settings') return 'Settings'
        return 'Dashboard'
    }

    return (
        <div className="bg-white py-6">
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className="space-y-1">
                        <p className="text-gray-600 font-medium">Good Morning</p>
                        <p className="font-semibold text-xl text-gray-900">
                            {getPageTitle()}
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <SearchInput
                            placeholder="Search"
                            className="min-w-[312px] bg-gray-50 border-0"
                        />
                        <div className="size-12 bg-gray-50 grid place-items-center cursor-pointer">
                            <Bell />
                        </div>
                        <Avatar className="size-12">
                            <AvatarImage src="/images/people/man-1.png"></AvatarImage>
                        </Avatar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
