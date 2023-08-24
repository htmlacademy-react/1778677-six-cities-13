import { ReviewItem } from '../review-item/review-item';
import { Review } from '../../types/review';

type ReviewsListProps = {
  displayedComments: Review[];
  reviewsCount: number;
}

function ReviewsList({ displayedComments, reviewsCount }: ReviewsListProps) {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{ reviewsCount }</span></h2>
      <ul className="reviews__list">
        {displayedComments.map((review) => (
          <ReviewItem key={ review.id } review={ review } />
        ))}
      </ul>
    </>
  );

}

export { ReviewsList };
