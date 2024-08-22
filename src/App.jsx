import React from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  const [Questions, setQuestions] = React.useState(0);
  const [FinalResult, setFinalResult] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const isClecked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (Questions + 1 < questions.length) {
      setQuestions(Questions + 1)
    } else {
      setFinalResult(true)
    }
  }

  const questions = [
    {
      text: "What is the official language of Pakistan?",
      options: [
        { id: 0, text: "Urdu", isCorrect: true },
        { id: 1, text: "English", isCorrect: false },
        { id: 2, text: "Punjabi", isCorrect: false },
        { id: 3, text: "Sindhi", isCorrect: false },
      ],
    },
    {
      text: "Who is the founder of Pakistan?",
      options: [
        { id: 0, text: "Jawaharlal Nehru", isCorrect: false },
        { id: 1, text: " Mahatma Gandhi", isCorrect: false },
        { id: 2, text: "Muhammad Ali Jinnah", isCorrect: true },
        { id: 3, text: "D) Liaquat Ali Khan", isCorrect: false },
      ],
    },
    {
      text: "What is the highest mountain peak in Pakistan?",
      options: [
        { id: 0, text: "Mount Everest", isCorrect: false },
        { id: 1, text: " K2 (Mount Godwin-Austen)", isCorrect: true },
        { id: 2, text: "Nanga Parbat", isCorrect: false },
        { id: 3, text: "Gasherbrum I", isCorrect: false },
      ],
    },
    {
      text: "Which river is the longest in Pakistan?",
      options: [
        { id: 0, text: "Indus River", isCorrect: true },
        { id: 1, text: "Jhelum River", isCorrect: false },
        { id: 2, text: "Chenab River", isCorrect: false },
        { id: 3, text: "Ravi River", isCorrect: false },
      ],
    },
    {
      text: "Which is the capital city of Pakistan?",
      options: [
        { id: 0, text: "Karachi", isCorrect: false },
        { id: 1, text: "Islamabad", isCorrect: true },
        { id: 2, text: "Lahore", isCorrect: false },
        { id: 3, text: "Peshawar", isCorrect: false },
      ],
    },
  ];

  return (
    <div className="App">
      <h1>Multiple Choice Quiz</h1>
      <h2>Score: {score}</h2>

      {FinalResult ?
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>{score} out of {questions.length} - {(score / questions.length) * 100} %</h2>
        </div>

        :
        <div className="question-card">
          <h2>
            Question:{Questions + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[Questions].text}</h3>

          <ul>
            {questions[Questions].options.map((op) => {
              return (
                <li
                  key={op}
                  onClick={() => isClecked(op.isCorrect)}
                >
                  {op.text}
                </li>
              )
            })}
          </ul>
        </div>

      }

    </div>
  );
}


export default App
