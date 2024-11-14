import React from 'react';
import './cardalpha.css'
import companyLogo50 from './image/img50.png'
import companyLogo52 from './image/img52.png'
import companyLogo54 from './image/banana.png'
import companyLogo55 from './image/cat.png'
import companyLogo56 from './image/dog.png'
import companyLogo57 from './image/elephant.png'
import companyLogo58 from './image/fish.png'
import companyLogo59 from './image/grapes.png'
import companyLogo60 from './image/hen.png'
import companyLogo61 from './image/icecream.png'
import companyLogo62 from './image/jaguar.png'
import companyLogo63 from './image/king.png'
import companyLogo64 from './image/lion.png'
import companyLogo65 from './image/mango.png'
import companyLogo66 from './image/nest.png'
import companyLogo67 from './image/orange.png'
import companyLogo68 from './image/parrot.png'
import companyLogo69 from './image/queen.png'
import companyLogo70 from './image/rabbit.png'
import companyLogo71 from './image/sun.png'
import companyLogo72 from './image/tiger.png'
import companyLogo73 from './image/umbrella.png'
import companyLogo74 from './image/victory.png'
import companyLogo75 from './image/women.png'
import companyLogo76 from './image/xray.png'
import companyLogo77 from './image/young.png'
import companyLogo78 from './image/zebra.png'
import companyLogo79 from './image/pic.png'



function cardalpha() {


  const handleCardClick = (letter) => {

    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(letter);
    synth.speak(utterance);
  };

  return (
    <div className='alphabetsmain'>
      <div className='tophead'>
        <h1 className='headi'>ALPHABETS</h1>
        </div>

      <div className="pic">
        <img src={companyLogo79} alt="" className='picimg'/>
        </div>
    <div className='alphabets'>
      <div className='alphabet1'>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">

              <h1 className="a">A</h1>

            </div>
            <div className="flip-card-back">

              <div className="alphaimage">
                <img src={companyLogo50} alt="" className='alphaimg' />
              </div>
              <h1 id='A2'>APPLE</h1>
            </div>
          </div>
        </div>

        <button className="btnv" onClick={() => handleCardClick("Apple")}><img src={companyLogo52} alt="" className='alphaimg2' /></button>

      </div>
      <div className='alphabet1'>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">

              <h1 className="a">B</h1>

            </div>
            <div className="flip-card-back">

              <div className="alphaimage">
                <img src={companyLogo54} alt="" className='alphaimg' />
              </div>
              <h1 id='A2'>BANANA</h1>
            </div>
          </div>
        </div>

        <button className="btnv" onClick={() => handleCardClick("Banana")}><img src={companyLogo52} alt="" className='alphaimg2' /></button>

      </div>
      <div className='alphabet1'>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">

      <h1 className="a">C</h1>

    </div>
    <div className="flip-card-back">

      <div className="alphaimage">
        <img src={companyLogo55} alt="" className='alphaimg' />
      </div>
      <h1 id='A2'>CAT</h1>
    </div>
  </div>
</div>

<button className="btnv" onClick={() => handleCardClick("Cat")}><img src={companyLogo52} alt="" className='alphaimg2' /></button>

</div> <div className='alphabet1'>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">

      <h1 className="a">D</h1>

    </div>
    <div className="flip-card-back">

      <div className="alphaimage">
        <img src={companyLogo56} alt="" className='alphaimg' />
      </div>
      <h1 id='A2'>Dog</h1>
    </div>
  </div>
</div>

<button className="btnv" onClick={() => handleCardClick("Dog")}><img src={companyLogo52} alt="" className='alphaimg2' /></button>

</div> <div className='alphabet1'>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">

      <h1 className="a">E</h1>

    </div>
    <div className="flip-card-back">

      <div className="alphaimage">
        <img src={companyLogo57} alt="" className='alphaimg' />
      </div>
      <h1 id='A2'>ELEPHANT</h1>
    </div>
  </div>
</div>

<button className="btnv" onClick={() => handleCardClick("Elephant")}><img src={companyLogo52} alt="" className='alphaimg2' /></button>

</div> <div className='alphabet1'>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">

      <h1 className="a">F</h1>

    </div>
    <div className="flip-card-back">

      <div className="alphaimage">
        <img src={companyLogo58} alt="" className='alphaimg' />
      </div>
      <h1 id='A2'>FISH</h1>
    </div>
  </div>
</div>

<button className="btnv" onClick={() => handleCardClick("Fish")}><img src={companyLogo52} alt="" className='alphaimg2' /></button>

</div> <div className='alphabet1'>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">

      <h1 className="a">G</h1>

    </div>
    <div className="flip-card-back">

      <div className="alphaimage">
        <img src={companyLogo59} alt="" className='alphaimg' />
      </div>
      <h1 id='A2'>GRAPES</h1>
    </div>
  </div>
</div>

<button className="btnv" onClick={() => handleCardClick("GRAPES")}><img src={companyLogo52} alt="" className='alphaimg2' /></button>

</div> <div className='alphabet1'>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">

      <h1 className="a">H</h1>

    </div>
    <div className="flip-card-back">

      <div className="alphaimage">
        <img src={companyLogo60} alt="" className='alphaimg' />
      </div>
      <h1 id='A2'>HEN</h1>
    </div>
  </div>
</div>

<button className="btnv" onClick={() => handleCardClick("Hen")}><img src={companyLogo52} alt="" className='alphaimg2' /></button>

</div> <div className='alphabet1'>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">

      <h1 className="a">I</h1>

    </div>
    <div className="flip-card-back">

      <div className="alphaimage">
        <img src={companyLogo61} alt="" className='alphaimg' />
      </div>
      <h2 id='A2'>ICE-CREAM</h2>
    </div>
  </div>
</div>

<button className="btnv" onClick={() => handleCardClick("ICE-CREAM")}><img src={companyLogo52} alt="" className='alphaimg2' /></button>

</div> <div className='alphabet1'>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">

      <h1 className="a">J</h1>

    </div>
    <div className="flip-card-back">

      <div className="alphaimage">
        <img src={companyLogo62} alt="" className='alphaimg' />
      </div>
      <h1 id='A2'>JAGUAR</h1>
    </div>
  </div>
</div>

<button className="btnv" onClick={() => handleCardClick("jaguar")}><img src={companyLogo52} alt="" className='alphaimg2' /></button>

</div> <div className='alphabet1'>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">

      <h1 className="a">K</h1>

    </div>
    <div className="flip-card-back">

      <div className="alphaimage">
        <img src={companyLogo63} alt="" className='alphaimg' />
      </div>
      <h1 id='A2'>KING</h1>
    </div>
  </div>
</div>

<button className="btnv" onClick={() => handleCardClick("king")}><img src={companyLogo52} alt="" className='alphaimg2' /></button>

</div> <div className='alphabet1'>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">

      <h1 className="a">L</h1>

    </div>
    <div className="flip-card-back">

      <div className="alphaimage">
        <img src={companyLogo64} alt="" className='alphaimg' />
      </div>
      <h1 id='A2'>LION</h1>
    </div>
  </div>
</div>

<button className="btnv" onClick={() => handleCardClick("lion")}><img src={companyLogo52} alt="" className='alphaimg2' /></button>

</div> <div className='alphabet1'>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">

      <h1 className="a">M</h1>

    </div>
    <div className="flip-card-back">

      <div className="alphaimage">
        <img src={companyLogo65} alt="" className='alphaimg' />
      </div>
      <h1 id='A2'>MANGO</h1>
    </div>
  </div>
</div>

<button className="btnv" onClick={() => handleCardClick("mango")}><img src={companyLogo52} alt="" className='alphaimg2' /></button>

</div> <div className='alphabet1'>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">

      <h1 className="a">N</h1>

    </div>
    <div className="flip-card-back">

      <div className="alphaimage">
        <img src={companyLogo66} alt="" className='alphaimg' />
      </div>
      <h1 id='A2'>NEST</h1>
    </div>
  </div>
</div>

<button className="btnv" onClick={() => handleCardClick("Nest")}><img src={companyLogo52} alt="" className='alphaimg2' /></button>

</div> <div className='alphabet1'>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">

      <h1 className="a">O</h1>

    </div>
    <div className="flip-card-back">

      <div className="alphaimage">
        <img src={companyLogo67} alt="" className='alphaimg' />
      </div>
      <h1 id='A2'>ORANGE</h1>
    </div>
  </div>
</div>

<button className="btnv" onClick={() => handleCardClick("orange")}><img src={companyLogo52} alt="" className='alphaimg2' /></button>

</div> <div className='alphabet1'>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">

      <h1 className="a">P</h1>

    </div>
    <div className="flip-card-back">

      <div className="alphaimage">
        <img src={companyLogo68} alt="" className='alphaimg' />
      </div>
      <h1 id='A2'>PARROT</h1>
    </div>
  </div>
</div>

<button className="btnv" onClick={() => handleCardClick("parrot")}><img src={companyLogo52} alt="" className='alphaimg2' /></button>

</div> <div className='alphabet1'>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">

      <h1 className="a">Q</h1>

    </div>
    <div className="flip-card-back">

      <div className="alphaimage">
        <img src={companyLogo69} alt="" className='alphaimg' />
      </div>
      <h1 id='A2'>QUEEN</h1>
    </div>
  </div>
</div>

<button className="btnv" onClick={() => handleCardClick("Queen")}><img src={companyLogo52} alt="" className='alphaimg2' /></button>

</div> <div className='alphabet1'>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">

      <h1 className="a">R</h1>

    </div>
    <div className="flip-card-back">

      <div className="alphaimage">
        <img src={companyLogo70} alt="" className='alphaimg' />
      </div>
      <h1 id='A2'>RABBIT</h1>
    </div>
  </div>
</div>

<button className="btnv" onClick={() => handleCardClick("Rabbit")}><img src={companyLogo52} alt="" className='alphaimg2' /></button>

</div> <div className='alphabet1'>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">

      <h1 className="a">S</h1>

    </div>
    <div className="flip-card-back">

      <div className="alphaimage">
        <img src={companyLogo71} alt="" className='alphaimg' />
      </div>
      <h1 id='A2'>SUN</h1>
    </div>
  </div>
</div>

<button className="btnv" onClick={() => handleCardClick("sun")}><img src={companyLogo52} alt="" className='alphaimg2' /></button>

</div> <div className='alphabet1'>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">

      <h1 className="a">T</h1>

    </div>
    <div className="flip-card-back">

      <div className="alphaimage">
        <img src={companyLogo72} alt="" className='alphaimg' />
      </div>
      <h1 id='A2'>TIGER</h1>
    </div>
  </div>
</div>

<button className="btnv" onClick={() => handleCardClick("tiger")}><img src={companyLogo52} alt="" className='alphaimg2' /></button>

</div> <div className='alphabet1'>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">

      <h1 className="a">U</h1>

    </div>
    <div className="flip-card-back">

      <div className="alphaimage">
        <img src={companyLogo73} alt="" className='alphaimg' />
      </div>
      <h1 id='A2'>UMBRELLA</h1>
    </div>
  </div>
</div>

<button className="btnv" onClick={() => handleCardClick("umbrella")}><img src={companyLogo52} alt="" className='alphaimg2' /></button>

</div> <div className='alphabet1'>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">

      <h1 className="a">V</h1>

    </div>
    <div className="flip-card-back">

      <div className="alphaimage">
        <img src={companyLogo74} alt="" className='alphaimg' />
      </div>
      <h1 id='A2'>VICTORY</h1>
    </div>
  </div>
</div>

<button className="btnv" onClick={() => handleCardClick("Victroy")}><img src={companyLogo52} alt="" className='alphaimg2' /></button>

</div> <div className='alphabet1'>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">

      <h1 className="a">W</h1>

    </div>
    <div className="flip-card-back">

      <div className="alphaimage">
        <img src={companyLogo75} alt="" className='alphaimg' />
      </div>
      <h1 id='A2'>WOMEN</h1>
    </div>
  </div>
</div>

<button className="btnv" onClick={() => handleCardClick("women")}><img src={companyLogo52} alt="" className='alphaimg2' /></button>

</div> <div className='alphabet1'>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">

      <h1 className="a">X</h1>

    </div>
    <div className="flip-card-back">

      <div className="alphaimage">
        <img src={companyLogo76} alt="" className='alphaimg' />
      </div>
      <h1 id='A2'>X-RAY</h1>
    </div>
  </div>
</div>

<button className="btnv" onClick={() => handleCardClick("X-RAY")}><img src={companyLogo52} alt="" className='alphaimg2' /></button>

</div> <div className='alphabet1'>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">

      <h1 className="a">Y</h1>

    </div>
    <div className="flip-card-back">

      <div className="alphaimage">
        <img src={companyLogo77} alt="" className='alphaimg' />
      </div>
      <h1 id='A2'>YOUNG</h1>
    </div>
  </div>
</div>

<button className="btnv" onClick={() => handleCardClick("young")}><img src={companyLogo52} alt="" className='alphaimg2' /></button>

</div> <div className='alphabet1'>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">

      <h1 className="a">Z</h1>

    </div>
    <div className="flip-card-back">

      <div className="alphaimage">
        <img src={companyLogo78} alt="" className='alphaimg' />
      </div>
      <h1 id='A2'>ZEBRA</h1>
    </div>
  </div>
</div>

<button className="btnv" onClick={() => handleCardClick("Zebra")}><img src={companyLogo52} alt="" className='alphaimg2' /></button>

</div>
    </div>

    </div>
  )
}

export default cardalpha
