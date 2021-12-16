import React, { useState } from "react";

let DisplayProductDetails = ({product})=>{

    const [showDetails, showHide] = useState(false)

    return(
        <ul className={"product"}>
            <li className={"product"} onClick={()=>{showHide(!showDetails)}}>
                {product.name}
                { showDetails ?
                <ul className={"productDetails"}>
                    <li>{product.price}</li>
                    <li>{product.desc}</li>
                    <li>{product.rating}</li>            
                </ul>
                :""}
            </li>
        </ul>
    )
}

export default DisplayProductDetails; 