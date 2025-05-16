'use client';

import DefaultLayout from "@/components/layouts/DefaultLayout";
import CourseListing from "@/app/courses/CourseListing";


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
