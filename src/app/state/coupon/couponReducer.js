import * as ActionTypes from "../actionTypes";

let INITIAL_STATE = {
    coupons:[],
    defaultCoupon : {
        number: Math.floor(100000 + Math.random() * 900000)
    }
}

export default function CouponReducer(state=INITIAL_STATE, action) {

    switch(action.type) {

        case ActionTypes.ADD_COUPONS_TOSTORE : 
            return {...state, coupons: action.payload.coupons}

        default:
            return state;
    }
}