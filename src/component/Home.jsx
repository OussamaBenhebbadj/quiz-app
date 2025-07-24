import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../logo.png'

function Home(){
  return (
    <div className="flex justify-center mt-24">
        <div className="h-[400px] w-[400px] bg-pink-100 rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center">
            <img className='h-24 w-24 rounded-xl mb-12' src={logo} alt="" />
            <h3 className="text-2xl font-bold text-pink-800 mb-4">Welcome to Sama QuizApp!</h3>
            <p className="text-center text-gray-700 mb-8">Test your knowledge in computer science and have fun learning! </p>
            <div className="flex space-x-4">
                <Link to="/questions"><button className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700"> Start Quiz</button></Link>
            </div>
        </div>
    </div>
)
}

export default Home