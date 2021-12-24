import React from 'react'
import Image from 'next/image'
import cs from './cs.json'


export default function Services() {
    return (
        <div className='md:max-w-2xl lg:max-w-5xl mx-auto border md:h-[800px] md:mt-0 mt-10  relative'>
            <img className='hidden md:block absolute w-[250px] bottom-0 left-0' src="/images/box-serve1.png"/>
            <img className='hidden md:block absolute w-[250px] bottom-0 right-0' src="/images/box-serve2.png"/>
            
            {/* service desktop */}
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
                <div className='absolute top-[380px] left-10 w-[310px] pt-[15px] pr-[15px] pb-[15px] pl-[60px]  bg-white hover:shadow-md rounded-md'>
                    <div className='relative'>
                        <div className='absolute left-[-100px]'>
                            <div className='w-[90px] h-[90px] relative'>
                                <Image  src="/images/cs-item1-d.png" layout="fill" alt="Purpose-Driven Strategy"/>

                            </div>
                        </div>
                        <h4 className='font-bold text-[16px] font-display'>Adhocracy Culture</h4>
                        <p className='font-display text-[12px] mt-2 mb-1 '>Assess, design and internalize a new culture that promotes innovation and disciplined strategy execution</p>
                        <a className='text-[#00a1ed] font-bold text-[14px]' href="#">More Detail</a>
                    </div>
                    
                </div>
                <div className='absolute top-[380px] right-10 w-[310px] pt-[15px] pr-[15px] pb-[15px] pl-[60px]  bg-white hover:shadow-md rounded-md'>
                    <div className='relative'>
                        <div className='absolute left-[-100px]'>
                            <div className='w-[90px] h-[90px] relative'>
                                <Image  src="/images/cs-item1-d.png" layout="fill" alt="Purpose-Driven Strategy"/>

                            </div>
                        </div>
                        <h4 className='font-bold text-[16px] font-display'>Entrepreneurial People</h4>
                        <p className='font-display text-[12px] mt-2 mb-1 '>Design digital HR and talent management systems that create a team first, individual second culture, and builder mentality</p>
                        <a className='text-[#00a1ed] font-bold text-[14px]' href="#">More Detail</a>
                    </div>
                    
                </div>
                <div className='absolute top-[550px] right-auto left-auto w-[310px] pt-[15px] pr-[15px] pb-[15px] pl-[60px]  bg-white hover:shadow-md rounded-md'>
                    <div className='relative'>
                        <div className='absolute left-[-100px]'>
                            <div className='w-[90px] h-[90px] relative'>
                                <Image  src="/images/cs-item1-d.png" layout="fill" alt="Purpose-Driven Strategy"/>

                            </div>
                        </div>
                        <p className='font-display text-[12px] mt-2 mb-1 '>CDHX is founded by Indonesian and global leaders of digital and hr tranformation who voluntarily serve as our board of advisor. Our programs are designed to deliver effective development of individual and corporate capabilities that would contribute to the vision of 2045 Indonesia Emas.</p>
                        <a className='text-[#00a1ed] font-bold text-[14px]' href="#">More Detail</a>
                    </div>
                    
                </div>
            </div>


            {/* service mobile */}
            <div className='md:hidden  relative'>
                <div className='text-center'>
                    <Image objectFit='contain'  src="/images/cs-bg.png" alt="cs" width={300} height={300}/>
                </div>
                <br/>
                <div className='px-6 relative'>
                    <img src="/images/BoxTitle.png" className='absolute top-[-25px] left-0 w-12'/>
                    <h1 className='font-display text-[16px] font-bold text-[#333333] relative z-10 my-[16px]'>OUR SERVICES</h1>
                    <p className='text-[14px] text-[#333333] my-[14px]'>We partner with you to build a sustainable growth by excelling across 6 dimensions:</p>
                    {cs.map((d,i)=>(
                        <div className='px-6 my-8' key={i}>
                            {i===6?
                            <img src={d.image} className='w-full mb-8'/>
                            :<div className='bg-white rounded-2xl w-20 p-2 shadow-md mx-auto mb-8'>
                                <img src={d.image} className='w-20'/>
                            </div>}
                            <h1 className='font-display text-[16px] font-bold text-[#333333] '>{d.title}</h1>
                            <p className='text-[14px] text-[#333333] my-[12px]'>{d.desc}</p>
                            {d.item.map((item,i)=>(
                                <div key={i} className='flex space-x-3 items-center mb-3'>
                                    <svg className="w-4 h-4 text-[#00a1ed]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    <p className='font-bold text-[14px] text-[#000000]'>{item}</p>
                                </div>
                            ))}
                            <a className='text-[#00a1ed] font-bold text-[14px]' href="#">More Detail</a>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
