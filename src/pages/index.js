import React from "react"
import { Link } from "gatsby"
import { Router } from "@reach/router"
import Hole from "./hole/hole.js"
import { holes } from "../constants.js"

export default function Home() {
  return (
    <>
      {holes.map(num => (
        <li key={num}>
          <Link to={`/hole/${num}`}>Hole {num}</Link>
        </li>
      ))}

      <Router>
        <Hole path="hole/:holeId" />
      </Router>
    </>
  )
}
