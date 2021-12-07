import React from "react";
import {useParams} from "react-router-dom";

let MyComponent = (props) => {
    let params = useParams();
    let param = params["name"] == "Ciara" ? params["name"] : "Not a valid name."

    return (
        <div>
            <h1>This is my component!</h1>
            <p>My name is: {param}</p>
        </div>
    )

}

export default MyComponent;