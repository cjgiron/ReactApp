import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveReview } from "../../../state/review/reviewActions"
import { fetchProducts } from "../../../state/product/productAction";

let ReviewForm = () => {

    const defaultReview = useSelector((state)=>state.reviewReducer.defaultReview);
    const User = useSelector((state) => state.userReducer.user);
    const productList = useSelector((state) => state.productReducer.products);


    // console.log("productList: ", productList);

    const [comment, setComment] = useState(defaultReview.comment);
    const [rating, setRating] = useState(defaultReview.rating)
    const [productid, setProductid] = useState(productList[0]._id);

    // console.log("productList[0]._id: ", productList[0]._id)

    const dispatchToSaveReview = useDispatch();
    const dispatchToFetchProducts = useDispatch();


    useEffect(() => {
        dispatchToFetchProducts(fetchProducts())
    }, [])

    function handleSelectChange(event) {
        setProductid(event.target.value);
    }


    const saveReviewClick = (evt) => {
        const reviewObj = {
            userName: User.userName,
            productid: productid,
            comment:comment,
            rating:rating
        }

        alert("We are going to save this review - "+ JSON.stringify(reviewObj));
        dispatchToSaveReview(saveReview(reviewObj));
    }


    return (
        <>
            {User.userName ? 
            <Fragment>
                <h2>Reviews</h2>
                <section className={"componentClass"}>
                    <div className="form col-md-8">
                        <div className="col-md-12">
                            <b>Product</b>
                            <select value={productid} onChange={handleSelectChange}>
                                {productList.map((product) => (
                                <option value={product._id}>{product.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-12">
                            <b>Comment</b>
                            <textarea value={comment} maxLength={255} rows="5" cols="30"
                                onChange={(evt) => setComment(evt.target.value)}
                            ></textarea>
                        </div>
                        <div className="col-md-12">
                            <b>{`Rating (1-5)`}</b>
                            <input type={"number"} value={rating} 
                                onChange={(evt)=>{setRating(evt.target.value)}} 
                                maxLength={"1"}/>
                        </div>
                        <input type="button" className={"form-control btn btn-primary col-md-3"} 
                            value={"Save Review"} 
                            onClick={saveReviewClick}/>
                    </div>
                </section>
            </Fragment>
            : ""
            }
        </>
    )
}

export default ReviewForm;