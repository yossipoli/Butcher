import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Form.css";
import { useState } from "react";
import Input from "./Input";
import { validate } from "../common/validations";

function FormComponent({formInputs,title, subTitle}) {

  const [form, setForm] = useState(formInputs)

  const validateInput = ({ target: { name, value } }) => {
    // console.log(name, value)
    form[name].value = value;
    form[name].errors = validate(name, value, form[name].validations);
  
    setForm({ ...form });
  };

  const validateForm = () => {
    let isValid = true;
    for (const input in form) {
      form[input].errors = validate(input, form[input].value, form[input].validations)
      if (form[input].errors.length > 0) isValid = false;
    }
    return isValid;
  };

  const submitted = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const values = {}
      for (const input in form){
        values[input] = form[input].value
      }
      alert("Successful")
    }
  };


  return (
    <Alert variant="success">
      <Alert.Heading>{title}</Alert.Heading>
      <p>{subTitle}</p>
      <hr />
      <div className="mb-0">
        <Form>
          {Object.keys(form).map((input) => (
            <Input
              key={form[input].id}
              onBlur={validateInput}
              {...form[input]}
            />
          ))}

          <Button onClick={submitted} variant="primary">
            Submit
          </Button>
        </Form>
      </div>
    </Alert>
  );
}

export default FormComponent;
