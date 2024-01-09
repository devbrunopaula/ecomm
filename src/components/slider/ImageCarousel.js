import Image from "next/image"

function ImageCarousel({ src, alt }) {
  console.log(src)
  return (
    <Image
      src={src}
      alt={alt}
      // fill
      quality={100}
      // placeholder="blur"
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
    />
  )
}

export default ImageCarousel
