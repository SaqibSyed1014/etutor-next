'use client';

import React from 'react';
import {Button} from "@/components/ui/button";

const MultiFormStepFooter = ({ formStepIndex, submitForm } : { formStepIndex?: number; submitForm: () => void; }) => {
    function saveForm(e: React.FormEvent) {
        e.preventDefault();
        submitForm();
    }
    return (
        <div className="flex justify-between p-10 pt-0">
            <Button variant="gray">
                { formStepIndex === 0 ? 'Cancel' : 'Previous' }
            </Button>
            <Button type="submit" onClick={saveForm}>
                { formStepIndex === 3 ? 'Submit For Review' : 'Save & Next' }
            </Button>
        </div>
    );
};

export default MultiFormStepFooter;
