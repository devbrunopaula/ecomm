import { Fragment, useState } from "react"
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react"
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon
} from "@heroicons/react/24/outline"
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon
} from "@heroicons/react/20/solid"
import { FaSearch } from "react-icons/fa"
import { LuShoppingCart } from "react-icons/lu"
import { Link } from "next/link"
import Image from "next/image"

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding where your traffic is coming from",
    href: "#",
    icon: ChartPieIcon
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers with our engagement tool",
    href: "#",
    icon: CursorArrowRaysIcon
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon
  },
  {
    name: "Integrations",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: SquaresPlusIcon
  }
]
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
  { name: "View all products", href: "#", icon: RectangleGroupIcon }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function DesktopNav() {
  const [open, onOpen] = useState(false)
  return (
    <div className="hidden lg:flex border border-b-2  bg-fuchsia-400 lg:bg-green-300">
      <div className=" md:flex container mx-auto  justify-between h-24   items-center ">
        <div className="logo">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            {/* <Image
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
              width={100}
              height={100}
            /> */}
            <span>Logo</span>
          </a>
        </div>

        <div className="flex justify-between  items-center gap-7">
          <a className="text-sm" src="#">
            Laptops
          </a>
          <a className="text-sm" src="#">
            Desktop PCs
          </a>
          <a className="text-sm" src="#">
            Networking Devices
          </a>
          <a className="text-sm" src="#">
            Printers & Scanners
          </a>
          <a className="text-sm" src="#">
            PC Parts
          </a>
          <a className="text-sm" src="#">
            All Others Products
          </a>
          <a className="text-sm" src="#">
            Repairs
          </a>
          <div className="border-2  border-[#0156FF] flex items-center justify-center h-8  w-24 rounded-full text-sm">
            <a className=" text-[#0156FF]" src="#">
              Our Deals
            </a>
          </div>
        </div>
        <div className="login pl-1">
          <div className="flex items-center gap-4">
            <FaSearch className="text-sm" />
            <div className="relative">
              <LuShoppingCart className="text-black text-xl font-bold" />
              <span className=" bg-[#0156FF] rounded-full absolute bottom-3 left-4 inline-flex items-center  px-1  text-xs  text-white  ring-red-600/10 font-bold">
                2
              </span>
            </div>
            <img
              className="inline-block h-6 w-6 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}
