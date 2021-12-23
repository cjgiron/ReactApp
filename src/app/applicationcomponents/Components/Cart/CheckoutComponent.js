import React, {Fragment, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import CartComponent from "./CartComponent";

import { addOrderToOrders, saveOrderToDb } from "../../../state/order/orderActions";
import { emptyTheCart } from "../../../state/cart/cartActions"


let CheckoutComponent = () => {

    const cartList = useSelector((state)=>state.cartReducer);
    const User = useSelector((state)=>state.userReducer.user);

    const [show, showHide] = useState(true);

    const dispatchToStore = useDispatch();
    const dispatchToDb = useDispatch();
    const dispatchToEmptyCart = useDispatch();

    let func = (cart, id) => {
        showHide(!show);

        dispatchToStore(addOrderToOrders(cart));
        dispatchToDb(saveOrderToDb(cart, id));
        dispatchToEmptyCart(emptyTheCart())
    }

    return (
        <Fragment>
            { show ? 
            <Fragment>
            {
                cartList && cartList.length > 0 ?
                    <Fragment>
                        <h2><b>Welcome to the Checkout Page</b></h2>

                        <h4>We will deliver the following products to <b>{User.userName}</b> at <b>{User.street}</b>.</h4>
                        <CartComponent readOnly={true} />
                        <button onClick={() => func(cartList, User._id)}>Make Payment</button>
                    </Fragment>
                    : <h1>No items saved for Checkout</h1>
            }
            </Fragment>
            : 
            <Fragment>
                <h1><b>Payment Page</b></h1>
                <p>{'Thank you for your payment, your items under process!'}</p>
            </Fragment>
            }
        </Fragment>
        
    )
}

export default CheckoutComponent;