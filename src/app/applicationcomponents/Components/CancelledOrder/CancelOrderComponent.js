import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, saveCartToDb } from "../../../state/cart/cartActions";

let CancelOrderComponent = (props) => {

    console.log("props.order", props.order);
    // console.log("props.order.dateTime", props.order.dateTime);
    // console.log("props.order.order.dateTime: ", props.order.order.dateTime)
    const User = useSelector((state)=>state.userReducer.user);

    const dispatchAddToCart = useDispatch();
    const dispatchToSaveCart = useDispatch();

    let addProductToCart = (item) => {
        alert("This offer is much more exciting!")
        dispatchAddToCart(addItemToCart(item))
        // dispatchToSaveCart(saveCartToDb(cartlist, id))
    }

    const clickToSaveCart = (cartlist, id) => {
        alert("Re-order saved to Cart")
        dispatchToSaveCart(saveCartToDb(cartlist, id))
    }




    return (
        <>
            <td>{props.order.dateTime}</td>
            <td>
                <ul>
                    {
                        props.order.order.order && props.order.order.order.length ?
                        props.order.order.order.map((product) => {
                        return (
                            <li>{`${product.name}, price: $${product.price}, qty: ${product.qty}`} 
                            <button onClick={() => {
                                addProductToCart(product)
                            }}>Buy Again</button></li> 
                        )}) : "No cancelled order"
                    }
                </ul>
            </td>
            <td>
                <button onClick={() => {
                    clickToSaveCart(props.order.order.order, User._id)
                    // props.order.order.order.map((product) => {
                    //     return (() => {addProductToCart(product)})
                    // })
                    }}>Re-Order</button>
            </td>
        </>
    )
}

export default CancelOrderComponent;