import React from "react"
import { Link } from "gatsby"
import HoleMap from "../../HoleMap.js"
import Layout from "../../Layout.js"

const getParamFromPathname = pathname =>
  pathname ? pathname.split("/").pop() : 1

const Hole = props => {
  const holeNum = getParamFromPathname(props?.location?.pathname)
  return (
    <Layout>
      <HoleMap holeNumber={holeNum} />
    </Layout>
  )
}

export default Hole
