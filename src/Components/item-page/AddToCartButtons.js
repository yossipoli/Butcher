import React from "react";
import { useRef } from "react";
import api from "../../DAL/api";
import AddedMessage from "./AddedMessage";
import "./AddToCartButtons.css";

function AddToCartButtons({ productId, hideAddBtn, amount, onChange }) {
    const amountRef = useRef()
    function handleAddToCart(){
        const product = {
            product_id: productId,
            amount: amountRef.current.value,
        }
        const res = api.addToCart(product)
        res ? alert('Added to your cart') : alert('You have to login for getting a cart')
    }
    return (
        <div className="buttons">
            <div className="col">
                <label>amount:</label>
                <input
                    type="number"
                    className="amount"
                    defaultValue={amount || 1}
                    onChange = {onChange}
                    step={0.5}
                    min={0.5}
                    ref = {amountRef}
                />
                {" "} kg
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
                        onClick= {handleAddToCart}
                    >
                        Add to Cart
                    </button>
                )}
            </div>
        </div>
    );
}

export default AddToCartButtons;
