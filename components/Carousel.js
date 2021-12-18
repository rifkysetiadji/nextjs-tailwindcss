import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';
import style from '../styles/Home.module.css'
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
export default function Carousel() {
    return (
        <div>
            <div className='hidden md:block  '>
            <Slider  {...settings}>
            {/* <div className='slide'>
                <div className="w-full h-[382px] bg-[url('/images/banner-home-bg.webp')] bg-contain bg-no-repeat rounded-[15px]"></div>
            </div> */}
            <div className="slide">
                <div className='hidden md:block' style={{borderRadius: '15px', overflow: 'hidden'}}>
                    <Image  width={958} height={382} src="/images/wts1.jpg" alt="img" layout="responsive"  />
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
            {/* <div className='slide'>
                <div className="w-full h-[352px] bg-[url('/images/banner-home-bg-m.webp')] bg-cover bg-no-repeat rounded-[15px]"></div>
            </div> */}
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
