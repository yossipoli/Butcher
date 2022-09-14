import React from "react";
import "./AddToCartButtons.css";

function AddToCartButtons({ hideAddBtn, amount, onChange }) {
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
                    >
                        Add to Cart
                    </button>
                )}
            </div>
        </div>
    );
}

export default AddToCartButtons;
