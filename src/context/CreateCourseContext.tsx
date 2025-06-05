// context/StepContext.tsx
'use client';

import { createContext, useContext, useState } from 'react';

type StepsComplete = {
    step1: boolean;
    step2: boolean;
    step3: boolean;
    step4: boolean;
};

type StepContextType = {
    currentTab: string;
    setCurrentTab: (tab: string) => void;
    stepsComplete: StepsComplete;
    setStepComplete: (stepKey: keyof StepsComplete) => void;
};

const StepContext = createContext<StepContextType | undefined>(undefined);

export const StepProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentTab, setCurrentTab] = useState('basic-information');

    const [stepsComplete, setStepsComplete] = useState<StepsComplete>({
        step1: false,
        step2: false,
        step3: false,
        step4: false,
    });

    const setStepComplete = (stepKey: keyof StepsComplete) => {
        setStepsComplete((prev) => ({ ...prev, [stepKey]: true }));
    };

    return (
        <StepContext.Provider
            value={{ currentTab, setCurrentTab, stepsComplete, setStepComplete }}
        >
            {children}
        </StepContext.Provider>
    );
};

export const useStepContext = () => {
    const context = useContext(StepContext);
    if (!context) throw new Error('useStepContext must be used within StepProvider');
    return context;
};
