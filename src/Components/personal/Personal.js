import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import History from "./../history/History";
import Cart from "./../cart/Cart";
import PersonalDetails from "./../personal/PersonalDetails";
import {useState} from 'react'
import './Personal.css'
import { Link , Outlet } from 'react-router-dom'

function Personal() {

  // const pages={
  //   personalDetails: false,
  //   history: false,
  //   cart: false,
  // }

  // const [showPage, setShowPage] = useState({...pages, ["personalDetails"]:true})

  // function changePage({target:{id}}){
  //   setShowPage({...pages, [id]:true})
  // }

  return (
    <div>
      <h1>Personal Page</h1>

      <div className="row start-position">
        <div className="col-3 leftCol">
          <ListGroup as="ul">
            <Link to="personal-details"> <ListGroup.Item as="li" className="personalOption" id="personalDetails" > Personal details </ListGroup.Item> </Link>
            <Link to="cart"> <ListGroup.Item as="li" className="personalOption" id="cart" > My Cart </ListGroup.Item> </Link> 
            <Link to="history"><ListGroup.Item as="li" className="personalOption" id="history" > Orders history </ListGroup.Item> </Link>
          </ListGroup>
        </div>

        <div className="col-9">
          <div className="row">
            <Outlet/>
            {/* {showPage.personalDetails && <PersonalDetails/>}
            {showPage.cart && <Cart/>}
            {showPage.history && <History/>} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;
