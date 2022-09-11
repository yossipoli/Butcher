import { useState, useEffect, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import {UserContext} from './../../UserContext'
import api from './../../DAL/api'

function PersonalDetails(/*{first_name, last_name, email, password, phone=false, city=false, address=false}*/) {
  const {userId} = useContext(UserContext)
  const [user, setUser] = useState(null)

  async function getUserDate(){
    setUser(await api.getCustomer(userId))
  }

  useEffect(()=>{
    getUserDate()
  },[])

  return (
    <div className="row">
      <div className='col'>
          <p> first name : {user?.first_name} </p>
          <p> last name : {user?.last_name} </p>
          <p> Email: {user?.email} </p>
          <p>Phone number : {user?.phone || "N/A"}</p>
          <p>City : {user?.city || "N/A"}</p>
          <p>Address :{user?.address || "N/A"}</p>
          
          <Button variant="outline-warning">Edit</Button>{' '}
          <Button variant="outline-warning">Change password</Button>{' '}
          
      </div>
        <div className="col">
          
        </div>
    </div>
  )
}

export default PersonalDetails