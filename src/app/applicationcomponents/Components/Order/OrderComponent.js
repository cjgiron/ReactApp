import React, {Fragment} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cancelOrder, deleteOrder } from "../../../state/order/orderActions";
import { addOrderToCancelledOrders, saveCancelledOrderToDb } from "../../../state/cancelledOrder/cancelledOrdersActions";
import { orderCancelledNotification } from "../../../state/notification/notificationActions";

let OrderComponent = (props) => {

    const User = useSelector((state)=>state.userReducer.user);

    const navigate = useNavigate();

    let todayPlusTwoDays = new Date(props.order.dateTime);
    todayPlusTwoDays.setDate(todayPlusTwoDays.getDate() + 2);
    // console.log("difference between order time and 2 days from that time : ", new Date(todayPlusTwoDays) - new Date(props.order.dateTime))
    // console.log("difference between now and order time: ", new Date() - new Date(props.order.dateTime))

    const dispatch = useDispatch();

    let cancelThisOrder = (orderid) => {
        dispatch(addOrderToCancelledOrders(props.order))
        dispatch(saveCancelledOrderToDb(props.order, User._id))
        dispatch(cancelOrder(orderid))
        dispatch(deleteOrder(props.order, User._id))
        dispatch(orderCancelledNotification());
    }

    let goToReviewForm = function(event) {
        event.preventDefault();

        navigate('/reviewForm');
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
                    : 
                    <Fragment>
                        <p>This item was delivered</p>
                        <button onClick={goToReviewForm}>Leave a Review</button> 
                    </Fragment>
                }
            </td>
        </>
    )
}

export default OrderComponent;