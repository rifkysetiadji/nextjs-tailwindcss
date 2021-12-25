import React from 'react'
import Image from 'next/image'
export default function Insight() {
    return (
        <div className='md:max-w-2xl lg:max-w-5xl mx-auto   py-10  md:px-0 px-6  relative'>
            <div className='flex justify-between items-center'>
                <h1 className='font-display text-[32px] font-bold mb-2'>Insight</h1>
                <a className='text-[#00a1ed] font-bold text-[14px]' href="#">More Insight</a>
            </div>
            <div className='flex md:flex-row flex-col justify-center py-10 '>
                <Image src="/images/insight-front1.png" width={450} height={550} objectFit='contain'/>
                <Image src="/images/insight-front2.png" width={450} height={550} objectFit='contain'/>
            </div>

            <div className='flex md:flex-row flex-col gap-3'>
                <div className='md:w-1/2 w-full relative md:h-[420px] h-[370px] border'>
                    <Image src="https://www.onegml.com/assets//insight/83/24sdsf5t.sfb.jpg" objectFit='cover' layout='fill'/>
                    <div className='md:p-[30px] p-[20px] w-[78%] h-[78%] left-0 m-auto top-0 bottom-0 right-0 absolute bg-white'>
                        <p className='font-display text-[#65c5f3] md:text-[13px] text-[12px] font-bold'>Purpose-Driven Strategy</p>
                        <h1 className='font-display text-[#333] md:text-[26px] text-[15px] font-bold my-[10px]'>Resep Rahasia Eksekusi Strategi</h1>
                        <p className='font-display text-[#333] md:text-[12px] text-[11px]'>Sadarkah Anda, perusahaan seringkali melakukan meeting tahunan, bulanan, bahkan mingguan secara rutin. Tak jarang juga meeting lebih dari sekali dalam seminggu. Biasanya meeting yang dilakukan akan membahas mengenai formulasi strategi serta review progress dari strategi yang sedang berjalan.</p>
                        <a className='text-[#00a1ed] font-bold md:text-[14px] text-[12px]' href="#">Read More</a>
                    
                    </div>
                </div>
                <div className='md:w-1/2 w-full flex flex-col justify-between md:gap-0 gap-3  '>
                    <div className='w-full h-[120px] bg-white shadow-md border-t-[4px] border-[#00a1ed] flex'>
                        <Image src="https://www.onegml.com/assets//insight/83/24sdsf5t.sfb.jpg" objectFit='cover' width={150} height={116}/>
                        <div className='p-3 w-9/12'>
                            <p className='font-display text-[#65c5f3] md:text-[13px] text-[11px] font-bold'>Purpose-Driven Strategy</p>
                            <h1 className='font-display my-[10px] md:text-[16px] text-[12px] text-[#333] font-bold'>Training Center dengan Corporate University, Samakah?</h1>
                        </div>
                    </div>
                    <div className='w-full h-[120px] bg-white shadow-md border-t-[4px] border-[#00a1ed] flex'>
                        <Image src="https://www.onegml.com/assets//insight/83/24sdsf5t.sfb.jpg" objectFit='cover' width={150} height={116}/>
                        <div className='p-3 w-9/12'>
                            <p className='font-display text-[#65c5f3] md:text-[13px] text-[11px] font-bold'>Purpose-Driven Strategy</p>
                            <h1 className='font-display my-[10px] md:text-[16px] text-[12px] text-[#333] font-bold'>Meningkatkan Kinerja Organisasi dengan Balanced Scorecard</h1>
                        </div>
                    </div>
                    <div className='w-full h-[120px] bg-white shadow-md border-t-[4px] border-[#00a1ed] flex'>
                        <Image src="https://www.onegml.com/assets//insight/83/24sdsf5t.sfb.jpg" objectFit='cover' width={150} height={116}/>
                        <div className='p-3 w-9/12'>
                            <p className='font-display text-[#65c5f3] md:text-[13px] text-[11px] font-bold'>Purpose-Driven Strategy</p>
                            <h1 className='font-display my-[10px] md:text-[16px] text-[12px] text-[#333] font-bold'>Digitalisasi atau Gulung Tikar</h1>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
