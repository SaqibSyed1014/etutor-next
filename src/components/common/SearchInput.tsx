'use client';

import { Input } from "@/components/ui/input";
import {MagnifyingGlass} from "@/assets/icons/common-icons";
import React from "react";

interface SearchBarProps {
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
     placeholder = "What do you want to learn...",
     value,
     onChange,
     className = "",
 }) => {
    return (
        <div className="relative block">
            <Input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                appendIcon={<div className="text-black"><MagnifyingGlass/></div>}
                className={`pr-4 py-2 w-full min-w-[424px] placeholder:text-gray-500 focus:ring-primary-500 focus:border-etutor-primary outline-0 ${className}`}
            />
        </div>
    );
};

export default SearchBar;
