import React from 'react'
import './poet5.css'
import ReactAudioPlayer from 'react-audio-player';
import companyLogo128 from './audio/rain.mp3'
import companyLogo129 from './video/rain.mp4'


function poet2() {


    return (
        <div>
            <div className="main5">

                <div className="image95">
                    <video src={companyLogo129} autoPlay loop className='video95' muted></video>
                </div>
                <div className="lines5">
                    <h1 id="paraline5">RAIN RAIN GO AWAY </h1>
                    <div className='long5' >
                        <p>
                            Rain, rain, go away.<br></br>
                            Come again another day.<br></br>
                            Daddy wants to play.<br></br>
                            Rain, rain, go away.<br></br>
<br></br>
                            Rain, rain, go away.<br></br>
                            Come again another day.<br></br>
                            Mommy wants to play.<br></br>
                            Rain, rain, go away.<br></br>
<br></br>
                          
                            Rain, rain, go away.<br></br>
                            Come again another day.<br></br>
                            Sister wants to play.<br></br>
                            Rain, rain, go away.<br></br>
<br></br>
                            Rain, rain, go away.<br></br>
                            Come again another day.<br></br>
                            All the family wants to play.<br></br>
                            Rain, rain, go away.<br></br>
                        </p>

                    </div>
                    <div className="sound5">

                        <ReactAudioPlayer
                            src={companyLogo128}
                            // autoPlay
                            controls
                            className='twinkle5'

                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default poet2
