import React from 'react'

function GetinTouch() {
  return (
    <div className='flex justify-between items-center px-[3rem] py-[3rem]'>
        <div className='p-[3rem] flex flex-col gap-[2rem]'>
            <div className='text-7xl'>Get in Touch With Us.</div>
            <div className='text-2xl'>Send your enquiry now!</div>
            <form action="" className='px-2 py-1 bg-[#ededed] w-[90%] flex justify-between items-center rounded-3xl'>
                <input type="text" placeholder='Enter Email Address' className='w-[70%] bg-[#ededed] pl-[1rem]'/>
                <button className='px-3 py-2 rounded-3xl m-1 bg-[#272e5c] text-white'>Request Demo</button>
            </form>
        </div>
        <img src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap_2_white.1bdb3808.png&w=750&q=75" alt="" />
    </div>
  )
}

export default GetinTouch