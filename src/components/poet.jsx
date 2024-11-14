import React from 'react'
import './poet.css'

import ReactAudioPlayer from 'react-audio-player';
import companyLogo90 from './audio/twin.mp3'
import companyLogo91 from './video/twinkleing.mp4'


function poet() {


    return (
        <div>
            <div className="main">

                <div className="image9">
               <video src={companyLogo91} autoPlay loop className='video9' ></video>
                </div>
                <div className="lines">
                    <h1 id="paraline">TWINKLE TWINKLE </h1>
                    <div className='long' >
                        <p>
                            Twinkle, twinkle, little star,    <br></br>
                            How I wonder what you are!     <br></br>
                            Up above the world so high,     <br></br>
                            Like a diamond in the sky.     <br></br>
                            <br></br>
                            Twinkle, twinkle, little star,    <br></br>
                            How I wonder what you are!     <br></br>
                            Up above the world so high,     <br></br>
                            Like a diamond in the sky.     <br></br>
                            <br></br>

                        </p>

                    </div>
                    <div className="sound">

                        <ReactAudioPlayer
                            src={companyLogo90}
                            // autoPlay
                            controls
                            className='twinkle'
                           
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default poet
