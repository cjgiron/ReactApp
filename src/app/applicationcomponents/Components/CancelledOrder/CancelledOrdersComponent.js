import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCancelledOrders } from "../../../state/cancelledOrder/cancelledOrdersActions";
import CancelOrderComponent from "./CancelOrderComponent";

let CancelledOrdersComponent = () => {

    const cancelledOrdersList = useSelector((state) => state.cancelledOrdersReducer);
    const User = useSelector((state) => state.userReducer.user);

    console.log("cancelledOrdersList: ", cancelledOrdersList);
    console.log("userid: ", User._id)

    const sortedCancelledOrdersList = cancelledOrdersList.sort((a, b) => {
            return new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime()
        }).reverse();


    const fetchCancelledOrdersDispatch = useDispatch();

    useEffect(() => {
        fetchCancelledOrdersDispatch(getCancelledOrders(User._id))
    }, [])

    return (
        <>
            { User.userName ?
                <Fragment>
                <h1>{`${User.userName}, this is your Cancelled Order History`}</h1>
                { cancelledOrdersList && cancelledOrdersList.length > 0 ? 
                    <Fragment>
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Products</th>
                                    <th>Re-order</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    sortedCancelledOrdersList.map(order =>{
                                        return <tr><CancelOrderComponent order={order} key={order._id} /></tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </Fragment> : "No Recent Cancelled Orders"
                }
                </Fragment> : ""
            }
        </>
    )
}


export default CancelledOrdersComponent;