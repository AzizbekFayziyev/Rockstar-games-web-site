import React from 'react'

export default function TrailerModal({ url,state }) {
    return (
        // Trailer Modal
        <div data-aos="zoom-in" style={{"zIndex":"9999"}} className="trailerModal">
            <i onClick={state} style={{"zIndex":"999"}} class="fa-solid fa-xmark"></i>

            <iframe
                className='trailerModal__video'
                width="80%"
                height="80%"
                src={url+";autoplay=1&mute=1"}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; 
                autoplay; 
                clipboard-write;
                encrypted-media;
                gyroscope;
                picture-in-picture"
                allowfullscreen="true"
                >
            </iframe>
        </div>
    )
}
