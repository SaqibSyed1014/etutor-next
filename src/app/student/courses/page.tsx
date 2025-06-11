'use client';

import React, { useState, useMemo } from 'react';
import { courseProgressData } from '@/lib/@fake-db/courses';
import {CourseProgressCard} from "@/components/CourseCard";
import CustomPagination from "@/components/CustomPagination";
import DropdownMenuWrapper from "@/components/DropdownMenuWrapper";
import SearchInput from "@/components/common/SearchInput";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import { courseSortOptions } from "@/lib/@fake-db/collections";
import NoResultFound from "@/components/common/NoResultFound";

const ITEMS_PER_PAGE = 8;

const CourseListingPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('latest');
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
        return courseProgressData.filter((course) => {
            const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesStatus = statusFilter === 'all' || course.status === statusFilter;
            const matchesTeacher = teacherFilter === 'all' || course.instructor.name === teacherFilter;

            return matchesSearch && matchesStatus && matchesTeacher;
        });
    }, [searchQuery, statusFilter, teacherFilter]);

    const sortedCourses = useMemo(() => {
        return [...filteredCourses].sort((a, b) => {
            switch (sortBy) {
                case 'latest':
                    return parseInt(String(b.id)) - parseInt(String(a.id));
                case 'popular':
                    return b.students - a.students;
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                default:
                    return 0;
            }
        });
    }, [filteredCourses, sortBy]);

    const totalPages = Math.ceil(sortedCourses.length / ITEMS_PER_PAGE);

    const paginatedCourses = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return sortedCourses.slice(start, start + ITEMS_PER_PAGE);
    }, [sortedCourses, currentPage]);

    const courseFilters = [
        { label: "All Courses", value: "all" },
        { label: "In Progress", value: "in-progress" },
        { label: "Completed", value: "completed" },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-2xl font-semibold">Courses <span className="font-normal">({filteredCourses.length})</span></h1>

                <div className="grid grid-cols-10 gap-6 mt-6">
                    {/* Search */}
                    <div className="col-span-4">
                        <label className="block text-sm text-gray-600 mb-1">Search:</label>
                        <SearchInput
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                resetPagination();
                            }}
                            placeholder="Search in your courses..."
                        />
                    </div>

                    {/* Sort */}
                    <div className="col-span-2">
                        <label className="block text-sm text-gray-600 mb-1">Sort by:</label>
                        <Select value={sortBy} onValueChange={(val) => {
                            setSortBy(val);
                            resetPagination();
                        }}>
                            <SelectTrigger className="h-12">
                                <SelectValue placeholder="Select..."/>
                            </SelectTrigger>

                            <SelectContent>
                                {courseSortOptions.map(item => (
                                    <SelectItem value={item.value}>{item.label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Status */}
                    <div className="col-span-2">
                        <label className="block text-sm text-gray-600 mb-1">Status:</label>
                        <Select value={statusFilter} onValueChange={(val) => {
                            setStatusFilter(val);
                            resetPagination();
                        }}>
                            <SelectTrigger className="h-12">
                                <SelectValue placeholder="Select..."/>
                            </SelectTrigger>

                            <SelectContent>
                                {courseFilters.map(item => (
                                    <SelectItem value={item.value}>{item.label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Teacher */}
                    <div className="col-span-2">
                        <label className="block text-sm text-gray-600 mb-1">Teacher:</label>
                        <Select value={teacherFilter} onValueChange={(val) => {
                            setTeacherFilter(val);
                            resetPagination();
                        }}>
                            <SelectTrigger className="h-12">
                                <SelectValue placeholder="Select..."/>
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="all">All Teachers</SelectItem>
                                {instructors.map(item => (
                                    <SelectItem value={item.value}>{item.label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {paginatedCourses.map((course) => (
                    <div key={course.id} className="h-full">
                        <CourseProgressCard course={course} />
                    </div>
                ))}
            </div>

            {/* No Results */}
            {paginatedCourses.length === 0 && (
                <NoResultFound type='courses' />
            )}

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
