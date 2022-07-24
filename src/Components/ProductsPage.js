import React from "react";
import CardComponent from "./Card";
import "./ProductsPage.css";
import Form from "react-bootstrap/Form";

function ProductsPage() {
  return (
    <div>
      sort by:
      <div className="mb-3">
        <Form.Check
          inline
          label="name (A-Z)"
          name="sort"
          type="radio"
          id="name"
          checked
        />
        <Form.Check
          inline
          label="name (Z-A)"
          name="sort"
          type="radio"
          id="nameDesc"
        />
        <Form.Check
          inline
          label="price (low-high)"
          name="sort"
          type="radio"
          id="price"
        />
        <Form.Check
          inline
          label="price (hight-low)"
          name="sort"
          type="radio"
          id="priceDesc"
        />
      </div>
      <div className="products">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  );
}

export default ProductsPage;
