'use client';

import React, { useState, useMemo } from 'react';
import { courseProgressData } from '@/lib/@fake-db/courses';
import {instructorsData} from "@/lib/@fake-db/instructors";
import {CourseProgressCard} from "@/components/CourseCard";
import CustomPagination from "@/components/CustomPagination";
import DropdownMenuWrapper from "@/components/DropdownMenuWrapper";
import SearchInput from "@/components/common/SearchInput";
import InstructorCard from "@/components/InstructorsCard";

const ITEMS_PER_PAGE = 8;

const CourseListingPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [courseFilter, setCourseBy] = useState('all');
    const [statusFilter, setStatusFilter] = useState('all');
    const [teacherFilter, setTeacherFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);

    // Reset pagination on filter/sort/search change
    const resetPagination = () => setCurrentPage(1);

    const instructors = useMemo(
        () => [...new Set(courseProgressData.map((course) => course.instructor.name))].map(name => ({ label: name, value: name })),
        [courseProgressData]
    );

    const filteredCourses = useMemo(() => {
        return instructorsData.filter((instructor) => {
            const matchesSearch = instructor.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesStatus = statusFilter === 'all' || true;
            const matchesTeacher = teacherFilter === 'all' || instructor.name === teacherFilter;

            return matchesSearch && matchesStatus && matchesTeacher;
        });
    }, [searchQuery, statusFilter, teacherFilter]);

    const sortedInstructors = useMemo(() => {
        return [...filteredCourses].sort((a, b) => {
            switch (courseFilter) {
                case 'high':
                    return b.students - a.students;
                case 'low':
                    return a.students - b.students;
                default:
                    return 0;
            }
        });
    }, [filteredCourses, courseFilter]);

    const totalPages = Math.ceil(sortedInstructors.length / ITEMS_PER_PAGE);

    const paginatedInstructors = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return sortedInstructors.slice(start, start + ITEMS_PER_PAGE);
    }, [sortedInstructors, currentPage]);

    const courseFilters = [
        { label: "All Courses", value: "all" },
        { label: "Highest Students", value: "high" },
        { label: "Lowest Students", value: "low" },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-2xl font-semibold">Instructors ({filteredCourses.length})</h1>

                <div className="flex [&_div]:grow gap-6 mt-6">
                    {/* Search */}
                    <div className="relative">
                        <label className="block text-sm text-gray-600 mb-1">Search:</label>
                        <SearchInput
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                resetPagination();
                            }}
                            placeholder="Search in your teachers..."
                        />
                    </div>

                    {/* Courses */}
                    <div>
                        <label className="block text-sm text-gray-500 mb-1">Courses:</label>
                        <DropdownMenuWrapper
                            options={courseFilters}
                            selected={courseFilter}
                            onChange={(val) => {
                                setCourseBy(val);
                                resetPagination();
                            }}
                        />
                    </div>

                    {/* Teacher */}
                    <div>
                        <label className="block text-sm text-gray-500 mb-1">Teacher:</label>
                        <DropdownMenuWrapper
                            options={[{ label: 'All Teachers', value: 'all' }, ...instructors]}
                            selected={teacherFilter}
                            onChange={(val) => {
                                setTeacherFilter(val);
                                resetPagination();
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {paginatedInstructors.map((instructor) => (
                    <div key={instructor.id} className="h-full">
                        <InstructorCard instructor={instructor} showSendMessageOption={true} />
                    </div>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-10 flex justify-center">
                    <CustomPagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                </div>
            )}
        </div>
    );
};

export default CourseListingPage;
