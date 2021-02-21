import React from "react"
import HoleMap from "../../HoleMap.js"
import Layout from "../../Layout.js"
import { holes, holeInfo } from "../../constants.js"
import { Link } from "gatsby"
import HoleStat from "../../components/HoleStat"
import { clearConfigCache } from "prettier"

const getParamFromPathname = pathname =>
  pathname ? pathname.split("/").pop() : 1

const Hole = props => {
  const holeNum = getParamFromPathname(props?.location?.pathname)
  const holeData = holeInfo.filter(info => info.holeNum === holeNum)
  const curHoleIdx = holes.findIndex(value => holeNum === value)

  return (
    <Layout>
      <div className="relative bg-white">
        <div className="lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative">
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none">
              <div className="relative rounded-2xl shadow-xl overflow-hidden">
                <HoleMap holeNumber={holeNum} />
              </div>
            </div>
          </div>

          <div className="relative mx-auto lg:mx-0 max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            <div className="flex justify-between">
              <div>
                {curHoleIdx - 1 >= 0 && (
                  <div className="mt-4">
                    <Link
                      to={`/hole/${holes[curHoleIdx - 1]}`}
                      className="text-base font-medium text-green-700"
                      aria-current="page"
                    >
                      <span aria-hidden="true">&larr;</span> Previous hole
                    </Link>
                  </div>
                )}
              </div>
              <div>
                {curHoleIdx + 1 < holes.length && (
                  <div className="mt-4">
                    <Link
                      to={`/hole/${holes[curHoleIdx + 1]}`}
                      className="text-base font-medium text-green-700"
                      aria-current="page"
                    >
                      Next hole <span aria-hidden="true">&rarr;</span>{" "}
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:pt-12 pt-8">
              <h2 className="text-4xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                {holeData[0]?.title || "Untitled"}
              </h2>
              <h3 className="text-indigo-600 font-bold text-lg mt-1">
                Sponsor: {holeData[0]?.sponsor || "N/A"}
              </h3>
            </div>

            <div className="mt-8 pb-8">
              {holeData.map((tee, idx) => (
                <HoleStat
                  key={`${tee.holeNum}-${idx}`}
                  teepad={tee.teepad}
                  par={tee.par}
                  distance={tee.distance}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Hole

// <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//   <div className="lg:grid lg:grid-cols-3 lg:gap-8">
//     <div>
//       <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
//         Course Holes
//       </h2>
//       <nav aria-label="Course Holes">
//         {holes.map(num => (
//           <Link
//             to={`/hole/${num}`}
//             className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 group flex items-center px-3 py-1 text-sm font-medium rounded-md"
//             aria-current="page"
//           >
//             <svg
//               className="text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               aria-hidden="true"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
//               />
//             </svg>
//             <span className="truncate">Hole {num}</span>
//           </Link>
//         ))}
//       </nav>
//     </div>

//     <div className="mt-12 lg:mt-0 lg:col-span-2">
//         <HoleMap holeNumber={holeNum} />
//     </div>
//   </div>
// </div>
