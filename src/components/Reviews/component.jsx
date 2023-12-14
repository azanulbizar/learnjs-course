import { ReviewItem } from "../ReviewItem/component"

export const Reviews = ({ items }) => {
    return (
        <>
        <h2>Отзывы</h2>
        {items.map((review) => <ReviewItem key={review.id} reviewInfo={review} />)}
        </>
    )
}