"use client"

function Price({ price, discount }) {
  return (
    <div className="mt-4 price">
      {discount ? (
        <div>
          <div className="line-through text-xs text-gray-400 ">${discount}</div>
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
