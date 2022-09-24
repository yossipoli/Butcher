import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import AddToCartButtons from "./../item-page/AddToCartButtons";
import "./CartItem.css";
import api from "../../DAL/api";
import { useContext } from "react";
import { CartContext } from "../../CartContext";

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
    const [productImage, setProductImage] = useState();

    let [amount, setAmount] = useState(product_amount);

    let [total, setTotal] = useState(amount * price);

    const {userCart, setUserCart} = useContext(CartContext)

    async function handleRemove(){
        await api.removeFromCart({product_id : id})
        let newBill = totalBill - total
        setTotalBill(newBill)
        setUserCart(await api.getCustomerCart())
    }

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
        // TODO update amount in server
        const updatedProduct = userCart.find(prod=> prod.productId === id)
        updatedProduct.amount = amount
        setUserCart([...userCart])
    }

    useEffect(() => {
        (async () => {
            setProductImage({ ...(await api.getImage(id)) });
        })()
    }, [userCart]);

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
                        <Button variant="outline-danger" onClick={handleRemove}>Remove</Button>{" "}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
