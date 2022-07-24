import React from "react";
import "./AddToCartButtons.css";

function AddToCartButtons() {
  return (
    <div className="buttons row">
      <div className="col col-4">
      <label>amount</label>
      <input
        type="number"
        className="amount"
        defaultValue={1}
        step={0.5}
        min={0.5}
      />
      <span>k/g</span>
      </div>

      <div className="col">
      <label>special comments</label>
      <input
        type="text"
        className="freeText"
        placeholder="for special comments type here"
      />
      </div>

      <div className="row">
      <button type="button" className="addBtn btn btn-outline-warning">
        Add to Cart
      </button>
      </div>
    </div>
  );
}

export default AddToCartButtons;
