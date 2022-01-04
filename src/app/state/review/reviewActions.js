import * as ActionTypes from "../actionTypes";

export const addReviewToStore = (reviews)=>({
    type : ActionTypes.ADD_REVIEWS_TOSTORE,
    payload : {reviews}
}) 

export const saveReview = (review)=>{
    console.log("Review ", review);
    return function (dispatch) {
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/review/api/saveReview",{
            method: 'POST', //rest method type 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(reviewresp => reviewresp.json())
        .then((reviewresp)=>{
            console.log("review save response ", reviewresp);
            //dispatch(loading(false));
            dispatch(fetchReviews());
        })
        .catch((err)=>{
            console.log("Error While Saving Review", err)
        })
    }
};

export const fetchReviews = ()=>{
    return function (dispatch) {
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/review/api/getReviews",{
            method: 'GET' //rest method type 
        })
        .then(reviewresp => reviewresp.json())
        .then((reviewresp)=>{
            console.log("review save response ", reviewresp);
            //dispatch(loading(false));
            dispatch(addReviewToStore(reviewresp));
        })
        .catch((err)=>{
            console.log("Error While Saving Review", err)
        })
    }  
} 