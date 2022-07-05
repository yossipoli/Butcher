import React from 'react'
import Gallery from './Gallery'
import ShortDescription from './short-description'
import FullDescription from './full-description'

function ItemPage() {
  return (
    <div className='page'>
        <div className='row'>
            <div className='col'>
                <Gallery/>
            </div>
            <div className='col'>
                <ShortDescription/>
            </div>
        </div>
        <div className='row'>
            <FullDescription/>
        </div>

    </div>
  )
}

export default ItemPage