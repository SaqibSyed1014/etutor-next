"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import {ArrowRight, ArrowLeft} from "@/assets/icons/common-icons"

interface CustomPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
                                                               currentPage,
                                                               totalPages,
                                                               onPageChange,
                                                               className
                                                           }) => {
    // Always show first, current, and last page
    // For other pages, show one before and one after current page
    const getPageNumbers = () => {
        const pages = [];

        // Always include page 1
        pages.push(1);

        // Add pages before current
        for (let i = Math.max(2, currentPage - 1); i < currentPage; i++) {
            if (i > 1) pages.push(i);
        }

        // Add current page if not already added
        if (currentPage > 1 && currentPage < totalPages) {
            pages.push(currentPage);
        }

        // Add pages after current
        for (let i = currentPage + 1; i < Math.min(totalPages, currentPage + 2); i++) {
            pages.push(i);
        }

        // Always include last page if different from first page
        if (totalPages > 1) {
            pages.push(totalPages);
        }

        return pages;
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className={cn("flex items-center justify-center gap-4", className)}>
            <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="size-12 flex items-center justify-center rounded-full text-primary-500 transition hover:bg-primary-100 disabled:hover:bg-transparent disabled:text-primary-100"
                aria-label="Previous page"
            >
                <ArrowLeft />
            </button>

            <div className="flex">
                {pageNumbers.map((pageNumber, index) => {
                // Check if we need to insert an ellipsis
                const previousPage = pageNumbers[index - 1];
                if (previousPage && pageNumber - previousPage > 1) {
                    return (
                        <React.Fragment key={`${pageNumber}-ellipsis`}>
                            <div className="size-12 flex items-center justify-center">...</div>
                            <button
                                key={pageNumber}
                                onClick={() => onPageChange(pageNumber)}
                                className={cn(
                                    "size-12 flex items-center justify-center rounded-full font-medium",
                                    currentPage === pageNumber
                                        ? "bg-primary-500 text-white"
                                        : "text-gray-900 hover:text-primary-500 hover:bg-primary-100 transition"
                                )}
                                aria-label={`Page ${pageNumber}`}
                                aria-current={currentPage === pageNumber ? "page" : undefined}
                            >
                                {String(pageNumber).padStart(2, '0')}
                            </button>
                        </React.Fragment>
                    );
                }

                return (
                    <button
                        key={pageNumber}
                        onClick={() => onPageChange(pageNumber)}
                        className={cn(
                            "size-12 flex items-center justify-center rounded-full font-medium",
                            currentPage === pageNumber
                                ? "bg-primary-500 text-white"
                                : "text-gray-900 hover:text-primary-500 hover:bg-primary-100 transition"
                        )}
                        aria-label={`Page ${pageNumber}`}
                        aria-current={currentPage === pageNumber ? "page" : undefined}
                    >
                        {String(pageNumber).padStart(2, '0')}
                    </button>
                );
            })}</div>

            <button
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="size-12 flex items-center justify-center rounded-full text-primary-500 transition hover:bg-primary-100 disabled:hover:bg-transparent disabled:text-primary-100"
                aria-label="Next page"
            >
                <ArrowRight />
            </button>
        </div>
    );
};

export default CustomPagination;
