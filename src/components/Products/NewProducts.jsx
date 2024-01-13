"use client"
import Link from "next/link"
import Product from "./Product"

function NewProducts() {
  return (
    <div>
      <div className="container mx-auto px-3 flex justify-between items-center">
        <p className=" text-black text-lg font-semibold font-['Poppins']">
          New Products
        </p>
        <Link
          className="// See All New Products text-blue-600 text-xs font-normal font-['Poppins'] underline leading-3"
          href={"/"}>
          See All New Products
        </Link>
      </div>
      <Product />
    </div>
  )
}

export default NewProducts
