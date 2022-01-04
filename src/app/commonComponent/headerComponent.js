import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOutUser } from "../state/user/userActions";
import { resetNotifications } from "../state/notification/notificationActions";

let Header = (props) => {
    let header = props.userName ? `Hi ${props.userName}, Welcome to SynergisticIT Shopping Cart` : "Hi There! Please Login to see other features";

    const defaultNotification = useSelector((state) => state.notificationReducer.defaultNotification)
    let count = defaultNotification.qty;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = (evt) => {
        dispatch(signOutUser());
        dispatch(resetNotifications());
        navigate('/user')
        evt.preventDefault();
    }


    return (
        <>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h1>{header}</h1>
                <button onClick={logout}>Logout</button>
            </div>
            <NavLink to="/home" className="button" >Home</NavLink>
            <NavLink to="/user" className="button" >{props.userName ? "User" : "Login"}</NavLink> 
            <NavLink to="/about" className="button" >About</NavLink>
            {props.userName ? 
            <Fragment>
                <NavLink to="/product" className="button" >Product </NavLink>  
                <NavLink to="/cart" className="button" >Cart</NavLink>
                <NavLink to="/reviews" className="button">Reviews</NavLink>
                <NavLink to="/orders" className="button" >Recent Orders</NavLink>
                <NavLink to="/cancelledOrders" className="button" >Cancelled Orders</NavLink>
                <NavLink to="/coupon" className="button" >Coupon</NavLink>
                <NavLink to="/myComponent" className="button" >My Component</NavLink>
                <NavLink to="/notifications" className="notification button">
                    <span>Notifications</span>
                    <span className="badge">{count}</span>
                </NavLink>
            </Fragment>
            : ""
            }
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