import React from 'react'
import Image from 'next/image'
export default function Services() {
    return (
        <div className='md:max-w-2xl lg:max-w-5xl mx-auto border h-[800px]  relative'>
            <img className='hidden md:block absolute w-[250px] bottom-0 left-0' src="/images/box-serve1.png"/>
            <img className='hidden md:block absolute w-[250px] bottom-0 right-0' src="/images/box-serve2.png"/>
            <div className='hidden md:flex justify-center items-center  relative'>
                <div className='mt-[120px]'>
                    <Image objectFit='contain'  src="/images/cs-bg.png" alt="cs" width={280} height={280}/>
                </div>
                <div className='absolute top-0 left-10 w-[310px] pt-[15px] pr-[15px] pb-[15px] pl-[60px]  bg-white hover:shadow-md rounded-md'>
                    <div className='relative'>
                        <div className='absolute left-[-100px]'>
                            <div className='w-[90px] h-[90px] relative'>
                                <Image  src="/images/cs-item1-d.png" layout="fill" alt="Purpose-Driven Strategy"/>

                            </div>
                        </div>
                        <h4 className='font-bold text-[16px] font-display'>Purpose Driven Strategy</h4>
                        <p className='font-display text-[12px] mt-2 mb-1 '>Build innovative, digital differentiated strategy and execution capability</p>
                        <a className='text-[#00a1ed] font-bold text-[14px]' href="#">More Detail</a>
                    </div>
                    
                </div>
                <div className='absolute top-0 right-10 w-[310px] pt-[15px] pr-[15px] pb-[15px] pl-[60px]  bg-white hover:shadow-md rounded-md'>
                    <div className='relative'>
                        <div className='absolute left-[-100px]'>
                            <div className='w-[90px] h-[90px] relative'>
                                <Image  src="/images/cs-item1-d.png" layout="fill" alt="Purpose-Driven Strategy"/>

                            </div>
                        </div>
                        <h4 className='font-bold text-[16px] font-display'>Execution-Biased Systems</h4>
                        <p className='font-display text-[12px] mt-2 mb-1 '>Develop an agile approach in initiative, project and process management, enabled by latest technology</p>
                        <a className='text-[#00a1ed] font-bold text-[14px]' href="#">More Detail</a>
                    </div>
                    
                </div>
                <div className='absolute top-[180px] left-[-20px] w-[310px] pt-[15px] pr-[15px] pb-[15px] pl-[60px]  bg-white hover:shadow-md rounded-md'>
                    <div className='relative'>
                        <div className='absolute left-[-100px]'>
                            <div className='w-[90px] h-[90px] relative'>
                                <Image  src="/images/cs-item1-d.png" layout="fill" alt="Purpose-Driven Strategy"/>

                            </div>
                        </div>
                        <h4 className='font-bold text-[16px] font-display'>Ambidextrous Leadership</h4>
                        <p className='font-display text-[12px] mt-2 mb-1 '>Develop leadership capability that inspire strategic exploration behaviors and disciplined exploitation for results</p>
                        <a className='text-[#00a1ed] font-bold text-[14px]' href="#">More Detail</a>
                    </div>
                    
                </div>
                <div className='absolute top-[180px] right-[-30px] w-[310px] pt-[15px] pr-[15px] pb-[15px] pl-[60px]  bg-white hover:shadow-md rounded-md'>
                    <div className='relative'>
                        <div className='absolute left-[-100px]'>
                            <div className='w-[90px] h-[90px] relative'>
                                <Image  src="/images/cs-item1-d.png" layout="fill" alt="Purpose-Driven Strategy"/>

                            </div>
                        </div>
                        <h4 className='font-bold text-[16px] font-display'>Empowered Structure</h4>
                        <p className='font-display text-[12px] mt-2 mb-1 '>Redesign your organization structure with clear roles, accountability and cross-functional ecosystem network orientation that drives growth</p>
                        <a className='text-[#00a1ed] font-bold text-[14px]' href="#">More Detail</a>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}
