import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { cancelOrder, deleteOrder } from "../../../state/order/orderActions";

let OrderComponent = (props) => {

    const User = useSelector((state)=>state.userReducer.user);

    let todayPlusTwoDays = new Date(props.order.dateTime);
    todayPlusTwoDays.setDate(todayPlusTwoDays.getDate() + 2);
    // console.log("difference between order time and 2 days from that time : ", new Date(todayPlusTwoDays) - new Date(props.order.dateTime))
    // console.log("difference between now and order time: ", new Date() - new Date(props.order.dateTime))

    const dispatchToCancel = useDispatch();
    const dispatchToDeleteFromDb = useDispatch();

    let cancelThisOrder = (orderid) => {
        dispatchToCancel(cancelOrder(orderid))
        dispatchToDeleteFromDb(deleteOrder(props.order, User._id))
    }

    return (
        <>
            <td>{props.order.dateTime}</td>
            <td>
                <ul>{
                        props.order.order && props.order.order.length ?
                        props.order.order.map((product) => {
                        return <li>{`${product.name}, price: $${product.price}, qty: ${product.qty}`}</li> 
                        }) : "No order"
                    }
                </ul>
            </td>
            <td>
                {
                    (new Date(todayPlusTwoDays) - new Date(props.order.dateTime)) > new Date() - new Date(props.order.dateTime) ? 
                    <button onClick={() => cancelThisOrder(props.order._id)}>Cancel</button>
                    : "This item was delivered"
                }
            </td>
        </>
    )
}

export default OrderComponent;