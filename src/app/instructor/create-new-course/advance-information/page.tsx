'use client';

import React, { useState } from 'react';
import MultiStepFormHeader from "@/app/instructor/create-new-course/components/MultiStepFormHeader";
import MultiFormStepFooter from "@/app/instructor/create-new-course/components/MultiFormStepFooter";
import MultiStepFormBody from "@/app/instructor/create-new-course/components/MultiStepFormBody";
import { Button } from "@/components/ui/button";
import DynamicSection from "@/components/common/DynamicSection";
import RichTextEditor from "@/components/common/RichTextEditor";
import {X} from "lucide-react";
import {UploadSimple} from "@/assets/icons/common-icons";
import {useRouter} from "next/navigation";
import {useStepContext} from "@/context/CreateCourseContext";

interface SectionItem {
    id: string;
    text: string;
}

const Page = ({ enablePreview }: { enablePreview: boolean }) => {
    const router = useRouter();
    const { setStepComplete, setCurrentTab } = useStepContext();

    const [thumbnail, setThumbnail] = useState<string>('');
    const [trailer, setTrailer] = useState<string>('');
    const [description, setDescription] = useState('');
    const [teachings, setTeachings] = useState<SectionItem[]>([
        { id: '1', text: '' },
        { id: '2', text: '' },
        { id: '3', text: '' },
        { id: '4', text: '' }
    ]);
    const [targetAudience, setTargetAudience] = useState<SectionItem[]>([
        { id: '1', text: '' },
        { id: '2', text: '' },
        { id: '3', text: '' },
        { id: '4', text: '' }
    ]);
    const [requirements, setRequirements] = useState<SectionItem[]>([
        { id: '1', text: '' },
        { id: '2', text: '' },
    ]);

    const handleThumbnailUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setThumbnail(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleTrailerUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const videoUrl = URL.createObjectURL(file);
            setTrailer(videoUrl); // can be used as <video src={thumbnail} />
        }
    };

    function saveForm() {
        setStepComplete('step2');
        setCurrentTab('curriculum');
        router.push('/instructor/create-new-course/curriculum')
    }
    return (
        <div>
            <MultiStepFormHeader title="Advance Information" formStepIndex={1} submitForm={saveForm} enablePreviewBtn={enablePreview} />
            <MultiStepFormBody>
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 tab-content-spacing">
                        {/* Course Thumbnail */}
                        <div className="space-y-4">
                            <label className="font-medium text-lg">Course Thumbnail</label>
                            <div className="space-y-4">
                                <div className="flex gap-6">
                                    <div
                                        className="w-[228px] h-[160px] relative shrink-0 bg-gray-50 flex items-center justify-center">
                                        {thumbnail.length ?
                                            <img src={thumbnail} alt="" className="size-full object-cover"/>
                                            :
                                            <img src="/images/illustrations/image-mockup.png" alt=""/>
                                        }
                                        {thumbnail.length ? <div className="absolute top-2 right-2 cursor-pointer transition hover:scale-125">
                                            <X className="text-gray-900" onClick={() => setThumbnail('')}/>
                                        </div> : ''}
                                    </div>
                                    <div className="space-y-6">
                                        <p className="text-sm text-gray-600">
                                            Upload your course Thumbnail here. <span className="font-semibold">Important guidelines:</span> 1200×800
                                            pixels or 12:8 Ratio. Supported format: <span className="font-semibold">.jpg, .jpeg, or .png</span>
                                        </p>
                                        <input
                                            type="file"
                                            id="thumbnail-upload"
                                            className="hidden"
                                            accept=".jpg,.jpeg,.png"
                                            onChange={handleThumbnailUpload}
                                        />
                                        <Button
                                            variant="outline"
                                            onClick={() => document.getElementById('thumbnail-upload')?.click()}
                                        >
                                            Upload Image
                                            <UploadSimple />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Course Trailer */}
                        <div className="space-y-4">
                            <label className="font-medium text-lg">Course Trailer</label>
                            <div className="space-y-4">
                                <div className="flex gap-6">
                                    <div
                                        className="w-[228px] h-[160px] relative shrink-0 bg-gray-50 flex items-center justify-center">
                                        {trailer.length ?
                                            <video src={trailer} id="videoPreview" controls width="400" autoPlay={true} className="size-full object-cover"></video>
                                            :
                                            <img src="/images/illustrations/video-mockup.png" alt=""/>
                                        }
                                        {trailer.length ? <div className="absolute top-2 right-2 cursor-pointer transition hover:scale-125">
                                            <X className="text-gray-900" onClick={() => setTrailer('')}/>
                                        </div> : ''}
                                    </div>
                                    <div className="space-y-6">
                                        <p className="text-sm text-gray-600">
                                            Students who watch a well-made promo video are 5X more likely to enroll in
                                            your course. We've seen that statistic go up to 10X for exceptionally awesome videos.
                                        </p>
                                        <input
                                            type="file"
                                            id="trailer-upload"
                                            className="hidden"
                                            accept=".mp4,.mov,.avi"
                                            onChange={handleTrailerUpload}
                                        />
                                        <Button
                                            variant="outline"
                                            onClick={() => document.getElementById('trailer-upload')?.click()}
                                        >
                                            Upload Video
                                            <UploadSimple />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <hr/>

                    {/* Course Description */}
                    <div className="tab-content-spacing">
                        <div className="space-y-4">
                            <label className="font-medium text-lg">Course Descriptions</label>
                            <RichTextEditor
                                value={description}
                                onChange={setDescription}
                                placeholder="Enter your course descriptions"
                            />
                        </div>
                    </div>

                    <hr/>

                    {/* What you will teach */}
                    <DynamicSection
                        title="What you will teach in this course"
                        items={teachings}
                        setItems={setTeachings}
                        placeholder="What you will teach in this course..."
                        maxCount={8}
                    />

                    <hr/>

                    {/* Target Audience */}
                    <DynamicSection
                        title="Target Audience"
                        items={targetAudience}
                        setItems={setTargetAudience}
                        placeholder="Who this course is for..."
                        maxCount={8}
                    />

                    <hr/>

                    {/* Course Requirements */}
                    <DynamicSection
                        title="Course requirements"
                        items={requirements}
                        setItems={setRequirements}
                        placeholder="What is you course requirements..."
                        maxCount={8}
                    />
                </div>
            </MultiStepFormBody>
            <MultiFormStepFooter formStepIndex={1} submitForm={saveForm} />
        </div>
    );
};

export default Page;
