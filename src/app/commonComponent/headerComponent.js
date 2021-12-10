import React from "react";
import {NavLink} from "react-router-dom";
import { connect } from "react-redux"

let Header = (props) => {
    let userName = props.userName ? props.userName : "Default User Name"
    return (
        <>
            <h3>userName - {userName}</h3>
            <NavLink to="/home" className="button" >Home</NavLink>
            <NavLink to="/user" className="button"  >User</NavLink> 
            <NavLink to="/about" className="button" >About</NavLink> 
            <NavLink to="/myComponent" className="button" >My Component</NavLink>
        </>
    )

}

let mapStateToProps = (state)=>{
    return {
        userName : state.userReducer.user.userName
    }
}

//export default Header;

export default connect(mapStateToProps, null)(Header) 