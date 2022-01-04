import React, { useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reduceNotificationCount } from "../../../state/notification/notificationActions";
import { addOrderToOrders, saveOrderToDb } from "../../../state/order/orderActions";
import { emptyTheCart } from "../../../state/cart/cartActions"
import { productNoti,
        addItemsNoti,
        reviewCartNoti,
        makePaymentNoti,
        cancelOrderNoti,
        reOrderNoti,
        productAddedNoti,
        highlightCancelledOrderNoti,
} from "../../../state/notification/notificationActions";

let NotificationsComponent = () => {

    const cartList = useSelector((state)=>state.cartReducer);
    const User = useSelector((state)=>state.userReducer.user);
    const defaultNotification = useSelector((state) => state.notificationReducer.defaultNotification);

    const productsAddedQuantity = defaultNotification.productsAddedQty;
    console.log("productsAddedQty: ", productsAddedQuantity);

    const ordersCancelledQuantity = defaultNotification.ordersCancelledQty;

    const productBool = useSelector((state)=> state.notificationReducer.productNotification);
    const addItemsBool = useSelector((state)=> state.notificationReducer.addItemsNotification);
    const reviewCartBool = useSelector((state)=> state.notificationReducer.reviewCartNotification);
    const makePaymentBool = useSelector((state)=> state.notificationReducer.makePaymentNotification);
    const cancelOrderBool = useSelector((state)=> state.notificationReducer.cancelOrderNotification);
    const reOrderBool = useSelector((state)=> state.notificationReducer.reOrderNotification);
    const productAddedBool = useSelector((state) => state.notificationReducer.productAddedNotification);
    const orderCancelledBool = useSelector((state) => state.notificationReducer.cancelledNotification);

    console.log("orderCancelledBool: ", orderCancelledBool);

    let navigate = useNavigate();
    let dispatch = useDispatch();

    
    const productNotificationFunc = (evt) => {
        navigate('/product')

        dispatch(productNoti());
        dispatch(reduceNotificationCount());
        evt.preventDefault();
    }

    const addItemsNotificationFunc = (evt) => {
        navigate('/cart')

        dispatch(addItemsNoti())
        dispatch(reduceNotificationCount());
        evt.preventDefault();
    }

    const reviewCartNotificationFunc = (evt) => {
        navigate('/checkout')

        dispatch(reviewCartNoti());
        dispatch(reduceNotificationCount());
        evt.preventDefault();
    }

    const makePaymentNotificationFunc = (cart, id) => {
        if(cartList.length == 0) {
            alert("Nothing in Cart!")
            dispatch(makePaymentNoti());
            dispatch(reduceNotificationCount());
        } else {
        dispatch(addOrderToOrders(cart));
        dispatch(saveOrderToDb(cart, id));
        // dispatchToEmptyCart(saveCartToDb([], id));
        dispatch(emptyTheCart());
        dispatch(makePaymentNoti());
        dispatch(reduceNotificationCount());
        navigate('/payment'); 
        }
    }

    const cancelOrderNotificationFunc = (evt) => {
        navigate('/orders')

        dispatch(cancelOrderNoti());
        dispatch(reduceNotificationCount());
        evt.preventDefault();
    }

    const reOrderNotificationFunc = (evt) => {
        navigate('/cancelledOrders')

        dispatch(reOrderNoti());
        dispatch(reduceNotificationCount());
        evt.preventDefault();
    }

    const productAddedNotificationFunc = (evt) => {
        navigate('/cart')

        dispatch(productAddedNoti());
        dispatch(reduceNotificationCount());
        evt.preventDefault();
    }

    const runCallback = (cb) => {
        return cb();
    };
    
    const cancelledNotificationFunc = (evt) => {
        navigate('/cancelledOrders');

        dispatch(highlightCancelledOrderNoti());
        dispatch(reduceNotificationCount());
        evt.preventDefault();
    }


    return (
        <>
            <h1>Notifications</h1>
            <section className={"Notifications"}>
                <div className={ productBool ? "clicked" : "notification-card"} onClick={ () => {
                    productNotificationFunc();
                }}>
                    <b>Add Products from Product Screen</b>
                </div>
                <div className={addItemsBool ? "clicked" : "notification-card"} onClick={addItemsNotificationFunc}>
                    <b>Add Items from Cart Page</b>
                </div>
                <div className={reviewCartBool ? "clicked" : "notification-card"} onClick={reviewCartNotificationFunc}>
                    <b>Review Cart from Checkout Page</b>
                </div>
                <div className={makePaymentBool ? "clicked" : "notification-card"} onClick={() => makePaymentNotificationFunc(cartList, User._id)}>
                    <b>Make Payment</b>
                </div>
                <div className={cancelOrderBool ? "clicked" : "notification-card"} onClick={cancelOrderNotificationFunc}>
                    <b>Cancel An Order</b>
                </div>
                <div className={reOrderBool ? "clicked" : "notification-card"} onClick={reOrderNotificationFunc}>
                    <b>Re-order An Order</b>
                </div>
                { productsAddedQuantity !== 0 ? 
                    <Fragment>
                        <div className={productAddedBool ? "clicked" : "notification-card"} onClick={productAddedNotificationFunc}>
                            <b>{`${productsAddedQuantity} item(s) added to your cart`}</b>
                        </div>
                    </Fragment>
                    :
                    ""
                }
                { ordersCancelledQuantity !== 0 ? 
                    runCallback(() => {
                        const row = [];
                        for (var i = 0; i < ordersCancelledQuantity ; i++) {
                        row.push(
                            <div className={orderCancelledBool ? "clicked" : "notification-card"} onClick={cancelledNotificationFunc}>
                                <b>{`An order has been cancelled`}</b>
                            </div>);
                        }
                        return row;
                    })
                    : ""
                }
            </section>
        </>
    )
}

export default NotificationsComponent;