import React from "react";
import FormComponent from "./Form/Form";

function Login() {
  const formInputs = {
    email: {
      id: 1,
      name: "email",
      label: "Email",
      placeholder: "Please enter your email",
      value: "",
      type: "text",
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
  return (
    <div>
      <FormComponent
        title="Login"
        subTitle="Please enter your personal details for login"
        formInputs={formInputs}
      />
    </div>
  );
}

export default Login;
