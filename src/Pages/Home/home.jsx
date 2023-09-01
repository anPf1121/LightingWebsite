import React from 'react'
import HomeHeader from './Components/HomeHeader/homeHeader'
import HomeContent from './Components/HomeContent/homeContent'
import './home.css'
import GlobalFooter from './Components/HomeFooter/homeFooter'
import HomeFooter from './Components/HomeFooter/homeFooter'
// import 'react-sticky-header/styles.css';
// import StickyHeader from 'ReactStickyHeader'
export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeContent />
      <HomeFooter />
    </>
  )
}