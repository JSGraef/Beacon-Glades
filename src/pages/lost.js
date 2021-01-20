import React from "react"
import Layout from "../Layout.js"

export default function Lost() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Lost Discs
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We'll do our best to get your disc back to you. These are a
              sampling of what people have turned in to our field house.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  No Discs
                </dt>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  )
}
