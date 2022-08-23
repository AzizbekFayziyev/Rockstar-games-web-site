import React from 'react'
// err imge
import err from "../assets/images/errorPage/main.jpg"

export default function ErrorPage() {
  return (
    <div className='container mt-5'>
        <h1 data-aos="fade-right" className="title">ERROR 404:</h1>
    <img style={{"border": "2px solid #fcaf17", "borderRadius": "10px", "minHeight": "220px"}} width="100%" src={err} alt="error" />
    </div>
  )
}
