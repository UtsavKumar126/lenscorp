import React from 'react'

function Hero() {
  return (
    <div className='backGr px-[300px] py-[200px]'>
        <h1 className='font-raleway text-6xl w-[50%] font-bold'>We are at the Forefront of AI</h1>
        <p className='font-raleway text-xl w-[50%] mt-[2rem]'>From Conserving Wildlife to Automatically Generating Caricatures–<span className='font-bold mt-[1rem]'> We Do It All</span></p>
        <button className='mt-[2rem] border-2 border-black px-8 py-2 text-[18px] rounded-lg bg-black text-white hover:bg-white hover:text-black transition-all ease-in-out duration-500 hover:scale-110'>Learn More</button>
    </div>
  )
}

export default Hero