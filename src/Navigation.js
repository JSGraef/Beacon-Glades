import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Navigation = props => {
  const [showMenu, setShowMenu] = useState(false)
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "beacon_glades_logo2021.jpg" }) {
        childImageSharp {
          fixed(width: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  console.log("Data", data)
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav
          className="relative flex items-center justify-between sm:h-10 md:justify-center"
          aria-label="Global"
        >
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link to="/">
                {/* <img className="h-16 w-auto sm:h-16" src={logo} alt="Logo" /> */}
                <Img className="h-16 w-auto sm:h-16"  fixed={data.file.childImageSharp.fixed} alt="Beacon Glades Logo" />
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                  id="main-menu"
                  aria-haspopup="true"
                  onClick={() => setShowMenu(true)}
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
            <Link
              to="/coursemap"
              className="font-medium text-gray-500 hover:text-gray-900"
            >
              Course Map
            </Link>

            <Link
              to="/hole/1"
              className="font-medium text-gray-500 hover:text-gray-900"
            >
              Holes
            </Link>

            <Link
              to="/info"
              href="#"
              className="font-medium text-gray-500 hover:text-gray-900"
            >
              Information
            </Link>

            {/* <Link
            to="/tournaments"
            href="#"
            className="font-medium text-gray-500 hover:text-gray-900"
          >
            Tournaments
          </Link>

          <Link
            to="/lost"
            href="#"
            className="font-medium text-gray-500 hover:text-gray-900"
          >
            Lost Discs
          </Link> */}
          </div>
        </nav>
      </div>
      {showMenu && (
        <div className="z-50 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <Link to="/">
                <Img className="h-16 w-auto sm:h-16"  fixed={data.file.childImageSharp.fixed} alt="Beacon Glades Logo" />
              </Link>
              <div className="-mr-2">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setShowMenu(false)}
                >
                  <span className="sr-only">Close menu</span>
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3">
              <Link
                to="/coursemap"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Course Map
              </Link>

              <Link
                to="/hole/1"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Holes
              </Link>

              <Link
                to="/info"
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Information
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navigation
