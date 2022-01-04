import * as ActionTypes from "../actionTypes";

let INITIAL_STATE = {
    reviews: [],
    defaultReview : {
        comment : "Write a comment.",
        rating : 1
    }
}

export default function ReviewReducer(state = INITIAL_STATE, action) {
    switch (action.type) {        

        case ActionTypes.ADD_REVIEWS_TOSTORE:            
            return {...state, reviews:action.payload.reviews};

        // case ActionTypes.FETCH_PRODUCTS_FULFILLED:            
        //     return {...state, products:action.payload};

        default:
            return state;
    }
}