import React from "react";
import "./Register.css";
import Form from "./Form";
import api from "../../DAL/api";
import { useNavigate } from "react-router-dom";

function Register({
    firstName = "",
    lastName = "",
    email = "",
    password = "",
}) {
    const navigate = useNavigate();

    const formInputs = {
        firstName: {
            id: 1,
            name: "firstName",
            label: "First name",
            placeholder: "Please enter your first name",
            value: firstName,
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
            value: lastName,
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
            value: email,
            type: "email",
            validations: {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            },
            errors: [],
        },
        // confirmEmail: {
        //     id: 4,
        //     name: "confirmEmail",
        //     label: "Confirm Email",
        //     placeholder: "Please re-enter your email for validation",
        //     value: email,
        //     type: "email",
        //     validations: {
        //         required: true,
        //         selfsame: "email",
        //     },
        //     errors: [],
        // },
        password: {
            id: 5,
            name: "password",
            label: "Password",
            placeholder: "Please enter a password",
            value: password,
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
            value: password,
            type: "password",
            validations: {
                required: true,
                selfsame: "password",
            },
            errors: [],
        },

        // agree: {
        //   id: 7,
        //   name: "agree",
        //   label: "Agree",
        //   value: false,
        //   type: "checkbox",
        //   validations: {
        //     required: true,
        //   },
        //   errors: [],
        // },
    };

    const onSubmitFunc = async(values) => {
        const registrationDetails = {
            first_name: values.firstName,
            last_name: values.lastName,
            email: values.email,
            password: values.password,
        };
        const isNewEmail = await api.register(registrationDetails);
        console.log(isNewEmail)
        isNewEmail
            ? alert("An confirmation email sent to your email inbox")
            : alert("This email already registered and in use");
    };

    return (
        <div>
            <Form
                title="Register"
                subTitle="Already registered? click here!"
                formInputs={formInputs}
                onSubmitFunc={onSubmitFunc}
                link="/login"
            />
        </div>
    );
}

export default Register;
