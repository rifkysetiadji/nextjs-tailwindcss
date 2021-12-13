import Image from 'next/image'
import React, { useState } from 'react'
import  Collapse  from '@mui/material/Collapse'
export default function Home() {
  const [services_dropdown, setservices_dropdown] = useState(false)
  const [publication_dropdown, setpublication_dropdown] = useState(false)
  const [sidemenu, setsidemenu] = useState(false)
  return (
    <div>         
      <nav className={`${sidemenu?'bg-blue-400':'bg-white'} z-10  top-0 fixed w-full`}>
        <div className="md:max-w-2xl lg:max-w-5xl mx-auto  py-4  ">
          <div className={`${!sidemenu&&'hidden'}  flex justify-between items-center md:px-0 px-6`}>
            <Image className='' src="/images/logo-circle.png" width={70} height={70}/>
            <div>
              <button onClick={()=>setsidemenu(false)} className="mobile-menu-button">
                <svg className="w-14 h-1w-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
          </div>
          <div className={`${sidemenu&&'hidden'} flex justify-between items-center md:px-0 px-6`}>
            <div>
              <Image src="/images/logo.png" width={80} height={50}/>
            </div>
            <div className="hidden md:flex md:space-x-10 lg:space-x-20">
              <div className="relative cursor-pointer "  >
                <a  href="#" onMouseEnter={()=>setservices_dropdown(!services_dropdown)} className="hover:text-blue-400 text-lg text-gray-700 font-display ">Services</a>
                <div onMouseLeave={()=>setservices_dropdown(false)} className={`${!services_dropdown&&'hidden'} flex space-x-2 absolute top-12 left-0 bg-white p-6 `}>
                  <div className="w-72">
                    <div className="flex space-x-3 items-center mb-3">
                        <div className="shadow-lg w-11 h-11 flex justify-center items-center rounded-lg">
                          <Image src="/images/cs-item1-m.png" width={28} height={28}/>
                        </div>
                        <a href="#" className="hover:text-blue-400 ">Purpose-Driven Strategy</a>
                    </div>
                    <div className="flex space-x-3 items-center mb-3">
                        <div className="shadow-lg w-11 h-11 flex justify-center items-center rounded-lg">
                          <Image src="/images/cs-item2-m.png" width={28} height={28}/>
                        </div>
                        <a href="#" className="hover:text-blue-400 ">Execution-Biased Systems</a>
                    </div>
                    <div className="flex space-x-3 items-center mb-3">
                        <div className="shadow-lg w-11 h-11 flex justify-center items-center rounded-lg">
                          <Image src="/images/cs-item3-m.png" width={28} height={28}/>
                        </div>
                        <a href="#" className="hover:text-blue-400 ">Empowered Structure</a>
                    </div>
                    <div className="flex space-x-3 items-center mb-3">
                        <div className="shadow-lg w-11 h-11 flex justify-center items-center rounded-lg">
                          <Image src="/images/cs-item4-m.png" width={28} height={28}/>
                        </div>
                        <a href="#" className="hover:text-blue-400 ">Enterpreneurial People</a>
                    </div>
                  </div>
                  <div className="w-64">
                    <div className="flex space-x-3 items-center mb-3">
                        <div className="shadow-lg w-11 h-11 flex justify-center items-center rounded-lg">
                          <Image src="/images/cs-item5-m.png" width={28} height={28}/>
                        </div>
                        <a href="#" className="hover:text-blue-400 ">Adhocracy Culture</a>
                    </div>
                    <div className="flex space-x-3 items-center mb-3">
                        <div className="shadow-lg w-11 h-11 flex justify-center items-center rounded-lg">
                          <Image src="/images/cs-item6-m.png" width={28} height={28}/>
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
              <div className="relative cursor-pointer"   >
                <a href="#" onMouseEnter={()=>setpublication_dropdown(!publication_dropdown)} className="hover:text-blue-400 text-lg text-gray-700 font-display ">Publication</a>
                <div onMouseLeave={()=>setpublication_dropdown(false)} className={`${!publication_dropdown&&'hidden'} absolute top-12 left-0 bg-white p-6 `}>
                  <a href="#" className="block mb-3 hover:text-blue-400 ">BookList</a>
                  <a href="#" className="block mb-3 hover:text-blue-400">Whitepaper</a>
                  <a href="#" className="block mb-3 hover:text-blue-400">Insight</a>
                </div>
              </div>
              <a href="#" className="hover:text-blue-400 text-lg text-gray-700 font-display">News</a>
              <a href="#" className="hover:text-blue-400 text-lg text-gray-700 font-display">Career</a>
              <a href="#" className="hover:text-blue-400 text-lg text-gray-700 font-display">About Us</a>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={()=>setsidemenu(true)} className="mobile-menu-button">
                <svg className="w-10 h-10 text-blue-400 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {sidemenu&&
      <div className="h-full bg-white mt-28 p-6 flex flex-col">
        <div onClick={()=>setservices_dropdown(!services_dropdown)} className="flex justify-between items-start border-b-2 border-gray-200 h-11 ">
          <p  className="font-bold text-2xl text-gray-600">Services</p>
          <svg className={`w-8 h-8 text-blue-400 transform duration-300 ${services_dropdown&&'rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </div>
        <br/>
        <Collapse in={services_dropdown}>
          <div className="flex space-x-3 items-center mb-3">
              <div className="shadow-lg w-14 h-14 flex justify-center items-center rounded-lg">
                <Image src="/images/cs-item1-m.png" width={30} height={30}/>
              </div>
              <a href="#" className="hover:text-blue-400 text-xl">Purpose-Driven Strategy</a>
          </div>
          <div className="flex space-x-3 items-center mb-3">
              <div className="shadow-lg w-14 h-14 flex justify-center items-center rounded-lg">
                <Image src="/images/cs-item2-m.png" width={30} height={30}/>
              </div>
              <a href="#" className="hover:text-blue-400 text-xl">Execution-Biased Systems</a>
          </div>
          <div className="flex space-x-3 items-center mb-3">
              <div className="shadow-lg w-14 h-14 flex justify-center items-center rounded-lg">
                <Image src="/images/cs-item3-m.png" width={30} height={30}/>
              </div>
              <a href="#" className="hover:text-blue-400 text-xl">Empowered Structure</a>
          </div>
          <div className="flex space-x-3 items-center mb-3">
              <div className="shadow-lg w-14 h-14 flex justify-center items-center rounded-lg">
                <Image src="/images/cs-item4-m.png" width={30} height={30}/>
              </div>
              <a href="#" className="hover:text-blue-400 text-xl">Enterpreneurial People</a>
          </div>
          <div className="flex space-x-3 items-center mb-3">
              <div className="shadow-lg w-14 h-14 flex justify-center items-center rounded-lg">
                <Image src="/images/cs-item5-m.png" width={30} height={30}/>
              </div>
              <a href="#" className="hover:text-blue-400 text-xl">Adhocracy Culture</a>
          </div>
          <div className="flex space-x-3 items-center mb-3">
              <div className="shadow-lg w-14 h-14 flex justify-center items-center rounded-lg">
                <Image src="/images/cs-item6-m.png" width={30} height={30}/>
              </div>
              <a href="#" className="hover:text-blue-400 text-xl">Ambidextrous Leadership</a>
          </div>
          <div className="flex space-x-3 items-center mb-3">
              <div className="shadow-lg w-14 h-14 flex justify-center items-center rounded-lg">
                <Image src="/images/cs-item1-m.png" width={30} height={30}/>
              </div>
              <a href="#" className="hover:text-blue-400 text-xl">Centre Human Digitalization Transformation</a>
          </div>
        </Collapse>
        <div onClick={()=>setpublication_dropdown(!publication_dropdown)} className="flex justify-between items-start border-b-2 border-gray-200 h-11 ">
          <p  className="font-bold text-2xl text-gray-600">Publication</p>
          <svg className={`w-8 h-8 text-blue-400 transform duration-300 ${publication_dropdown&&'rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </div>
        <br/>
        <Collapse in={publication_dropdown}>
          <div className="flex space-x-3 items-center mb-3">
              <a href="#" className="hover:text-blue-400 text-xl ml-7">Booklist</a>
          </div>
          <div className="flex space-x-3 items-center mb-3">
              <a href="#" className="hover:text-blue-400 text-xl ml-7">Whitepaper</a>
          </div>
          <div className="flex space-x-3 items-center mb-3">
              <a href="#" className="hover:text-blue-400 text-xl ml-7">Insight</a>
          </div>
        </Collapse>
        <a href="#"  className="font-bold text-2xl text-gray-600">Organization Assestment</a>
        <br/>
        <a href="#"  className="font-bold text-2xl text-gray-600">News</a>
        <br/>
        
        <a href="#"  className="font-bold text-2xl text-gray-600">Career</a>
        <br/>

        <a href="#"  className="font-bold text-2xl text-gray-600">About Us</a>
        <br/><br/>
        <div className='flex justify-center'>
          <img src="/images/logo.png" className='w-32'/>
        </div>
      </div>
      }
      {/* <div className="py-32 h-full text-center bg-gray-100">
        <h2 className="font-extrabold text-4xl">Welcome to my Blog</h2>
      </div> */}
    </div>
  )
}
