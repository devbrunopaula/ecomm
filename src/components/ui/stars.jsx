"use client"
import { MdStarRate } from "react-icons/md"

function Stars({ count }) {
  let items = []
  const rest = 5 - count

  for (let index = 0; index < count; index++) {
    items.push(<MdStarRate className="text-yellow-300" />)
  }

  for (let index = 0; index < rest; index++) {
    items.push(<MdStarRate className="text-gray-300" />)
  }

  console.log(rest)

  return <div className="inline-flex gap-1 text-xs">{items}</div>
}

export default Stars
