import React from 'react'

export default function Schedule() {
    return (
        <div className="w-full h-[220px]  bg-[url('/images/schedule-bg.png')] ">
           <div className='md:max-w-2xl lg:max-w-5xl h-full  flex justify-between items-center md:mx-auto mx-5'>
                <h1 className='font-display font-bold w-[150px] md:w-[400px] text-white text-[20px] md:text-[32px]'>How we can help your organization?</h1>
                <button className="md:py-5 md:px-7 py-5 px-4 font-bold rounded-lg shadow-md text-sky-500 bg-white hover:bg-gray-100">
                    Schedule Meeting
                </button>
           </div>
        </div>
    )
}
