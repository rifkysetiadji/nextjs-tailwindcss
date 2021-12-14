import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Schedule from './Schedule'
export default function Layout() {
    return (
        <div>
            <Navbar/>
            <div style={{marginTop:85,marginBottom:20}}>
                <p>content</p>
            </div>
            <Schedule/>
            <Footer/>
        </div>
    )
}
