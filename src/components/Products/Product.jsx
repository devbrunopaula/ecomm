"use client"
import React from "react"
import Stars from "../ui/stars"
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6"
import Title from "./Title"
import Price from "./Price"

function Product({ inStock, title, description, price, review, markdown }) {
  const available = () => {
    console.log(inStock)
  }
  return (
    <div className="w-[200px]">
      <div className="container mx-auto border-blue-900 flex-col p-2">
        <div className="wrapper ">
          <div className="instock flex text-sm items-center ">
            {inStock ? (
              <div className="flex items-center gap-2">
                <span className="">
                  {<FaCircleCheck className="text-green-500" />}
                </span>
                <p className="text-green-500">In Stock</p>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span className="">
                  {<FaCircleXmark className="text-red-500" />}
                </span>
                <p className="text-red-500">Out Of Stock</p>
              </div>
            )}
          </div>
          <div className="product">
            <img
              className="w-40 h-40"
              src="https://as-images.apple.com/is/refurb-ipad-mini-wifi-spacegray-gallery-2019?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1581026442388"
            />
          </div>
          <div className="str mt-3 mb-3 ">
            <Stars count={review} />
          </div>
          <div className="title text-sm ">
            <Title className="" title={title} description={description} />
          </div>
          <Price price={price} markdown={markdown} />
        </div>
      </div>
    </div>
  )
}

export default Product

//   <div className="w-44 h-64  ">
//       <div className=" bg-white flex-col  flex ">
//         <div className=" pr-1 py-1.5 bg-white ">
//           <div className="h-3 relative">
//             <div className="w-11 h-3 left-[12px] top-0 absolute text-center text-neutral-500 text-xs font-normal font-['Poppins'] leading-tight">
//               <span> </span>in stock
//             </div>
//             <div className="w-2.5 h-2.5 left-0 top-[1px] absolute">
//               <div className="w-2.5 h-2.5 left-0 top-0 absolute bg-neutral-500 rounded-full" />
//             </div>
//           </div>
//         </div>
//         <div className=" ">
//           <img
//             className="w-24 h-24"
//             src="https://as-images.apple.com/is/refurb-ipad-mini-wifi-spacegray-gallery-2019?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1581026442388"
//           />
//         </div>

//         <div className="flex justify-between items-center ">
//           <div className="">
//             <Stars count={2} />
//           </div>
//           <div className="w-16 h-3.5 left-[50.16px] top-0 text-center text-gray-400 text-xs font-normal font-['Poppins'] leading-tight">
//             Reviews (4)
//           </div>
//         </div>
//         <div className="w-36 h-14 text-black text-xs font-normal font-['Poppins']">
//           EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
//         </div>
//         <div className="w-36 h-14">
//           <span className="text-stone-500 text-xs font-normal font-['Poppins'] line-through leading-none">
//             $499.00
//             <br />
//           </span>
//           <span className="text-black text-sm font-semibold font-['Poppins'] leading-tight">
//             $499.00
//           </span>
//         </div>
//       </div>
//     </div>