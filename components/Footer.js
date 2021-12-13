import React from 'react'
import Image from 'next/image'
import Button from '@mui/material/Button'
export default function Footer() {
    return (
        <div className='mt-24 w-full bg-[#F7FAFC]'>
            <div className='md:max-w-2xl lg:max-w-5xl mx-auto  py-4 border'>
                <div className='flex justify-between items-center'>
                    <Image src="/images/onegml.png" width={430} height={90} alt="ONE GML"/>
                    <div className='flex items-center space-x-3 w-[400px]'>
                        <p className='text-[24px] font-bold'>Subscribe our latest insight and event</p>
                        <button className="py-4 px-6 font-semibold rounded-lg shadow-md text-white bg-sky-400 hover:bg-sky-700">
                            Subscribe
                        </button>
                        {/* <Button variant="contained" color="primary">Subscribe</Button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
