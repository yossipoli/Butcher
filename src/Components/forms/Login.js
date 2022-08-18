import React from "react";
import FormComponent from "./Form";

function Login() {
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

  function onSubmitFunc(values){
    for (const value in values){
      console.log(value,":",values[value])
    }
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
