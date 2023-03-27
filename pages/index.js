import React from 'react'
import { client } from '../lib/client'

import Product from '../components/Product'
// import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import FooterBanner from '../components/FooterBanner'
import product from '../mernkart/schemas/product'


const Home = ({ products, bannerData, footerBannerData,fp,bp}) => {

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} pr={bp} />

      <div className='products-heading'>
        <h2>Best selling products</h2>
        <p>Experience sound like never before</p>
      </div>

      <div className='products-container'>
        {products?.map((product) =>
          <Product key={product._id} product={product} />
        )}
      </div>

      <FooterBanner footerBanner={footerBannerData.length && footerBannerData[0]} pr={fp}/>
    </>
  )
}


//if you export a function called getServerSideProps (Server Side Rendering) from a page, NEXT.js will render this page on each request using the data returned by getServerSideProps

//means that whatever we return here gopes to the Home() componenent as variables before rendering Home
export const getServerSideProps = async () => {
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);
  const bannerquery = '*[_type=="banner"]'
  const bannerData = await client.fetch(bannerquery);
  const footerbannerquery = '*[_type=="footerBanner"]'
  const footerBannerData = await client.fetch(footerbannerquery);

  
  const fpname=footerBannerData[0].product;
  const fp = await client.fetch(`*[_type == 'product' && name == $fpname]{
    name,
    slug,
    price,
    details,
    'imageUrl': image[0].asset->url
  }`,
  { fpname });
  const bpname=bannerData[0].product;
  const bp = await client.fetch(`*[_type == 'product' && name == $bpname]{
    name,
    slug,
    price,
    details,
    'imageUrl': image[0].asset->url
  }`,
  { bpname });

  return {
    props: {
      products, bannerData, footerBannerData,fp,bp
    }
  }

}
export default Home