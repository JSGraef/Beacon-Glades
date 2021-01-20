import React from "react"
import { Link } from "gatsby"

import logo from './images/beacon_glades_logo2021.jpg'
console.log(logo)

// import { holes } from "./constants.js"

const Navigation = () => {
  // return holes.map(num => (
  //   <li key={num}>
  //     <Link to={`/hole/${num}`}>Hole {num}</Link>
  //   </li>
  // ))
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <nav
        className="relative flex items-center justify-between sm:h-10 md:justify-center"
        aria-label="Global"
      >
        <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link to='/'>
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src={logo}
                alt="Logo"
              />
            </Link>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                id="main-menu"
                aria-haspopup="true"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:space-x-10">
          <Link to="/coursemap" className="font-medium text-gray-500 hover:text-gray-900">
            Course Map
          </Link>

          <Link to="/hole/1" className="font-medium text-gray-500 hover:text-gray-900">
            Holes
          </Link>

          <Link to="/info" href="#" className="font-medium text-gray-500 hover:text-gray-900">
            Information
          </Link>

          <Link to="/tournaments" href="#" className="font-medium text-gray-500 hover:text-gray-900">
            Tournaments
          </Link>
          
          <Link to="/lost" href="#" className="font-medium text-gray-500 hover:text-gray-900">
            Lost Discs
          </Link>

        </div>
      </nav>
    </div>
  )
}

export default Navigation
