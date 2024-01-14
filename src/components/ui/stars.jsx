"use client"
import { MdStarRate } from "react-icons/md"
import { useState } from "react"

function Stars({ count }) {
  let items = []

  if (!count) {
    count = 0
  }

  const rest = 5 - count

  const countItems = () => {
    for (let index = 0; index < count; index++) {
      items.push(
        <div key={Math.random()}>
          <MdStarRate className="text-yellow-300" />
        </div>
      )
    }
    for (let index = 0; index < rest; index++) {
      items.push(
        <div key={Math.random()}>
          <MdStarRate className="text-gray-300 " />
        </div>
      )
    }

    return items
  }

  //   for (let index = 0; index < rest; index++) {
  //     items.push(<MdStarRate className="text-gray-300 " />)
  //   }

  return (
    <div className="flex items-center">
      {countItems()}
      <span className="text-gray-400 text-sm font-normal font-['Poppins'] pl-3">
        Reviews ({count})
      </span>
    </div>
  )
}

export default Stars
