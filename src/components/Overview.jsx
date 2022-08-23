// images
import { useEffect, useState } from "react"
// images
import gtaV from "../assets/images/gta-5.png"
import gtaOnline from "../assets/images/gta-online.png"
import info1 from "../assets/images/overview/1.png"
import info2 from "../assets/images/overview/2.png"
import info3 from "../assets/images/overview/3.png"
import info4 from "../assets/images/overview/4.png"
import info5 from "../assets/images/overview/5.png"
import info6 from "../assets/images/overview/6.png"
import info7 from "../assets/images/overview/7.png"
// helpers
import TrailerModal from "./Helpers/TrailerModal"
import HeaderSection from "./Helpers/HeaderSection"
import DwCards from "./Helpers/DwCards"

export default function Overview() {
    useEffect(() => {
        // scroll == 0
        window.scrollTo(0, 0);
    }, [])

    // trailer modal toggle
    const [modal, setModal] = useState(false);

    // gta infos
    const infoData = [
        {
            img: info1,
            img2: gtaV,
            title: "Welcome to Los Santos",
            text: "Welcome  to Los Santos When a young street hustler, a retired bank robber, and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government, and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody — least of all each other. ",
            text2: "Current players can transfer both GTAV Story Mode progress and GTA Online characters and progression to PlayStation 5 and Xbox Series X|S with a one-time migration."
        },
        {
            img: info2,
            title: "Stunning Visuals",
            text: "Enhanced levels of fidelity and performance with new graphics modes featuring up to 4K resolution, up to 60 frames per second, HDR options, ray tracing, improved texture qualities, and more."
        },
        {
            img: info3,
            title: "Faster Loading",
            text: "Quicker access to the action as the world of Los Santos and Blaine County load in faster than ever before."
        },
        {
            title: "New Career Builder",
            text: "Get started in GTA Online with the tools of the trade. Quickly choose from one of four businesses — Biker, Executive, Nightclub Owner, or Gunrunner — and select from properties, powerhouse vehicles, and weaponry to kick-start your enterprise."
        },
        {
            img: info4,
            title: "Immersive Controls",
            text: "Feel new levels of responsiveness with Haptic Feedback and dynamic resistance via the Adaptive Triggers on PlayStation 5's DualSense wireless controller, from directional damage to weather effects, rough road surfaces to explosions, and much more."
        },
        {
            img: info5,
            title: "3D Audio",
            text: "Hear the sounds of the world with pinpoint precision: the throttle of a stolen supercar, the rattle of neighboring gunfire, the roar of a helicopter overhead, and more..."
        },
        {
            img: info6,
            img2: gtaOnline,
            title: "Grand Theft Auto Online",
            text: "Experience GTA Online, a dynamic and ever-evolving online universe for up to 30 players, where you can rise from street-level hustler to become a kingpin of your own criminal empire.",
            text2: "Enjoy new high-performance vehicle upgrades and improvements like the Career Builder as well as all GTA Online gameplay upgrades, expansions, and content released since launch, ready to enjoy solo or with friends. Pull off daring co-operative Heists, enter adrenaline-fueled Stunt Races, compete in unique Adversary Modes, or hang out in social spaces including nightclubs, arcades, penthouse parties, car meetups, and much more."
        },
        {
            title: "New Menu Design",
            text: "Immediately access everything GTA Online has to offer right from the main menu, including the latest and most popular updates.",
        },
        {
            img: info7,
            title: "Access to All Current and Previous Updates",
            text: "Dive into more than 40 massive updates with more to come, featuring everything from the high-stakes hunt for Dr. Dre’s missing music files with Franklin Clinton in The Contract to the high-octane underground street racing action of Los Santos Tuners.",
            text2: "Heists on the lush tropical island of Cayo Perico to the nightlife circuit of After Hours and The Diamond Casino & Resort. All this and more available alongside a wide range of races, modes, activities, and social spaces to enjoy solo or with friends — including nightclubs, arcades, penthouse parties, car meetups, and much more."
        },
    ];

    return (

        <>
            {/* trailer modal */}
            {modal ?
                <TrailerModal state={() => setModal(false)} url={"https://www.youtube.com/embed/lqiZdynJmag"} />
                :
                null
            }

            {/* Overview page */}
            <main id='overview'>
                <HeaderSection
                    img1={gtaV}
                    img1Alt={"gta v logo"}
                    img2={gtaOnline}
                    img2Alt={"gta online logo"}
                    title={"Now available for PS5 and Xbox Series X|S"}
                    text={"Experience entertainment blockbusters, Grand Theft Auto V and GTA Online."}
                    btn1={"WATCH THE TRAILER"}
                    btn1State={setModal}
                    btn2={"DOWNLOAD NOW"}
                    btn2Link={"#download"}
                />

                <div className="info container mt-5">
                    {infoData.map((e, id) => (
                        <div key={id} className="info__card">
                            {e.img ?
                                <img data-aos="fade-in" data-aos-duration="2000" src={e.img} alt="gta image" />
                                :
                                null
                            }

                            {e.img2 ?
                                <img src={e.img2} alt="gta-logo" className="logo-img" />
                                :
                                null
                            }

                            <div data-aos="fade-up" className="info__card__text">
                                <h1 className="title">{e.title}</h1>
                                <p>
                                    {e.text}
                                    <br /> <br />
                                    {e.text2 ? e.text2 : null}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

                <div id='download' className="dw container mt-5">
                    <DwCards />
                </div>

            </main>
        </>
    )
}
