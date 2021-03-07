import React from "react"
import Layout from "../../Layout.js"
import { holes, holeInfo } from "../../constants.js"
import { Link, navigate, graphql } from "gatsby"
import HoleStat from "../../components/HoleStat"
import Img from "gatsby-image"

const getParamFromPathname = pathname =>
  pathname ? pathname.split("/").pop() : 1

export const query = graphql`
  {
    allImageSharp {
      edges {
        node {
          id
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const Hole = props => {
  const holeNum = getParamFromPathname(props?.location?.pathname) || "1"
  const holeData = holeInfo.filter(info => info.holeNum === holeNum)
  const curHoleIdx = holes.findIndex(value => holeNum === value)

  const currentHoleImages = props.data.allImageSharp.edges.filter(image => {
    const src = image.node.fluid.src
    const path = src.split("/")
    const filename = path[path.length - 1]
    return filename === `Hole${holeNum}.png`
  })
  const currentHoleImage = currentHoleImages?.[0]?.node.fluid || {}

  return (
    <Layout>
      <div className="relative bg-white">
        <div className="lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative">
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none">
              <div className="relative rounded-2xl shadow-xl overflow-hidden">
                <Img fluid={currentHoleImage} alt="" />
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
                <label
                  htmlFor="holes"
                  className="mt-4 text-sm font-medium text-gray-700 mr-2"
                >
                  Hole
                </label>
                <select
                  id="holes"
                  name="holes"
                  className="mt-4 focus:pl-3 text-base border-gray-300 focus:outline-none focus:ring-green-700 focus:border-green-700 sm:text-sm rounded-md"
                  value={holes[curHoleIdx]}
                  onChange={event => {
                    const holeIdx = holes.findIndex(
                      value => event.target.value === value
                    )
                    navigate(`/hole/${holes[holeIdx]}`)
                  }}
                >
                  {holes.map((hole, idx) => (
                    <option key={idx}>{hole}</option>
                  ))}
                </select>
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
              <h3 className="text-green-600 font-bold text-lg mt-1">
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
