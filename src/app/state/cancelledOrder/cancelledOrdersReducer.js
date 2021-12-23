import * as ActionTypes from "../actionTypes";


let INITIAL_STATE = []

export default function CancelledOrdersReducer (state = INITIAL_STATE, action) {

    switch(action.type) {
        case ActionTypes.CANCEL_THIS_ORDER :
            return [...state, action.payload.cancelledOrder]

        case ActionTypes.EMPTY_CANCELLED_ORDERS :
            return [];

        default:
            return state;

    }
}