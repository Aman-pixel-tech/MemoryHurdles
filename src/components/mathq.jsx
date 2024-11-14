import React, { useState, useEffect } from 'react';
import './mathq.css'


function Mathq() {

  const questions = [
    { question: '2 + 2', answer: 4 },
    { question: '3 + 5', answer: 8 },
    { question: '1 + 1', answer: 2 },
    { question: '5 + 2', answer: 7 },
    { question: '2 * 2', answer: 4 },
    { question: '3 * 0', answer: 0 },
    { question: '1 * 1', answer: 1 },
    { question: '5 * 2', answer: 10 },
    { question: '9 - 2', answer: 7 },
    { question: '5 - 4', answer: 1 },
    { question: '1 - 1', answer: 0 },
    { question: '5 - 2', answer: 3 }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);
  const [quizEnded, setQuizEnded] = useState(false);

  useEffect(() => {
    if (timer === 0) {
      handleNextQuestion();
    }
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    return () => clearInterval(countdown);
  }, [timer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (parseInt(userAnswer, 10) === correctAnswer) {
      setFeedback('🎉 Correct! 😊');
      setScore((prevScore) => prevScore += 1);
    } else {
      setFeedback('Try again! 🤔');
    }
    setUserAnswer('');
    setTimeout(handleNextQuestion, 1000); // Move to next question after 1 second
  };

  const handleNextQuestion = () => {
    setFeedback('');
    setTimer(30);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setQuizEnded(true);
    }
  };

  return (
    <div className='b8'>
      <div className="quiz-container1">
        <h1 className="title1">Math Quiz</h1>
        {quizEnded ? (
          <div className="score-container1">
            <h2 className='h21'>Your Final Score: {score}/{questions.length}</h2>
            <button onClick={() => window.location.reload()} className="retry-button1">Retry Quiz</button>
          </div>
        ) : (
          <div className="question-container1">
            <p className="question1">{questions[currentQuestionIndex].question}</p>
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="answer1 input1"
              />
              <button type="submit" className="submit1 button1">Submit</button>
            </form>
            {feedback && (
              <div className={`feedback1 ${feedback === 'Correct!' ? 'correct' : 'incorrect'}`}>
                {feedback}
              </div>
            )}
            <div className="timer1">Time left: {timer} seconds</div>
          </div>
        )}
        {!quizEnded && (
          <button onClick={handleNextQuestion} className="next1 button1">Next Question</button>
        )}
      </div>
    </div>
  );
};

export default Mathq;
