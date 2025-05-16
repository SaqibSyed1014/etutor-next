import {ReactElement} from "react";

export interface CourseCategory {
    id: number;
    title: string,
    courses: string
    color: string;
    isBestSelling: boolean
    icon: ReactElement
}
