import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
import VanillaTilt from 'vanilla-tilt';
import { useEffect } from 'react';

const Product = ({ product: { image, name, slug, price } }) => { //take the entire product as parameter and then extract each value as individual parameters to use
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll('.tilt'), {
      max: 25,
      speed: 400,
      glare: false,
    });
  }, []);
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card tilt data-tilt data-tilt-scale="1.1"'>
          <img src={urlFor(image && image[0])} alt="product image" width={250} height={250} className="product-image" />
          <p className='product-name'>{name}</p>
          <p className='product-price'>₹{price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product