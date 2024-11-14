import React from 'react'
import './body.css'
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
import companyLogo from './image/img1.png'
import companyLogo1 from './image/img3.png.png'
import companyLogo5 from './image/img5.png'
import companyLogo6 from './image/img6.png'
import companyLogo7 from './image/img7.png'
import companyLogo8 from './image/img8.png'
function Body() {
  return (
    <div>

      <div className='b1'>
        <ScrollAnimation animateIn='fadeIn'duration={2}>
          <div className="i1">
            <h1 className='I1'>THE</h1>
            <h2 className='I1 '>MEMORY HURDLE</h2>
            <h4 className='I1 OP'>"ITS PLATFORM FOR SUCCESS"</h4>
          </div>
        </ScrollAnimation>




        <div className="i2">
          <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'duration={2} >
            <img src={companyLogo} alt="Paris" className="I2" />
          </ScrollAnimation>
        </div>


        <img src={companyLogo1} alt="Paris" className="I3" />


      </div>
      
      <div className="b2">

        <div className="a1">
          <ScrollAnimation animateIn='bounce'duration={2}>

            <h1 className="A1">Personalized Learning</h1>
          </ScrollAnimation>


          <ScrollAnimation animateIn='fadeIn' duration={2}>
            <p className="P1">Personalized learning is an adaptable educational approach that recognizes that every child learns differently. It goes beyond a one-size-fits-all model and aims to meet individual students where they are. 
            </p>
          </ScrollAnimation>

          <div className="i8">
            <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft' duration={2}>
              <img src={companyLogo5} alt="Paris" className="  OA" />
            </ScrollAnimation>
          </div>

        </div>
      </div>
      
      <div className="b2">

        <div className="a1">

          <ScrollAnimation animateIn='bounce'duration={2}>
            <h1 className="A1">Knowledge</h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeIn'duration={2}>
            <p className="P1">We provide the best of work and provide with various concept that help to gain knowledge
            And some quizes to interact
            </p>
          </ScrollAnimation>

          <div className="i8">
            <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft' duration={2}>
              <img src={companyLogo6} alt="Paris" className=" OA" />
            </ScrollAnimation>
          </div>

        </div>
      </div>
      
      <div className="b2">

        <div className="a1">

          <ScrollAnimation animateIn='bounce'duration={2}>
            <h1 className="A1">Stay Motivated</h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeIn'duration={2}>
            <p className="P1">Keeping kindergarten kids motivated is essential for their overall development and love for learning. As parents, caregivers, and educators, we can use science-based approaches to encourage positive motivation.
            </p>
          </ScrollAnimation>
          <div className="i8">
            <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'duration={2}>
              <img src={companyLogo7} alt="Paris" className=" OA" />
            </ScrollAnimation>
          </div>

        </div>
      </div>
      
      <div className="b2">

        <div className="a1">

          <ScrollAnimation animateIn='bounce'duration={2}>
            <h1 className="A1">Creativity</h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeIn'duration={2} >
            <p className="P1">Creativity is a magical spark that ignites a child's imagination, curiosity, and joy. For kindergarteners, this creative flame burns brightly, and as educators and parents, we have the delightful task of fanning it into a lifelong passion. Let's explore how to nurture creativity in kindergarten kids:
            </p>
          </ScrollAnimation>

          <div className="i8">
            <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft' duration={2}>
              <img src={companyLogo8} alt="Paris" className="I4 " />
            </ScrollAnimation>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Body
