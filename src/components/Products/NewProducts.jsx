"use client"
import { useState } from "react"
import Link from "next/link"
import Product from "./Product"
import products from "./products"
import { Carousel } from "flowbite-react"

function NewProducts() {
  const [nextSlide, setNextSlide] = useState(6)
  const [prevSlide, setPrevSlide] = useState(-6)

  const handleSlide = (e) => {
    setNextSlide(console.log(e))
  }
  console.log("nextSlide", nextSlide)
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
      <button onClick={() => setNextSlide((e) => handleSlide(e))}>Prev</button>
      <button>Next</button>
      <div className="hidden md:grid grid-cols-1 container mx-auto  md:grid-cols-4 md:gap-6 lg:grid-cols-6"></div>
      <Carousel className="hidden">
        {products.map((e) => (
          <Product
            key={e.id + "22"}
            inStock={e.in_stock}
            description={e.description}
            price={e.price}
            name={e.name}
            reviews={e.reviews}
            imageUrl={e.imageUrl}
          />
        ))}
      </Carousel>
    </div>
  )
}

export default NewProducts
