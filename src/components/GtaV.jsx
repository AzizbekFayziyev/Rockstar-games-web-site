import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
// images
import gtaV from "../assets/images/gta-5.png"
import HeaderSection from './Helpers/HeaderSection';
// helpers
import TrailerModal from './Helpers/TrailerModal';

export default function GtaV() {
    useEffect(() => {
        // scroll == 0
        window.scrollTo(0, 0);
    }, [])

    // trailer modal toggle
    const [modal, setModal] = useState(false);

    // slider config
    const sliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // slider data
    const sliderData = [
        {
            img: "https://wallpapercave.com/wp/wp9313732.jpg",
            text: "Michael De Santa"
        },
        {
            img: "https://wallpapercave.com/wp/wp5301138.jpg",
            text: "Franklin Clinton"
        },
        {
            img: "https://wallpapercave.com/wp/wp9343937.jpg",
            text: "Trevor Philips"
        },
        {
            img: "https://wallpapercave.com/wp/wp9343993.jpg",
            text: "Jimmy De Santa"
        },
        {
            img: "https://wallpapercave.com/wp/wp9344072.jpg",
            text: "Floyd Hebert"
        }
    ];

    const sliderData2 = [
        {
            img: "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/655k/8b910f9ad6b20e858d4a1905558ec1905f06d670.png",
            text: "Executive Business"
        },
        {
            img: "https://c4.wallpaperflare.com/wallpaper/243/82/541/gta-5-online-halloween-dlc-bike-wallpaper-preview.jpg",
            text: "The Biker"
        },
        {
            img: "https://cdn.player.one/sites/player.one/files/styles/lg/public/2022/04/15/p1gtaonlineapr14.png",
            text: "Gun Runner"
        },
        {
            img: "https://media-rockstargames-com.akamaized.net/tina-uploads/posts/o3a897o2451k97/435c3bcd53c7763b2faeb9b95cdb74646ae224cf.jpg",
            text: "Night Club Owner"
        }
    ];

    return (
        <>
            {
            }
            {/* trainer modal */}
            {modal ?
                <TrailerModal state={() => setModal(false)} url={"https://www.youtube.com/embed/QkkoHAzjnUs"} />
                :
                null
            }

            {/* Gta V page */}
            <section id="gtaV">
                <HeaderSection
                    img1={gtaV}
                    img1Alt={"gta v logo"}
                    title={"Grand Theft Auto V"}
                    text={"Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overall."}
                    btn1={"WATCH THE TRAILER"}
                    btn1State={setModal}
                />

                <div className="guides container mt-5">

                    <div className="slider-cnt">
                        <h1 data-aos="fade-right" className="title">Main Characters</h1>
                        <Slider {...sliderSettings}>
                            {sliderData.map((e, id) => (
                                <div data-aos="zoom-in" key={id} className="carousel__item">
                                    <img src={e.img} />

                                    <h2 className="title">{e.text}</h2>
                                </div>
                            ))}
                        </Slider>
                        <h1 data-aos="fade-right" className="title">Criminal Careers</h1>

                        <Slider {...sliderSettings}>
                            {sliderData2.map((e, id) => (
                                <div data-aos="zoom-in" key={id} className="carousel__item">
                                    <img src={e.img} />

                                    <h2 className="title">{e.text}</h2>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <div data-aos="fade-up" className="alert">
                        Your feedback is needed. Please share your gameplay experience feedback in chat.
                    </div>
                </div>

            </section>
        </>
    )
}
