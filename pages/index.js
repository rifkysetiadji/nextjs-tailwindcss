import React from 'react'
import Layout from '../components/Layout'
import Carousel from '../components/Carousel'
import Services from '../components/Services'
export default function Index() {
  return (
    <div>
      <Layout>
        <Carousel/> 
        <Services/>
      </Layout>
    </div>
  )
}
