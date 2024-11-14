import React, { useState, useEffect } from 'react';
import './final.css';

const questions = [
  {
    question: "What is the first letter of the word 'Apple'?",
    options: ["A", "B", "C", "D"],
    answer: "A"
  },
  {
    question: "What is the last letter in the Alphabet?",
    options: ["A", "Z", "I", "D"],
    answer: "Z"
  },
  {
    question: "What comes after S_____?",
    options: ["H", "O", "T", "P"],
    answer: "T"
  },
  {
    question: "What comes after P_____?",
    options: ["L", "Q", "I", "O"],
    answer: "Q"
  },
  {
    question:  "What comes after D_____?",
    options: ["A", "R", "F", "E"],
    answer: "E"
  },
  {
    question:  "What comes after Y_____?",
    options: ["B", "F", "G", "Z"],
    answer: "Z"
  },
  {
    question:  "What comes after C_____?",
    options: ["Y", "D", "B", "A"],
    answer: "D"
  },
  {
    question:  "What comes before _____ G?",
    options: ["P", "O", "F", "D"],
    answer: "F"
  },
  {
    question:  "What comes before _____ T?",
    options: ["L", "Y", "S", "D"],
    answer: "S"
  },
  {
    question:  "What comes before _____ W?",
    options: ["P", "B", "C", "v"],
    answer: "v"
  },
  {
    question: "What is 2 + 2",
    options: ["4", "5", "7", "0"],
    answer: "4"
  },
  {
    question: "What is 9 + 2",
    options: ["14", "8", "11", "10"],
    answer: "11"
  },
  {
    question: "What is 12 - 2",
    options: ["10", "3", "17", "0"],
    answer: "10"
  },
  {
    question: "What is 10 - 2",
    options: ["4", "12", "8", "10"],
    answer: "8"
  },
  {
    question: "What is 2 * 2",
    options: ["4", "15", "7", "10"],
    answer: "4"
  },
  {
    question: "What is 2 *5",
    options: ["9", "10", "7", "0"],
    answer: "10"
  },
  {
    question: "What is 2 / 2",
    options: ["4", "5", "7", "1"],
    answer: "1"
  },
  {
    question: "What is 12 / 2",
    options: ["0", "2", "6", "10"],
    answer: "6"
  },
  {
    question: "What is 12 + 2",
    options: ["14", "9", "7", "8"],
    answer: "14"
  },
  {
    question: "What is 10 + 12",
    options: ["24", "25", "22", "10"],
    answer: "22"
  },
  
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [timeOut, setTimeOut] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10); // Set the timeout duration in seconds

  useEffect(() => {
    if (timeLeft > 0 && !showResult) {
      const timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setTimeOut(true);
    }
  }, [timeLeft, showResult]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption("");
    setTimeLeft(10);
    setTimeOut(false);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption("");
    setTimeLeft(10);
    setTimeOut(false);
  };

  return (
    <div className="a2">
        
    <div className="app5">
      {showResult ? (
        <div className="result5">
          <h2>You scored {score} out of {questions.length}</h2>
          {score === questions.length ? (
            <a href='./cert'><button className="generate-certificate5">Generate Certificate</button></a>
          ) : (
            <button onClick={handleRetry} className="next-button5">Retry</button>
          )}
        </div>
      ) : (
        <div className="quiz5">
          <h2>Question {currentQuestion + 1}/{questions.length}</h2>
          <div className="question5">{questions[currentQuestion].question}</div>
          <div className="options5">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`option-button5 ${selectedOption === option ? 'selected5' : ''}`}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="navigation5">
            {timeOut ? (
              <button onClick={handleNextQuestion} className="next-button5">Time's up! Next</button>
            ) : (
              <button onClick={handleNextQuestion} className="next-button5">Next</button>
            )}
          </div>
          <div className="timer5">Time left: {timeLeft} seconds</div>
        </div>
      )}
    </div>
    </div>
  );
};

export default App;
