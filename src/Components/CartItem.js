import './HistoryCard.css'
import Button from 'react-bootstrap/Button';
import React from 'react'
import AddToCartButtons from '../AddToCartButtons';
import './CartItem.css'

function CartItem() {
  return (
    <div className="row cartItem">
        <div className="col pic">
            <img src='/../photos/food/0.jpg'/>
        </div>
        <div className="col description">
        A hamburger made from a combination of beef shoulder, asado, and 20% fat for a perfect culinary experience. The meat from which the hamburger is made up is of particularly fine quality and is ground daily. You can choose another combination of beef/mutton/lamb cuts.
            <AddToCartButtons/>
        </div>
        <div className="col-1 buttons">
            <Button variant="outline-danger">Remove</Button>{' '}
        </div>
    </div>
  )
}

export default CartItem