"use client";

import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {CaretDown, CaretDownSmall} from "@/assets/icons/common-icons";

type Variant = "default" | "dark";

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
    children?: React.ReactNode;
    activeOptionClass?: string;
    variant?: Variant;
}

export default function DropdownMenuWrapper({
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
                                                variant = "default",
                                            }: DropdownMenuWrapperProps) {
    const [open, setOpen] = useState(false);

    // Define variant-based classes
    const variantTriggerClasses = {
        default: "text-sm text-gray-700 flex items-center gap-1.5 border border-gray-100 justify-between min-w-[200px] px-[18px] py-3",
        dark: "text-gray-400 flex items-center gap-1.5"
    };

    const variantContentClasses = {
        default: "min-w-[200px] bg-white !text-gray-900",
        dark: "bg-gray-900 !border-gray-800"
    };

    const variantOptionClasses = {
        default: "hover:bg-gray-200",
        dark: "hover:bg-gray-800"
    };

    const variantActiveClasses = {
        default: "bg-gray-200",
        dark: "bg-gray-300 text-gray-900"
    };

    return (
        <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
            <DropdownMenuTrigger asChild>
                <div
                    className={`${variantTriggerClasses[variant]} ${triggerClasses ?? ""} ${
                        size === "sm" ? "text-sm" : ""
                    } cursor-pointer`}
                >
                    {children || (
                        <>
                            <span>{options.find((item) => item.value === selected)?.label ?? defaultPlaceholder}</span>
                            {size === "sm" ? <CaretDownSmall /> : <CaretDown />}
                        </>
                    )}
                </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align={alignment ?? "start"}
                className={`${variantContentClasses[variant]} ${contentContentClasses ?? ""} w-full text-white max-h-[400px] overflow-auto shadow-none`}
            >
                {options.map((item) => (
                    <DropdownMenuItem
                        key={item.value}
                        onSelect={() => {
                            onChange(item.value);
                            setOpen(false);
                        }}
                        className={item.value === selected ? `${variantActiveClasses[variant] ?? ""}` : variantOptionClasses[variant]}
                    >
                        {item.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
