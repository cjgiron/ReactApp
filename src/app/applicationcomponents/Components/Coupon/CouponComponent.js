import React, { useState, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveCoupon, fetchCoupons } from "../../../state/coupon/couponActions"

let CouponComponent = () => {

    const defaultCoupon = useSelector((state)=>state.couponReducer.defaultCoupon)
    const couponsList = useSelector((state) => state.couponReducer.coupons)
    const user = useSelector((state)=> state.userReducer.user);

    const [number, setNumber] = useState(defaultCoupon.number);

    const dispatchToSaveCoupon = useDispatch();

    const func = (evt) => {
        setNumber(Math.floor(100000 + Math.random() * 900000))

        let couponObj = {number}
        alert("We are going to save this coupon - "+ JSON.stringify(couponObj));
        dispatchToSaveCoupon(saveCoupon(couponObj));

        evt.preventDefault();
    }

    const fetchCouponsDispatch = useDispatch();

    //componentDidMount : by initializing the parameters as dependency
    useEffect(()=>{
        fetchCouponsDispatch(fetchCoupons()) // we are calling fetchCoupons but not adding it to the store.
    },[])

    return (
        <>
            { user.userName ? 
                <Fragment>
                <h1>{`The coupon code is: ${number}`}</h1>
                <input type="button" className={"generateCoupon"} 
                                value="Generate Coupon"
                                onClick={func}/>
                <h3>Active Coupons:</h3>
                    <ul>
                        {couponsList && couponsList.length > 0 ? 
                            couponsList.map((coupon) => {
                                return <li>{coupon.number}</li>
                            })
                            : ""
                        } 
                    </ul>
                </Fragment>
                : ""
            }
        </>
    )
}

export default CouponComponent;