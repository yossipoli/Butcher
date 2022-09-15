import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import AddToCartButtons from "./../item-page/AddToCartButtons";
import "./CartItem.css";
import api from "../../DAL/api";

function CartItem({
    id,
    name,
    price,
    description,
    product_amount,
    stock,
    setTotalBill,
    totalBill,
}) {
    // const [productDetails, setProductDetails] = useState(null);
    const [productImage, setProductImage] = useState();

    let [amount, setAmount] = useState(product_amount);

    let [total, setTotal] = useState(amount * price);

    function handleAmountChange(e) {
        amount = e.target.value;
        if (amount > stock) {
            alert(`The maximum amount in stock is ${stock}`);
            e.target.value = stock;
            amount = stock;
            setAmount(stock);
        } else {
            setAmount(amount);
        }
        let newBill = totalBill - total;
        total = price * amount;
        newBill += total;
        setTotalBill(newBill);
        setTotal(total);
    }

    useEffect(() => {
        async function getItemData() {
            setProductImage({ ...(await api.getImage(id)) });
        }
        getItemData();
    }, []);

    return (
        <div className={`cartItem row`}>
            <div className="col cartPic">
                <img src={productImage?.src} alt="meat" />
            </div>
            <div className={`col description`}>
                <div className="name col">
                    <h3>{name}</h3>
                </div>
                {description}
                <div className="price row">
                    <AddToCartButtons
                        amount={amount}
                        hideAddBtn={true}
                        onChange={handleAmountChange}
                    />
                    <div>
                        <h6>Price: {price}₪ for 1kg.</h6>
                    </div>
                    <div>
                        <h6>Total: {total}₪</h6>
                    </div>
                    <div className="col-1 buttons">
                        <Button variant="outline-danger">Remove</Button>{" "}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
