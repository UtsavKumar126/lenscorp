import React from 'react'

function AboutUs() {
  return (
    <div className='flex items-center justify-center'>
    <div className='mt-10 about px-[3rem] py-[2rem] '>
        <div className='text-7xl'>About Us</div>
        <div className='underLined w-[150px] h-[8px] mt-5'></div>
        <div className='flex px-[3rem] py-[2rem] justify-around items-center bg-[#e2f2ff] w-[90%] rounded-xl mt-10 hover:scale-110 transition-all duration-300 ease'>
            <div className='flex flex-col gap-[3rem] justify-start items-start max-w-[50%]'>
                <p className='text-4xl'>Welcome To LENS</p>
                <p>We put our hearts, souls and sweat into designing and developing custom AI - powered solutions for your business so you don't have to.</p>
                <button className='border-2 border-black px-5 py-3 rounded-xl hover:bg-black hover:text-white hover:scale-102'>Learn More</button>
            </div>
            <div className='max-w-[400px] max-h-[400px] overflow-hidden rounded-lg'>
                <img src="https://lenscorp.ai/_next/image?url=%2FImages%2FaboutLatest.webp&w=640&q=75" alt=""  className='max-w-[400px] object-none object-bottom' />
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutUs