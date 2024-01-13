"use client"
import { Carousel } from "flowbite-react"
import ImageCarousel from "./ImageCarousel"
import img1 from "../../../public/images/img1.jpg"
import img2 from "../../../public/images/img2.jpg"
import { Button } from "flowbite-react"

const images = [
  {
    key: "1",
    src: img1,
    alt: "test alt 1"
  },
  {
    key: "2",
    src: img2,
    alt: "test2"
  }
]

function Slider() {
  return (
    <div className="h-56  sm:h-64 xl:h-80 2xl:h-96 container mx-auto flex items-center justify-center m-2">
      <Carousel slide={false}>
        <img
          src="https://leadgenapp.io/wp-content/uploads/2023/08/785054-ecommerce-istock-020119.jpg"
          alt="..."
        />
        <img
          src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5HX85I2zLsXYSSruC8670C/93ccb22b55d7638fc4109b118a7fd630/GettyImages-1313131428.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h="
          alt="..."
        />
      </Carousel>
    </div>
  )
}

export default Slider
