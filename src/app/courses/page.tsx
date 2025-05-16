'use client';

import DefaultLayout from "@/components/layouts/DefaultLayout.tsx";
import CourseListing from "@/app/courses/CourseListing.tsx";


const Courses = () => {
    return (
        <>
            <DefaultLayout>
                <CourseListing />
            </DefaultLayout>
        </>
    );
};

export default Courses;
