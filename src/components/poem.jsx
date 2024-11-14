import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import './poem.css'
import "animate.css/animate.compat.css"
import companyLogo9 from './image/m4.png'
import companyLogo900 from './image/m5.png'
import companyLogo999 from './image/m6.jpeg'
import companyLogo990 from './image/m7.png'
import companyLogo10 from './image/m8.png'

function poem() {
  return (
    <div>
       <div className="b35">

<h1 className="heading5">Poem</h1>

<div className="card5">
    <ScrollAnimation animateIn='bounceInLeft' duration={2} >
        <div className="child5 side-right5">
            <div className="innerchild5">
                <img src={companyLogo9} alt="" className='cardimage5' />
            </div>
            <p className="para5"> the beloved nursery rhyme “Twinkle, Twinkle, Little Star.
            Here’s a Twinkle Twinkle Little Star-themed lesson plan for young learners🎶
            </p>
           <a href="./twinkle" className='link1'> <button className="btn5"> Let'sGo  </button></a>
        </div>
    </ScrollAnimation>

    <ScrollAnimation animateIn='flipInY'  duration={2}>
        <div className="child5 side-right5">
            <div className="innerchild5">
                <img src={companyLogo999} alt="" className='cardimage5' />
            </div>
            <p className="para5">Ah, “Johnny Johnny Yes Papa”! That’s a classic nursery rhyme that has been sung by countless little ones around the world. 🎶</p>
            <a href="./jonny" className='link1'> <button className="btn5"> Let'sGo  </button></a>

        </div>
    </ScrollAnimation>


    <ScrollAnimation animateIn='bounceInRight'  duration={2} >
        <div className="child5 ">
            <div className="innerchild5">
                <img src={companyLogo990} alt="" className='cardimage5' />
            </div>
            <p className="para5">Ah, the “Five Little Monkeys” nursery rhyme! 🐒🎶inspired by those playful little primates. Let’s swing into action!the  </p>
            <a href="./monkey" className='link1'> <button className="btn5"> Let'sGo  </button></a>

        </div>
    </ScrollAnimation>


</div>
<div className="card5   med5card">
    <ScrollAnimation animateIn='bounceInLeft'duration={2} >
        <div className="child5 side-right5">
            <div className="innerchild5">
                <img src={companyLogo900} alt="" className='cardimage5' />
            </div>
            <p className="para5">The classic nursery rhyme  🦆“Five Little Ducks.” Quack-quack!  Quack-quack! Quack-quack!🎶</p>
           <a href="./doll" className='link1'> <button className="btn5"> Let'sGo  </button></a>
        </div>
    </ScrollAnimation>

    <ScrollAnimation animateIn='bounceInRight' duration={2} >
        <div className="child5 side-right5">
            <div className="innerchild5">
                <img src={companyLogo10} alt="" className='cardimage5' />
            </div>
            <p className="para5">🌧️ Let’s explore the beloved nursery rhyme “Rain, Rain, Go Away.” It’s a timeless tune that kids have sung for generations when they wish for better weather. ☔</p>
            <a href="./poet5" className='link1'> <button className="btn5"> Let'sGo  </button></a>

        </div>
    </ScrollAnimation>


   


</div>
    </div>
    </div>
  )
}

export default poem
