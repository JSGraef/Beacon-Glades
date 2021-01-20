import React from "react"
import HoleMap from "../../HoleMap.js"
import Layout from "../../Layout.js"
import { holes } from "../../constants.js"
import { Link } from "gatsby"

const getParamFromPathname = pathname =>
  pathname ? pathname.split("/").pop() : 1

const Hole = props => {
  const holeNum = getParamFromPathname(props?.location?.pathname)
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Course Holes
            </h2>
            <nav aria-label="Course Holes">
              {holes.map(num => (
                <Link
                  to={`/hole/${num}`}
                  className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 group flex items-center px-3 py-1 text-sm font-medium rounded-md"
                  aria-current="page"
                >
                  <svg
                    className="text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                    />
                  </svg>
                  <span className="truncate">Hole {num}</span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              <HoleMap holeNumber={holeNum} />
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Hole
