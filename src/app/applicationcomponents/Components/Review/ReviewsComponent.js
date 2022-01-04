import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Review from "./Review";
import { fetchProducts } from "../../../state/product/productAction";
import { fetchReviews } from "../../../state/review/reviewActions";

let ReviewsComponent = () => {

    const reviewsList = useSelector((state) => state.reviewReducer.reviews);
    const productList = useSelector((state) => state.productReducer.products);

    // console.log("productList: ", productList);

    const [productid, setProductid] = useState();

    const fetchProductsDispatch = useDispatch();
    const fetchReviewsDispatch = useDispatch();

    useEffect(() => {
        fetchProductsDispatch(fetchProducts());
        fetchReviewsDispatch(fetchReviews());
    }, [])

    let handleSelectChange = (event) => {
        setProductid(event.target.value);
    }

    const productReviews = reviewsList.filter((review) => review.productid === productid);
    console.log("productReviews: ", productReviews)

    return (
        <>
            <div className="col-md-12">
                <b>See Reviews for Product: </b>
                <select value={productid} onChange={handleSelectChange}>
                    <option value={"dummyid"}>Choose a product</option>
                    {productList.map((product) => (
                    <option value={product._id}>{product.name}</option>
                    ))}
                </select>
            </div>
            { productReviews && productReviews.length > 0 ?
                productReviews.map((review) => {
                    return <Review review={review}/>
                })
                :
                <b>No Reviews for this Product</b>
            }
        </>
    )
}

export default ReviewsComponent;