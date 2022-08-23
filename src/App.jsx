import React, { useEffect } from 'react'
import { Route, Routes } from "react-router-dom"
// components
import Download from './components/Download'
import ErrorPage from './components/ErrorPage'
import Footer from './components/Footer'
import GtaOnline from './components/GtaOnline'
import GtaV from './components/GtaV'
import Guides from './components/Guides'
import Navbar from './components/Navbar'
import Overview from './components/Overview'
import Start from './components/Start'
// AOS
import AOS from "aos"
import "aos/dist/aos.css"

export default function App() {

  useEffect(() => {
    // replain config
    window.replainSettings = { id: '3945f153-0e97-4511-978a-bbd322a7a307' };
    (function (u) {
      var s = document.createElement('script'); s.async = true; s.src = u;
      var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })('https://widget.replain.cc/dist/client.js');
    // aos config
    AOS.init({
      duration: 1000
    });
  }, [])
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' index element={<Start />} />
        <Route path='/overview' element={<Overview />} />
        <Route path='/gta-online' element={<GtaOnline />} />
        <Route path='/gta-v' element={<GtaV />} />
        <Route path='/guides' element={<Guides />} />
        <Route path='/download' element={<Download />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

      <Footer />
    </>
  )
}
