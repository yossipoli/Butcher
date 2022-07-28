import React from 'react'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

function PersonalDetails({first_name, last_name, email, password, phone=false, city=false, address=false}) {
  
  return (
    <div className="row">
      <div className='col'>
          <p> first name : {first_name} </p>
          <p> last name : {last_name} </p>
          <p> Email: {email} </p>
          <p>Phone number : {phone || "N/A"}</p>
          <p>City : {city || "N/A"}</p>
          <p>Address :{address || "N/A"}</p>
          
          <Button variant="outline-warning">Edit</Button>{' '}
          <Button variant="outline-warning">Change password</Button>{' '}
          

      </div>
        <div className="col">
          
        </div>
    </div>
  )
}

export default PersonalDetails