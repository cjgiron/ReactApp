import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItemToCart } from "../../../state/cart/cartActions";
import { addProductNotification } from "../../../state/notification/notificationActions";
import { productAddedFalseNoti } from "../../../state/notification/notificationActions";

let DisplayProductDetails = ({product})=>{

    const [showDetails, showHideDetails] = useState(false);
    const cartList = useSelector((state) => useSelector((state)=>state.cartReducer))

    console.log("cartList from displaydetailproduct: ", cartList);

    const dispatch = useDispatch();

    const navigate = useNavigate();
    //console.log("render ", product);

    const handleClick = (evt) => {
        evt.target.classList.contains("product") ? 
                showHideDetails(!showDetails) : "";
        //alert("handleClick ")
        evt.preventDefault();
    }

    const addProductToCart = (product)=>{
        alert("product "+ JSON.stringify(product))
        dispatch(addItemToCart(product));
        dispatch(addProductNotification());
        dispatch(productAddedFalseNoti());
    }

    const goToReviews = (evt) => {
        navigate('/reviews');
        evt.preventDefault();
    }

    return(
        <ul className={"product"}>
            <li className={"product"} onClick={handleClick}>
                {product.name}
                { showDetails ?
                <ul className={"productDetails"}>
                    <li>{product.price}</li>
                    <li>{product.desc}</li>
                    <li>{product.rating}</li>
                    <li>{product.category}</li>
                    <button onClick={()=>{addProductToCart(product)}}>Add To Cart</button>
                    <button onClick={goToReviews}>See Reviews</button>
                </ul>
                :""}
            </li>
        </ul>
    )
}

export default DisplayProductDetails; 