import {ReactElement} from "react";

export interface Company {
    id: string;
    name: string;
    logo: ReactElement;
    review: string
    reviewer: string
    designation: string
}

export interface Perk {
    id: number;
    icon: React.ReactNode;
    title: string;
    bgColor: string;
}

export interface JobPosition {
    id: number;
    title: string;
    location: {
        city: string;
        country: string;
    };
    type: string;
    vacancies: number;
    deadline: string;
    description?: string;
    requirements?: string[];
    address: string;
}

export interface FAQ {
    id: string;
    category: string;
    question: string;
    answer: string | React.ReactNode;
}


export interface CurriculumSection {
    id: number;
    title: string;
    lectures: number;
    duration: string;
    items: {
        id: number;
        title: string;
        duration: string;
        type: "video" | "file";
        size?: string;
    }[];
}
