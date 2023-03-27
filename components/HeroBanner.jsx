import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
import VanillaTilt from 'vanilla-tilt';
import { useEffect } from 'react';


const HeroBanner = ({ heroBanner , pr}) => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll('.tilt'), {
      max: 25,
      speed: 400,
      glare: false,
    });
  }, []);
  return (
    <div className='hero-banner-container '>
      <div>
        <p className='beats-solo'>
          {heroBanner.smallText}
        </p>
        <h3>
          {heroBanner.midText}
        </h3>
        <h1> {heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="headphones" className='hero-banner-image' />
      </div>
      <div>
        <Link href={`/product/${pr[0].slug.current}`}>
          <button type='button'>{heroBanner.buttonText}</button>
        </Link>
        <div className='desc'>
          <h5>Description</h5>
          <p> {heroBanner.desc}</p>
        </div>
      </div>
    </div>


  )
}

export default HeroBanner