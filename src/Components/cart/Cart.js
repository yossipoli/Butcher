import {useState, useEffect} from 'react'
import CartItem from './CartItem'
import api from './../../DAL/api'
import './cart.css'
import { Button } from 'react-bootstrap'

function Cart() {
  const [cart, setCart] = useState([])
  let [totalBill, setTotalBill] = useState(0)

  useEffect(()=>{
    (async function getCartItems() {
      if (await api.checkCookie()) {
        const newCart = [...await api.getCustomerCart()]
        setCart(newCart)
        setTotalBill(newCart.reduce((sum, product)=> sum + (product.amount * product.product.price), 0))
      }
    })()
  },[])

  return (
    <div className='cart'>
      <div className="titles">
        <h1>Cart</h1>
        <h3>TOTAL: {totalBill}₪</h3>
      </div>
        {!cart.length? <h5>Your cart is Empty</h5> : cart.map((product, index)=> <CartItem key={index} totalBill={totalBill} setTotalBill={setTotalBill} product_amount={product.amount} {...product.product}/>)}
        <div className='checkoutBtn'>
          <Button>CheckOut</Button>
        </div>
        <div className="total">
          <h3>
            TOTAL: {totalBill}₪
          </h3>
        </div>
    </div>
  )
}

export default Cart