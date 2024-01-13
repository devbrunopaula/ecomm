import React from "react"
import { Alert } from "flowbite-react"
import Slider from "@/components/slider/slider"
import NewProducts from "@/components/Products/NewProducts"
function page() {
  return (
    <>
      <Slider />
      <NewProducts />
    </>
  )
}

export default page
