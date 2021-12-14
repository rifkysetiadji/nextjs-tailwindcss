import React from 'react'
import Slider from "react-slick";
import Image from 'next/image'
const settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding:"150px",
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
const settings2 = {
    className: "block md:hidden",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding:"20px",
    slidesToShow: 1,
    slidesToScroll: 1,
  };
export default function Carousel() {
    return (
        <div>
            <div className='hidden md:block'>
            <Slider  {...settings}>
            <div className="slide">
                <div  style={{borderRadius: '10px', overflow: 'hidden'}}>
                    <Image  width={958} height={392} src="/images/wts1.jpg" alt="img" layout="responsive"  />
                </div>
                
            </div>
            <div className="slide">
                <div  style={{borderRadius: '10px', overflow: 'hidden'}}>
                    <Image width={958} height={392} src="/images/wts2.jpg" alt="img" layout="responsive"  />
                </div>
                
            </div>
            <div className="slide">
                <div  style={{borderRadius: '10px', overflow: 'hidden'}}>
                    <Image width={958} height={392} src="/images/wts3.jpg" alt="img" layout="responsive"  />
                </div>
            </div>
         
       
      
       </Slider>
       </div>
       <div className='block md:hidden'>
        <Slider {...settings2}>
            <div className="slide">
                
                <div  style={{borderRadius: '10px', overflow: 'hidden'}}>
                    <Image priority width={1413} height={1746} src="/images/wtsm1.jpg" alt="img" layout="responsive"   />
                </div>
            </div>
            <div className="slide">
                
                <div  style={{borderRadius: '10px', overflow: 'hidden'}}>
                    <Image  width={1413} height={1746} src="/images/wtsm2.jpg" alt="img" layout="responsive"   />
                </div>
            </div>

            <div className="slide">
                
                <div  style={{borderRadius: '10px', overflow: 'hidden'}}>
                    <Image  width={1413} height={1746} src="/images/wtsm3.jpg" alt="img" layout="responsive"   />
                </div>
            </div>
         
       
      
       </Slider>
       </div>
        </div>
    )
}
