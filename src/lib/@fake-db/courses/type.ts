import {CourseCategory} from "@/lib/@fake-db/courseCategories/type";

export interface Course {
    id: number;
    title: string;
    category: CourseCategory;
    price: number;
    originalPrice?: number;
    discount?: number;
    rating: number;
    reviewCount: number;
    students: number;
    instructor: {
        id: string;
        name: string;
        avatar: string;
    };
    coInstructor?: {
        id: string;
        name: string;
        avatar: string;
    };
    image: string;
    duration: number;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    description?: string;
    learningPoints?: string[];
    subtitle?: string;
    categoryLabel?: string;
    isBestSelling: boolean
}

export interface CourseProgress extends Course {
    currentLecture: string;
    lectureNumber: number;
    status: 'in-progress' | 'completed' | 'not-started';
    progress?: number; // e.g., percentage completed
}

export type SortOption = 'trending' | 'high-rating' | 'lowest-rating';

export interface FilterState {
    search: string;
    categories: string[];
    tools: string[];
    ratings: number[];
    levels: string[];
    priceRange: [number, number];
    duration: string[];
}
