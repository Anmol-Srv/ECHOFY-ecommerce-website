import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook, AiFillAppstore } from 'react-icons/ai'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='footer-container'>
      <p>
        2023 ECHOFY All rights reserved
      </p>
      <p className='icons'>
        <AiFillAppstore/>
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillFacebook/>
      </p>
    </div>
  )
}

export default Footer