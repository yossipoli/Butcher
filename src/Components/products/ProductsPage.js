import React, { useState } from "react";
import CardComponent from "./Card";
import "./ProductsPage.css";
import Form from "react-bootstrap/Form";
import { Products } from "./../../DAL/api";

function ProductsPage() {
    let items = JSON.parse(sessionStorage.getItem("items")) || [];
    const [products, setProducts] = useState(items);
    async function getProducts() {
        items = await Products.data;
        setProducts(items);
        sessionStorage.setItem("items", JSON.stringify(items));
    }
    products.length === 0 && getProducts();

    function sortBy({ target: { id } }) {
        id = id.split("-");
        let toReverse = 1;
        if (id.length > 1) toReverse = -1;
        setProducts([
            ...products.sort((productA, productB) =>
                productA[id[0]] < productB[id[0]]
                    ? -1 * toReverse
                    : 1 * toReverse
            ),
        ]);
    }

    return (
        <div>
            <header>
                <h1 className="mainTitle">
                    <img src="/logo.png" alt="logo" />
                    Butcher
                </h1>

                <h3 className="subTitle">All the rest just killing animals!</h3>
            </header>
            <div className="sort">
                sort by:
                <div className="mb-3">
                    <Form.Check
                        inline
                        label="name (A-Z)"
                        name="sort"
                        type="radio"
                        id="name"
                        onClick={sortBy}
                    />
                    <Form.Check
                        inline
                        label="name (Z-A)"
                        name="sort"
                        type="radio"
                        id="name-desc"
                        onClick={sortBy}
                    />
                    <Form.Check
                        inline
                        label="price (low-high)"
                        name="sort"
                        type="radio"
                        id="price"
                        onClick={sortBy}
                    />
                    <Form.Check
                        inline
                        label="price (hight-low)"
                        name="sort"
                        type="radio"
                        id="price-desc"
                        onClick={sortBy}
                    />
                </div>
            </div>
            <div className="products">
                {products.length === 0
                    ? "LOADING..."
                    : products.map((product, index) => (
                          <CardComponent key={index} {...product} />
                      ))}
            </div>
        </div>
    );
}

export default ProductsPage;
