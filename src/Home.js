import React from "react"
import Layout from "./Layout.js"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Beacon Glades</span>
          {` `}
          <span className="block text-indigo-600 xl:inline">Disc Golf</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Located in Beacon, NY
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <Link
              to="/coursemap"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Course Map
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
