import React, { useState } from "react";
// import { Col, Form } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";

function MultiSelectComponent(props) {
  const [selected, setSelected] = useState([]);
  const options = props.options

  function handleChange(){
    
  }

  return (
    <div>
      <h6>{props.label}</h6>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        onBlur ={props.validateInput}
      />
  </div>
  );
}

export default MultiSelectComponent