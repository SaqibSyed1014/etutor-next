'use client';

import React, {useState} from "react";
import {DropdownOption} from "../../types";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {CaretDown, CaretDownSmall} from "@/assets/icons/common-icons";

type Variant = "default" | "dark" | "white" | "primary";

interface DropdownMenuWrapperProps {
    options: DropdownOption[];
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
    customTrigger?: React.ReactNode;
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
    customTrigger,
}: DropdownMenuWrapperProps) {
    const [open, setOpen] = useState(false);

    const variantTriggerClasses = {
        default: "text-sm text-gray-700 border border-gray-100",
        dark: "text-gray-400 flex items-center gap-1.5",
        white: "text-gray-700 bg-white border-0"
    };

    const variantContentClasses = {
        default: "min-w-[200px] bg-white !text-gray-900",
        dark: "bg-gray-900 !border-gray-800",
        white: "bg-white",
        primary: "border-gray-200 bg-white py-3 shadow-[0_6px_16px_0_#0000000F]"
    };

    const variantOptionClasses = {
        default: "hover:bg-gray-200",
        dark: "hover:bg-gray-800",
        white: "text-gray-700 hover:bg-gray-100",
        primary: "text-gray-700 hover:bg-primary-500 hover:text-white"
    };

    const variantActiveClasses = {
        default: "bg-gray-200",
        dark: "bg-gray-300 text-gray-900",
        white: "bg-gray-700 text-white"
    };

    return (
        <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
            <DropdownMenuTrigger asChild>
                {customTrigger ? (
                    customTrigger // ✅ Use custom trigger if provided
                ) : (
                    <div
                        className={`flex items-center gap-1.5 justify-between min-w-[200px] px-[18px] py-3 ${variantTriggerClasses[variant]} ${triggerClasses ?? ""} ${size === "sm" ? "text-sm" : ""} cursor-pointer`}
                    >
                        {children || (
                            <>
                                <span>{options.find((item) => item.value === selected)?.label ?? defaultPlaceholder}</span>
                                {size === "sm" ? <CaretDownSmall /> : <CaretDown />}
                            </>
                        )}
                    </div>
                )}
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align={alignment ?? "start"}
                className={`${variantContentClasses[variant]} ${contentContentClasses} w-full text-white max-h-[400px] overflow-auto shadow-none`}
            >
                {options.map((item) => (
                    <DropdownMenuItem
                        key={item.value}
                        onSelect={() => {
                            onChange(item.value);
                            setOpen(false);
                        }}
                        className={
                            item.value === selected
                                ? `${variantActiveClasses[variant] ?? ""}`
                                : variantOptionClasses[variant]
                        }
                    >
                        {item.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
