import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import {BsBagCheckFill} from 'react-icons/bs'
import { useRouter } from 'next/router'
import { useStateContext } from '../context/StateContext'
import { runConfetti } from '../lib/utils'

const success = () => {
    const {setCartItems,setTotalPrice,setTotalQuantities} = useStateContext();
    const [order, setOrder] = useState(null)

    useEffect(()=>{
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0)
        runConfetti();
    },[])
  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'><BsBagCheckFill/></p>
            <h2>Thank you for your order!</h2>
            <p className='email-msg'>Check your email for the reciept.</p>
            <p className='description'>
                For any queries, please email
                <a href="mailto:anmolsrivastava3000@gmail.com" className='email'>order@example.com</a>
            </p>
            <Link href="/">
                <button type='button' className='btn' width="300px">Continue shopping</button>
            </Link>
        </div>
    </div>
  )
}


export default success;