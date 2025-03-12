// import React from 'react'
import { TbBrandMeta } from 'react-icons/tb'
import {IoLogoInstagram} from 'react-icons/io5'
import { RiTwitterXLine } from 'react-icons/ri'

const Topbar = () => {
  return (
    <div className='bg-[#ea2e0e] text-white'>
        <div className='container mx-auto flex justify-between items-center px-3 py-1.5'>
            <div className='md:flex items-center space-x-4 hidden '>
                <a href="#" className='hover:text-gray-300'>
                    <TbBrandMeta className='h-5 w-5'/>
                </a>
                <a href="#" className='hover:text-gray-300'>
                    <IoLogoInstagram className='h-5 w-5'/>
                </a>
                <a href="#" className='hover:text-gray-300'>
                    <RiTwitterXLine className='h-5 w-5'/>
                </a>
            </div>
            <div className='text-sm text-center flex-grow'>
                <span>We Ship Worldwide - Fast and Relaible shipping!</span>
            </div>
            <div className='md:block text-sm hidden'>
                <a href="tel:+918950851680" className='hover:text-gray-300'>
                    +91 8950851680
                </a>
            </div>
        </div>
    </div>
  )
}

export default Topbar