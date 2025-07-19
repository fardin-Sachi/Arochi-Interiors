"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const navItems = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Portfolio", path: "#portfolio" },
  { id: 3, title: "Photography", path: "#photography" },
  { id: 4, title: "Services", path: "#service" },
  { id: 5, title: "Reviews", path: "#reviews" },
  { id: 6, title: "About Us", path: "#about" },
  { id: 7, title: "Contact", path: "#contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-30 bg-[#e4e3d3] py-4">
      <div className="container mx-auto relative px-4">

        {/* Layout Container */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-around gap-4">

          {/* Logo */}
          <Link href="/" className="flex justify-center md:justify-start">
            <Image
              src="/logo-square.png"
              alt="Arochi Interiors Logo"
              width={80}
              height={80}
              quality={100}
              priority
              className="w-[60px] sm:w-[70px] md:w-[100px] lg:w-[90px] xl:w-[100px] h-auto"
            />
          </Link>

          {/* Navigation Items */}
          <ul
            className={`flex flex-col md:flex-row items-center gap-y-2 md:gap-x-6 transition-all duration-300 ${
              isOpen ? "block" : "hidden"
            } md:flex`}
          >
            {navItems.map(item => (
              <li
                key={item.id}
                className="font-[poppins] font-semibold text-sm sm:text-base md:text-md lg:text-lg xl:text-xl text-center hover:scale-105 transition-transform duration-300"
              >
                <Link href={item.path} onClick={() => setIsOpen(false)}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Toggle Button for sm screens */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-4 right-4 md:hidden text-sm font-medium focus:outline-none"
        >
          ☰ Menu
        </button>
      </div>
    </nav>
  )
}
