import React from 'react'
// rcsg logo
import logo from "../assets/images/logo.png"

export default function Footer() {
  return (
    <footer>
      <img src={logo} alt="rockstar games logo" />
      <p>Experience entertainment blockbusters, Grand Theft Auto V and GTA Online.</p>
      <div className="line"></div>
      <h2 className="bottom">
        &copy; {new Date().getFullYear()} <a target="_blank" href="https://t.me/avancoder">AVANCODER</a> All Rights Reserved
      </h2>
    </footer>
  )
}
