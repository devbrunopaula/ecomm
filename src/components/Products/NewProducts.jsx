"use client"
import Link from "next/link"
import Product from "./Product"

function NewProducts() {
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
        <Product
          inStock={true}
          review={4}
          markdown={"890.65"}
          title={"EX DISPLAY: MSI Pro 16"}
          description={
            "Flex-036au 15-6 MULTITOUCH All-In-On testts what yes why not sure thats is crazy really crazy mand"
          }
          price={"499.00"}
        />
        <Product
          inStock={false}
          review={3}
          markdown={"799.60"}
          title={"EX DISPLAY: MSI Pro 16"}
          description={"Flex-036au 15-6 MULTITOUCH All-In-On"}
          price={"499.00"}
        />
        <Product
          inStock={true}
          review={5}
          markdown={"595.55"}
          title={"EX DISPLAY: MSI Pro 16"}
          description={"Flex-036au 15-6 MULTITOUCH All-In-On"}
          price={"499.00"}
        />
        <Product
          review={1}
          inStock={false}
          markdown={"586.69"}
          title={"EX DISPLAY: MSI Pro 16"}
          description={"Flex-036au 15-6 MULTITOUCH All-In-On"}
          price={"499.00"}
        />
        <Product
          inStock={true}
          title={"EX DISPLAY: MSI Pro 16"}
          description={"Flex-036au 15-6 MULTITOUCH All-In-On"}
          price={"499.00"}
          review={2}
          markdown={"586.69"}
        />
        <Product
          inStock={true}
          title={"EX DISPLAY: MSI Pro 16"}
          description={"Flex-036au 15-6 MULTITOUCH All-In-On"}
          price={"499.00"}
        />
      </div>
    </div>
  )
}

export default NewProducts
