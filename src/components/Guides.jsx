import React, { useEffect } from 'react';
// images
import gtaOnline from "../assets/images/gta-online.png"
// helpers
import HeaderSection from './Helpers/HeaderSection'
import guideImg from "../assets/images/guides/guide.jpg"

export default function Guides() {
    useEffect(() => {
        // scroll == 0
        window.scrollTo(0, 0);
    }, [])

    // show/hide question

    function toggleClick(e) {
        e.target.classList.toggle("question-active");
    }


    // const questions data
    const questionData = [
        {
            title: "How can I become a GTA+ Member?",
            text: "GTA+ memberships can be purchased directly from the PlayStation Store, Microsoft Store, or from within GTA Online on PlayStation 5 and Xbox Series X|S. Membership in GTA+ is completely optional and can be cancelled at any time. Memberships renew monthly, with new bonuses available to players to claim each month GTA+ is available only on GTA Online for PlayStation 5 or Xbox Series X|S."
        },
        {
            title: "Can I purchase a GTA+ Membership for PS4, Xbox One, or PC?",
            text: "No. GTA+ is only available for GTA Online for PlayStation 5 and Xbox Series X|S."
        },
        {
            title: "What is included in the GTA+ Membership?",
            text: "GTA+ is a monthly membership program delivering exclusive benefits including: GTA$500,000 deposited monthly. Access to Member-only Shark Cash Cards, with a 15% GTA$ bonus. Access to claim rotating vehicle-related benefits such as free vehicles and aircraft, early access to upcoming vehicles, vehicle upgrades, discounts and more. Access to claim rotating property-related benefits such as free properties, property add-ons, discounts, and more. Access to claim rotating additional rewards such free clothing, items, vehicle liveries and more."
        },
        {
            title: "Once I’m a GTA+ Member, how do I claim my Membership benefits for each Member-only Event?",
            text: "Your GTA$500,000 bonus is deposited automatically to your Maze Bank account each month you’re billed. Cosmetic benefits such as clothing available during Member-only events require you to log in to receive them, and will automatically be accessible to your account upon logging in. Other “free” or discounted items available during Member-only Events must be claimed at their respective in-game retailers, where they will be available to purchase in-game at either a discounted price or will be listed as “FREE” for GTA+ Members. Info on how to claim specific benefits will be listed during each Member-only event period on https://www.rockstargames.com/gta-plus. Game mode bonuses and accelerators available during Member-only events will automatically apply to any GTA+ Member playing the promoted game mode."
        },
        {
            title: "How can I cancel my Subscription to GTA+?",
            text: "You may cancel auto-renewal of your subscription to GTA+ at any time via the console store through which you initially purchased your subscription to GTA+. After canceling, your GTA+ Membership and access to its related benefits will remain active until the end of your current billing period, after which your GTA+ Membership will automatically end."
        },
        {
            title: "What happens to my GTA+ Membership Benefits when if I cancel my GTA+ Membership?",
            text: "If you cancel your subscription to GTA+, you will retain any property, vehicles, and other cosmetic items, along with any bonuses or deals, that you have claimed while your GTA+ Membership was active. However, you will no longer receive the monthly GTA$ bonus, be able to purchase GTA+ Shark Cards, have access to ongoing Membership benefits (such as early access or discounts to certain vehicles or property), or be eligible for new Membership benefits that become active after your Membership ends. You will also forfeit any benefits that you have not claimed by the time your Membership ends. Returning GTA+ Members will gain access to the benefits available for the active Member-only event at the time they renew their GTA+ Membership, but will not be able to claim any benefits or rewards from previous Member-only events which took place while their GTA+ Membership was inactive."
        },
        {
            title: "How do I claim GTA+ Membership Vehicle-Related Benefits?",
            text: "Active vehicle-related benefits can be claimed in-game - either by visiting vehicle customization shops like Lost Santos Customs, Benny's Original Motor Works, and Hao’s Special Works, or through in-game websites like Legendary Motorsports, Southern San Andreas Super Autos, Warstock Cache & Carry, Dock Tease, and Elitas Travel. GTA+ Members will see these benefits listed in-game at a discounted price or for “FREE,” as applicable, during applicable Member-only events."
        },
        {
            title: "When will I get my monthly GTA$500,000 bonus?",
            text: "While many GTA+ benefits are linked to specific Member-only events, your monthly GTA$500,000 bonus is linked to your subscription renewal date. GTA+ Members will receive GTA$500,000 each time they are billed for a subscription to GTA+, deposited directly to their MAZE Bank account."
        },
        {
            title: "What are the benefits of GTA+ Shark Cash Cards?",
            text: "GTA+ Members have access to purchase special GTA+ Shark Cash Cards, which provide an additional 15% GTA$ bonus compared to regular Shark Cash Cards. For instance, a regular Red Shark Cash Card provides GTA$100,000, whereas a GTA+ Red Shark Cash Card provides GTA$115,000 for the same price."
        }
    ]

    return (
        <>
            <section id="guides">
                <HeaderSection
                    img1={gtaOnline}
                    img1Alt={"gta online guides"}
                    title={"GTA Online Guides"}
                    text={"Whether you're just starting out, stuck in a Heist, or looking to diversify your criminal empire, our handy GTA Online Guides can help you expand your foothold in Los Santos and Blaine County."}
                />

                <div className="guide mt-5 container">

                    <h1 data-aos="fade-right" className="title">Gta Online Guides</h1>

                    <div data-aos="fade-in" className="info">
                        <img src={guideImg} alt="gta online guide" />
                        <div className="text">
                            <h1 className="title">
                                GTA Online Guide: Walkthrough, Where to Start, Tips, and Tricks
                            </h1>
                            <p>
                                This GTA Online guide is your one-stop-shop for every bit of information you could possibly need, covering all of the key areas and updates released since it originally launched all the way back in 2013. No matter whether you're just starting out – perhaps after picking up the enhanced new-gen version or the standalone online experience – and are wondering where to start, are looking for a deeper dive into a specific criminal enterprise, or are searching for one of the many types of collectibles hidden around the world, we've got you covered. Take the stress out of your multiplayer activities with the expert advice found in our GTA Online guide on a wide range of subjects.
                                <br /> <br />
                                Regular updates, modes, and challenges continue to arrive in Los Santos and Blaine Country, with the enhanced version for PS5 and Xbox Series X being the most recent addition – adding a Career Builder to kickstart your empire and a whole new stream of vehicle customizations. Prior to that there was The Contract, LS Car Meet, Cayo Perico island, the Galaxy Superyacht, and years of previous expansions. You can choose whether to build your criminal schemes on running nightclubs, dealing arms, printing counterfeit currency, or any other illicit enterprise. With so much still going on, GTA Online guides are essential to help you keep up to speed with everything.
                                <br /> <br />
                                No matter whether you're a curious beginner or a seasoned veteran, we've got plenty of tips and guides to help you choose the fastest car, equip the best weapons, and earn a boatload of cash. So log on, tool up, and we'll begin...
                                GTA Online is a dense and rewarding experience, but it can also be overwhelming. Rockstar has spent years adding new content to Los Santos, and it can be hard to know where to start. The easy answer to this question is to simply experiment and see what takes your fancy, but new players are often looking for a little more guidance than that.
                                <br />
                                Fortunately, our GTA Online guide can help. In this section of the guide, we're going to introduce you to a couple of pages that will help you figure out where to start once you've arrived at Los Santos International Airport:
                                <ul className='my-3'>
                                    <li>GTA Online: Best Career Builder Business, Vehicles, and Weapons to Pick: Those of you taking advantage of the new Career Builder tool will want to make the best decisions when it comes to shaping your criminal career. Fortunately, we can help. This guide will help walk you through the options available to you, and the best businesses, vehicles, and weapons to pick with your GTA$4,000,000 windfall.</li>
                                    <li>GTA Online: Best Things to Do First in Los Santos: This guide acts as tourist information for new GTA Online players. In it you'll find a list of the hottest destinations in Los Santos, which will help to familiarise you with all of the things you can do in the game.</li>
                                    <li>GTA Online: How to Make Money Fast: If you're looking for a more authored introduction to GTA Online, then this guide will show you how you can go from penniless to penthouse. This guide includes checklists and achievable tasks, which will not only help you to see the wealth of activities that the game has to offer, but will also help you to make lots of money along the way.</li>
                                </ul>
                                <br />
                                Money makes the world go round in Los Santos, and if you want to do anything in GTA Online then you're going to need to know How to Make Money Fast. You'll be using your hard-earned GTA$ to buy and upgrade your Businesses, launch Heists, and even splash out on nice things, like the Best Cars and Vehicles to Buy and Own.
                                <br />
                                For the next part of our GTA Online guide, we're going to introduce the concepts that will make you a millionaire. Whether you're a long-time player looking to maximise your profits or a newcomer trying to write your very own rags to riches tale in the Land of the Free, we'll have your bank balance bulging in no time.
                                <br /> <br />
                                Running an underground business empire is one of the most rewarding things you can do in GTA Online, and it's the answer to one of the game's most common questions: How to Make Money Fast. There are 13 Businesses you can own and manage in Los Santos. They are:
                                <ul>
                                    <li>Document Forgery Offices</li>
                                    <li>Weed Farms</li>
                                    <li>Counterfeit Cash Factories</li>
                                    <li>Methamphetamine Labs</li>
                                    <li>Cocaine Lockups</li>
                                    <li>Special Cargo Warehouses</li>
                                    <li>Vehicle Cargo Warehouses</li>
                                    <li>Nightclubs</li>
                                    <li>Bunkers</li>
                                    <li>Hangars</li>
                                    <li>Arcades</li>
                                    <li>Auto Shops</li>
                                    <li>Agencies</li>
                                </ul>
                                For this next part of our GTA Online guide, we're going to explain how to get rich with all of the Businesses in Los Santos.
                                <br />
                                We're going to introduce the basic concepts of management, explain how to maximise profit with each organisation, and how best to expand and upgrade your criminal industry.
                            </p>
                        </div>
                    </div>

                    <div className="questions mt-5">
                        <h1 data-aos="fade-right" className="title">Frequently Asked Questions</h1>

                        {questionData.map((e, id) => (
                            <div data-aos="fade-up" key={id} title='show/hide' onClick={toggleClick} className="alert alert-question">
                                <h3>{e.title} <i class="fa-solid fa-chevron-down"></i></h3>
                                <p>{e.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
