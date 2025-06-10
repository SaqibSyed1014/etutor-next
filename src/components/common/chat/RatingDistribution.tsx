import React from 'react';
import {Star} from "@/assets/icons/common-icons";

const RatingDistribution = ({ showStars, progressLabel = 'Star Rating', showBelowLine = false, isGrayProgressBar = false }: { showStars?:boolean; progressLabel?: string; showBelowLine?: boolean; isGrayProgressBar?: boolean }) => {
    const ratingDistribution = [
        { stars: 5, percentage: 75 },
        { stars: 4, percentage: 21 },
        { stars: 3, percentage: 3 },
        { stars: 2, percentage: 1 },
        { stars: 1, percentage: 1 }
    ];
    return (
        <div>
            {ratingDistribution.map(item => (
                <div key={item.stars} className="flex items-center mb-2.5">
                    {showStars && <div className="flex justify-center mr-2">
                        {[1, 2, 3, 4, 5].map(star => (
                            <Star
                                key={star}
                            />
                        ))}
                    </div>}
                    <div className="flex items-center text-gray-600">
                        <span>{item.stars} {progressLabel}</span>
                    </div>

                    <div className="flex-grow mx-4">
                        <div className={`h-2 ${isGrayProgressBar ? 'bg-gray-100':'bg-warning-100'}`}>
                            <div
                                className="h-2 bg-warning-500"
                                style={{ width: item.stars === 2 ? '2%' : `${item.percentage}%` }}
                            ></div>
                        </div>
                    </div>

                    <div className="text-right font-medium text-gray-900">{item.percentage === 0 ? '<1%':`${item.percentage}%`}</div>
                </div>
            ))}

            <div className="text-xs text-gray-500 mt-1">
                {showBelowLine && "all" ? "< 1% of reviews are 1 star" : ""}
            </div>
        </div>
    );
};

export default RatingDistribution;
