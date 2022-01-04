import React, {Fragment, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartComponent from "./CartComponent";

import { addOrderToOrders, saveOrderToDb } from "../../../state/order/orderActions";
import { emptyTheCart } from "../../../state/cart/cartActions"


let CheckoutComponent = () => {

    const cartList = useSelector((state)=>state.cartReducer);
    const User = useSelector((state)=>state.userReducer.user);

    const dispatchToStore = useDispatch();
    const dispatchToDb = useDispatch();
    const dispatchToEmptyCart = useDispatch();
    const navigate = useNavigate();

    let func = (cart, id) => {
        dispatchToStore(addOrderToOrders(cart));
        dispatchToDb(saveOrderToDb(cart, id));
        // dispatchToEmptyCart(saveCartToDb([], id));
        dispatchToEmptyCart(emptyTheCart());
        navigate('/payment');
    }

    return (
        <Fragment> 
            {
                cartList && cartList.length > 0 ?
                    <Fragment>
                        <h2><b>Welcome to the Checkout Page</b></h2>

                        <h4>We will deliver the following products to <b>{User.userName}</b> at <b>{User.street}</b>.</h4>
                        <CartComponent readOnly={true} />
                        <button onClick={() => {
                            func(cartList, User._id)
                        }}>Make Payment</button>
                    </Fragment>
                    : <h1>No items saved for Checkout</h1>
            }
        </Fragment>
    )
}

export default CheckoutComponent;