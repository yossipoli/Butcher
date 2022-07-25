import React from "react";
import FormComponent from "./Components/Form";

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
    // hobbies: {
    //   id: 3,
    //   name: "hobbies",
    //   label: "what is your hobbies? ",
    //   value: "",
    //   type: "multiSelect",
    //   options : [{value:1, label:"1"},{value:2, label:"2"},{value:3, label:"3"},{value:5, label:"2"},{value:4, label:"3"},],
    //   validations: {

    //   },
    //   errors: [],
    // },
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

  function success(values){
    for (const value in values){
      console.log(value,":",values[value])
    }
  }

  return (
    <div>
      <FormComponent
        title="Login"
        subTitle="Please enter your personal details for login"
        onSubmitFunc={success}
        formInputs={formInputs}
      />
    </div>
  );
}

export default Login;
