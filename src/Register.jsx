import React from 'react'
import './Register.css'
import Form from './Components/Form'

function Register() {
  const formInputs = {
    firstName: {
      id: 1,
      name: "firstName",
      label: "First name",
      placeholder: "Please enter your first name",
      value: "",
      type: "text",
      validations: {
        required: true,
        minLength: 2,
      },
      errors: [],
    },
    lastName: {
      id: 2,
      name: "lastName",
      label: "Last name",
      placeholder: "Please enter your last name",
      value: "",
      type: "text",
      validations: {
        required: true,
        minLength: 2,
      },
      errors: [],
    },
    email: {
      id: 3,
      name: "email",
      label: "Email",
      placeholder: "Please enter your email",
      value: "",
      type: "email",
      validations: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      },
      errors: [],
    },
    confirmEmail: {
      id: 4,
      name: "confirmEmail",
      label: "Confirm Email",
      placeholder: "Please re-enter your email for validation",
      value: "",
      type: "email",
      validations: {
        required: true,
        selfsame: "email"
      },
      errors: [],
    },
    password: {
      id: 5,
      name: "password",
      label: "Password",
      placeholder: "Please enter a password",
      value: "",
      type: "password",
      validations: {
        required: true,
        minLength: 8,
      },
      errors: [],
    },
  
    confirmPassword: {
      id: 6,
      name: "confirmPassword",
      label: "Confirm password",
      placeholder: "Please re-enter your password for validation",
      value: "",
      type: "password",
      validations: {
        required: true,
        selfsame: "password"
      },
      errors: [],
    },
  
    agree: {
      id: 7,
      name: "agree",
      label: "Agree",
      value: false,
      type: "checkbox",
      validations: {
        required: true,
      },
      errors: [],
    },
  };

  const onSubmitFunc = (values) => {
    alert("Welcome")
  };

  return (
    <div>
          <Form
          title= "Register"
          stubTitle = "Please enter your personal details"
          formInputs = {formInputs}
          onSubmitFunc = {onSubmitFunc}
          />
    </div>
  )
}

export default Register
