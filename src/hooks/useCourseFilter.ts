'use client';

import { useState, useEffect, useMemo } from 'react';
import { Course, FilterState, SortOption } from '@/lib/@fake-db/courses/type';
import { coursesData } from '@/lib/@fake-db/courses';

export const useCourseFilter = () => {
    const [courses, setCourses] = useState<Course[]>(coursesData);
    const [filteredCourses, setFilteredCourses] = useState<Course[]>(coursesData);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const [sortOption, setSortOption] = useState<SortOption>('trending');
    const [filters, setFilters] = useState<FilterState>({
        search: '',
        categories: [],
        tools: [],
        ratings: [],
        levels: [],
        priceRange: [0, 100],
        duration: [],
    });

    // Apply filters and sorting
    useEffect(() => {
        let result = [...courses];

        // Apply search filter
        if (filters.search) {
            if (!filters.search.length) {
                result = [...courses];
            } else {
                const searchLower = filters.search.toLowerCase();
                result = result.filter(course =>
                    course.title.toLowerCase().includes(searchLower) ||
                    (course.description?.toLowerCase().includes(searchLower))
                );
            }
        }

        // Apply category filter
        if (filters.categories.length > 0) {
            console.log('here ', result, filters)
            result = result.filter(course => filters.categories.includes(course.category.title.toLowerCase()));
        }

        // Apply rating filter
        if (filters.ratings.length > 0) {
            result = result.filter(course => {
                const courseRating = Math.floor(course.rating);
                return filters.ratings.some(rating => courseRating >= rating);
            });
        }

        // Apply level filter
        if (filters.levels.length > 0) {
            if (!filters.levels.includes('all')) {
                result = result.filter(course =>
                    filters.levels.some(level => course.level.toLowerCase() === level.toLowerCase())
                );
            }
        }

        // Apply price filter
        result = result.filter(course =>
            course.price >= filters.priceRange[0] && course.price <= filters.priceRange[1]
        );

        // Apply sort
        switch (sortOption) {
            case 'trending':
                result.sort((a, b) => b.students - a.students);
                break;
            case 'high-rating':
                result.sort((a, b) => b.rating - a.rating);
                break;
        }

        setFilteredCourses(result);
        setCurrentPage(1); // Reset to first page when filters change
    }, [courses, filters, sortOption]);

    // Pagination logic
    const totalPages = useMemo(() => {
        return Math.ceil(filteredCourses.length / itemsPerPage);
    }, [filteredCourses, itemsPerPage]);

    const paginatedCourses = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredCourses.slice(startIndex, endIndex);
    }, [filteredCourses, currentPage, itemsPerPage]);

    return {
        allCourses: courses,
        filteredCourses,
        paginatedCourses,
        currentPage,
        totalPages,
        itemsPerPage,
        filters,
        sortOption,
        setCurrentPage,
        setItemsPerPage,
        setFilters,
        setSortOption,
    };
};
