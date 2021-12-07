import Image from 'next/image'
import React, { useState } from 'react'
export default function Home() {
  const [services_dropdown, setservices_dropdown] = useState(false)
  const [publication_dropdown, setpublication_dropdown] = useState(false)
  return (
    <div>         
      <nav className="bg-white fixed w-full">
        <div className="max-w-5xl mx-auto  py-4  ">
          <div className="hidden md:flex  justify-between items-center">
            <div>
              <Image src="/images/logo.png" width={80} height={50}/>
            </div>
            <div className="flex space-x-20">
              <div className="relative cursor-pointer" onMouseLeave={()=>setservices_dropdown(false)}  onMouseEnter={()=>setservices_dropdown(true)}>
                <a  href="#" className="hover:text-blue-400 text-lg text-gray-700 font-display ">Services</a>
                <div className={`${!services_dropdown&&'hidden'} flex space-x-2 absolute top-12 left-0 bg-white p-6 `}>
                  <div className="w-72">
                    <div className="flex space-x-3 items-center mb-3">
                        <div className="shadow-lg w-11 h-11 flex justify-center items-center rounded-lg">
                          <Image src="/images/cs-item1-m.png" width={28} height={28}/>
                        </div>
                        <a href="#" className="hover:text-blue-400 ">Purpose-Driven Strategy</a>
                    </div>
                    <div className="flex space-x-3 items-center mb-3">
                        <div className="shadow-lg w-11 h-11 flex justify-center items-center rounded-lg">
                          <Image src="/images/cs-item1-m.png" width={28} height={28}/>
                        </div>
                        <a href="#" className="hover:text-blue-400 ">Execution-Biased Systems</a>
                    </div>
                    <div className="flex space-x-3 items-center mb-3">
                        <div className="shadow-lg w-11 h-11 flex justify-center items-center rounded-lg">
                          <Image src="/images/cs-item1-m.png" width={28} height={28}/>
                        </div>
                        <a href="#" className="hover:text-blue-400 ">Empowered Structure</a>
                    </div>
                    <div className="flex space-x-3 items-center mb-3">
                        <div className="shadow-lg w-11 h-11 flex justify-center items-center rounded-lg">
                          <Image src="/images/cs-item1-m.png" width={28} height={28}/>
                        </div>
                        <a href="#" className="hover:text-blue-400 ">Enterpreneurial People</a>
                    </div>
                  </div>
                  <div className="w-64">
                    <div className="flex space-x-3 items-center mb-3">
                        <div className="shadow-lg w-11 h-11 flex justify-center items-center rounded-lg">
                          <Image src="/images/cs-item1-m.png" width={28} height={28}/>
                        </div>
                        <a href="#" className="hover:text-blue-400 ">Adhocracy Culture</a>
                    </div>
                    <div className="flex space-x-3 items-center mb-3">
                        <div className="shadow-lg w-11 h-11 flex justify-center items-center rounded-lg">
                          <Image src="/images/cs-item1-m.png" width={28} height={28}/>
                        </div>
                        <a href="#" className="hover:text-blue-400 ">Ambidextrous Leadership</a>
                    </div>
                    <div className="flex space-x-3 items-center mb-3">
                        <div className="shadow-lg w-11 h-11 flex justify-center items-center rounded-lg">
                          <Image src="/images/cs-item1-m.png" width={28} height={28}/>
                        </div>
                        <a href="#" className="hover:text-blue-400 ">Centre Human Digitalization Transformation</a>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="relative cursor-pointer" onMouseLeave={()=>setpublication_dropdown(false)}  onMouseEnter={()=>setpublication_dropdown(true)}>
                <a href="#" className="hover:text-blue-400 text-lg text-gray-700 font-display ">Publication</a>
                <div className={`${!publication_dropdown&&'hidden'} absolute top-12 left-0 bg-white p-6 `}>
                  <a href="#" className="block mb-3">BookList</a>
                  <a href="#" className="block mb-3">Whitepaper</a>
                  <a href="#" className="block mb-3">Insight</a>
                </div>
              </div>
              <a href="#" className="hover:text-blue-400 text-lg text-gray-700 font-display">News</a>
              <a href="#" className="hover:text-blue-400 text-lg text-gray-700 font-display">Career</a>
              <a href="#" className="hover:text-blue-400 text-lg text-gray-700 font-display">About Us</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="py-32 h-full text-center bg-gray-100">
        <h2 className="font-extrabold text-4xl">Welcome to my Blog</h2>
      </div>
    </div>
  )
}
