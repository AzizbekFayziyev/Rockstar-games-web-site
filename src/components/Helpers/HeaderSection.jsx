import React from 'react'

export default function HeaderSection({ img1, img1Alt, img2, img2Alt, title, text, btn1, btn1State, btn2, btn2Link }) {
    return (
        <>
            {/* Header Section */}
            <div className="section">
                <div className="container">

                    <div data-aos="fade-up" className="img-cnt d-flex">

                        <img src={img1} alt={img1Alt} />

                        {img2 ? (
                            <img src={img2} alt={img2Alt} />
                        ) : null
                        }

                    </div>

                    <div data-aos="fade-up" data-aos-duration="1500" className="text">

                        <h1>{title}</h1>

                        <p>{text}</p>

                        <div data-aos="fade-up" data-aos-duration="1800" className="btn-cnt">

                            {btn1 ? (
                                <button onClick={() => btn1State(true)} className="btn-global">{btn1}</button>
                            ) :
                                null}

                            {btn2 ? (
                                <a href={btn2Link}><button className="btn-global">{btn2}</button></a>
                            ) : null}

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
