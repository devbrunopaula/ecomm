"use client"
import Link from "next/link"
import Product from "./Product"
import products from "./products"

function NewProducts() {
  console.log(products)
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

      <div className="grid grid-cols-2 gap-4 px-4 md:container mx-auto  md:grid-cols-4 md:gap-6 lg:grid-cols-6 ">
        {products.map((i) => (
          <Product
            key={i.id}
            inStock={i.in_stock}
            description={i.description}
            price={i.price}
            name={i.name}
            reviews={i.reviews}
          />
        ))}
      </div>
    </div>
  )
}

export default NewProducts
