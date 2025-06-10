import React from 'react';
import {Star} from "@/assets/icons/common-icons";

const RatingSummary = ({ rating, text, className }: { rating: number; text: string; className?: string }) => {
    return (

            <div className={`flex flex-col justify-center items-center text-center border mr-6 ${className}`}>
                <div className="text-5xl font-bold mb-6">{rating.toFixed(1)}</div>
                <div className="flex justify-center mb-3">
                    {[1, 2, 3, 4, 5].map(star => (
                        <Star
                            key={star}
                        />
                    ))}
                </div>
                <p className="font-medium text-gray-900">{text}</p>
            </div>
    );
};

export default RatingSummary;
