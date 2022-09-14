import {useState, useEffect} from 'react'
import CartItem from './CartItem'
import api from './../../DAL/api'
import './cart.css'
import { Button } from 'react-bootstrap'

function Cart() {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    async function getCartItems() {
      if (await api.checkCookie()) {
        setCart([... await api.getCustomerCart()])
      }
    } getCartItems()
  },[])

  return (
    <div className='cart'>
      <div className="titles">
        <h1>Cart</h1>
        <h3>TOTAL: {total}₪</h3>
      </div>
        {!cart.length? <h5>Your cart is Empty</h5> : cart.map((product, index)=> <CartItem key={index} {...product} bill={total} setBill={setTotal}/>)}
        <div className='checkoutBtn'>
          <Button>CheckOut</Button>
        </div>
        <div className="total">
          <h3>
            TOTAL: {total}₪
          </h3>
        </div>
    </div>
  )
}

export default Cart