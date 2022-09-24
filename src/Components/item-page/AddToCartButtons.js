import React from "react";
import { useContext } from "react";
import { useRef } from "react";
import { CartContext } from "../../CartContext";
import api from "../../DAL/api";
import AddedMessage from "./AddedMessage";
import "./AddToCartButtons.css";

function AddToCartButtons({ productId, hideAddBtn, amount, onChange }) {
    const {userCart, setUserCart} = useContext(CartContext)
    const amountRef = useRef();
    async function handleAddToCart() {
        if (await api.checkCookie()) {
            const product = {
                product_id: productId,
                amount: amountRef.current.value,
            };

            const res = await api.addToCart(product);

            if (res) {
                alert("Added to your cart");
                setUserCart(await api.getCustomerCart())
            } else alert("You have to login for getting a cart");
        } else alert("you have to login for start shopping");
    }
    return (
        <div className="buttons">
            <div className="col">
                <label>amount:</label>
                <input
                    type="number"
                    className="amount"
                    defaultValue={amount || 1}
                    onChange={onChange}
                    step={0.5}
                    min={0.5}
                    ref={amountRef}
                />{" "}
                kg
            </div>

            {/* <div className="col">
      <label>special request</label>
      <input
        type="text"
        className="freeText"
        placeholder="type your request here"
      />
      </div> */}

            <div className="row">
                {hideAddBtn ? (
                    ""
                ) : (
                    <button
                        type="button"
                        className="addBtn btn btn-outline-warning"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                )}
            </div>
        </div>
    );
}

export default AddToCartButtons;
