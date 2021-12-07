import React from "react";
import Footer from "./footerComponent"

//functional component using arrow function
let DummyComponent = (props) => {
    let componentHeader = props.headerName ? props.headerName : "Static Dummy Component";

    //props.headerName = "xyz" // props are immutable and can't be updated in child
    // componentHeader = "xyz";
    
    // this is the jsx
    // Difference between functional components and regular class components: functional components
    // have return statements instead of render methods, jsx is xml like structure which is a combo 
    // of html plus js in xml format 

    //props.getData("Header from Dummy Component")
    return (
        <>
            {/* <Footer/> */}
            <h1>Dummy Component</h1>
            <h2>{componentHeader}</h2>
            {/* <label>{props.time}</label>
            <div>{props.children[0]}</div>
            <div>{props.children[1]}</div> */}

            <button className={"form-control btn btn-primary col-md-2"}
                onClick={() => props.getData("This message is from the Dummy Component")}>Update Header From Child</button>
        </>
    )

}

export default DummyComponent;