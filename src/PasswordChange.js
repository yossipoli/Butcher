const changePassword={
    oldPassword: {
        id: 1,
        name: "oldPassword",
        label: "Old Password",
        placeholder: "Please enter your current password",
        value: "",
        type: "password",
        validations: {
          required: true,
          pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
        },
        errors: [],
      },
      newPassword: {
        id: 1,
        name: "newPassword",
        label: "New Password",
        placeholder: "Please enter your new password",
        value: "",
        type: "password",
        validations: {
          required: true,
          minLength: 8,
        //   pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
        },
        errors: [],
      },
      confirmPassword: {
        id: 1,
        name: "confirmPassword",
        label: "Confirm Password",
        placeholder: "Please re-enter your new password",
        value: "",
        type: "password",
        validations: {
          required: true,
          selfsame: "newPassword",
        },
        errors: [],
      },
  }