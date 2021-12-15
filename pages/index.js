import React from 'react'
import Layout from '../components/Layout'
// import Carousel from '../components/Carousel'
import dynamic from 'next/dynamic'
const Carousel = dynamic(()=>import('../components/Carousel'))
export default function Index() {
  return (
    <div>
      <Layout>
        <Carousel/> 

      </Layout>
    </div>
  )
}
