import React, { Suspense } from "react"
// import HoleMap from "../assets/Hole1.svg"
import { Link } from "gatsby"
import * as HoleMapList from "../coursemap.js"

const getParamFromPathname = pathname =>
  pathname ? pathname.split("/").pop() : 1

const Hole = props => {
  const holeNum = getParamFromPathname(props?.location?.pathname)
  const HoleMap = HoleMapList[`Hole${holeNum}`];
  console.log("%c holemap: ", "background: #FF0000; color: #fff", HoleMap)
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <div>
          <Link to="/">Home</Link>
        </div>
        <p>Hole {holeNum}</p>
        <HoleMap />
      </Suspense>
    </>
  )
}

export default Hole
