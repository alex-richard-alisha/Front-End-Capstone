import React, { useContext, useState} from 'react';
import Sort from './list-sort';
import ReviewCard from './review-card';
import MoreReviews from './more-reviews';
import AddReview from '../add-review/add-review';
import AppContext from '../../Contexts/AppContext';

const ReviewList = () => {
  const [reviewCount, setReviewCount] = useState(2);
  const { reviews, filteredReviews } = useContext(AppContext);

  const displayReviews = (() => {
    if (filteredReviews.length) {
      return filteredReviews;
    }
    return reviews;
  })();

  // console.log(displayReviews);

  // console.log(filteredReviews, reviews);

  return (
    <div
      style={{
        width: '50%',
        padding: '5px',
        margin: '5px',
        maxHeight: '550px',
        overflowY: 'auto',
      }}
    >
      <Sort />
      {displayReviews.slice(0, reviewCount).map(
        (review) => (
          <ReviewCard
            review={review}
            key={review.review_id}

          />
        ),
      )}
      <MoreReviews
        reviewCount={reviewCount}
        setReviewCount={setReviewCount}
      />
      <AddReview />
    </div>
  );
};

export default ReviewList;
