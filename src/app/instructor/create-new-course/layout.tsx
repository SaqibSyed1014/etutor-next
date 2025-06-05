'use client';

import React from "react";
import { StepProvider } from "@/context/CreateCourseContext";
import CreateCourseTabs from "@/app/instructor/create-new-course/components/CreateCourseTabs";

const Layout = () => {




    return (
        <section className="py-10 bg-white">
            <StepProvider>
                <CreateCourseTabs />
            </StepProvider>
        </section>
    );
};

export default Layout;
