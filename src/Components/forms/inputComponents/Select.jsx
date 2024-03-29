import Form from "react-bootstrap/Form";

function Select(props) {
  return (
    <>
      <label>{props.label}</label>
      <Form.Select name={props.name} onChange={props.validateInput} defaultValue={props.value}>
        <option  value="">Select {props.label}</option>
        {props.options.map((option, index) => (
          <option key={index.toString()}>
            {option.title}
          </option>
        ))}
      </Form.Select>
    </>
  );
}

export default Select;
