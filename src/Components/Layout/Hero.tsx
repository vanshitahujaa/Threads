// import React from 'react'
import heroImg from '/src/assets/rabbit-hero.webp'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <section className='relative'>
        <img src={heroImg} alt="Threads" className='w-full h-[400px] md:h-[600px] lg:h-[650px] object-cover' />
        <div className="absolute inset-0  bg-opacity-5  flex items-center justify-center ">
            <div className='text-center text-white p-6 '>
                <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">
                    Vacation
                    <br />
                    Ready
                </h1>
                <p className='text-sm tracking-tighter md:text-lg mb-6'>
                    Explore our Vacation ready outfits with fast worldwide shipping.

                </p>
                <Link to="#" className='bg-white text-gray-950 px-6 py-2 rounded-sm text-lg'>
                Shop Now
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Hero