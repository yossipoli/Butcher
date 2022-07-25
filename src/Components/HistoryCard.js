import './HistoryCard.css'
import Button from 'react-bootstrap/Button';
import React from 'react'

function HistoryCard() {
  return (
    <div className="row historyCard">
        <div className="col picture">
            <img src='/../photos/burger/1.jpg'/>
        </div>
        <div className="col description">
          <h5>Burger</h5>
        A hamburger made from a combination of beef shoulder, asado, and 20% fat for a perfect culinary experience. The meat from which the hamburger is made up is of particularly fine quality and is ground daily. You can choose another combination of beef/mutton/lamb cuts.
        </div>
        <div className="col-2 buttons">

          <div className="row">
          <div>
          <strong>17/12/1998</strong>
        </div>
            <Button variant="outline-success">Add to cart</Button>{' '}
          </div>
          <div className="row">
            <Button variant="outline-danger">Remove from history</Button>{' '}
          </div>
        <hr/>

        <div>
           <strong>amount:</strong> 2k/g 
        </div>
        <div>
           <strong>price:</strong> 70₪/kg
        </div>
        </div>
    </div>
  )
}

export default HistoryCard