import React from 'react'
import Layout from '../components/Layout'
import Carousel from '../components/Carousel'
import Services from '../components/Services'
import Assesstment from '../components/Assesstment'
// import Client from '../components/Client'
import dynamic from 'next/dynamic'
const Client = dynamic(()=>import('../components/Client'))

export default function Index() {
  return (
    <div>
      <Layout>
        <Carousel/> 
        <Services/>
        <Assesstment/>
        <Client/>
      </Layout>
    </div>
  )
}
