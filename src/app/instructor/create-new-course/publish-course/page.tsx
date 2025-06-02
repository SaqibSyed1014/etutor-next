'use client';

import React from 'react';
import MultiStepFormHeader from "@/app/instructor/create-new-course/components/MultiStepFormHeader";
import MultiStepFormBody from "@/app/instructor/create-new-course/components/MultiStepFormBody";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {useForm} from "react-hook-form";
import * as z from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import { useToast } from '@/hooks/use-toast';
import MultiFormStepFooter from "@/app/instructor/create-new-course/components/MultiFormStepFooter";
import {Select, SelectItem, SelectTrigger, SelectContent, SelectValue} from "@/components/ui/select";
import {courseCategories} from "@/lib/@fake-db/courseCategories";
import {courseLanguage, courseLevels, durations} from "@/lib/@fake-db/courses";
import SearchInput from "@/components/common/SearchInput";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {X} from "lucide-react";

const messageFormSchema = z.object({
    message: z.string().min(2, 'Title must be at least 2 characters'),
    congratsMessage: z.string().min(2, 'Subtitle must be at least 2 characters'),
});

type MessageValues = z.infer<typeof messageFormSchema>;

const Page = () => {
    const { toast } = useToast();

    const messageForm = useForm<MessageValues>({
        resolver: zodResolver(messageFormSchema),
        defaultValues: {
            message: '',
            congratsMessage: '',
        },
    });

    const onFormSubmit = (data) => {
        console.log('data', data)
        toast({
            title: "Changes saved",
            description: "Your account settings have been updated successfully.",
        });
    };

    return (
        <div>
            <MultiStepFormHeader title="Publish Course" />
            <MultiStepFormBody>
                <Form {...messageForm}>
                    <form onSubmit={messageForm.handleSubmit(onFormSubmit)} className="space-y-6 pb-24">
                        <div className="space-y-6">
                            <label className="font-medium text-lg !pb-0">Message</label>
                            <div className="grid md:grid-cols-2 gap-6">
                                <FormField
                                    control={messageForm.control}
                                    name="message"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Welcome Message</FormLabel>
                                            <FormControl>
                                                <textarea
                                                    className="w-full resize-none"
                                                    rows={4}
                                                    placeholder="Enter course starting message here..." {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={messageForm.control}
                                    name="congratsMessage"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Congratulations Message</FormLabel>
                                            <FormControl>
                                            <textarea
                                                className="w-full resize-none"
                                                rows={4}
                                                placeholder="Enter your course completed message here..." {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <label className="font-medium text-lg !pb-0">Add Instructor (02)</label>
                            <SearchInput />
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-gray-50 p-4 flex items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage src="/images/people/man-1.png"></AvatarImage>
                                    </Avatar>
                                    <div className="space-y-1.5">
                                        <p className="font-semibold text-gray-900">Username</p>
                                        <p className="text-gray-600">UI/UX Designer</p>
                                    </div>

                                    <X className="text-gray-700 size-5 ml-auto cursor-pointer" />
                                </div>

                                <div className="bg-gray-50 p-4 flex items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage src="/images/people/man-4.png"></AvatarImage>
                                    </Avatar>
                                    <div className="space-y-1.5">
                                        <p className="font-semibold text-gray-900">Username</p>
                                        <p className="text-gray-600">UI/UX Designer</p>
                                    </div>

                                    <X className="text-gray-700 size-5 ml-auto cursor-pointer" />
                                </div>
                            </div>
                        </div>

                    </form>
                </Form>
            </MultiStepFormBody>

            <MultiFormStepFooter formStepIndex={3} submitForm={onFormSubmit} />
        </div>
    );
};

export default Page;
