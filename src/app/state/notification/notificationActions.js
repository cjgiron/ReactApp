import * as ActionTypes from "../actionTypes";

export const saveNotification = (notification) => {
    console.log("Notification ", notification);

    return function(dispatch) {

        window.fetch("http://localhost:9090/notification/api/saveNotification",{
            method: 'POST', //rest method type 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(notification)
        })
        .then(notificationresp => notificationresp.json())
        .then((notificationresp) => {
            console.log("notification save response", notificationresp);

            dispatch(fetchNotifications());
        })
        .catch((err) => {
            console.log("Error While Saving Notification", err)
        })
    }
};

export const fetchNotifications = () => {
    return function (dispatch) {

        window.fetch("http://localhost:9090/notification/api/getNotifications",{
            method: 'GET' //rest method type 
        })
        .then(notificationresp => notificationresp.json())
        .then((notificationresp)=>{
            console.log("Notification save response ", notificationresp);
            //dispatch(loading(false));
            dispatch(addNotificationToStore(notificationresp));
        })
        .catch((err)=>{
            console.log("Error While Saving Notification", err)
        })
    }
}


export const addProductNotification = () => ({
    type: ActionTypes.ADD_PRODUCT_NOTIFICATION,
})

export const reduceNotificationCount = () => ({
    type: ActionTypes.DELETE_NOTIFICATION
})

export const resetNotifications = () => ({
    type: ActionTypes.RESET_NOTIFICATIONS
})

export const productNoti = () => ({
    type: ActionTypes.PRODUCT_NOTI
})

export const addItemsNoti = () => ({
    type: ActionTypes.ADD_ITEMS_NOTI
})

export const reviewCartNoti = () => ({
    type: ActionTypes.REVIEW_CART_NOTI
})

export const makePaymentNoti = () => ({
    type: ActionTypes.MAKE_PAYMENT_NOTI
})

export const cancelOrderNoti = () => ({
    type: ActionTypes.CANCEL_ORDER_NOTI
})

export const reOrderNoti = () => ({
    type: ActionTypes.RE_ORDER_NOTI
})

export const productAddedNoti = () => ({
    type: ActionTypes.PRODUCT_ADDED_NOTI
})

export const productAddedFalseNoti = () =>({
    type: ActionTypes.PRODUCT_ADDED_FALSE_NOTI
})

export const orderCancelledNotification = () => ({
    type: ActionTypes.CANCEL_ORDER_NOTIFICATION
})

export const highlightCancelledOrderNoti = () => ({
    type: ActionTypes.CANCELLED_NOTI
})

