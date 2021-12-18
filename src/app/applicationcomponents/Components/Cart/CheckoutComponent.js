import React, {Fragment, useState} from "react";
import { useSelector } from "react-redux";
import CartComponent from "./CartComponent";
import {useNavigate} from "react-router-dom";


let CheckoutComponent = (props) => {

    const cartList = useSelector((state)=>state.cartReducer);
    const User = useSelector((state)=>state.userReducer.user);

    const [show, showHide] = useState(true);


    let func = () => {
        showHide(!show);

        alert('Thank you for your payment, your items under process!')
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
                        <button onClick={func}>Make Payment</button>
                    </Fragment>
                    : <h1>No items saved for Checkout</h1>
            }
            </Fragment>
            : <h1><b>Payment Page</b></h1>
            }
        </Fragment>
        
    )
}

export default CheckoutComponent;