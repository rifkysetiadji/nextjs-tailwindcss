import React from 'react'
import Layout from '../components/Layout'
import dynamic from 'next/dynamic'

// import Carousel from '../components/Carousel'
const Carousel = dynamic(()=> import('../components/Carousel'),
{ loading: () => <div style={{textAlign:'center'}}><p>Loading</p></div> }
)
export default function Index() {
  return (
    <div>
      <Layout>
        <Carousel/> 

      </Layout>
    </div>
  )
}
