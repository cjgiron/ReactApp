import React from "react";
import {NavLink} from "react-router-dom";

let Header = (props) => {

    return (
        <>
            <NavLink to="/home" className="button" >Home</NavLink>
            <NavLink to="/user" className="button"  >User</NavLink> 
            <NavLink to="/about" className="button" >About</NavLink> 
            <NavLink to="/myComponent" className="button" >My Component</NavLink>
        </>
    )

}

export default Header;