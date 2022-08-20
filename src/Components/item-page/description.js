import React from 'react'

function Description({name, description, category, price}) {
  return (
    <div className="col">
      <h1>{name}</h1>
        <p>
          {description}
        </p>
        <p>
          {price}₪ for 1kg
        </p>
          
    </div>
  )
}

export default Description