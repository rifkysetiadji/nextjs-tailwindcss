import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Schedule from './Schedule'
export default function Layout(props) {
    return (
        <div>
            <Navbar/>
            <div style={{marginTop:100,marginBottom:40,backgroundColor:'#F7FAFC'}}>
                {props.children}
            </div>
            <Schedule/>
            <Footer/>
        </div>
    )
}
