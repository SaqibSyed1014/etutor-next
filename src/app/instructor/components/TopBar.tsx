import React from 'react';
import Link from "next/link";
import SearchInput from "@/components/common/SearchInput";
import {Bell} from "@/assets/icons/common-icons";
import {Avatar, AvatarImage} from "@/components/ui/avatar";

const TopBar = () => {
    return (
        <div className="bg-white py-6">
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className="space-y-1">
                        <p className="text-gray-600 font-medium">Good Morning</p>
                        <p className="font-semibold text-xl text-gray-900">Dashboard</p>
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
