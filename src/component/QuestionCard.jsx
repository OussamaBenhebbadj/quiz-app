import React from 'react'

const QuestionCard = ({ id, question, options, onSelectOption, correctAnswer, selectedAnswer }) => {
  return (
    <div className="h-[400px] w-[600px] bg-pink-100 rounded-2xl shadow-lg px-8 flex flex-col" key={id}>
      <h3 className='text-2xl font-serif font-semibold mt-8'>{id} - {question}</h3>
      <ul className="flex flex-col gap-3 mt-6">
        {options.map((option, index) => {
          let buttonClass = 'px-4 py-2 rounded w-full';
          if (selectedAnswer) {
            if (option === correctAnswer) {
              buttonClass += ' bg-green-500 text-white';
            } else if (option === selectedAnswer) {
              buttonClass += ' bg-red-500 text-white';
            } else {
              buttonClass += ' bg-gray-200 text-black';
            }
          } else {
            buttonClass += ' bg-blue-100 hover:bg-blue-200';
          }
          return (
            <li key={index}>
              <button
                onClick={() => onSelectOption(option)}
                className={buttonClass}
                disabled={!!selectedAnswer}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  )
}
export default QuestionCard
