"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home")

  // Update active link based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "services", "contact"]
      let current = "home"
      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element && window.scrollY >= element.offsetTop - 100) {
          current = section
        }
      })
      setActiveLink(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full backdrop-blur-xl bg-gradient-to-r from-purple-700/40 via-blue-700/30 to-indigo-700/40 z-50 py-4 px-8 flex justify-between items-center shadow-lg"
    >
      <motion.h1
        whileHover={{ scale: 1.1 }}
        className="font-bold text-2xl text-white cursor-pointer"
      >
        Shubham
      </motion.h1>

      <ul className="flex gap-8 text-white font-medium">
        {["home", "about", "projects", "services", "contact"].map((link) => (
          <li key={link} className="relative">
            <a
              href={`#${link}`}
              className={`capitalize transition-colors duration-300 ${
                activeLink === link ? "text-purple-400" : "text-white hover:text-purple-300"
              }`}
            >
              {link}
            </a>
            {/* Animated underline */}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] w-full bg-purple-400 transition-all duration-300 ${
                activeLink === link ? "scale-x-100" : "scale-x-0"
              } origin-left`}
            ></span>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
