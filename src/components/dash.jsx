// src/components/IntroductionCard.js
import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import './dash.css';
import companyLogo001 from './image/hide.png'


const Dash = () => {
  const [userInput, setUserInput] = useState({
    name: '',
    name2: '',
    name3: '',
    name4: '',

    // Add more fields as needed
  });
  const [introText, setIntroText] = useState('');
  const { speak } = useSpeechSynthesis();

  const handleSpeak = () => {
    speak({ text: introText });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleCustomIntro = () => {
    // Customize the introduction based on user input
    const { name, name2, name3, name4 } = userInput;
    setIntroText(`My name is  ${name}. I am  ${name2} year old . I am study in ${name3} class. I am live in ${name4} city.`);

  };

  return (
    <div className='idcorner'>

      <div className="corner">
        <h1>MY INTRO CORNER</h1>
        <p>{introText}</p>
      </div>

      <div className="introduction-card">
        <div className="lo"><img src={companyLogo001} alt="" className='co' /></div>
        <div className="introduction-card2">
          My name is
          <input className='in' type="text" placeholder=" name..." name="name" value={userInput.name}
            onChange={handleInputChange}
          />.
          <br />


          I am
          <input className='in2' type="number" placeholder=" age..." name="name2" value={userInput.name2}
            onChange={handleInputChange}
          /> year old.
          <br />

          I am Study in
          <input className='in2' type="text" placeholder=" class..." name="name3" value={userInput.name3}
            onChange={handleInputChange}
          />
          class.
          <br />

          I am live in
          <input className='in3' type="text" placeholder=" city..." name="name4" value={userInput.name4}
            onChange={handleInputChange}
          />
          city.

        </div>
      </div>
      <div className="useme">
        <button onClick={handleCustomIntro}>Use Custom Introduction</button>
        <button onClick={handleSpeak}>Read Aloud</button></div>

    </div>
  );
};

export default Dash;
