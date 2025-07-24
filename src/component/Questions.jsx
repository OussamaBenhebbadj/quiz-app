import React, { useState } from 'react'
import questions from '../data'
import QuestionCard from './QuestionCard'
import { Link } from 'react-router-dom';

function Questions() {
  const [curentIndex, setCurentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const curentQuestion = questions[curentIndex]; 

  const handleSelectOption = (option) => {
    if (!selectedOption) {
      setSelectedOption(option);
      if (option === curentQuestion.answer) {
        setScore(prev => prev + 10);
      }
    }
  }

  const handleNextQuestion = () => {
  if (curentIndex < questions.length -1) {
    setCurentIndex(prev => prev + 1);
    setSelectedOption(null);
  }
}

  return (
  <div className="flex flex-col items-center justify-center mt-24">
    {
    curentIndex === questions.length -1 && selectedOption ?
    (
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-bold mb-4">🎉 Quiz completed !</h3>
        <p className="text-xl">Your Final Score is : <span className="font-semibold">{score}</span></p>
        <Link to="/"><button className="px-6 py-2 mt-8 border border-pink-600 rounded hover:bg-pink-700 hover:text-white">Restart</button></Link>
      </div>
    ) : (
      <>
        <h3 className="text-xl font-semibold mb-4">Your Score : {score}</h3>
        <QuestionCard
          key={curentQuestion.id}
          id={curentQuestion.id}
          question={curentQuestion.question}
          options={curentQuestion.options}
          onSelectOption={handleSelectOption}
          correctAnswer={curentQuestion.answer}
          selectedAnswer={selectedOption}
        />

        <div className="flex gap-4 mt-8">
          <button
            onClick={handleNextQuestion}
            className="px-6 py-2 border border-pink-600 rounded hover:bg-pink-700 hover:text-white"
            disabled={!selectedOption}
          >
            Next
          </button>
        </div>
      </>
    )}
  </div>
  );

}
export default Questions
