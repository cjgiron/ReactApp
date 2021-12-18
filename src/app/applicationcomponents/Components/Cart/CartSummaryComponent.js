import React from "react";

const CartSummaryComponent = (props)=>{
    let {
        count,
        amount
    } = props.data;


    return(
        <div>
            <h2> Cart Summary </h2>
            <p> Total Amount: ${amount} </p>
            <p> {`Count: ${count} item(s)`}</p>
        </div>
    )
}

export default CartSummaryComponent;