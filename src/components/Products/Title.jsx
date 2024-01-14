"use client"

function Title({ title, description }) {
  const filterDescription = () => {
    if (description.length > 35) {
      return `${description.slice(0, 35) + " ..."}`
    }
    return description
  }
  return (
    <div>
      <p className="truncate ...">{title}</p>
      <p className="overflow-">{filterDescription()}</p>
    </div>
  )
}

export default Title
