"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Product from "./Product"
import products from "./products"
import { Carousel } from "flowbite-react"

function NewProducts() {
  const [prevSlide, setPrevSlide] = useState(0)
  const [nextSlide, setNextSlide] = useState(6)
  const [item, setItems] = useState(products)

  // useEffect(() => {}, [prevSlide, nextSlide])

  const handleNextSlide = () => {
    setNextSlide(() => nextSlide + 6)
    setPrevSlide(() => prevSlide + 6)
  }

  const handlePrevSlide = () => {
    setPrevSlide(() => prevSlide - 6)
    setNextSlide(() => nextSlide - 6)
  }

  return (
    <div>
      <div className="container mx-auto px-3 flex justify-between items-center">
        <p className=" text-black text-lg font-semibold font-['Poppins'] pb-3">
          New Products
        </p>
        <Link
          className="// See All New Products text-blue-600 text-xs font-normal font-['Poppins'] underline leading-3"
          href={"/"}>
          See All New Products
        </Link>
      </div>
      <button
        type="button"
        onClick={(e) => handlePrevSlide(e)}
        className=" rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        PREV
      </button>
      <button
        type="button"
        onClick={(e) => handleNextSlide(e)}
        className=" rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        NEXT
      </button>

      <span>
        <p>Start {prevSlide}</p>
        <p>next {nextSlide}</p>
      </span>

      <div className="grid grid-cols-6 gap-1">
        {item.slice(prevSlide, nextSlide).map((e) => (
          <Product
            key={e.id}
            inStock={e.in_stock}
            description={e.description}
            price={e.price}
            name={e.name}
            reviews={e.reviews}
            imageUrl={e.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default NewProducts
