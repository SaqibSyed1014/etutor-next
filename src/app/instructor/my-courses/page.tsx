'use client';

import React, {useMemo, useState} from 'react';
import SearchInput from "@/components/common/SearchInput";
import DropdownMenuWrapper from "@/components/DropdownMenuWrapper";
import {courseProgressData, coursesData} from "@/lib/@fake-db/courses";
import {CourseCard} from "@/components/CourseCard";
import CustomPagination from "@/components/CustomPagination";

const ITEMS_PER_PAGE = 12;

const Page = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('latest');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [ratingFilter, setRatingFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);

    const resetPagination = () => setCurrentPage(1);

    const filteredCourses = useMemo(() => {
        return courseProgressData.filter((course) => {
            const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesStatus = categoryFilter === 'all' || true; // TODO: Replace with real status logic
            const matchesTeacher = ratingFilter === 'all';

            return matchesSearch && matchesStatus && matchesTeacher;
        });
    }, [searchQuery, categoryFilter, ratingFilter]);


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

    const sortOptions = [
        { label: "Latest", value: "latest" },
        { label: "Popular", value: "popular" },
        { label: "Price: Low to High", value: "price-low" },
        { label: "Price: High to Low", value: "price-high" },
    ];

    const ratingFilters = [
        { label: "All Courses", value: "all" },
        { label: "In Progress", value: "in-progress" },
        { label: "Completed", value: "completed" },
    ];

    return (
        <div className="space-y-10">
            <div className="flex [&_div]:grow gap-6">
                {/* Search */}
                <div className="relative">
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
                <div>
                    <label className="block text-sm text-gray-500">Sort by:</label>
                    <DropdownMenuWrapper
                        options={sortOptions}
                        selected={sortBy}
                        onChange={(val) => {
                            setSortBy(val);
                            resetPagination();
                        }}
                        variant="white"
                    />
                </div>

                {/* Rating */}
                <div>
                    <label className="block text-sm text-gray-500">Courses:</label>
                    <DropdownMenuWrapper
                        options={ratingFilters}
                        selected={ratingFilter}
                        onChange={(val) => {
                            setRatingFilter(val);
                            resetPagination();
                        }}
                        variant="white"
                    />
                </div>

                {/* Rating */}
                <div>
                    <label className="block text-sm text-gray-500 mb-1">Rating:</label>
                    <DropdownMenuWrapper
                        options={ratingFilters}
                        selected={ratingFilter}
                        onChange={(val) => {
                            setRatingFilter(val);
                            resetPagination();
                        }}
                        variant="white"
                    />
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
