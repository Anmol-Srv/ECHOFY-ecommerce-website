import React from 'react'
import { client } from '../lib/client'

import Product from '../components/Product'
// import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import  FooterBanner  from '../components/FooterBanner'


const Home = ({products,bannerData}) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>

      <div className='products-heading'>
        <h2>Best selling products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {products?.map((product) =>
          <Product key={product.id} product={product}/>
        )}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </>
  )
}


//if you export a function called getServerSideProps (Server Side Rendering) from a page, NEXT.js will render this page on each request using the data returned by getServerSideProps

//means that whatever we return here gopes to the Home() componenent as variables before rendering Home
export const getServerSideProps = async()=>{
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);
  const bannerquery = '*[_type=="banner"]'
  const bannerData = await client.fetch(bannerquery);

  return {
    props:{
      products, bannerData
    }
  }

}
export default Home