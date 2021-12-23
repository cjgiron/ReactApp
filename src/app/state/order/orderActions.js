import * as ActionTypes from "../actionTypes";

export const addOrderToOrders = (order) => ({
    type: ActionTypes.ADD_ORDER,
    payload: {order}
});

export const cancelOrder = (id) => ({
    type: ActionTypes.CANCEL_ORDER,
    payload: {id}
});

export const emptyOrder = () => ({
    type: ActionTypes.EMPTY_ORDER
})

export const saveOrderToDb = (order, userid)=>{

    console.log("Order To Be Saved", order); 
    return function(dispatch) {
        //dispatch(loading(true));
        window.fetch("http://localhost:9090/order/api/saveorder",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid, order:order, dateTime:new Date().toLocaleString("en-US")})})
        .then (response => response.json())
        .then (orderresponse => {
            console.log("response ", orderresponse);
            //dispatch(loading(false));
        })
        .catch((err)=>{
            //dispatch(loading(false));
            console.log("Error While Saving Order", err);
        }) 
    }
}

export const getOrders = (userid) => {

    return function(dispatch) {
        console.log("Get Orders");
        window.fetch("http://localhost:9090/order/api/getorders",{
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid})})
        .then (response => response.json())
        .then (orderresponse => {
            console.log("response - get order ", orderresponse);

            dispatch(emptyOrder()); // remove the duplicacy first, empty the order history

            for (const order of orderresponse) {
                console.log("order in for of", order);
                let action = addOrderToOrders(order);
                dispatch(action);    
            }                

        })
        .catch((err)=>{
            console.log("Error While getting orders", err)
        })  
    }       
} 

export const deleteOrder = (order, userid)=>{

    console.log("Order To Be Deleted", order); 
    return function(dispatch) {
        //dispatch(loading(true));
        window.fetch("http://localhost:9090/order/api/" + order._id,{
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid, order:order, dateTime:new Date().toLocaleString("en-US")})})
        .then (response => response.json())
        .then (orderresponse => {
            console.log("delete response ", orderresponse);
            //dispatch(loading(false));
        })
        .catch((err)=>{
            //dispatch(loading(false));
            console.log("Error While Deleting Order", err);
        }) 
    }
}