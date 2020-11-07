import React from "react"
import { Link } from "gatsby"
import HoleMap from '../../HoleMap.js'

const getParamFromPathname = pathname =>
  pathname ? pathname.split("/").pop() : 1

const Hole = props => {
  const holeNum = getParamFromPathname(props?.location?.pathname)
  return (
    <>
      <div>
        <Link to="/">Home</Link>
      </div>
      <p>Hole {holeNum}</p>
      <HoleMap holeNumber={holeNum} />
    </>
  )
}

export default Hole
