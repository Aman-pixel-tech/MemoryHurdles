import React from 'react'
import './poet4.css'

import ReactAudioPlayer from 'react-audio-player';
import companyLogo28 from './audio/duck.mp3'
import companyLogo29 from './video/duck.mp4'


function poet2() {


    return (
        <div>
            <div className="main4">

                <div className="image94">
                    <video src={companyLogo29} autoPlay loop className='video94' muted></video>
                </div>
                <div className="lines4">
                    <h1 id="paraline4">5 LITLE DUCK </h1>
                    <div className='long4' >
                        <p>
                            Five little ducks went swimming one day<br>
                            </br>
                            Over the hill and far away<br>
                            </br>
                            Mother duck said, “Quack quack quack quack”<br>
                            </br>
                            And only four little ducks came back!<br>
                            </br>

                            Four little ducks went swimming one day<br>
                            </br>
                            Over the hill and far away<br>
                            </br>
                            Mother duck said, “Quack quack quack quack”<br>
                            </br>
                            And only three little ducks came back!<br>
                            </br>

                            Three little ducks went swimming one day<br>
                            </br>
                            Over the hill and far away<br>
                            </br>
                            Mother duck said, “Quack quack quack quack”<br>
                            </br>
                            And only two little ducks came back!<br>
                            </br>

                            Two little ducks went swimming one day<br>
                            </br>
                            Over the hill and far away.<br>
                            </br>
                            Mother duck said, “Quack quack quack quack”<br>
                            </br>
                            And only one little duck came back!<br>
                            </br>

                            One little duck went swimming one day<br>
                            </br>
                            Over the hill and far away<br>
                            </br>
                            Mother duck said, “Quack quack quack quack”<br>
                            </br>
                            And all her five little ducks came back!<br>
                            </br>
                        </p>

                    </div>
                    <div className="sound4">

                        <ReactAudioPlayer
                            src={companyLogo28}
                            // autoPlay
                            controls
                            className='twinkle4'

                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default poet2
