import React from 'react'
import HomeHeader from './Components/HomeHeader/homeHeader'
import HomeContent from './Components/HomeContent/homeContent'
import './home.css'
// import 'react-sticky-header/styles.css';
// import StickyHeader from 'ReactStickyHeader'
export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeContent />
      <div className="test"></div>
    </>
  )
}