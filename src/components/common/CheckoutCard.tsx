"use client";

import React, {useState} from 'react';
import {Button} from "@/components/ui/button";
import {useParams} from "next/navigation";
import { coursesData } from "@/lib/@fake-db/courses";
import {useToast} from "@/hooks/use-toast";

const CheckoutCard = () => {
    const params = useParams();
    const { toast } = useToast();
    const id = params?.id;

    const course =
        coursesData.find((c) => c.id === Number(id)) || coursesData[0];

    const [isSubmitting, setIsSubmitting] = useState(false);


    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        toast({
            title: "Gift course submitted!",
            description: "The gift course will be sent to the recipient.",
        });
        setIsSubmitting(false);
    };

    return (
        <div className="w-full max-w-[536px]">
            <div className="border border-gray-200">
                <div className="p-6 flex flex-col gap-4">
                    <h2 className="text-lg font-medium">Course</h2>

                    <div className="flex gap-3 text-sm">
                        <div className="w-[100px] h-[75px] bg-gray-100 overflow-hidden shrink-0">
                            <img
                                src={course.image}
                                alt="Course thumbnail"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <div className="text-xs text-gray-500">Course
                                by: {course.instructor.name}</div>
                            <div className="line-clamp-1">{course.title}</div>
                            <div className="text-[#FF6B38] font-medium mt-1">${course.price}</div>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="p-6 flex flex-col gap-4">
                    <h3 className="text-lg font-medium">Order Summary</h3>

                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-medium text-gray-900">$61.97 USD</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Coupon Discount</span>
                            <span className="font-medium text-gray-900">8%</span>
                        </div>
                    </div>

                    <hr/>

                    <div className="flex justify-between text-base mb-2">
                        <span>Total:</span>
                        <span className="text-2xl font-bold">$75.00 USD</span>
                    </div>

                    <Button
                        className="w-full bg-[#FF6B38] hover:bg-[#E85A2A]"
                        onClick={onSubmit}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Processing..." : "Complete Payment"}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutCard;
