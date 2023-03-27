import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
        <div className='bg'>
      <Head>  
        <title>MERNkart Online</title>
      </Head>
      <header>
        <Navbar />
      </header>

      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
      </div>
    </div>
  )
}

export default Layout