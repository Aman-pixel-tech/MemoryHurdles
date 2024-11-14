import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import './fun.css'
import "animate.css/animate.compat.css"
import companyLogo991 from './image/m9.png'
import companyLogo10 from './image/m10.png'
import companyLogo11 from './image/m11.png'
import companyLogo992 from './image/m12.png'
import companyLogo993 from './image/m13.png'
import companyLogo994 from './image/m14.png'

function fun() {
  return (
    <div>
       <div className="b35F">

<h1 className="heading5F">FUNCORNER</h1>

<div className="card5F">
    <ScrollAnimation animateIn='bounceInLeft' duration={2} >
        <div className="child5F side-right5F  up">
            <div className="innerchild5F">
                <img src={companyLogo991} alt="" className='cardimage5F' />
            </div>
            <p className="para5F"> 🎨Whiteboards are versatile tools that can enhance learning, creativity, and engagement in the classroom.</p>
           <a href="#/draw" className='link1F'> <button className="btn5F"> Let'sGo  </button></a>
        </div>
    </ScrollAnimation>

    <ScrollAnimation animateIn='flipInY'  duration={2}>
        <div className="child5F side-right5F">
            <div className="innerchild5F">
                <img src={companyLogo10} alt="" className='cardimage5F' />
            </div>
            <p className="para5F"> Let’s explore how kindergarten kids can engage with the concept of identification (ID) in fun and educational ways.</p>
            <a href="#/dash" className='link1F'> <button className="btn5F"> Let'sGo  </button></a>

        </div>
    </ScrollAnimation>


    <ScrollAnimation animateIn='bounceInRight'  duration={2} >
        <div className="child5F ">
            <div className="innerchild5F">
                <img src={companyLogo11} alt="" className='cardimage5F' />
            </div>
            <p className="para5F">🌟 Let’s explore some engaging English quiz activities that are perfect for kindergarten kids.</p>
            <a href="#/mathq" className='link1F'> <button className="btn5F"> Let'sGo  </button></a>

        </div>
    </ScrollAnimation>


</div>
<div className="card5F   med5cardF">
    <ScrollAnimation animateIn='bounceInLeft'duration={2} >
        <div className="child5F side-right5F">
            <div className="innerchild5F">
                <img src={companyLogo992} alt="" className='cardimage5F' />
            </div>
            <p className="para5F">Absolutely! Let’s explore some delightful math quiz activities suitable for kindergarten kids.🌟 </p>
           <a href="#/game" className='link1F'> <button className="btn5F"> Let'sGo  </button></a>
        </div>
    </ScrollAnimation>
    <ScrollAnimation animateIn='flipInY'  duration={2}>
        <div className="child5F side-right5F">
            <div className="innerchild5F">
                <img src={companyLogo993} alt="" className='cardimage5F' />
            </div>
            <p className="para5F"> kindergarten assessments and final tests can be designed to evaluate what young learners have mastered during the school year.</p>
            <a href="#/final" className='link1F'> <button className="btn5F"> Let'sGo  </button></a>

        </div>
    </ScrollAnimation>

    <ScrollAnimation animateIn='bounceInRight' duration={2} >
        <div className="child5F side-right5F">
            <div className="innerchild5F">
                <img src={companyLogo994} alt="" className='cardimage5F' />
            </div>
            <p className="para5F"> Let’s explore how kindergarten kids interact with mobile phones and the considerations for responsible phone use. 📱</p>
            <a href="#/phone" className='link1F'> <button className="btn5F"> Let'sGo  </button></a>

        </div>
    </ScrollAnimation>


   


</div>
    </div>
    </div>
  )
}

export default fun
