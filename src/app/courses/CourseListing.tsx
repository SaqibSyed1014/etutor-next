'use client';

import {CourseCard} from "@/components/CourseCard";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import FilterSidebar from "./FilterSidebar";
import SearchSuggestions from "@/components/SearchSuggestions";
import CustomPagination from "@/components/CustomPagination";
import { useCourseFilter } from "@/hooks/useCourseFilter";
import {FilterState, SortOption} from "@/lib/@fake-db/courses/type";
import {FilterFaders} from "@/assets/icons/icons";
import DropdownMenuWrapper from "@/components/DropdownMenuWrapper";
import {sortOptions} from "@/lib/@fake-db/courses";
import SearchInput from "@/components/common/SearchInput";
import NoResultFound from "@/components/common/NoResultFound";

type Props = {
    preSelectedFilters?: FilterState;
};

const Courses = ({ preSelectedFilters }: Props) => {
    const [showFilters, setShowFilters] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const {
        paginatedCourses,
        currentPage,
        totalPages,
        filters,
        sortOption,
        setCurrentPage,
        setFilters,
        setSortOption,
        count
    } = useCourseFilter();

    useEffect(() => {
        if (preSelectedFilters?.categories?.length) {
            setFilters({ ...filters, categories: preSelectedFilters.categories });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [preSelectedFilters]);

    const handleSearch = (text :string) => {
        if (!text.length) setSearchInput('');
        else setSearchInput(text);
        setFilters({ ...filters, search: text });
    };

    const handleSortChange = (value: string) => {
        setSortOption(value as SortOption);
    };

    const handleSuggestionClick = (suggestion: string) => {
        setSearchInput(suggestion);
        setFilters({ ...filters, search: suggestion });
    };



    const suggestions = ["user interface", "user experience", "web design", "interface", "app"];

    return (
        <>
            <div className="py-10 overflow-hidden">
                <div className="container">
                    <div className="section-layout">
                        <div className="flex flex-col">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-6">
                                    <Button
                                        variant="outlineInvert"
                                        className="flex items-center gap-3 border border-primary-500"
                                        onClick={() => setShowFilters(!showFilters)}
                                    >
                                        <FilterFaders/>
                                        Filter
                                        <div>
                                            {count > 0 ? (
                                                <span
                                                    className="bg-primary-500 text-white h-6 px-1.5 grid place-items-center text-xs ml-2">
                                                    {count}
                                                </span>
                                            ):''}
                                        </div>
                                    </Button>
                                    <div className="relative hidden lg:block ">
                                        <SearchInput
                                            placeholder="Search..."
                                            value={searchInput}
                                            onChange={(e) => handleSearch(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-6">
                                    <p>Sort by:</p>
                                    <div className="w-52">
                                        <DropdownMenuWrapper
                                            options={sortOptions}
                                            selected={sortOption}
                                            onChange={handleSortChange}
                                            triggerClasses="text-sm text-gray-700 flex items-center gap-1.5 border border-gray-100 justify-between min-w-[200px] px-[18px] py-3"
                                            contentContentClasses="min-w-[200px] bg-white border border-gray-100 !text-gray-900"
                                            activeOptionClass="bg-gray-200"
                                        />
                                    </div>
                                </div>
                            </div>


                            <div className="flex justify-between items-center">
                                <div>
                                    {/* Search Suggestions */}
                                    <SearchSuggestions
                                        suggestions={suggestions}
                                        onSuggestionClick={handleSuggestionClick}
                                    />
                                </div>

                                {/* Results Summary */}
                                <div>
                                    <p>
                                        <span
                                            className="text-gray-900 font-medium">{paginatedCourses.length} </span>
                                        results find for "{filters?.search || 'all courses'}"
                                    </p>
                                </div>
                            </div>

                            <hr/>
                        </div>


                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Filter Sidebar */}
                            {showFilters && (
                                <div className="md:w-1/4">
                                    <FilterSidebar
                                        filters={filters}
                                        onFilterChange={setFilters}
                                    />
                                </div>
                            )}

                            {/* Course Grid */}
                            <div className={showFilters ? "md:w-3/4" : "w-full"}>
                                {/* Course Cards */}
                                <div
                                    className={`grid gap-6 [&_h3]:text-base ${showFilters ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`}>
                                    {paginatedCourses.map((course, index) => (
                                        <CourseCard key={index} course={course}/>
                                    ))}
                                </div>

                                {/* No Results */}
                                {paginatedCourses.length === 0 && (
                                    <NoResultFound type='courses' />
                                )}

                                {/* Pagination */}
                                {paginatedCourses.length > 0 && (
                                    <CustomPagination
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={setCurrentPage}
                                        className="mt-8"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Courses;
