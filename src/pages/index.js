import React from "react"
import { Router } from "@reach/router"

import CourseMap from "./coursemap.js"
import Hole from "./hole/hole.js"
import Home from "../Home.js"
import Information from "./info.js"
import Lost from "./lost.js"
import Tournaments from "./tournaments.js"

export default function App() {
  return (
    <Router>
      <Home default />
      <Hole path="hole/:holeId" />
      <CourseMap path="coursemap" />
      <Lost path="lost" />
      <Tournaments path="tournaments" />
      <Information path="info" />
    </Router>
  )
}
