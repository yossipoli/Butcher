import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import AddToCartButtons from "./../item-page/AddToCartButtons";
import "./CartItem.css";
import api from "../../DAL/api";

function CartItem( {bill, setBill, ...props}) {
    const [productDetails, setProductDetails] = useState(null);
    const [productImage, setProductImage] = useState(null);
    
    const [total, setTotal] = useState(0);


    const [amount, setAmount] = useState(props.amount);

    function handleAmountChange(e) {
      setAmount(e.target.value)
      // setTotal(productDetails.price * amount)
    }

    useEffect(() => {
        async function getItemData() {
            setProductDetails({ ...await api.getProduct(props.product_id) });
            setProductImage({ ...await api.getImage(props.product_id) });
            const newTotal = productDetails.price * amount
            setTotal(newTotal)
            setBill(bill + total)
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
                {productDetails?.description}
                <div className="price row">
                    <AddToCartButtons amount={amount} hideAddBtn={true} onChange={handleAmountChange}/>
                    <div className="in-col">
                        <div>
                            <h6>Price: {productDetails?.price}₪ for 1kg.</h6>
                        </div>
                        <div>
                            <h6>
                                total: {total}₪
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-1 buttons">
                <Button variant="outline-danger">Remove</Button>{" "}
            </div>
        </div>
    );
}

export default CartItem;
