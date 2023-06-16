"use client"
import React from 'react'
import Companies from '../components/Companies'
import HeroBanner from '../components/HeroBanner'
import PopularServices from '../components/PopularServices'
import Everything from '../components/Everything'
import Services from '../components/Services'
import JoinFiverr from '../components/JoinFiverr'
import FiverrBusiness from '@/components/FiverrBusiness'
import RootLayout from './layout'
import Footer from '@/components/Footer'

const Page = () => {
  return (
    <>
      <RootLayout>
        <HeroBanner/>
        <Companies />
        <PopularServices/>
        <Everything/>
        <Services/>
        <FiverrBusiness/>
        <JoinFiverr/>
      </RootLayout>
      <Footer/>
    </>
   
  )
}

export default Page