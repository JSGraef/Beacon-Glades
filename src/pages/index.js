import React, { Suspense } from "react"
import { Link } from "gatsby"
import { Router } from "@reach/router"
import Hole from "./hole.js"

const holes = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17s",
  "17w",
  "18s",
  "18w",
  "19",
  "20",
]

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
