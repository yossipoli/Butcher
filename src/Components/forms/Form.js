import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Form.css";
import { useState } from "react";
import Input from "./Input";
import { validate } from "../../Common/validations";
import { Link } from 'react-router-dom'

function FormComponent({formInputs , onSubmitFunc, link, title, subTitle="" }) {
  const [form, setForm] = useState({...formInputs});

  const validateInput = ({ target: { name, value } }) => {
    form[name].value = value;
    form[name].errors = validate(name, value, form);

    setForm({ ...form });
  };

  const validateForm = () => {
    let isValid = true;
    for (const input in form) {
      form[input].errors = validate(
        form[input].name,
        form[input].value,
        form
      );
      if (form[input].errors.length > 0) isValid = false;
    }
    return isValid;
  };

  const submitted = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const values = {};
      for (const key in form) {
        values[key] = form[key].value;
      }
      onSubmitFunc(values)
    }
    setForm({ ...form })
  };

  const removeErrors = ({ target: { name } }) => {
    form[name].errors = []
    setForm({ ...form });
  }

  return (
    <Alert variant= "success">
      <Alert.Heading className="formHead">{title}</Alert.Heading>
      <p className="formHead" ><Link to={link}>{subTitle}</Link></p>
      <hr />
      <div className="mb-0">
        <Form>
          {Object.keys(form).map((input) => (
            <Input
              key={form[input].id}
              validateInput={validateInput}
              removeErrors={removeErrors}
              {...form[input]}
            />
          ))}

          <Button onClick={submitted} variant="success">
            Submit
          </Button>
        </Form>
      </div>
    </Alert>
  );
}

export default FormComponent;
