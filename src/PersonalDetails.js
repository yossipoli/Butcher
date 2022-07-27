import React from 'react'
import Button from 'react-bootstrap/Button';

function PersonalDetails({name, email, password, phone=false, city=false, address=false}) {
  
  return (
    <div className="row">
      <div className='col'>
          <p> Full name : {name} </p>
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