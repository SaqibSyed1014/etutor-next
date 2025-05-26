'use client';

import React, { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {faqItems} from "@/lib/@fake-db/collections"
import {Breadcrumbs} from "@/components/Breadcrumbs";
import {ArrowUp} from "@/assets/icons/common-icons";
import DropdownMenuWrapper from "@/components/DropdownMenuWrapper";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import {DropdownOption} from "../../../types";

const Page = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("nulla-tempor-odio");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    // FAQ Data
    const faqCategories = [
        { id: "nulla-tempor-odio", title: "Nulla tempor odio ut feugiat" },
        { id: "donec-malesuada", title: "Donec malesuada" },
        { id: "quisque", title: "Quisque" },
        { id: "tincidunt", title: "Tincidunt, in accumsan" },
        { id: "ut-sed", title: "Ut sed orci" },
        { id: "nullam-non", title: "Nullam non ante" },
        { id: "phasellus", title: "Phasellus" },
        { id: "etiam-eu", title: "Etiam eu libero elementum" },
    ];

    // Filter FAQ items by selected category
    const filteredFAQs = faqItems.filter(faq => faq.category === selectedCategory);

    const handleSubmitQuestion = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        alert(`Question submitted! Subject: ${subject}, Message: ${message}`);
        setSubject("");
        setMessage("");
    };

    const [activeFaq, setActiveFaq] = React.useState<string | undefined>(undefined);

    const [selectedOption, setSelectedOption] = useState('students');
    const dropdownOptions :DropdownOption[] = [
        {
            value: 'students',
            label: 'Students'
        },
        {
            value: 'instructors',
            label: 'Instructors'
        }
    ]

    return (
        <div className="">
            <DefaultLayout>
            <Breadcrumbs/>

            <section className="py-20">
                <div className="container">
                    <div className="section-layout">
                        <div className="flex justify-between items-center">
                            <h1 className="section-heading !text-left">Frequently asked questions</h1>

                            <DropdownMenuWrapper
                                options={dropdownOptions}
                                selected={selectedOption}
                                onChange={setSelectedOption}
                                defaultPlaceholder="Browse"
                                triggerClasses="text-sm text-gray-700 flex items-center gap-1.5 border border-gray-100 justify-between min-w-[200px] px-[18px] py-3"
                                contentContentClasses="min-w-[200px] bg-white border border-gray-100 !text-gray-900"
                                activeOptionClass="bg-gray-200"
                            />
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Left sidebar - Categories */}
                            <div className="w-full lg:w-1/4">
                                <div className="border border-gray-100 py-2">
                                    {faqCategories.map((category) => (
                                        <button
                                            key={category.id}
                                            onClick={() => {
                                                setSelectedCategory(category.id);
                                            }}
                                            className={`block w-full border-b border-gray-100 first:border-t-0 last:border-b-0 font-medium text-sm text-left px-4 py-3 rounded-md transition-colors ${
                                                selectedCategory === category.id
                                                    ? "bg-primary-500 text-white"
                                                    : "hover:bg-gray-100"
                                            }`}
                                        >
                                            {category.title}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Middle section - FAQ Accordion */}
                            <div className="w-full lg:w-2/4">
                                <Accordion type="single" onValueChange={(e) => setActiveFaq(e)} collapsible
                                           className="w-full flex flex-col gap-6">
                                    {filteredFAQs.map((faq) => (
                                        <AccordionItem key={faq.id} value={faq.id}
                                                       className={`border-b ${activeFaq === faq.id ? 'shadow-[0_12px_32px_0_#1D20261A]' : ''}`}>
                                            <AccordionTrigger icon={<ArrowUp/>}
                                                              className={`text-left text-base py-5 px-6 ${activeFaq === faq.id ? 'bg-gray-900 text-white' : ''}`}>
                                                {faq.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-gray-700 text-sm">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>

                            {/* Right section - Ask Question Form */}
                            <div className="w-full lg:w-1/4">
                                <Card className="border-0">
                                    <CardContent className="p-5 bg-gray-50">
                                        <h3 className="font-medium text-lg mb-2">Don't find your answer?</h3>
                                        <p className="text-gray-600 mb-4">Don't worry, write your question here and our
                                            support team will help you.</p>

                                        <form onSubmit={handleSubmitQuestion} className="space-y-4 mt-6">
                                            <div>
                                                <Input
                                                    id="subject"
                                                    value={subject}
                                                    onChange={(e) => setSubject(e.target.value)}
                                                    className="w-full border-transparent"
                                                    placeholder="Subject"
                                                />
                                            </div>

                                            <div>
                                                <textarea
                                                    id="message"
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                    className="w-full rounded-md border-transparent p-3 min-h-[100px] resize-none"
                                                    placeholder="Message"
                                                />
                                            </div>

                                            <Button type="submit">
                                                Submit Question
                                            </Button>
                                        </form>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </DefaultLayout></div>
    )
}

export default Page;
