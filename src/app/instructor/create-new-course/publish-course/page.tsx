'use client';

import React, {useState, useRef, useEffect} from 'react';
import MultiStepFormHeader from "@/app/instructor/create-new-course/components/MultiStepFormHeader";
import MultiStepFormBody from "@/app/instructor/create-new-course/components/MultiStepFormBody";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import * as z from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import { useToast } from '@/hooks/use-toast';
import MultiFormStepFooter from "@/app/instructor/create-new-course/components/MultiFormStepFooter";
import SearchInput from "@/components/common/SearchInput";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {X} from "lucide-react";
import {useStepContext} from "@/context/CreateCourseContext";
import {Instructor, instructorsData} from "@/lib/@fake-db/instructors";

const messageFormSchema = z.object({
    message: z.string().min(2, 'Title must be at least 2 characters'),
    congratsMessage: z.string().min(2, 'Subtitle must be at least 2 characters'),
});

type MessageValues = z.infer<typeof messageFormSchema>;

const Page = ({ enablePreview }: { enablePreview: boolean }) => {
    const { toast } = useToast();
    const { setStepComplete } = useStepContext();

    const messageForm = useForm<MessageValues>({
        resolver: zodResolver(messageFormSchema),
        defaultValues: {
            message: '',
            congratsMessage: '',
        },
    });

    const [searchQuery, setSearchQuery] = useState<string>("");
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [selectedInstructors, setSelectedInstructors] = useState<Instructor[]>([]);
    const containerRef = useRef(null);

    const handleSelectInstructor = (instructor :Instructor) => {
        if (selectedInstructors.find((i) => i.id === instructor.id)) return
        if (selectedInstructors.length >= 3) return
        setSelectedInstructors([...selectedInstructors, instructor])
        setSearchQuery("")
        setDropdownOpen(false)
    }

    const handleRemoveInstructor = (id :number) => {
        setSelectedInstructors(selectedInstructors.filter((i) => i.id !== id))
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setDropdownOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const onFormSubmit = (data :MessageValues) => {
        setStepComplete('step4');
        toast({
            title: "Changes saved",
            description: "Your account settings have been updated successfully.",
        });
    };

    return (
        <div ref={containerRef}>
            <MultiStepFormHeader title="Publish Course" submitForm={messageForm.handleSubmit(onFormSubmit)} enablePreviewBtn={enablePreview} />
            <MultiStepFormBody>
                <Form {...messageForm}>
                    <form onSubmit={messageForm.handleSubmit(onFormSubmit)} className="space-y-6 tab-content-spacing !pb-28">
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
                            <div className="relative">
                                <SearchInput
                                    placeholder="Search by username"
                                    value={searchQuery}
                                    onChange={(e) => {
                                        setSearchQuery(e.target.value)
                                        setDropdownOpen(true)
                                    }}
                                />

                                {dropdownOpen && searchQuery && (
                                    <div className="bg-white w-full absolute top-full max-h-[325px] overflow-auto z-10 py-4 shadow">
                                        {instructorsData
                                            .filter((i) => i.name.toLowerCase().includes(searchQuery.toLowerCase()))
                                            .map((instructor) => {
                                                const isSelected = selectedInstructors.find((i) => i.id === instructor.id)
                                                return (
                                                    <div
                                                        key={instructor.id}
                                                        onClick={() => handleSelectInstructor(instructor)}
                                                        className={`flex items-center gap-4 group py-2 px-3 cursor-pointer ${
                                                            isSelected ? "bg-primary-100 pointer-events-none" : "hover:bg-primary-500"
                                                        }`}
                                                    >
                                                        <Avatar className="size-10">
                                                            <AvatarImage src={instructor.avatar} />
                                                        </Avatar>
                                                        <p className={`text-lg group-hover:text-white ${isSelected ? "text-primary-600" : "text-gray-900"}`}>
                                                            {instructor.name}
                                                        </p>
                                                    </div>
                                                )
                                            })}
                                        {!instructorsData.filter((i) => i.name.toLowerCase().includes(searchQuery.toLowerCase())).length &&
                                            <p className="text-center text-gray-900">No instructor found with this username</p>}
                                    </div>
                                )}
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mt-4">
                                {selectedInstructors.map((instructor) => (
                                    <div
                                        key={instructor.id}
                                        className="bg-gray-50 p-4 flex items-center gap-3"
                                    >
                                        <Avatar className="size-12">
                                            <AvatarImage src={instructor.avatar} />
                                        </Avatar>
                                        <div className="space-y-1.5">
                                            <p className="font-semibold text-gray-900">{instructor.name}</p>
                                            <p className="text-gray-600">{instructor.role || "Instructor"}</p>
                                        </div>

                                        <X
                                            className="text-gray-700 size-5 ml-auto cursor-pointer"
                                            onClick={() => handleRemoveInstructor(instructor.id)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </form>
                </Form>
            </MultiStepFormBody>

            <MultiFormStepFooter formStepIndex={3} submitForm={messageForm.handleSubmit(onFormSubmit)} />
        </div>
    );
};

export default Page;
