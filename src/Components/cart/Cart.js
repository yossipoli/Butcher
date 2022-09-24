import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import api from "./../../DAL/api";
import "./cart.css";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../CartContext";

function Cart() {
    const { userCart, setUserCart } = useContext(CartContext);
    const [totalBill, setTotalBill] = useState(0);

    useEffect(() => {
        setTotalBill(userCart.reduce((sum, product) => sum + product.amount * product.product.price,0));
    }, [userCart]);

    return (
        <div className="cart">
            <div className="titles">
                <h1>Cart</h1>
                <h3>TOTAL: {totalBill}₪</h3>
            </div>
            {!userCart.length ? (
                <h5>Your cart is Empty</h5>
            ) : (
                userCart.map((product, index) => (
                    <CartItem
                        key={index}
                        setCart={setUserCart}
                        totalBill={totalBill}
                        setTotalBill={setTotalBill}
                        product_amount={product.amount}
                        {...product.product}
                    />
                ))
            )}
            {userCart.length && (
                <div className="checkoutBtn">
                    <Button>CheckOut</Button>
                </div>
            )}
            <div className="total">
                <h3>TOTAL: {totalBill}₪</h3>
            </div>
        </div>
    );
}

export default Cart;
