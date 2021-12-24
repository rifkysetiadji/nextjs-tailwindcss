import React from 'react'
import Layout from '../components/Layout'
import Carousel from '../components/Carousel'
import Services from '../components/Services'
import Assesstment from '../components/Assesstment'
export default function Index() {
  return (
    <div>
      <Layout>
        <Carousel/> 
        <Services/>
        <Assesstment/>
      </Layout>
    </div>
  )
}
