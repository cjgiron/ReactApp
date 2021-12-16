import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../../CSS/style.css";
import { fetchProducts } from "../../../state/product/productAction";
import CartItem from "./CartItemComponent";


let CartListComponent = (props) => {
    const productList = useSelector((state)=>state.productReducer.products)

    const fetchProductsDispatch = useDispatch();

    //componentDidMount : by initializing the parameters as dependency
    useEffect(()=>{
        fetchProductsDispatch(fetchProducts()) // we are calling fetchproducts but not adding it to the store.
    },[])

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    
            {productList && productList.length > 0 ?
                productList.map((product)=>{
                    return <tr><CartItem product={product} key={product._id} /></tr>
                })
                :
                <b>{"No Products To Display In Cart"}</b>}
                </tbody>
            </table>
        </>
    )
}


export default CartListComponent;