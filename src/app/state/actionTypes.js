//this will contain all the action types that we raise on action creators or events

//For User
export const AddUserToStore = "USER.AddUserToStore";

//For Student
export const AddStudentToStore = "STUDENT.AddStudentToStore";

//For Product
export const ADD_PRODUCTS_TOSTORE = "PRODUCT.ADD_PRODUCTS_TOSTORE";
export const FETCH_PRODUCTS_FULFILLED = "PRODUCT.FETCH_PRODUCTS_FULFILLED";
export const FETCH_PRODUCTS_REJECTED = "PRODUCT.FETCH_PRODUCTS_REJECTED";
export const UPDATE_QUANTITY = "PRODUCT.UPDATE_QUANTITY";

// For Cart
export const ADD_ITEM = "CART.ADD_ITEM";
export const REMOVE_ITEM = "CART.REMOVE_ITEM";
export const UPDATE_ITEM = "CART.UPDATE_ITEM";
export const EMPTY_CART = "CART.EMPTY_CART"; 

// For Coupon
export const ADD_COUPONS_TOSTORE = "COUPON.ADD_COUPON_TOSTORE";

// For RecentOrder
export const ADD_ORDER = "ORDER.ADD_ORDER";
export const CANCEL_ORDER = "ORDER.CANCEL_ORDER";
export const EMPTY_ORDER = "ORDER.EMPTY_ORDER";

// For CancelledOrder
export const CANCEL_THIS_ORDER = "CANCELLEDORDER.CANCEL_THIS_ORDER";
export const EMPTY_CANCELLED_ORDERS = "CANCELLEDORDER.EMPTY_CANCELLED_ORDERS";