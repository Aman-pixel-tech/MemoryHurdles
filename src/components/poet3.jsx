import React from 'react'
import './poet3.css'

import ReactAudioPlayer from 'react-audio-player';
import companyLogo48 from './audio/moneky.mp3'
import companyLogo47 from './video/monkey.mp4'


function poet2() {


    return (
        <div>
            <div className="main3">

                <div className="image93">
                    <video src={companyLogo47} autoPlay loop className='video93' muted></video>
                </div>
                <div className="lines3">
                    <h1 id="paraline3">5 LITLE MONKEY </h1>
                    <div className='long3' >
                        <p>
                            Five little monkeys jumping on the bed, <br></br>
                            One fell off and bumped his head, <br></br>
                            Mama called the doctor and the doctor said, <br></br>
                            "No more monkeys jumping on the bed!" <br></br>

                            Four little monkeys jumping on the bed, <br></br>
                            One fell off and bumped his head, <br></br>
                            Mama called the doctor and the doctor said <br></br>,
                            "No more monkeys jumping on the bed!" <br></br>

                            Three little monkeys jumping on the bed, <br></br>
                            One fell off and bumped her head, <br></br>
                            Mama called the doctor and the doctor said, <br></br>
                            "No more monkeys jumping on the bed!" <br></br>

                            Two little monkeys jumping on the bed, <br></br>
                            One fell off and bumped his head,<br></br>
                            Mama called the doctor and the doctor said, <br></br>
                            "No more monkeys jumping on the bed!" <br></br>

                            One little monkey jumping on the bed, <br></br>
                            He fell off and bumped his head, <br></br>
                            Mama called the doctor and the doctor said, <br></br>
                            "No more monkeys jumping on the bed!" <br></br>
                        </p>

                    </div>
                    <div className="sound3">

                        <ReactAudioPlayer
                            src={companyLogo48}
                            // autoPlay
                            controls
                            className='twinkle3  o'

                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default poet2
