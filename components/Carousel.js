import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';
import style from '../styles/Home.module.css'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

function SampleNextArrow(props) {
    const {  style, onClick, } = props;
    return (
      <div
          className="slick-arrow"
          style={{...style,cursor:'pointer', position:'absolute',width:40,height:40,top:'45%',backgroundColor:'white',borderRadius:'100%',right:130, display: "flex",justifyContent:'center',alignItems:"center",}}
          onClick={onClick}
      >
        <div style={{position:'relative',width:10,height:18}}>
        <Image  src="/images/chevron-right.png" layout="fill" alt="arrow_left"/>
  
        </div>
      </div> 
  );
  }
function SampleNextArrow2(props) {
    const {  style, onClick, } = props;
    return (
      <div
          className="slick-arrow"
          style={{...style,cursor:'pointer', position:'absolute',width:40,height:40,top:'45%',backgroundColor:'white',borderRadius:'100%',right:407, display: "flex",justifyContent:'center',alignItems:"center",}}
          onClick={onClick}
      >
        <div style={{position:'relative',width:10,height:18}}>
        <Image  src="/images/chevron-right.png" layout="fill" alt="arrow_left"/>
  
        </div>
      </div> 
  );
  }
  
  function SamplePrevArrow(props) {
    const {  style, onClick, } = props;
  
    return (
      <div
          className="slick-arrow"
          style={{...style,cursor:'pointer', position:'absolute',width:40,height:40,top:'45%',backgroundColor:'white',borderRadius:'100%',zIndex:1  ,left:130, display: "flex",justifyContent:'center',alignItems:"center",}}
          onClick={onClick}
      >
        <div style={{position:'relative',width:10,height:18}}>
        <Image  src="/images/chevron-left.png" layout="fill" alt="arrow_left"/>
  
        </div>
      </div>
  );
  }
  
  function SamplePrevArrow2(props) {
    const {  style, onClick, } = props;
  
    return (
      <div
          className="slick-arrow"
          style={{...style,cursor:'pointer', position:'absolute',width:40,height:40,top:'45%',backgroundColor:'white',borderRadius:'100%',zIndex:1  ,left:407, display: "flex",justifyContent:'center',alignItems:"center",}}
          onClick={onClick}
      >
        <div style={{position:'relative',width:10,height:18}}>
        <Image  src="/images/chevron-left.png" layout="fill" alt="arrow_left"/>
  
        </div>
      </div>
  );
  }
  
const settings = {
    
        centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    centerPadding:"150px",
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow/>,
  };
const settings2 = {
    className: "banner-carousel",
    centerMode: true,
    infinite: true,
    speed: 500,
    centerPadding:"20px",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    dots:true,
    dotsClass: `slick-dots ${style.dots_mobile}`,
  };

  const settings3 = {
    
    centerMode: true,
dots: false,
infinite: true,
speed: 500,
centerPadding:"430px",
slidesToShow: 1,
slidesToScroll: 1,
nextArrow: <SampleNextArrow2 />,
prevArrow: <SamplePrevArrow2/>,
};
export default function Carousel() {
    return (
        <div>

            <div className='hidden 2xl:hidden md:block  py-5'>
            <Slider  {...settings}>
            <div className='slide '>
                <div className='hidden md:block relative' style={{borderRadius: '15px', overflow: 'hidden'}}>
                    <Image  width={958} height={380} src="/images/banner-home-bg.webp" alt="img" layout="responsive"  />
                    <div className='absolute  w-10/12 flex items-center justify-between  left-0 right-0 mx-auto  top-0 bottom-0'>
                        <div className='w-6/12'>
                            <p className='text-white text-[15px] font-display my-[16px]'>WHO WE ARE</p>
                            <h1 className='text-white text-[31px] font-display font-bold my-[16px]'>Agile Execution of your Transformation<br/> Strategy</h1>
                            <p className='text-white text-[15px]  font-display my-[16px]'>We help you transform your organization’s execution capability through Purpose-Driven Strategy, Execution Biased System, Empowered Structure, Entrepreneurial People, Adhocracy Culture and Ambidextrous Leadership.</p>
                        </div>
                        <div className='w-[140px] h-[80px] relative '>
                            <Image src="/images/thumb-banner.jpeg" layout='fill' alt='thumb' objectFit='cover'/>
                            <div className='w-[40px] h-[40px] left-0 right-0 top-0 bottom-0 mx-auto my-auto rounded-full bg-white absolute flex justify-center items-center'>
                                <PlayArrowRoundedIcon  sx={{ fontSize: 40 }} color='primary'/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="w-full h-[432px] bg-[url('/images/banner-home-bg.webp')] bg-cover bg-no-repeat rounded-[15px]"></div> */}
            </div>
            <div className="slide">
                <div className='hidden md:block' style={{borderRadius: '15px', overflow: 'hidden'}}>
                    <Image  width={958} height={380} src="/images/wts1.jpg" alt="img" layout="responsive"  />
                </div>
                {/* <div className='block md:hidden' style={{borderRadius: '10px', overflow: 'hidden'}}>
                    <Image priority width={1413} height={1746} src="/images/wtsm1.jpg" alt="img" layout="responsive"   />
                </div> */}
            </div>
            <div className="slide">
                <div className='hidden md:block' style={{borderRadius: '15px', overflow: 'hidden'}}>
                    <Image width={958} height={382} src="/images/wts2.jpg" alt="img" layout="responsive"  />
                </div>
                {/* <div className='block md:hidden' style={{borderRadius: '10px', overflow: 'hidden'}}>
                    <Image  width={1413} height={1746} src="/images/wtsm2.jpg" alt="img" layout="responsive"   />
                </div> */}
            </div>

            <div className="slide">
                <div className='hidden md:block' style={{borderRadius: '15px', overflow: 'hidden'}}>
                    <Image width={958} height={382} src="/images/wts3.jpg" alt="img" layout="responsive"  />
                </div>
                {/* <div className='block md:hidden' style={{borderRadius: '10px', overflow: 'hidden'}}>
                    <Image  width={1413} height={1746} src="/images/wtsm3.jpg" alt="img" layout="responsive"   />
                </div> */}
            </div>
         
       
      
       </Slider>
       </div>
            <div className='hidden md:hidden 2xl:block  py-5'>
            <Slider  {...settings3}>
            <div className='slide '>
                <div className='hidden md:block relative' style={{borderRadius: '15px', overflow: 'hidden'}}>
                    <Image  width={958} height={380} src="/images/banner-home-bg.webp" alt="img" layout="responsive"  />
                    <div className='absolute  w-10/12 flex items-center justify-between  left-0 right-0 mx-auto  top-0 bottom-0'>
                        <div className='w-6/12'>
                            <p className='text-white text-[15px] font-display my-[16px]'>WHO WE ARE</p>
                            <h1 className='text-white text-[31px] font-display font-bold my-[16px]'>Agile Execution of your Transformation<br/> Strategy</h1>
                            <p className='text-white text-[15px]  font-display my-[16px]'>We help you transform your organization’s execution capability through Purpose-Driven Strategy, Execution Biased System, Empowered Structure, Entrepreneurial People, Adhocracy Culture and Ambidextrous Leadership.</p>
                        </div>
                        <div className='w-[140px] h-[80px] relative '>
                            <Image src="/images/thumb-banner.jpeg" layout='fill' alt='thumb' objectFit='cover'/>
                            <div className='w-[40px] h-[40px] left-0 right-0 top-0 bottom-0 mx-auto my-auto rounded-full bg-white absolute flex justify-center items-center'>
                                <PlayArrowRoundedIcon  sx={{ fontSize: 40 }} color='primary'/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="w-full h-[432px] bg-[url('/images/banner-home-bg.webp')] bg-cover bg-no-repeat rounded-[15px]"></div> */}
            </div>
            <div className="slide">
                <div className='hidden md:block' style={{borderRadius: '15px', overflow: 'hidden'}}>
                    <Image  width={958} height={380} src="/images/wts1.jpg" alt="img" layout="responsive"  />
                </div>
                {/* <div className='block md:hidden' style={{borderRadius: '10px', overflow: 'hidden'}}>
                    <Image priority width={1413} height={1746} src="/images/wtsm1.jpg" alt="img" layout="responsive"   />
                </div> */}
            </div>
            <div className="slide">
                <div className='hidden md:block' style={{borderRadius: '15px', overflow: 'hidden'}}>
                    <Image width={958} height={382} src="/images/wts2.jpg" alt="img" layout="responsive"  />
                </div>
                {/* <div className='block md:hidden' style={{borderRadius: '10px', overflow: 'hidden'}}>
                    <Image  width={1413} height={1746} src="/images/wtsm2.jpg" alt="img" layout="responsive"   />
                </div> */}
            </div>

            <div className="slide">
                <div className='hidden md:block' style={{borderRadius: '15px', overflow: 'hidden'}}>
                    <Image width={958} height={382} src="/images/wts3.jpg" alt="img" layout="responsive"  />
                </div>
                {/* <div className='block md:hidden' style={{borderRadius: '10px', overflow: 'hidden'}}>
                    <Image  width={1413} height={1746} src="/images/wtsm3.jpg" alt="img" layout="responsive"   />
                </div> */}
            </div>
         
       
      
       </Slider>
       </div>
       <div className='inline md:hidden'>
        <Slider {...settings2}>
            <div className='slide'>
                {/* <div className="w-full h-[352px] bg-[url('/images/banner-home-bg-m.webp')] bg-cover bg-no-repeat rounded-[15px]"></div> */}
                <div className='block relative' style={{borderRadius: '10px', overflow: 'hidden'}}>
                    <Image priority width={1413} height={1646} src="/images/banner-home-bg-m.webp" alt="img" layout="responsive"   />
                    <div className='absolute  w-11/12    left-0 right-0 mx-auto my-auto  top-0 bottom-0'>
                        <p className='text-white text-[13px] font-display my-[14px]'>WHO WE ARE</p>
                        <h1 className='text-white text-[18px] font-display font-bold my-[14px]'>Agile Execution of your Transformation<br/> Strategy</h1>
                        <p className='text-white text-[13px]  font-display my-[14px]'>We help you transform your organization’s execution capability through Purpose-Driven Strategy, Execution Biased System, Empowered Structure, Entrepreneurial People, Adhocracy Culture and Ambidextrous Leadership.</p>
                        <div className='w-[120px] h-[80px] ml-3  relative'>
                            <Image src="/images/thumb-banner.jpeg" layout='fill' alt='thumb' objectFit='cover'/>
                            <div className='w-[40px] h-[40px] left-0 right-0 top-0 bottom-0 mx-auto my-auto rounded-full bg-white absolute flex justify-center items-center'>
                                <PlayArrowRoundedIcon  sx={{ fontSize: 40 }} color='primary'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slide">
                {/* <div className="w-full h-[380px] bg-[url('/images/wtsm1.webp')] bg-contain bg-no-repeat rounded-[15px]"></div> */}
                
                <div className='block ' style={{borderRadius: '10px', overflow: 'hidden'}}>
                    <Image priority width={1413} height={1646} src="/images/wtsm1.webp" alt="img" layout="responsive"   />
                </div>
            </div>
            <div className="slide">
                {/* <div className="w-full h-[380px] bg-[url('/images/wtsm2.webp')] bg-contain bg-no-repeat rounded-[15px]"></div> */}
               
                <div className='block ' style={{borderRadius: '10px', overflow: 'hidden'}}>
                    <Image  width={1413} height={1646} src="/images/wtsm2.webp" alt="img" layout="responsive"   />
                </div>
            </div>

            <div className="slide">
            {/* <div className="w-full h-[380px] bg-[url('/images/wtsm3.webp')] bg-contain bg-no-repeat rounded-[15px]"></div> */}
                
                
                <div className='block ' style={{borderRadius: '10px', overflow: 'hidden'}}>
                    <Image  width={1413} height={1646} src="/images/wtsm3.webp" alt="img" layout="responsive"   />
                </div>
            </div>
         
       
      
       </Slider>
       </div>
        </div>
    )
}
