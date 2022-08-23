import React, { useEffect, useState } from 'react'
// slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// images
import gtaOnline from "../assets/images/gta-online.png"
import mainImg from "../assets/images/gtaOnline/main.png"
// helpers
import TrailerModal from './Helpers/TrailerModal';
import HeaderSection from './Helpers/HeaderSection';



export default function GtaOnline() {
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
    slidesToShow: 2,
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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

  // slider data base

  const sliderData = [
    {
      img: "https://c4.wallpaperflare.com/wallpaper/495/945/258/rockstar-gta-grand-theft-auto-rockstar-games-wallpaper-preview.jpg",
      text: "The Criminal",
    },
    {
      img: "https://c4.wallpaperflare.com/wallpaper/809/757/71/gta-5-online-4k-biker-dlc-wallpaper-preview.jpg",
      text: "The Contract",
    },
    {
      img: "https://c4.wallpaperflare.com/wallpaper/331/647/709/yacht-the-bandits-boss-mafia-wallpaper-preview.jpg",
      text: "The Executives",
    },
    {
      img: "https://c4.wallpaperflare.com/wallpaper/789/457/83/southern-san-andreas-super-sport-series-2018-gta-5-online-dlc-wallpaper-preview.jpg",
      text: "Los Santos Tuners",
    },
    {
      img: "https://c4.wallpaperflare.com/wallpaper/414/734/430/money-online-bandit-gta-5-wallpaper-preview.jpg",
      text: "New Missions",
    },
    {
      img: "https://c4.wallpaperflare.com/wallpaper/881/552/897/games-grand-theft-auto-wallpaper-preview.jpg",
      text: "New Locations",
    }
  ];

  const sliderData2 = [
    {
      img: "https://wallpaper.dog/large/10788083.jpg",
      text: "Rockford Hills",
    },
    {
      img: "https://wallpaper.dog/large/20488909.jpg",
      text: "Blaine County",
    },
    {
      img: "https://c4.wallpaperflare.com/wallpaper/187/931/815/city-game-sky-grand-theft-auto-v-gta-v-hd-wallpaper-preview.jpg",
      text: "Los Santos",
    },
    {
      img: "https://wallpaper.dog/large/20488948.jpg",
      text: "Downtown Los Santos",
    },
    {
      img: "https://wallpaper.dog/large/20488879.jpg",
      text: "Little Seoul",
    },
    {
      img: "https://wallpaper.dog/large/17102203.jpg",
      text: "Mount Chiliad",
    }
  ]

  return (
    <>
      {/* trainer modal */}
      {modal ?
        <TrailerModal state={() => setModal(false)} url={"https://www.youtube.com/embed/1xlr3-hK5rY"} />
        :
        null
      }

      {/* Gta online page */}
      <section id='gtaOnline'>
        {/* <div className="section">
          <div className="container">
            <div className="img-cnt d-flex">
              <img src={gtaOnline} alt="gta online logo" />
            </div>
            <div className="text">
              <h1>Grand Theft Auto Online</h1>
              <p>Experience GTA Online, a dynamic and ever-evolving online universe for up to 30 players, including all existing gameplay upgrades and content released since launch ready to enjoy solo or with friends.</p>
              <div className="btn-cnt">
                <button onClick={() => setModal(true)} className="btn-global">Watch Trailer</button>
              </div>
            </div>

          </div>
        </div> */}
        <HeaderSection
          img1={gtaOnline}
          img1Alt={"gta online logo"}
          title={"Grand Theft Auto Online"}
          text={"Experience GTA Online, a dynamic and ever-evolving online universe for up to 30 players, including all existing gameplay upgrades and content released since launch ready to enjoy solo or with friends."}
          btn1={"WATCH THE TRAILER"}
          btn1State={setModal}
        />

        <div className="guides container mt-5">
          <img data-aos="fade-in" src={mainImg} alt="Grand Theft Auto Online" className="main-img" />
          <h1 data-aos="fade-right" className="title">Title Updates</h1>
          <div className="slider-cnt">
            <Slider {...sliderSettings}>
              {sliderData.map((e, id) => (
                <div data-aos="zoom-in" key={id} className="carousel__item">
                  <img src={e.img} />

                  <h2 className="title">{e.text}</h2>
                </div>
              ))}
            </Slider>

            <h1 data-aos="fade-right" className="title">New Locations</h1>
            <Slider>
              {sliderData2.map((e, id) => (
                <div data-aos="zoom-in" key={id} className="carousel__item carousel__item-oneSlide">
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
