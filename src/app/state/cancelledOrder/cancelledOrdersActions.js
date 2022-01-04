import * as ActionTypes from "../actionTypes";


export const addOrderToCancelledOrders = (cancelledOrder) => ({
    type: ActionTypes.CANCEL_THIS_ORDER,
    payload: {cancelledOrder}
})

export const emptyCancelledOrders = () => ({
    type: ActionTypes.EMPTY_CANCELLED_ORDERS
})

export const saveCancelledOrderToDb = (order, userid)=>{

    console.log("CancelledOrder To Be Saved", order); 
    return function(dispatch) {
        //dispatch(loading(true));
        window.fetch("http://localhost:9090/cancelledOrder/api/saveCancelledOrder",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid, order:order, dateTime:new Date().toLocaleString("en-US")})})
        .then (response => response.json())
        .then (cancelledOrderResponse => {
            console.log("response ", cancelledOrderResponse);
            //dispatch(loading(false));
        })
        .catch((err)=>{
            //dispatch(loading(false));
            console.log("Error While Saving Cancelled Order", err);
        }) 
    }
}

export const getCancelledOrders = (userid) => {

    return function(dispatch) {
        console.log("Get Cancelled Orders");
        window.fetch("http://localhost:9090/cancelledOrder/api/getCancelledOrders",{
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid})})
        .then (response => response.json())
        .then (cancelledOrderResponse => {
            console.log("response - get order ", cancelledOrderResponse);

            dispatch(emptyCancelledOrders()); // remove the duplicacy first, empty the order history

            for (const order of cancelledOrderResponse) {
                console.log("cancelled order in for of", order);
                let action = addOrderToCancelledOrders(order);
                dispatch(action);    
            }                

        })
        .catch((err)=>{
            console.log("Error While getting cancelled orders", err)
        })  
    }       
} 