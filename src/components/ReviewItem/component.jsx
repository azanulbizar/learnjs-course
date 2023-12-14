
export const ReviewItem = ({ reviewInfo }) => {
    return (
        <div className="reviewInfo">
            <div className="reviewAuthor"><b>{reviewInfo.user}</b></div>
            <div className="reviewText"><i>{reviewInfo.text}</i></div>
        </div>
    )
}