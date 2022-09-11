import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import AddToCartButtons from "./../item-page/AddToCartButtons";
import "./CartItem.css";
import api from "../../DAL/api";

function CartItem(props) {
    const [productDetails, setProductDetails] = useState(null);
    const [productImage, setProductImage] = useState(null);

    useEffect(() => {
        async function getItemData() {
            setProductDetails({ ...(await api.getProduct(props.product_id)) });
            setProductImage({ ...(await api.getImage(props.product_id)) });
        }
        getItemData();
    }, []);

    return (
        <div className={`row cartItem`}>
            <div className="col cartPic">
                <img src={productImage?.src} alt="meat" />
            </div>
            <div className={`col description`}>
                <div className="name col">
                    <h3>{productDetails?.name}</h3>
                </div>
                {productDetails ? productDetails.description : "ss"}
                <div className="price col">
                    <AddToCartButtons amount={props.amount} hideAddBtn={true} />
                    <h6>Price: {productDetails?.price}₪ for 1kg.</h6>
                    <h6>total: {productDetails?.price * props.amount}₪</h6>
                </div>
            </div>
            <div className="col-1 buttons">
                <Button variant="outline-danger">Remove</Button>{" "}
            </div>
        </div>
    );
}

export default CartItem;
