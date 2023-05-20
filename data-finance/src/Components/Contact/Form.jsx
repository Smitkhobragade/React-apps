import React from 'react'

const Form = () => {
  return (
    <div className='w-screen py-[4rem] px-4 flex flex-col justify-center mx-auto'>
      
      <form action="" className='text-[#00df9a] w-[50%] flex flex-col justify-center content-center mx-auto'>
      <h2 className='text-[#00df9a] text-center text-5xl mb-10'>Contact us Page</h2>
        <div className='flex flex-col mt-1'>
          <labe className='text-xl'>Full name</labe>
          <input type="text" placeholder='Enter your name' className='text-[#fff] bg-transparent border border-[#00df9a] rounded p-3 focus:outline-none'/>
        </div>
        <div className='flex flex-col mt-1'>
          <label className='text-xl'>Email</label>
          <input type="text" placeholder='Enter your Email'className='text-[#fff] bg-transparent border border-[#00df9a] rounded p-3 focus:outline-none'/>
        </div>
        <div className='flex flex-col mt-1'>
          <label className='text-xl'>Message</label>
          <textarea name="" id="" cols="30" rows="10" placeholder='Enter Message' className='text-[#fff] bg-transparent border border-[#00df9a] rounded p-3 focus:outline-none'></textarea>
        </div>
      </form>
      
    </div>
  )
}

export default Form