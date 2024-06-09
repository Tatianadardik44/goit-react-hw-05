const ReviewsCard = ({review}) => {
    return (
       <div>
            {review.map(rew => (
                <li key={rew.id}>
                    <h4>Author: {rew.author}</h4>
                    <p>{rew.content}</p>
                 </li>
            ))}
          </div>  
       )
}
export default ReviewsCard