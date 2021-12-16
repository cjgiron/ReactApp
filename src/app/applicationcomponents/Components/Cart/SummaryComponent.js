import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";

let SummaryComponent = () =>{

    const productList = useSelector((state)=>state.productReducer.products)
    let prodTotal = 0;
    
    useEffect(() => {
        console.log(productList.length);
        // prodTotal += productList.valueOf(0).price;

        productList.map((product)=>{
            return prodTotal += product.quantity*product.price
        })
        setTotal(prodTotal);
    })

    const [total, setTotal] = useState(0);

    return (
        <>
            <h2>Total : ${total}.00</h2>

        </>
    )
}

export default SummaryComponent;