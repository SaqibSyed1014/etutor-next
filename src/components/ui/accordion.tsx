import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import {CaretDownLarge} from "@/assets/icons/common-icons";

import { cn } from "@/lib/utils"

type AccordionSingleProps = {
    type?: "single";
    value?: string;
    onValueChange?: (value: string) => void;
} & Omit<AccordionPrimitive.AccordionSingleProps, "type" | "value" | "onValueChange"> & {
    children: React.ReactNode;
};

type AccordionMultipleProps = {
    type: "multiple";
    value?: string[];
    onValueChange?: (value: string[]) => void;
} & Omit<AccordionPrimitive.AccordionMultipleProps, "type" | "value" | "onValueChange"> & {
    children: React.ReactNode;
};

type AccordionProps = AccordionSingleProps | AccordionMultipleProps;

function Accordion(props: AccordionSingleProps): JSX.Element;
function Accordion(props: AccordionMultipleProps): JSX.Element;
function Accordion(props: AccordionProps) {
    const { children, type = "single", value, onValueChange, ...rest } = props;

    return (
        <AccordionPrimitive.Root
            type={type}
            value={value as any}
            onValueChange={onValueChange as any}
            {...rest}
        >
            {children}
        </AccordionPrimitive.Root>
    );
}

const AccordionItem = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn("border border-gray-100", className)}
        {...props}
    />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & { icon?: React.ReactNode }
>(({ className, children,  icon = <CaretDownLarge />, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
            ref={ref}
            className={cn(
                "flex flex-1 items-center border-b border-gray-100 justify-between py-6 px-5 text-lg font-medium transition-all [&[data-state=closed]]:border-none [&[data-state=closed]>svg]:rotate-180 [&[data-state=open]>svg]:rotate-0",
                className
            )}
            {...props}
        >
            {children}
            {icon}
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className="overflow-hidden px-5 py-[18px] text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        {...props}
    >
        <div className={cn("", className)}>{children}</div>
    </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
