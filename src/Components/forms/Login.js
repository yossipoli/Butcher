import React from "react";
import FormComponent from "./Form";
// import { useNavigate } from 'react-router-dom'
import { UserContext } from './../../UserContext'
import { useContext } from "react";
import api from "../../DAL/api";

function Login() {
  // const navigate = useNavigate()
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
    const isLogged = await api.login(values)
    isLogged? window.location.replace('/') : alert('Incorrect email or password')
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
