"use client"
import { React, Fragment, useState } from "react"
import { TopPage } from "./Toppage"
import { FaSearch, FaBars, FaUser } from "react-icons/fa"
import { SiNintendogamecube } from "react-icons/si"
import { LuShoppingCart } from "react-icons/lu"

import { Dialog, Transition } from "@headlessui/react"
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon
} from "@heroicons/react/24/outline"
import DesktopNav from "./desktopNav"
import MobileNav from "./mobileNav"

function Nav() {
  const navigation = [
    { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
    { name: "Team", href: "#", icon: UsersIcon, current: false },
    { name: "Projects", href: "#", icon: FolderIcon, current: false },
    { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
    {
      name: "Documents",
      href: "#",
      icon: DocumentDuplicateIcon,
      current: false
    },
    { name: "Reports", href: "#", icon: ChartPieIcon, current: false }
  ]
  const teams = [
    { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
    { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
    { id: 3, name: "Workcation", href: "#", initial: "W", current: false }
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
  }

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div>
        <div>
          <TopPage />
        </div>
        <div className="lg:hidden">
          <MobileNav />
        </div>
        <div>
          <DesktopNav className="" />
        </div>
      </div>
    </>
  )
}

export default Nav
