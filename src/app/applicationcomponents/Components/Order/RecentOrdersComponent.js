import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import OrderComponent from "./OrderComponent"
import { getOrders } from "../../../state/order/orderActions";

let RecentOrdersComponent = () => {

    const orderList = useSelector((state) => state.orderReducer);
    const User = useSelector((state) => state.userReducer.user);


    const fetchOrdersDispatch = useDispatch();

    useEffect(() => {
        fetchOrdersDispatch(getOrders(User._id))
    }, [])

    return (
        <>
            { User.userName ?
                <Fragment>
                <h1>{`Welcome, ${User.userName}, to your Order History`}</h1>
                { orderList && orderList.length > 0 ? 
                    <Fragment>
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Products</th>
                                    <th>Cancel</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orderList.map(order =>{
                                        return <tr><OrderComponent order={order} key={order._id} /></tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </Fragment> : "No Recent Orders"
                }
                </Fragment> : ""
            }
        </>
    )
}

export default RecentOrdersComponent;