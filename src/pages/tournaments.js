import React from "react"
import Layout from "../Layout.js"

export default function Tournaments() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Tournaments
            </h2>

          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  No upcoming tournaments.
                </dt>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  )
}
