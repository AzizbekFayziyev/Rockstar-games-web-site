import React from 'react'
import gtaOnlineDW from "../../assets/images/overview/gta-online.png"
import gtaVDW from "../../assets/images/overview/gta-v.png"

export default function DwCards() {
    return (
        <>
            <h1 data-aos="fade-right" className="title">Download Now</h1>

            <div className="row">
                <div data-aos="fade-right" className="col-md-6 col-12">
                    <div className="dw__card">
                        <div className="dw__card__img">
                            <img src={gtaOnlineDW} alt="gta online" />
                        </div>
                        <div className="dw__card__text">
                            <h1 className="title">Grand Theft Auto Online</h1>
                            <p>Includes GTA Online</p>
                            <h2><b>Minimum System Requirements:</b></h2>
                            <ul>
                                <li><b>OC:</b> Windows 8.1 64 Bit </li>
                                <li><b>CPU:</b> Intel Core 2 Quad CPU Q6600 @ 2.40GHz</li>
                                <li><b>RAM:</b> 4GB</li>
                                <li><b>VIDEO CARD:</b> NVIDIA 9800 GT 1GB</li>
                                <li><b>SOUND CARD:</b> 100% DirectX 10 compatible</li>
                                <li><b>FREE DISK SPACE:</b> 94 GB</li>
                            </ul>
                            <a download href="https://torrent-igruha.ru/uploads/files/2020-02/1580714711_gta-5-ot-hattaba.torrent">
                                <button className="btn-global">
                                    DOWNLOAD TORRENT
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-left" className="col-md-6 col-12">
                    <div className="dw__card">
                        <div className="dw__card__img">
                            <img src={gtaVDW} alt="gta online" />
                        </div>
                        <div className="dw__card__text">
                            <h1 className="title">Grand Theft Auto V</h1>
                            <p>Includes GTAV Story Mode & GTA Online</p>
                            <h2><b>Minimum System Requirements:</b></h2>
                            <ul>
                                <li><b>OC:</b> Windows 7 64 Bit Service Pack 1</li>
                                <li><b>CPU:</b> Intel Core 2 Quad CPU Q6600 @ 2.40GHz</li>
                                <li><b>RAM:</b> 4GB</li>
                                <li><b>VIDEO CARD:</b> NVIDIA 9800 GT 1GB</li>
                                <li><b>SOUND CARD:</b> 100% DirectX 10 compatible</li>
                                <li><b>FREE DISK SPACE:</b> 72 GB</li>
                            </ul>

                            <a download href="https://torrent-igruha.ru/uploads/files/2017-09/1505140893_grand_theft_auto_v_by_se7en.torrent">
                                <button className="btn-global">
                                    DOWNLOAD TORRENT
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" className="alert">
                All latest feature upgrades and improvements available for Playstation 5 and Xbox Series X|S only.
            </div>
        </>
    )
}
