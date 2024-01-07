import React from "react"
import { FaChevronDown } from "react-icons/fa"
export function TopPage() {
  return (
    <div className="bg-black">
      <div className="p-2 h-11 flex  container mx-auto  justify-between items-center bg-black  text-sm font-medium text-white ">
        <div className="border flex items-center justify-center rounded-xl p-2 h-[23px]">
          <span className="text-gray-400 text-xs font-semibold font-['Poppins'] pr-1">
            Mon-Thu:
          </span>
          <span className="text-white text-xs font-semibold font-['Poppins'] pr-1">
            9:00 AM - 5:30 PM
          </span>
          <span>
            <FaChevronDown className="h-[10px]" />
          </span>
        </div>

        <div className="hidden lg:flex w-96 h-11 text-center justify-center items-center">
          <span className="text-neutral-400 text-xs font-semibold font-['Poppins']">
            Visit our showroom in 1234 Street Adress City Address, 1234
          </span>
          <span className="text-white text-xs font-semibold font-['Poppins'] ml-1">
            Contact Us
          </span>
        </div>
        <div className="c">
          <div className="w-[114px] h-[15px]">
            <p className="h-[15px] top-0 left-0 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[10px] text-center tracking-[0] leading-[normal]">
              Call Us: (00) 1234 5678
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
