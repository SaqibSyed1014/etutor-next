
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import DropdownMenuWrapper from "@/components/DropdownMenuWrapper";
import {Star} from "@/assets/icons/common-icons"
import {Review} from "@/lib/@fake-db/reviews/type";
import RatingSummary from "@/components/common/RatingSummary";
import RatingDistribution from "@/components/common/chat/RatingDistribution";



interface CourseReviewsProps {
  reviews: Review[];
  rating: number;
  showRatingSummary?: boolean;
}

const StudentsFeedback = ({ reviews, rating, showRatingSummary = true }: CourseReviewsProps) => {
  const [selectedRating, setSelectedRating] = useState<string>("all");
  const [visibleReviews, setVisibleReviews] = useState<number>(3);



  const filteredReviews = selectedRating === "all"
    ? reviews
    : reviews.filter(review => review.rating === parseInt(selectedRating));

  const displayedReviews = filteredReviews.slice(0, visibleReviews);

  const handleLoadMore = () => {
    setVisibleReviews(prev => prev + 3);
  };

  const reviewOptions = [
    { value: 'all', label: 'All Reviews' },
    { value: '5', label: '5 Star Rating' },
    { value: '4', label: '4 Star Rating' },
    { value: '3', label: '3 Star Rating' },
    { value: '2', label: '2 Star Rating' },
    { value: '1', label: '1 Star Rating' },
  ];

  return (
    <div>
      {showRatingSummary && <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Rating Summary */}
        <RatingSummary
          rating={rating}
          text="Course Rating"
        />

        {/* Rating Distribution */}
        <div className="md:col-span-2">
          <RatingDistribution
              showStars={true}
          />
        </div>
      </div>}

      {/* Reviews List */}
      <div className="space-y-5 mt-10">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl">Students Feedback</h3>
          <DropdownMenuWrapper
              options={reviewOptions}
              selected={selectedRating}
              onChange={setSelectedRating}
              triggerClasses="text-sm text-gray-700 flex items-center gap-1.5 border border-gray-100 justify-between min-w-[200px] px-[18px] py-3"
              contentContentClasses="min-w-[200px] bg-white border border-gray-100 !text-gray-900"
              activeOptionClass="bg-gray-200"
          />
        </div>

        {displayedReviews.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No reviews found matching your filter criteria.
          </div>
        )}

        <div className="flex flex-col gap-5">
          {displayedReviews.map(review => (
            <div key={review.id} className="border-b border-gray-100 pb-5 last:pb-0 last:border-0">
              <div className="flex items-start gap-4">
                <Avatar className="size-10">
                  <AvatarImage src={review.avatar} alt={review.name}/>
                  <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                </Avatar>

                <div className="flex-grow">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-sm">{review.name}</h4>
                    <span className="text-sm align-middle">.</span>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>

                  <div className="flex mb-3 mt-1.5">
                    {[1, 2, 3, 4, 5].map(star => (
                        <Star
                            key={star}
                        />
                    ))}
                  </div>

                  <p>{review.comment}</p>
                </div>
              </div>
            </div>
        ))}</div>

        {displayedReviews.length < filteredReviews.length && (
          <div className="pt-3">
            <Button
              variant="outline"
              onClick={handleLoadMore}
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentsFeedback;
