import React from 'react'
import logo from '../logo.png'

function Header() {
  return (
    <div className="flex justify-between items-center px-8 py-4 shadow-md">
        <div className="flex items-center">
            <img className="h-12 w-12" src={logo} alt="app logo" />
            <h3 className="ml-4 font-semibold">Sama QuizzApp</h3>
        </div>
        <div className="flex space-x-4">
            <button className="bg-pink-600 text-white px-4 py-2 rounded">Sign in</button>
            <button className="bg-gray-200 px-4 py-2 rounded">Sign up</button>
        </div>
    </div>
  )
}

export default Header