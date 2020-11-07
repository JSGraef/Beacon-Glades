import React from "react"
import { Router } from "@reach/router"

import Hole from "./hole/hole.js"
import Home from "../Home.js"

export default function App() {
  return (
    <Router>
      <Home default />
      <Hole path="hole/:holeId" />
    </Router>
  )
}
