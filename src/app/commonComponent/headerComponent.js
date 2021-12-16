import React from "react";
import {NavLink} from "react-router-dom";
import { connect } from "react-redux"

let Header = (props) => {
    let header = props.userName ? `Hi ${props.userName}, Welcome to SynergisticIT Shopping Cart` : "Hi There! Please Login to see other features";
    let name = props.name ? props.name : "Default Student Name";
    return (
        <>
            <h1>{header}</h1>
            <h3>Student Name - {name}</h3>
            <NavLink to="/home" className="button" >Home</NavLink>
            <NavLink to="/user" className="button"  >User</NavLink> 
            <NavLink to="/product" className="button" >Product </NavLink> 
            <NavLink to="/about" className="button" >About</NavLink> 
            <NavLink to="/cart" className="button" >Cart</NavLink>
            <NavLink to="/myComponent" className="button" >My Component</NavLink>
        </>
    )

}

let mapStateToProps = (state)=>{
    return {
        userName : state.userReducer.user.userName,
        name : state.studentReducer.student.name
    }
}

//export default Header;

export default connect(mapStateToProps, null)(Header);

// when user is logged in
// Hi userName, Welcome to SynergisticIT Shopping Cart

// when user is not logged in
// Hi There! Please Login to see other features