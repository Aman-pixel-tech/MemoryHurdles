import React, { useState, useEffect } from 'react';
import './game.css';

const quizQuestions = [
  {
    question: "What is the first letter of the alphabet?",
    options: ["A", "B", "C", "D"],
    answer: "A"
  },
  {
    question: "What comes after F____?",
    options: ["R", "Y", "B", "G"],
    answer: "G"
  },
  {
    question: "What comes after P____?",
    options: ["M", "B", "O", "Q"],
    answer: "Q"
  },
  {
    question: "What comes after J____?",
    options: ["R", "K", "L", "G"],
    answer: "K"
  },
  {
    question: "What comes after V____?",
    options: ["R", "W", "X", "Z"],
    answer: "W"
  },
  {
    question: "What comes after W____?",
    options: ["V", "G", "Y", "X"],
    answer: "X"
  },
  {
    question: "What comes after S____?",
    options: ["H", "I", "T", "U"],
    answer: "T"
  },
  {
    question: "What comes after U____?",
    options: ["O", "V", "P", "D"],
    answer: "V"
  },
  {
    question: "What comes after D____?",
    options: ["R", "F", "E", "M"],
    answer: "E"
  },
  {
    question: "What comes after M____?",
    options: ["O", "P", "N", "G"],
    answer: "N"
  },
  {
    question: "What comes after T____?",
    options: ["M", "B", "O", "U"],
    answer: "U"
  },
  {
    question: "What comes after X____?",
    options: ["K", "Y", "B", "G"],
    answer: "Y"
  },
  {
    question: "What comes after L____?",
    options: ["M", "B", "O", "P"],
    answer: "M"
  }
];

const Game = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [message, setMessage] = useState('');
  const [timer, setTimer] = useState(10);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const timerId = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(timerId);
    } else {
      handleNextQuestion();
    }
  }, [timer]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === quizQuestions[currentQuestionIndex].answer) {
      setMessage('🎉 Correct! 😊');
      setScore(score + 1);
    } else {
      setMessage('Try Again! 🤔');
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption('');
    setMessage('');
    setTimer(10); // Reset the timer for the next question
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setMessage(`Quiz Finished! Your score: ${score}`);
      setQuizFinished(true);
    }
  };

  const handleRetryQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption('');
    setMessage('');
    setTimer(10);
    setQuizFinished(false);
  };

  return (
   <div className='b89'>
    <div className="quiz-container2">
      <h1 className='top4'>English Quiz for Kids</h1>
      {!quizFinished ? (
        <div className="question-box2">
          <p className='ques3'>{quizQuestions[currentQuestionIndex].question}</p>
          <div className="options2">
            {quizQuestions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className={`option-button2 ${selectedOption === option ? 'selected' : ''}`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <p className="message2">{message}</p>
          <p className="timer2">Time left: {timer}s</p>
          {selectedOption && (
            <button className="next-button2" onClick={handleNextQuestion}>
              Next Question
            </button>
          )}
        </div>
      ) : (
        <div className="final-message-container2">
          <p className="final-message2">{message}</p>
          <button className="retry-button2" onClick={handleRetryQuiz}>Retry Quiz</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Game;
