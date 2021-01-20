import React from "react"
import Layout from "../Layout.js"

export default function Information() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Information
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Can’t find the answer you’re looking for? Join our{" "}
              <a
                href="https://www.facebook.com/groups/537520126335222"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Facebook group!
              </a>
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  What is Beacon Glades?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Beacon Glades is a disc golf course located on the University
                  Settlement Camp, behind the Beacon Pool. It is a 20 hole disc
                  golf course with an additional 2 practice holes. The course
                  plays through both field and forest.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  What is Disc Golf?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Disc Golf is a sport very much like regular Golf. Instead of
                  clubs and holes it uses discs (frisbees) and baskets. There
                  are discs for driving, mid-range and putting. The Disc Golf
                  sport itself is run by the PDGA (Professional Disc Golf
                  Association, www.pdga.com).
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  How much does it cost to play? $0
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Beacon Glades is run, managed, funded, and maintained by
                  volunteers. It is open to the public, has always been free to
                  play, and is open year round. We the volunteers strive to keep
                  it that way. Like a regular golf course it requires regular
                  maintenance and upkeep. Fields need to be mowed, fairways
                  cleared of fallen branches, signs updated/replaced, trash
                  cleared, and tee boxes periodically replaced. Discs can be
                  borrowed at the course. Lessons are available upon request at
                  no charge.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  How is the course funded?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Funds to maintain the course come from sponsorships and
                  donations. We host 2 tournaments per year, the proceeds of
                  which usually go to the course fund, sometimes to charity.
                  Sponsorships are available for each hole and for the
                  tournament itself. Sponsorship opportunities/renewals become
                  available at each tournament. Signs for each hole are updated
                  with the sponsor’s name and logo.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  How popular is it?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  The Beacon Glades Facebook page has over 500 members. We are
                  part of a much larger Disc Golf community that includes nearby
                  clubs WeDGE (Westchester), Skylands (NJ), and Long Island Disc
                  Golf. It’s popularity is increasing year by year and is now
                  played in over 40 countries. Hundreds of new courses are
                  created each year. ESPN even funded a course in Connecticut.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  )
}
