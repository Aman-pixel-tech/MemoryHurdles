import React from 'react'
import './poet2.css'

import ReactAudioPlayer from 'react-audio-player';
import companyLogo98 from './audio/johny.mp3'
import companyLogo97 from './video/johny1.mp4'


function poet2() {


    return (
        <div>
            <div className="main2">

                <div className="image92">
                    <video src={companyLogo97} autoPlay loop className='video92' muted></video>
                </div>
                <div className="lines2">
                    <h1 id="paraline2">JOHNY JOHNY </h1>
                    <div className='long2' >
                        <p>

                            Johny, Johny.    <br></br>

                            Yes, Papa?  <br></br>

                            Eating sugar?  <br></br>

                            No, Papa.  <br></br>
                           
                            Telling lies?  <br></br>

                            No, Papa.  <br></br>

                            Open your mouth.  <br></br>

                            Ha-ha-ha!...
                            <br></br>
                        </p>

                    </div>
                    <div className="sound2">

                        <ReactAudioPlayer
                            src={companyLogo98}
                            // autoPlay
                            controls
                            className='twinkle2'

                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default poet2
