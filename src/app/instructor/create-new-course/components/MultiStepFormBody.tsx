import React from 'react';

const MultiStepFormBody = ({ children }: { children: React.ReactNode })  => {
    return (
        <div className="py-8 px-10">
            {children}
        </div>
    );
};

export default MultiStepFormBody;
