import * as ActionTypes from "../actionTypes";


let INITIAL_STATE = []


export default function OrderReducer (state = INITIAL_STATE, action) {

    switch(action.type) {
        case ActionTypes.ADD_ORDER :
            // let newState = state.filter(order => order._id != action.payload.order._id);

            // let today = new Date();
            // !action.payload.order["dateTime"] ? action.payload.order["dateTime"] = today.toLocaleString("en-US") : ""
            return [...state, action.payload.order]

        case ActionTypes.CANCEL_ORDER : 
            return state.filter((order) => order._id != action.payload.id)

        case ActionTypes.EMPTY_ORDER :
            return [];

        default:
            return state;
    }
}
