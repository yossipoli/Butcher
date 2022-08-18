import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import History from "./../history/History";
import Cart from "./../cart/Cart";
import PersonalDetails from "./../personal/PersonalDetails";
import {useState} from 'react'
import './Personal.css'

function Personal() {

  const pages={
    personalDetails: false,
    history: false,
    cart: false,
  }

  const [showPage, setShowPage] = useState({...pages, ["personalDetails"]:true})

  function changePage({target:{id}}){
    setShowPage({...pages, [id]:true})
  }

  return (
    <div>
      <h1>Personal Page</h1>

      <div className="row start-position">
        <div className="col-3 leftCol">
          <ListGroup as="ul">
            <ListGroup.Item as="li" className="personalOption" id="personalDetails" onClick={changePage}> Personal details </ListGroup.Item>
            <ListGroup.Item as="li" className="personalOption" id="cart" onClick={changePage}> My Cart </ListGroup.Item>
            <ListGroup.Item as="li" className="personalOption" id="history" onClick={changePage}> Orders history </ListGroup.Item>
          </ListGroup>
        </div>

        <div className="col-9">
          <div className="row">
            {showPage.personalDetails && <PersonalDetails/>}
            {showPage.cart && <Cart/>}
            {showPage.history && <History/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;
