import React from "react";
import FormComponent from "./Form";
import { useNavigate } from 'react-router-dom'
import { UserContext } from './../../UserContext'
import { useContext } from "react";

function Login() {
  const navigate = useNavigate()
  const {userId, setUserId} = useContext(UserContext)

  const formInputs = {
    email: {
      id: 1,
      name: "email",
      label: "Email",
      placeholder: "Please enter your email",
      value: "",
      type: "email",
      validations: {
        required: true,
        pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
      },
      errors: [],
    },
    password: {
      id: 2,
      name: "password",
      label: "Password",
      placeholder: "Please enter your password",
      value: "",
      type: "password",
      validations: {
        required: true,
      },
      errors: [],
    },
  };

  async function onSubmitFunc(values){
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify(values)
    }

    const logged = await fetch('http://localhost:4000/customers', requestOptions)
      .then(res=>res.json())

    logged? navigate('/') : alert('Incorrect email or password') 
  }

  return (
    <div>
      <FormComponent
        title="Login"
        subTitle="Don't have an account yet? click here!"
        onSubmitFunc={onSubmitFunc}
        formInputs={formInputs}
        link="/Register"
      />
    </div>
  );
}

export default Login;
