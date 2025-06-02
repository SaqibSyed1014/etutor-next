import React from 'react';
import {Button} from "@/components/ui/button";

const MultiStepFormHeader = ({ title, formStepIndex } : { title: string; formStepIndex?: number }) => {
    return (
        <div className="border-b py-6 px-10 flex justify-between items-center">
            <h4>{title}</h4>
            <div className="flex gap-3">
                <Button variant="outline">Save</Button>
                <Button variant="outlineInvert">Save & Preview</Button>
            </div>
        </div>
    );
};

export default MultiStepFormHeader;
