import React from 'react'

function ShortDescription() {
  return (
    <div className="col">
      <h1>Item35</h1>

      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus officia quis ratione maxime autem? Eveniet repellat corporis, rerum qui, debitis repellendus voluptate adipisci aliquid amet mollitia nostrum reprehenderit iusto enim!</p>
      <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus officia quis ratione maxime autem? Eveniet repellat corporis, rerum qui, debitis repellendus voluptate adipisci aliquid amet mollitia nostrum reprehenderit iusto enim!</p>
      <div className="buttons">
        <button type="button" className="btn btn-outline-danger">❤</button>
        <button type="button" className="btn btn-outline-success greener">Buy Now</button>
        <button type="button" className="btn btn-outline-warning">Add to Cart</button>
        {/* <button type="button" class="btn btn-outline-light">Light</button> */}

      </div>
    </div>
  )
}

export default ShortDescription