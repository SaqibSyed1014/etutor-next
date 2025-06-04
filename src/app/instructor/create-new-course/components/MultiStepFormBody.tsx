import React from 'react';

const MultiStepFormBody = ({ children }: { children: React.ReactNode })  => {
    return (
        <div className="min-h-[60vh]">
            {children}
        </div>
    );
};

export default MultiStepFormBody;
