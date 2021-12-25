import React,{useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination} from 'swiper';
export default function Client() {
    
    const [filter, setfilter] = useState([
        {
            sector:'All Sector',
            // client:_.range(1,69)
            client:[
                74,
                75,
                46,
                
                47,
                12,
                23,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                
                24,
                25,
                26,
                27,
                28,
                29,
                30,
                31,
                32,
                33,
                34,
                35,
                36,
                37,
                38,
                39,
                40,
                41,
                42,
                43,
                44,
                45,
                
                48,
                49,
                50,
                51,
                52,
                53,
                54,
                55,
                56,
                57,
                58,
                59,
                60,
                61,
                62,
                63,
                64,
                65,
                66,
                67,
                68,
                69,
                70,
                71,
                72,
                73,
               
                76
            ]
        },
        {
            sector:'Agri Business',
            client:[30,31,32,33,34,35]
        },
        {
            sector:'Banking',
            client:[11,12,13,14,15,16,17,18,19,20]
        },
        {
            sector:'Government',
            // client:[1,2,3,4,5,6,7,8,9,10]
            client:[1,2,3,4,5,6,]
        },
        {
            sector:'Logistic, Courier, Cargo, Airport Service & Airlines',
            client:[41,42,43,44,45]
        },
        {
            sector:'Manufacturing & Consumer Good',
            client:[22,23,24,25,26,27,28,29]
        },
        {
            sector:'Media & Ecommerce',
            // client:[46,47,48,49,50,51]
            client:[74,75,46,47,48,]
        },
        {
            sector:'Mining Industry, Oil & Gas & Heavy Equipment',
            client:[56,57,58,59,76,77]
        },
        {
            sector:'Otomotif',
            client:[61,62,63,64,65]
        },
        {
            sector:'Property & construction',
            client:[36,37,38,39,40]
        },
        {
            sector:'Pharmacy',
            client:[54,55]
        },
        {
            sector:'Telecommunication',
            client:[66,67,68,52]
        },
        
        
        {
            sector:'Other',
            client:[69,70,71,72,73]
        },
    ])
    const pagination = {
        "clickable": true,
        "dynamicBullets": true,
        "renderBullet": function (index, className) {
          console.log(`className`, className)
                return '<span class=\"' + className + '\"></span>';
              }
      }
    return (
        <div className='md:max-w-2xl lg:max-w-5xl mx-auto   py-10  md:px-0 px-6  relative'>
            <h1 className='font-display text-[32px] font-bold mb-2'>Our Clients</h1>
            <button className='text-[#00a1ed] font-bold text-[14px]' href="#">Filter : All Selector</button>
            <br/>
            <Swiper
       loop={true}
       modules={[ Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={pagination}
    >
      <SwiperSlide style={{height:200,display:'flex',justifyContent:'center',alignItems:'center'}}>Slide 1</SwiperSlide>
      <SwiperSlide style={{height:200,display:'flex',justifyContent:'center',alignItems:'center'}}>Slide 2</SwiperSlide>
      <SwiperSlide style={{height:200,display:'flex',justifyContent:'center',alignItems:'center'}}>Slide 3</SwiperSlide>
      <SwiperSlide style={{height:200,display:'flex',justifyContent:'center',alignItems:'center'}}>Slide 4</SwiperSlide>
      <SwiperSlide style={{height:200,display:'flex',justifyContent:'center',alignItems:'center'}}>Slide 5</SwiperSlide>
      <SwiperSlide style={{height:200,display:'flex',justifyContent:'center',alignItems:'center'}}>Slide 6</SwiperSlide>
    </Swiper>
        </div>
    )
}
