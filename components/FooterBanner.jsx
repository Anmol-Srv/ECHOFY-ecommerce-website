import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
import { useEffect } from 'react'

const FooterBanner = ({ footerBanner: { discount,product, largeText1, largeText2, saleTime, smallText, midText, buttonText, image, desc },pr}) => {

  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{discount} OFF</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className='right'>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${pr[0].slug.current}`}>
            <button type='button'>{buttonText}</button>
          </Link>
        </div>
        <img src={urlFor(image)} alt="product image" className='footer-banner-image' />
      </div>
    </div>
  )
}

export default FooterBanner
