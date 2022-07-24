import React from 'react'
import Gallery from './Gallery'
import Description from './description'
// import FullDescription from './full-description'
import AddToCartButtons from '../AddToCartButtons'

function ItemPage() {
  return (
    <div className='page'>
        <div className='row'>
            <div className='col'>
                <Gallery/>
            </div>
            <div className='col'>
                <Description/>
                <AddToCartButtons/>
            </div>
        </div>
    </div>
  )
}

export default ItemPage