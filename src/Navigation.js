import React from "react"
import { Link } from "gatsby"

import { holes } from "./constants.js"

const Navigation = () => {
  return (
    <ul>
      {holes.map(num => (
        <li key={num}>
          <Link to={`/hole/${num}`}>Hole {num}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Navigation
