import React from 'react';
import {Button} from "@/components/ui/button";

const MultiStepFormHeader = ({ title, formStepIndex, submitForm } : { title: string; formStepIndex?: number; submitForm: () => void; }) => {
    return (
        <div className="border-b py-6 px-10 flex justify-between items-center">
            <h4>{title}</h4>
            <div className="flex gap-3">
                <Button onClick={submitForm} variant="outline">Save</Button>
                <Button onClick={submitForm} variant="outlineInvert">Save & Preview</Button>
            </div>
        </div>
    );
};

export default MultiStepFormHeader;
