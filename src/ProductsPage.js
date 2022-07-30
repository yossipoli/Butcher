import React, { useState } from "react";
import CardComponent from "./Components/Card";
import "./ProductsPage.css";
import Form from "react-bootstrap/Form";
import {Products} from './DAL/api'

function ProductsPage() {
  let items = JSON.parse(sessionStorage.getItem("items")) || []
  const [products, setProducts]=useState(items)
  async function getProducts(){
    items = await Products.data
    setProducts(items)
    sessionStorage.setItem("items", JSON.stringify(items))
  }
  products.length===0 &&  getProducts()

  return (
    <div>
      <header >
        <h1 className="mainTitle">
          <img src="/logo.png"/>
          Butcher
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
        {products.length===0? "LOADING...":products.map((product, index)=><CardComponent key={index} {...product}/>)}
      </div>
    </div>
  );
}

export default ProductsPage;
