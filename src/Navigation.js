import React from "react"
import { Link } from "gatsby"

import { holes } from "./constants.js"

const Navigation = () => {
  return holes.map(num => (
    <li key={num}>
      <Link to={`/hole/${num}`}>Hole {num}</Link>
    </li>
  ))
}

export default Navigation
