import React from "react"
import { Link } from "gatsby"

const holes = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17s',
  '17w',
  '18s',
  '18w',
  '19',
  '20',
]

export default function Home() {
  return (
    <>
      <div>Hello/</div>
      {holes.map(num => (
        <li>
          <Link to={`/holes/${num}`}>Hole {num}</Link>
        </li>
      ))}
    </>
  )
}
