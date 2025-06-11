'use client';

import React, {useMemo, useState} from 'react';
import SearchInput from "@/components/common/SearchInput";
import DropdownMenuWrapper from "@/components/DropdownMenuWrapper";
import {courseLevels, courseProgressData, coursesData} from "@/lib/@fake-db/courses";
import {CourseCard} from "@/components/CourseCard";
import CustomPagination from "@/components/CustomPagination";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import { courseSortOptions } from "@/lib/@fake-db/collections";

const ITEMS_PER_PAGE = 12;

const Page = () => {
    const [courses, setCourses] = useState(courseProgressData);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('latest');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [ratingFilter, setRatingFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);

    const resetPagination = () => setCurrentPage(1);

    const filteredCourses = useMemo(() => {
        return courses.filter((course) => {
            const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesStatus = categoryFilter === 'all' || true; // TODO: Replace with real status logic
            const matchesTeacher = ratingFilter === 'all';

            return matchesSearch && matchesStatus && matchesTeacher;
        });
    }, [searchQuery, categoryFilter, ratingFilter, courses]);


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

    const handleDelete = (id: number) => {
        setCourses(prev => prev.filter(course => course.id !== id));
    };

    const ratingFilters = [
        { label: "All Courses", value: "all" },
        { label: "In Progress", value: "in-progress" },
        { label: "Completed", value: "completed" },
    ];

    return (
        <div className="space-y-10">
            <div className="grid grid-cols-10 gap-6">
                {/* Search */}
                <div className="relative col-span-4">
                    <label className="block text-sm text-gray-600">Search:</label>
                    <SearchInput
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            resetPagination();
                        }}
                        placeholder="Search in your courses..."
                        className="border-0"
                    />
                </div>

                {/* Sort */}
                <div className="col-span-2">
                    <label className="block text-sm text-gray-500">Sort by:</label>
                    <Select onValueChange={(val) => {
                        setSortBy(val);
                        resetPagination();
                    }}>
                        <SelectTrigger className="bg-white border-0 text-gray-700 h-12 text-base">
                            <SelectValue placeholder="Select..."/>
                        </SelectTrigger>

                        <SelectContent>
                            {courseSortOptions.map(item => (
                                <SelectItem value={item.value}>{item.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Rating */}
                <div className="col-span-2">
                    <label className="block text-sm text-gray-500">Courses:</label>
                    <Select onValueChange={(val) => {
                        setRatingFilter(val);
                        resetPagination();
                    }}>
                        <SelectTrigger className="bg-white border-0 text-gray-700 h-12 text-base">
                            <SelectValue placeholder="Select..."/>
                        </SelectTrigger>

                        <SelectContent>
                            {ratingFilters.map(item => (
                                <SelectItem value={item.value}>{item.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Rating */}
                <div className="col-span-2">
                    <label className="block text-sm text-gray-500">Rating:</label>
                    <Select onValueChange={(val) => {
                        setRatingFilter(val);
                        resetPagination();
                    }}>
                        <SelectTrigger className="bg-white border-0 text-gray-700 h-12 text-base">
                            <SelectValue placeholder="Select..."/>
                        </SelectTrigger>

                        <SelectContent>
                            {ratingFilters.map(item => (
                                <SelectItem value={item.value}>{item.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-6">
                {paginatedCourses.map(course => {
                    return (
                        <CourseCard
                            key={course.id}
                            course={course}
                            showStudentIcon={true}
                            showDetailPopup={false}
                            cardBig={true}
                            showCourseOptions={true}
                            onDelete={handleDelete}
                        />
                    )
                })}
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

export default Page;
