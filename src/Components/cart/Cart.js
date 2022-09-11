import {useState, useEffect} from 'react'
import CartItem from './CartItem'
import api from './../../DAL/api'

function Cart() {
  const [cart, setCart] = useState([])

  useEffect(()=>{
    async function getCartItems() {
      if (await api.checkCookie()) {
        setCart([... await api.getCustomerCart()])
      }
    } getCartItems()
  },[])

  return (
    <div>
        <h1>Cart</h1>
        {!cart.length? <h5>Your cart is Empty</h5> : cart.map((product, index)=> <CartItem key={index} {...product}/>)}
    </div>
  )
}

export default Cart