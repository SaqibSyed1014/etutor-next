
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import DropdownMenuWrapper from "@/components/DropdownMenuWrapper";
import {Star} from "@/assets/icons/common-icons"

interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

interface CourseReviewsProps {
  rating: number;
}

const CourseReviews = ({ rating }: CourseReviewsProps) => {
  const [selectedRating, setSelectedRating] = useState<string>("all");
  const [visibleReviews, setVisibleReviews] = useState<number>(3);

  const mockReviews: Review[] = [
    {
      id: "r1",
      name: "Guy Hawkins",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      comment: "I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.",
      date: "1 week ago"
    },
    {
      id: "r2",
      name: "Dianne Russell",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      comment: "This course is just amazing! has great course content, the best practices, and a lot of real-world knowledge. I love the way of giving examples, the best tips by the instructor which are pretty interesting, fun and knowledgable and I was never getting bored throughout the course. This course meets more than my expectation and, I made the best investment of time to learn and practice what I am passionate about. Thank you so much to our excellent instructor Vako! Highly recommend this course! Take the next step.",
      date: "51 mins ago"
    },
    {
      id: "r3",
      name: "Bessie Cooper",
      avatar: "https://randomuser.me/api/portraits/women/67.jpg",
      rating: 5,
      comment: "Webflow course was good, it coves design sectes, and to build responsive web pages, blog, and some more tricks and tips about webflow. I enjoyed the course and it helped me to add web development skills related to webflow in my toolbox. Thank you Vako.",
      date: "6 hours ago"
    },
    {
      id: "r4",
      name: "Eleanor Pena",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
      comment: "I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.",
      date: "1 days ago"
    },
    {
      id: "r5",
      name: "Ralph Edwards",
      avatar: "https://randomuser.me/api/portraits/men/11.jpg",
      rating: 4,
      comment: "GREAT Course! Instructor was very descriptive and professional. I learned a TON that is going to apply immediately to real life work. Thanks so much, cant wait for the next one!",
      date: "2 days ago"
    },
    {
      id: "r6",
      name: "Arlene McCoy",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      rating: 3,
      comment: "This should be one of the best course I ever made about UX/UI in Udemy. Highly recommend to those who is new to UX/UI and want to become UX/UI freelancer!",
      date: "1 week ago"
    }
  ];

  const ratingDistribution = [
    { stars: 5, percentage: 75 },
    { stars: 4, percentage: 21 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 0 }
  ];

  const filteredReviews = selectedRating === "all"
    ? mockReviews
    : mockReviews.filter(review => review.rating === parseInt(selectedRating));

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Rating Summary */}
        <div className="flex flex-col justify-center items-center text-center border border-gray-100 pr-6">
          <div className="text-5xl font-bold mb-6">{rating.toFixed(1)}</div>
          <div className="flex justify-center mb-3">
            {[1, 2, 3, 4, 5].map(star => (
              <Star
                key={star}
              />
            ))}
          </div>
          <p className="font-medium text-gray-900">Course Rating</p>
        </div>

        {/* Rating Distribution */}
        <div className="md:col-span-2">
          {ratingDistribution.map(item => (
            <div key={item.stars} className="flex items-center mb-2.5">
              <div className="flex items-center w-24 text-gray-600">
                <span>{item.stars} Star Rating</span>
              </div>

              <div className="flex-grow mx-3">
                <div className="h-2 bg-warning-100">
                  <div
                    className="h-2 bg-warning-500"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>

              <div className="w-12 text-right font-medium text-gray-900">{item.percentage}%</div>
            </div>
          ))}

          <div className="text-xs text-gray-500 mt-1">
            {selectedRating === "all" ? "< 1% of reviews are 1 star" : ""}
          </div>
        </div>
      </div>

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
                            className={`${star <= review.rating ? "text-gray-900 fill-gray-100" : "text-gray-300"}`}
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

export default CourseReviews;
