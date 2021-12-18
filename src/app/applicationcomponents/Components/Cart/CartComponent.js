import React, {Fragment} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import CartItemComponent from "./CartItemComponent";
import CartSummaryComponent from "./CartSummaryComponent";

import { saveCartToDb } from "../../../state/cart/cartActions";

let CartComponent = (props) => {

    const cartList = useSelector((state)=>state.cartReducer);
    const User = useSelector((state)=>state.userReducer.user);

    const dispatchToSaveCart = useDispatch();

    let recalculate = (cartItems) => {
        let amount = 0, 
            count = 0;

        for(let item of cartItems) {
            amount += item.qty * item.price;
            count  += item.qty; 
        }

        return {
            amount, //ES6 syntactic sugar amount: amount 
            count // if key and values are same name then we can put it this way without ":"
        }
    }

    const clickToSaveCart = (cartlist, id)=>{
        if (!id) {
            alert("User not logged in! Please login to save")
        } else {
            dispatchToSaveCart(saveCartToDb(cartlist, id))
        }
    }


    let navigate = useNavigate();
    let func = (evt) => {

        navigate('/checkout')

        evt.preventDefault();
    }


    return (
        <Fragment>
        <h1>Cart Component</h1>
        {
            cartList && cartList.length > 0 ?
            <Fragment>
            <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Rating</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            {
                                props.readOnly ?  "" : 
                                    <Fragment>
                                        <th>Remove</th>
                                        <th>Edit</th>
                                    </Fragment>
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartList.map(item=>{
                                //return item.name

                                return <CartItemComponent 
                                                item={item}
                                                key={item._id}
                                                readOnly = {props.readOnly}
                                    />
                            })
                        } 
                    </tbody>
                </table>

                <CartSummaryComponent data={recalculate(cartList)}/>

                {
                    props.readOnly ? "" : 
                        <Fragment>
                            <button onClick={() => clickToSaveCart(cartList, User._id)} >
                                    Save For Checkout
                            </button>

                            <button onClick={func} >
                                Go To Checkout
                            </button>
                        </Fragment> 
                }

                </Fragment>:
            "No items selected to display in cart"
        }
        </Fragment>
    )
}

export default CartComponent;