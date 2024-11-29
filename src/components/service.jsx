import React from 'react'
import './ser.css'
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';

import companyLogo9 from './image/img9.png'
import companyLogo10 from './image/m1.png'
import companyLogo11 from './image/m3.png'
import companyLogo12 from './image/img12.png'
import companyLogo13 from './image/img13.png'
import companyLogo14 from './image/img14.png'


function service() {

    return (
        <div>

            <div className="b3">

                <h1 className="heading">Play-Ground</h1>

                <div className="card">
                    <ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRightt' duration={2} >
                        <div className="child side-right">
                            <div className="innerchild">
                                <img src={companyLogo9} alt="" className='cardimage' />
                            </div>
                            <p className="para">Let's explore the essential components of teaching the alphabet (ABCs) to kindergarten kids. Alphabet knowledge is a foundational skill that lays the groundwork for future reading success.</p>

                          
                            <a href="#/ABC" className='link1'> <button className="btn btn6"> Let'sGo  </button></a>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn='flipInY' animateOut='flipOutY' duration={2}>
                        <div className="child side-right">
                            <div className="innerchild">
                                <img src={companyLogo10} alt="" className='cardimage' />
                            </div>
                            <p className="para">Let's explore the essential components of teaching poetry to kindergarten kids.   By breaking down the elements of poems, we  appreciate the beauty of language, rhythm, and imagination</p>
                          
                            <a href="#/poem1" className='link1'> <button className="btn btn7"> Let'sGo  </button></a>
                        </div>
                    </ScrollAnimation>


                    <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft' duration={2} >
                        <div className="child ">
                            <div className="innerchild">
                                <img src={companyLogo11} alt="" className='cardimage' />
                            </div>
                            <p className="para">Let's explore the essential components of fostering creativity in kindergarten kids and how quizzes can be a fun and engaging way to enhance their learning experience.</p>
                          
                            <a href="#/fun" className='link1'> <button className="btn btn8"> Let'sGo  </button></a>

                        </div>
                    </ScrollAnimation>


                </div>

            </div>
            <div style={{
      position: 'relative',
      width: '100%',
      height: '0',
      paddingTop: '56.25%',
      paddingBottom: '0',
      boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
      marginTop: '0em',
      marginBottom: '0em',
      overflow: 'hidden',
      borderRadius: '8px',
      willChange: 'transform'
    }}>
      <iframe className='ppp'
        loading="lazy"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: '0',
          left: '0',
          border: 'none',
          padding: '0',
          margin: '0'
        }}
        src="https://www.canva.com/design/DAGMmfDXsws/p5JdP3TnQ54ybL50ILegog/view?embed"
        allowFullScreen={true}
        allow="fullscreen"
        title="Colorful Organic Child Psychology Presentation"
      ></iframe>
    </div>
  
            <div className="b4">
                <h1 className="heading">Testimonial</h1>
                <div className="testimonial">
                    <img src={companyLogo12} alt="" className='testimage' />
                    <div className="test">
                        <ScrollAnimation animateIn='bounceInRight' duration={2} >
                            <div className="card1 C1">
                                <h1 className='H1'>Amrita Naik &#x2606; &#x2606; &#x2606; </h1>
                                <p className='P'>“Colorful, Engaging, Fun Learning for Kindergarten!” 🌈🎨📚</p>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='bounceInRight' duration={2} >
                            <div className="card1 C2"> <h1 className='H1'>Harry Brook  &#x2606; &#x2606; &#x2606;</h1>
                                <p className='P'>“Engaging, Kid-Friendly Learning Platform!” 🌟📚🎈</p>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='bounceInRight' duration={2}>
                            <div className="card1 C1"> <h1 className='H1'>Aman Shetty  &#x2606; &#x2606; &#x2606;</h1>
                                <p className='P'>“Interactive, Playful Learning Adventures Await Here!” 🌟🎒🌈</p>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn='bounceInRight' duration={2}>
                            <div className="card1 C2"> <h1 className='H1'>Bhawesh Singh  &#x2606; &#x2606; &#x2606;</h1>
                                <p className='P'>“Playful, Learning Magic Awaits Here!” 🌟🔮🎉</p>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
            <div className="footer">
                <ScrollAnimation animateIn='bounceInRight' duration={2}>
                    <img src={companyLogo13} alt="" className='f1' />
                </ScrollAnimation>
                <ScrollAnimation animateIn='bounceInRight' duration={2}>
                <div className="list">
                
Memory Hurdle is optimized for learning and training. Examples might be simplified to improve reading and learning.
Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness
of all content. While using Memory-Hurdle, you agree to have read and accepted our terms of use, cookie and privacy policy.
<br></br>
<br></br>
<br></br>
Copyright 2024 by Refsnes Data. All Rights Reserved. Memory-Hurdle is Powered by Memory-Hurdle.

                </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='bounceInLeft' duration={2}>
                    <img src={companyLogo14} alt="" className='f2' />
                </ScrollAnimation>
            </div>
        </div >
    )
}

export default service
