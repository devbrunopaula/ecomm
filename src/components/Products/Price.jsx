"use client"

function Price({ price, markdown }) {
  return (
    <div className="mt-4 price">
      {markdown ? (
        <div>
          <div className="line-through text-xs text-gray-400 ">${markdown}</div>
          <div className="price font-semibold">${price}</div>
        </div>
      ) : (
        <div>
          <div className="price font-semibold">${price}</div>
        </div>
      )}
    </div>
  )
}

export default Price
