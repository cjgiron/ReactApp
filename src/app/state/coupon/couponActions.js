import * as ActionTypes from "../actionTypes";

//coupon calls
//Coupon Action and Server Call
export const saveCoupon = (coupon)=>{
    console.log("Coupon ", coupon);
    return function (dispatch) {
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/coupon/api/savecoupon",{
            method: 'POST', //rest method type 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(coupon)
        })
        .then(couponresp => couponresp.json())
        .then((couponresp)=>{
            console.log("coupon save response ", couponresp);
            //dispatch(loading(false));
            dispatch(fetchCoupons());
        })
        .catch((err)=>{
            console.log("Error While Saving Coupon", err)
        })
    }
};

export const fetchCoupons = ()=>{
    return function (dispatch) {
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/coupon/api/getcoupons",{
            method: 'GET' //rest method type 
        })
        .then(couponresp => couponresp.json())
        .then((couponresp)=>{
            console.log("coupon save response ", couponresp);
            //dispatch(loading(false));
            dispatch(addCouponToStore(couponresp));
        })
        .catch((err)=>{
            console.log("Error While Saving Coupon", err)
        })
    }  
} 

export const addCouponToStore = (coupons)=>({
    type : ActionTypes.ADD_COUPONS_TOSTORE,
    payload : {coupons}
}) 