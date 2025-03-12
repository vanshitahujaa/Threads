// import React from 'react'
import { IoMdClose } from 'react-icons/io';
// import { useState } from 'react';
import CartContent from '../Cart/CartContent';
import { useNavigate } from 'react-router-dom';


interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CartDrawer = ({ open, onClose }: CartDrawerProps) => {
  const navigate = useNavigate()
  const handleCheckOut = ()=>{
    navigate("/checkout")
  }
  
  return (
    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${open ? "translate-x-0" : "translate-x-full"} `}>
      {/* close button */}
      <div className='flex justify-end p-4'>
        <button onClick={onClose}>

        <IoMdClose className='h-6 w-6 text-gray-600 hover:text-gray-800'/>
        </button>
      </div>
    {/* cart contents with scrollable area  */}
    <div className='flex-grow p-4 overflow-y-auto'>
      <h2 className='text-xl font-semibold mb-3'>
        Your Cart
      </h2>
      {/* components for cart component */}
      <CartContent/>
    </div>
    {/* checkout button  */}
    <div className='p-4 bg-white sticky bottom-0'>
      <button onClick={handleCheckOut} className='w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition'>Checkout</button>

    <p className='text-gray-500 text-sm tracking-tighter mt-2 text-center'>
      Shipping, taxes, and discount codes are calculated at checkout.
    </p>
    </div>
    </div>
  )
}

export default CartDrawer
