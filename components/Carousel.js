import React from 'react'
import Slider from "react-slick";
import Image from 'next/image'
const settings = {
    className: "banner-carousel",
        centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding:"350px",
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive:[
      {
          breakpoint: 600,
          settings: {
              centerPadding: "20px",
              arrows:false,
              // nextArrow: null,
              // prevArrow: null,
              dots:true,
              // dotsClass: `slick-dots ${style.dots_mobile}`,
          }
        },
  ]
  };
export default function Carousel() {
    return (
        <div>
            <Slider {...settings}>
            <div className="slide">
                <div style={{borderRadius: '10px', overflow: 'hidden'}}>
                <img className='w-full' width={958} height={392} src="/images/wts1.jpg" alt="img" layout="responsive"  />
                </div>
            </div>
            <div className="slide">
                <div style={{borderRadius: '10px', overflow: 'hidden'}}>
                <img className='w-full' src="/images/wts2.jpg" alt="img" layout="responsive"  />
                </div>
            
            </div>
            <div className="slide">
                <div style={{borderRadius: '10px', overflow: 'hidden'}}>
                <img className='w-full' src="/images/wts3.jpg" alt="img" layout="responsive"  />
                </div>
            </div>
         
       
      
       </Slider>
        </div>
    )
}
