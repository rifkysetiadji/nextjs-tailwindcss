import React from 'react'
import Image from 'next/image'
export default function Join() {
    return (
        <div className=' md:h-[290px] shadow-lg bg-white my-10 relative md:block flex flex-col '>
            <div className='md:max-w-2xl h-full lg:max-w-5xl mx-auto  flex flex-col justify-center relative'>
                <div className=' md:w-[500px] w-full md:px-0 md:pb-0 pb-10 px-6 relative'>
                    <h1 className='font-display md:text-[32px] text-[28px] my-[21px] text-center md:text-left text-[#333] font-bold relative z-10'>Join ONE GML</h1>
                    <p className=' font-display md:text-[16px] text-[14px] my-[16px] relative z-10'>We seek a broad range of skills—from digital to interpersonal to analytical. Join us to make a lasting impact on our nation, industries, and society.</p>
                    <a className='text-[#00a1ed] font-bold text-[14px] font-display flex items-center gap-x-3 relative z-10' href="#">
                        Careers
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </a>
                    <div className='absolute md:block hidden top-[-30px] left-[-80px]'>
                        <Image src="/images/join-box1.png" width={80} height={250} />
                    </div>
                    <div className='absolute md:block hidden top-[-30px] right-[-40px] '>
                        <Image src="/images/join-box2.png" width={80} height={250} />
                    </div>
                    <div className='absolute md:hidden block top-14 left-0 '>
                        <Image src="/images/join-box1.png" width={40} height={150} />
                    </div>
                    <div className='absolute md:hidden block top-14 right-0 '>
                        <Image src="/images/join-box2.png" width={40} height={150} />
                    </div>
                </div>
                
            </div>
            
            <div className='md:w-[600px] md:h-[290px] w-full h-[200px] right-0 top-0  md:absolute block '>
                <div className='w-full h-full relative'>
                    <Image src="/images/join-walpaper.png" layout='fill' objectFit='cover'/>
                </div>
            </div>
        </div>
    )
}
