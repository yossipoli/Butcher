import React from 'react'
import Gallery from './Gallery'
import Description from './description'
// import FullDescription from './full-description'
import AddToCartButtons from '../AddToCartButtons'
import './index.css'

function ItemPage() {
  return (
    <div className='page'>
        <div className='row'>
            <div className='col productPictures'>
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