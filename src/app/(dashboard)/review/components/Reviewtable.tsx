'use client'
import { FC, SetStateAction, useState } from 'react';
import ReviewCard from './ReviewCard';
import PaginationComp from '@/common/components/common/Pagination';

interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  review: string;
  date: string;
}

interface IProps {
    selectedReviews: string[];
    setSelectedReviews: React.Dispatch<SetStateAction<string[]>>
}

const ReviewTable:FC<IProps> = ({selectedReviews, setSelectedReviews}) => {

  // Sample data based on your images
  const reviews: Review[] = [
    {
      id: "C01234",
      name: "Louis Jean",
      avatar: "/lovable-uploads/c8d472db-732b-4c96-9ce2-63db87a64640.png",
      rating: 4.2,
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "26/04/2020, 12:42 AM"
    },
    {
      id: "C01234",
      name: "Margaretha",
      avatar: "/lovable-uploads/57d8cb1b-8a4b-4d5f-9ec9-be3db6582270.png",
      rating: 4.5,
      review: "We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back!",
      date: "26/04/2020, 12:42 AM"
    },
    {
      id: "C01234",
      name: "David Heree",
      avatar: "/lovable-uploads/c8d472db-732b-4c96-9ce2-63db87a64640.png",
      rating: 4.2,
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
      date: "26/04/2020, 12:42 AM"
    },
    {
      id: "C01234",
      name: "Alexandro Queque",
      avatar: "/lovable-uploads/c8d472db-732b-4c96-9ce2-63db87a64640.png",
      rating: 3.5,
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad m",
      date: "26/04/2020, 12:42 AM"
    },
    {
      id: "C01235",
      name: "Sarah Wilson",
      avatar: "/lovable-uploads/57d8cb1b-8a4b-4d5f-9ec9-be3db6582270.png",
      rating: 5.0,
      review: "Absolutely fantastic experience! The service was impeccable and the food was outstanding. Will definitely be returning soon.",
      date: "27/04/2020, 2:15 PM"
    },
    {
      id: "C01236",
      name: "Mike Johnson",
      avatar: "/lovable-uploads/c8d472db-732b-4c96-9ce2-63db87a64640.png",
      rating: 3.8,
      review: "Good overall experience but could be improved. The ambiance was nice but the service was a bit slow during peak hours.",
      date: "28/04/2020, 7:30 PM"
    }
  ];

  const handleSelectReview = (reviewId: string) => {
    setSelectedReviews(prev => 
      prev.includes(reviewId)
        ? prev.filter(id => id !== reviewId)
        : [...prev, reviewId]
    );
  };

  const handleApprove = (reviewId: string) => {
    console.log('Approved review:', reviewId);
    // Add your approval logic here
  };

  const handleReject = (reviewId: string) => {
    console.log('Rejected review:', reviewId);
    // Add your rejection logic here
  };

  return (
    <div className="w-full">
      {/* Scrollable Container */}
      <div className="w-full overflow-x-auto">
        <div className="min-w-[800px] bg-white rounded-lg p-4">
          <div className="space-y-3">
            {reviews.map((review, index) => (
              <ReviewCard
                key={`${review.id}-${index}`}
                id={review.id}
                name={review.name}
                avatar={review.avatar}
                rating={review.rating}
                review={review.review}
                date={review.date}
                isSelected={selectedReviews.includes(`${review.id}-${index}`)}
                onSelect={() => handleSelectReview(`${review.id}-${index}`)}
                onApprove={() => handleApprove(`${review.id}-${index}`)}
                onReject={() => handleReject(`${review.id}-${index}`)}
              />
            ))}
          </div>
        </div>
      </div>

      <PaginationComp/>
    </div>
  );
};

export default ReviewTable;
