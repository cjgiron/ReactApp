import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

let CartItem = ({product}) => {

    return (
        <>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>${product.price}.00</td>
            <td><button>Update</button></td>
        </>
    )
}

export default CartItem;