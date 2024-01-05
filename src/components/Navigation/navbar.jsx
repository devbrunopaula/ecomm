import React from 'react'
import { TopPage } from './Toppage'
import { FaSearch, FaBars, FaUser} from "react-icons/fa"
import { SiNintendogamecube } from "react-icons/si"
import { LuShoppingCart } from "react-icons/lu"
function Nav() {
  return (
    <>
      <nav>
        <TopPage />
        <div className="h-28 bg-[#0156FF] flex flex-col justify-around py-1 ">
          <div className="flex justify-around items-center ">
            <span>
              <FaBars className="text-white text-xl" />
            </span>
            <span>
              <SiNintendogamecube className="text-white text-xl" />
            </span>
            <div className=" flex  justify-center items-center border border-2 rounded-2xl ">
              <span className="text-white my-1 mx-5 text-sm text-bold ">
                Our Deals
              </span>
            </div>
            <div className="relative">
              <LuShoppingCart className="text-white text-xl font-bold" />
              <span className=" bg-white rounded-full absolute bottom-3 left-4 inline-flex items-center  px-1  text-xs  text-[#0156FF]  ring-red-600/10 font-bold">
                2
              </span>
            </div>
            <div className=" flex  justify-center items-center w-8 h-8 rounded-full border-2 border-white">
              <FaUser className="text-white text-sm" />
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="bg-white h-10 flex  p-6 justify-center rounded-full  items-center w-[90%]   border border-green-500 ">
              <span>
                <FaSearch className="text-gray-300 text-lg" />
              </span>

              <input
                className="h-9 w-[90%] mx-4 !outline-none text-lg"
                type="search"
                name=""
                id=""
                placeholder="Search for goods"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav