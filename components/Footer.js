import React from 'react'
import Image from 'next/image'
export default function Footer() {
    return (
        <div className='md:px-0 px-6 pt-20 pb-10 w-full bg-[#F7FAFC]'>
            <div className='md:max-w-2xl lg:max-w-5xl mx-auto '>
                <div className='flex-col md:flex-row flex justify-between items-start md:items-center md:space-y-0 space-y-5'>
                    {/* <div > */}
                        <img className='relative md:w-[400px] md:h-[84.23px] w-[200px] h-[40px]' src="/images/onegml.webp"  alt="ONE GML" />
                    {/* </div> */}
                    <div className='flex items-center space-x-3 md:w-[400px] w-full'>
                        <p className=' md:text-[24px] text-[12px] text-[#252525] font-bold font-display'>Subscribe our latest insight and event</p>
                        <button className="md:py-4 md:px-6 py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-sky-500 hover:bg-sky-700">
                            Subscribe
                        </button>
                    </div>
                </div>
                <br/>
                <div className='flex justify-between items-end flex-wrap space-y-4'>
                    <p className='hidden md:inline text-[12px] md:text-[14px] font-display'>© 2021 ONE GML Consulting</p>
                    <a href="#" className='text-[12px] md:text-[14px] font-display'>CAREERS</a>
                    <a href="#" className='text-[12px] md:text-[14px] font-display'>ABOUT US</a>
                    <a href="#" className='text-[12px] md:text-[14px] font-display'>CONTACT US</a>
                    <a href="#" className='text-[12px] md:text-[14px] font-display'>CALENDAR</a>
                    <p className='text-[12px] md:text-[14px] font-display'>FOLLOW US</p>
                    <div className='hidden md:flex  space-x-5'>
                        <a href="#"><Image alt="linkedin" src="/images/vector-linkedin.png" width={30} height={30}/></a>
                        <a href="#"><Image alt="fb" src="/images/vector-fb.png" width={30} height={30}/></a>
                        <a href="#"><Image alt="ig" src="/images/vector-ig.png" width={30} height={30}/></a>
                    </div>
                </div>
                <br className='block sm:hidden'/>
                <div className='flex sm:hidden  space-x-5'>
                    <a href="#"><Image alt="linkedin" src="/images/vector-linkedin.png" width={30} height={30}/></a>
                    <a href="#"><Image alt="linkedin" src="/images/vector-fb.png" width={30} height={30}/></a>
                    <a href="#"><Image alt="linkedin" src="/images/vector-ig.png" width={30} height={30}/></a>
                </div>
                <br className='block sm:hidden'/>
                <div className='block sm:hidden text-center'>
                <p className=' text-[12px] font-display'>© 2021 ONE GML Consulting</p>

                </div>
            </div>
        </div>
    )
}
