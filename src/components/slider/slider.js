"use client"
import { Carousel } from "flowbite-react"
import ImageCarousel from "./ImageCarousel"
import img1 from "../../../public/images/img1.jpg"
import img2 from "../../../public/images/img2.jpg"

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
    <div className="h-56  sm:h-64 xl:h-80 2xl:h-96 container mx-auto flex items-center justify-center border border-red-600">
      <Carousel>
        {/* <img src="/images/img1.jpg" alt="..." />
        <img src="/images/img2.jpg" alt="..." /> */}
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
      </Carousel>
    </div>
  )
}

export default Slider
