import * as ActionTypes from "../actionTypes";

let INITIAL_STATE = {
    cancelledNotification: false,
    productNotification: false,
    addItemsNotification: false,
    reviewCartNotification: false,
    makePaymentNotification: false,
    cancelOrderNotification: false,
    reOrderNotification: false,
    productAddedNotification: false,
    defaultNotification : {
        qty: 6,
        productsAddedQty: 0,
        ordersCancelledQty: 0
    }
}


export default function NotificationReducer (state = INITIAL_STATE, action) {

    switch(action.type) {
        case ActionTypes.ADD_PRODUCT_NOTIFICATION :

            return {...state, defaultNotification : {...state.defaultNotification, qty: state.defaultNotification.qty + 1, productsAddedQty: state.defaultNotification.productsAddedQty + 1}};

        case ActionTypes.CANCEL_ORDER_NOTIFICATION :

            return {...state, defaultNotification : {...state.defaultNotification, qty: state.defaultNotification.qty + 1, ordersCancelledQty: state.defaultNotification.ordersCancelledQty + 1}};

        case ActionTypes.DELETE_NOTIFICATION :
            if (state.defaultNotification.qty < 1) {
                return {...state, defaultNotification: {...state.defaultNotification, qty: 0}}
            }
            return {...state, defaultNotification: {...state.defaultNotification, qty: state.defaultNotification.qty - 1}}

        case ActionTypes.PRODUCT_NOTI :
            return {...state, productNotification: true}

        case ActionTypes.ADD_ITEMS_NOTI :
            return {...state, addItemsNotification: true}

        case ActionTypes.REVIEW_CART_NOTI :
            return {...state, reviewCartNotification: true}
    
        case ActionTypes.MAKE_PAYMENT_NOTI :
            return {...state, makePaymentNotification: true}

        case ActionTypes.CANCEL_ORDER_NOTI :
            return {...state, cancelOrderNotification: true}

        case ActionTypes.RE_ORDER_NOTI :
            return {...state, reOrderNotification: true}
    
        case ActionTypes.PRODUCT_ADDED_NOTI :
            return {...state, productAddedNotification: true}

        case ActionTypes.PRODUCT_ADDED_FALSE_NOTI:
            return {...state, productAddedNotification: false};
            
        case ActionTypes.CANCELLED_NOTI :
            return {...state, cancelledNotification: true};
            
        case ActionTypes.RESET_NOTIFICATIONS :
            return INITIAL_STATE;

        default:
            return state;
    }
}