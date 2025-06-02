'use client';

import React from 'react';
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

const MultiFormStepFooter = ({ formStepIndex, submitForm } : { formStepIndex?: number; submitForm: (val :any) => void }) => {
    const router = useRouter();
    function saveForm() {
        // submitForm();
        if (formStepIndex === 0) router.push('/instructor/create-new-course/advance-information')
    }
    return (
        <div className="flex justify-between p-10 pt-0">
            <Button variant="gray">
                { formStepIndex === 0 ? 'Cancel' : 'Previous' }
            </Button>
            <Button type="submit">
                { formStepIndex === 3 ? 'Submit For Review' : 'Save & Next' }
            </Button>
        </div>
    );
};

export default MultiFormStepFooter;
