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
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

const basicInfoSchema = z.object({
    title: z.string().min(2, 'Title must be at least 2 characters'),
    subtitle: z.string().min(2, 'Subtitle must be at least 2 characters'),
    category: z.string().min(2, 'Category is required'),
    subCategory: z.string().min(2, 'Sub-category is required'),
    topic: z.string().min(2, 'Topic must be at least 2 characters'),
    language: z.string().min(2, 'Language is required'),
    subLanguage: z.string().optional(),
    level: z.string().min(2, 'Level is required'),
    duration: z.string().min(2, 'Duration is required'),
});

type BasicInfoValues = z.infer<typeof basicInfoSchema>;

const Page = ({ stepCompleted }: { stepCompleted: () => void; }) => {
    const { toast } = useToast();
    const router = useRouter();

    const basicInfoForm = useForm<BasicInfoValues>({
        resolver: zodResolver(basicInfoSchema),
        defaultValues: {
            title: '',
            subtitle: '',
            category: '',
            subCategory: '',
            topic: '',
            language: '',
            subLanguage: '',
            level: '',
            duration: ''
        },
    });

    const onFormSubmit = (data :BasicInfoValues) => {
        console.log('data', data)
        stepCompleted();
        router.push('/instructor/create-new-course/advance-information')
        toast({
            title: "Changes saved",
            description: "Your account settings have been updated successfully.",
        });
    };

    return (
        <div>
            <MultiStepFormHeader title="Basic Information" submitForm={basicInfoForm.handleSubmit(onFormSubmit)} />
            <MultiStepFormBody>
                <Form {...basicInfoForm}>
                    <form onSubmit={basicInfoForm.handleSubmit(onFormSubmit)} className="tab-content-spacing space-y-6">
                        <FormField
                            control={basicInfoForm.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="You course title" charLimit={80} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={basicInfoForm.control}
                            name="subtitle"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Subtitle</FormLabel>
                                    <FormControl>
                                        <Input placeholder="You course subtittle" charLimit={120} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="grid md:grid-cols-2 gap-6">
                            <FormField
                                control={basicInfoForm.control}
                                name="category"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Course Category</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange} value={field.value} {...field} >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select..."/>
                                                </SelectTrigger>

                                                <SelectContent>
                                                    {Object.entries(courseCategories).map(([key, category]) => (
                                                        <SelectItem key={category.title} value={category.title}>{category.title}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={basicInfoForm.control}
                                name="subCategory"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Course Sub-Category</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange} value={field.value} {...field} >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select..."/>
                                                </SelectTrigger>

                                                <SelectContent>
                                                    {Object.entries(courseCategories).map(([key, category]) => (
                                                        <SelectItem key={category.title} value={category.title}>{category.title}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={basicInfoForm.control}
                            name="topic"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Course Topic</FormLabel>
                                    <FormControl>
                                        <Input placeholder="What is primarily taught in your course?" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <FormField
                                control={basicInfoForm.control}
                                name="language"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Course Language</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange} value={field.value} {...field} >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select..."/>
                                                </SelectTrigger>

                                                <SelectContent>
                                                    {courseLanguage.map((item) => (
                                                        <SelectItem key={item.value} value={item.value}>{item.name}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={basicInfoForm.control}
                                name="subLanguage"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Subtitle Language (Optional)</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange} value={field.value} {...field} >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select..."/>
                                                </SelectTrigger>

                                                <SelectContent>
                                                    {courseLanguage.map((item) => (
                                                        <SelectItem key={item.value} value={item.value}>{item.name}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={basicInfoForm.control}
                                name="level"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Course Level</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange} value={field.value} {...field} >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select..."/>
                                                </SelectTrigger>

                                                <SelectContent>
                                                    {courseLevels.map(item => (
                                                        <SelectItem key={item.id} value={item.id}>{item.name}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={basicInfoForm.control}
                                name="duration"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Course durations</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange} value={field.value} {...field} >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Course duration"/>
                                                </SelectTrigger>

                                                <SelectContent>
                                                    {durations.map(item => (
                                                        <SelectItem key={item.id} value={item.id}>{item.name}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>

                    </form>
                </Form>
            </MultiStepFormBody>

            <MultiFormStepFooter formStepIndex={0} submitForm={basicInfoForm.handleSubmit(onFormSubmit)} />
        </div>
    );
};

export default Page;
