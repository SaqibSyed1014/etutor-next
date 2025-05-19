import {ReactElement} from "react";

export interface CourseCategory {
    id: number;
    title: string,
    courses: string
    color: "primary" | "secondary" | "warning" | "success" | "error" | "white" | "gray";
    isBestSelling: boolean
    icon: ReactElement
}
