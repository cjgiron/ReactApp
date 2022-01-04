import React from "react";


let Review = ({review}) => {


    return (
        <>
            <h3>{review.userName}</h3>
            <ul>
                <li>{`Rating: ${review.rating} stars`}</li>
                <li>{review.comment}</li>
            </ul>
        </>
    )
}

export default Review;