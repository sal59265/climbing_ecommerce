import React from 'react'
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <div>
      <div>
        <p>Small Text</p>
        <h3>Mid Text</h3>
        <img src='' alt='climbingShoes'/>
        <div>
          <Link href="/product/ID">
            <button type='button'>BUTTON TEXT</button>
          </Link>
          <div>
            <h5>Description</h5>
            <p>DESCRIPTION</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner