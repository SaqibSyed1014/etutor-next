'use client';

import React from 'react';

interface SearchSuggestionProps {
    suggestions: string[];
    onSuggestionClick: (suggestion: string) => void;
}

const SearchSuggestions: React.FC<SearchSuggestionProps> = ({ suggestions, onSuggestionClick }) => {
    if (suggestions.length === 0) return null;

    return (
        <div className="flex flex-wrap gap-4 text-sm pt-6 pb-4">
            <span className="text-sm text-gray-900">Suggestion:</span>
            {suggestions.map((suggestion, index) => (
                <span
                    key={index}
                    className="text-primary-500 cursor-pointer hover:text-primary-700"
                    onClick={() => onSuggestionClick(suggestion)}
                >
          {suggestion}
        </span>
            ))}
        </div>
    );
};

export default SearchSuggestions;
