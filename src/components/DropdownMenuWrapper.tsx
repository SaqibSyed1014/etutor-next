"use client";

import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu.tsx";
import {CaretDown, CaretDownSmall} from "@/assets/icons/common-icons.tsx";


type Option = {
    label: string;
    value: string;
};

interface DropdownMenuWrapperProps {
    options: Option[];
    selected: string;
    defaultPlaceholder?: string;
    onChange: (value: string) => void;
    triggerClasses?: string;
    contentContentClasses?: string;
    alignment?: "start" | "center" | "end";
    size?: "lg" | "md" | "sm";
    children?: React.ReactNode; // custom trigger content if needed
    activeOptionClass?: string
}

export default function DropdownMenuWrapper(
    {
        options,
        selected,
        onChange,
        children,
        alignment,
        size,
        triggerClasses,
        defaultPlaceholder,
        activeOptionClass,
        contentContentClasses,
    }: DropdownMenuWrapperProps) {
        const [open, setOpen] = useState(false);

        return (
            <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
                <DropdownMenuTrigger asChild>
                    <div className={`cursor-pointer flex items-center ${triggerClasses} ${size === 'sm' && 'text-sm'}`}>
                        {children || (
                            <>
                                <span>{options.find((item) => item.value === selected)?.label ?? defaultPlaceholder }</span>
                                {size === 'sm' ? <CaretDownSmall /> : <CaretDown/>}
                            </>
                        )}
                    </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent align={alignment ?? 'start'} className={`border border-gray-800 text-white ${contentContentClasses}`}>
                    {options.map((item) => (
                        <DropdownMenuItem
                            key={item.value}
                            onSelect={() => {
                                onChange(item.value);
                                setOpen(false);
                            }}
                            className={item.value === selected ? `bg-gray-700 ${activeOptionClass}` : ''}
                        >
                            {item.label}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        );
}
