import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className='uppercase text-[#00df9a] font-bold p-2'> Growing With Data Analytics</p>
        <h1 className='md:text-7xl sm:text-6xl text-5xl font-bold md:py-6'>Grow With Data.</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, Flexible Finacial For</p>
          <Typed strings={['BTB','BTC','SASS']} typeSpeed={120} backSpeed={140} loop className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor Your data analytics to increase the revenue for BTC, BTB, & SASS platforms.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero