import React from "react";
import CardComponent from "./Components/Card";
import "./ProductsPage.css";
import Form from "react-bootstrap/Form";

function ProductsPage() {
  return (
    <div>
      <header>
        <h1 className="mainTitle">
          🐮Butcher🐮
        </h1>
        <h3 className='subTitle'>
          All the rest just killing animals!
        </h3>
      </header>
      sort by:
      <div className="mb-3">
        <Form.Check
          inline
          label="name (A-Z)"
          name="sort"
          type="radio"
          id="name"
          defaultChecked={true}
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
