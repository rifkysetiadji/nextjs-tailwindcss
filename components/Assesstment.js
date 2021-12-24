import React from 'react'
import Image from 'next/image'
export default function Assesstment() {
    return (
        <div className='bg-white'>
        <div className='py-5  md:max-w-2xl lg:max-w-5xl mx-auto    md:mt-0 mt-10  relative'>
        <img src="/images/BoxTitle.png" className='absolute top-0 left-0 md:left-[-22px] w-10'/>
            <div className='flex items-center justify-between relative z-10 md:px-0 px-6'>
                <h1 className='font-display font-bold'>ORGANIZATION ASSESSMENT</h1>
                <a className='text-[#00a1ed] font-bold text-[16px]' href="#">More</a>
            </div>
            <div className='my-7 grid grid-cols-1 md:grid-cols-3 gap-[30px]'>
                <div className=' relative md:px-0 px-6'>
                    <h1 className='my-[10px] h-12 font-display font-bold text-[15px] text-[#333]'>Strategy and Performance Execution Excellence® Audit</h1>
                    <div className='flex space-x-6'>
                        <p className='w-[55%] text-[12px] font-display'>This self-assessment indicates the strategy management and execution capability in your organization.</p>
                        <div className='w-[100px] h-[80px] z-10  relative img-rounded'>
                            <Image objectFit='cover'  src="/images/strategy.png" layout='fill' alt=''/>
                        </div>
                    </div>
                    <a className='text-[#00a1ed] font-bold text-[14px]' href="#">Conduct Assestment</a>
                    <div className='absolute right-0 top-8'>
                        <Image src="/images/half-circle.png" objectFit='contain' width={90} height={150}/>
                    </div>
                </div>
                <div className=' relative md:px-0 px-6'>
                    <h1 className='my-[10px] h-12 font-display font-bold text-[15px] text-[#333]'>Digital Transformation Readiness Assessment</h1>
                    <div className='flex space-x-6'>
                        <p className='w-[55%] text-[12px] font-display'>This assessment indicates and ensuring the readiness of your organization in digital transformation.</p>
                        <div className='w-[100px] h-[80px] z-10  relative img-rounded'>
                            <Image objectFit='cover'  src="/images/strategy.png" layout='fill' alt=''/>
                        </div>
                    </div>
                    <a className='text-[#00a1ed] font-bold text-[14px]' href="#">Conduct Assestment</a>
                    <div className='absolute right-0 top-8'>
                        <Image src="/images/half-circle.png" objectFit='contain' width={90} height={150}/>
                    </div>
                </div>
                <div className=' relative md:px-0 px-6'>
                    <h1 className='my-[10px] h-12 font-display font-bold text-[15px] text-[#333]'>Process Maturity Level</h1>
                    <div className='flex space-x-6'>
                        <p className='w-[55%] text-[12px] font-display'>This assessment indicates the maturity level of process management in your organization.</p>
                        <div className='w-[100px] h-[80px] z-10  relative img-rounded'>
                            <Image objectFit='cover'  src="/images/strategy.png" layout='fill' alt=''/>
                        </div>
                    </div>
                    <a className='text-[#00a1ed] font-bold text-[14px]' href="#">Conduct Assestment</a>
                    <div className='absolute right-0 top-8'>
                        <Image src="/images/half-circle.png" objectFit='contain' width={90} height={150}/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
