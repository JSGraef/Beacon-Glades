import React from "react"

const HoleStat = props => {
  return (
    <dl className="grid grid-cols-3 gap-x-4 gap-y-8 mt-8">
      <div className="border-t-2 border-gray-100 pt-2">
        <dt className="text-sm font-medium text-gray-500 uppercase">Tee Pad</dt>
        <dd className="text-2xl font-extrabold tracking-tight text-gray-900">
          {props?.teepad || "Regular"}
        </dd>
      </div>

      <div className="border-t-2 border-gray-100 pt-2">
        <dt className="text-sm font-medium text-gray-500 uppercase">Par</dt>
        <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
          {props?.par || 3}
        </dd>
      </div>

      <div className="border-t-2 border-gray-100 pt-2">
        <dt className="text-sm font-medium text-gray-500 uppercase">
          Distance
        </dt>
        <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
          {props?.distance || "N/A"}
        </dd>
      </div>
    </dl>
  )
}

export default HoleStat
