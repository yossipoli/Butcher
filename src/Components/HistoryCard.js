import './HistoryCard.css'
import Button from 'react-bootstrap/Button';
import React from 'react'

function HistoryCard() {
  return (
    <div className="row historyCard">
        <div className="col pic">
            <img src='/../photos/food/0.jpg'/>
        </div>
        <div className="col description">
        A hamburger made from a combination of beef shoulder, asado, and 20% fat for a perfect culinary experience. The meat from which the hamburger is made up is of particularly fine quality and is ground daily. You can choose another combination of beef/mutton/lamb cuts.
        </div>
        <div className="col-2 buttons">
            <Button variant="outline-success">Add to cart</Button>{' '}
            <Button variant="outline-danger">Remove from history</Button>{' '}
        </div>
    </div>
  )
}

export default HistoryCard