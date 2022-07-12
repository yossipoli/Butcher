import React from 'react'
import InputComponent from './Components/InputComponent'
import Select from './Components/Select'

function Input(props) {
  // console.log(props)
  return (
    <div>
        {props.type === 'Select'
        ? <Select key={props.id} {...props}/>
        : <InputComponent key={props.id} {...props}/>
         }
    </div>
  )
}

export default Input

// //first, NOT the inside input props 
// key = {form[input].id} 
// onBlur = {validate}
// errors = {form[input].errors}
// // inside the input props:
// {...form[input]}