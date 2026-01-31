"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Menu, X, Sparkles, Code2, User, Briefcase, Mail, ChevronRight, Home, FileText } from "lucide-react"

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)
  const [cursorVariant, setCursorVariant] = useState("default")
  const cursorRef = useRef(null)
  const navRef = useRef(null)

  // Update active link based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "services", "contact"]
      let current = "home"
      
      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section
          }
        }
      })
      
      setActiveLink(current)
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle mobile menu
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  // Cursor follow effect
  useEffect(() => {
    const mouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
    }

    window.addEventListener('mousemove', mouseMove)
    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  const navItems = [
    { id: "home", label: "Home", icon: <Home className="w-4 h-4" /> },
    { id: "about", label: "About", icon: <User className="w-4 h-4" /> },
    { id: "projects", label: "Projects", icon: <Briefcase className="w-4 h-4" /> },
    { id: "services", label: "Services", icon: <Code2 className="w-4 h-4" /> },
    { id: "contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
  ]

  const handleNavClick = (id) => {
    setActiveLink(id)
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  const handleLogoClick = () => {
    setActiveLink("home")
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const handleDownloadResume = () => {
  const link = document.createElement("a")
  link.href = "/assets/Shubham_Pawar2.pdf" // ✅ correct path
  link.download = "Shubham_Pawar2.pdf"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}


  return (
    <>
      {/* Modern cursor effect */}
      <div
        ref={cursorRef}
        className={`fixed w-8 h-8 rounded-full pointer-events-none z-50 transition-all duration-100 ease-out ${
          cursorVariant === "hover" 
            ? "scale-150 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-md" 
            : "scale-100 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-sm"
        }`}
        style={{
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      {/* Navbar */}
      <motion.nav
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.2
        }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled 
            ? "backdrop-blur-xl py-3 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-black/30 shadow-2xl" 
            : "py-4 px-4 sm:px-6 lg:px-8 bg-transparent"
        }`}
      >
        {/* Gradient bar indicator */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
          initial={{ width: "0%" }}
          animate={{ width: scrolled ? "100%" : "0%" }}
          transition={{ duration: 0.5 }}
        />
        
        <div className="max-w-7xl mx-auto flex justify-between items-center relative">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 group cursor-pointer"
            onClick={handleLogoClick}
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: scrolled ? 360 : 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg"
              >
                <Sparkles className="w-5 h-5 text-white" />
              </motion.div>
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/40 to-purple-500/40 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <motion.h1 
                className="font-bold text-xl bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent"
                animate={{ 
                  scale: scrolled ? 0.95 : 1,
                  opacity: scrolled ? 0.9 : 1
                }}
              >
                Shubham
              </motion.h1>
              <p className="text-xs text-white/40 tracking-wider">FULL-STACK DEVELOPER</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            <ul className="flex gap-1 backdrop-blur-xl border border-white/10 bg-white/5 rounded-2xl p-1">
              {navItems.map((item) => (
                <li key={item.id} className="relative">
                  <motion.button
                    onClick={() => handleNavClick(item.id)}
                    className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 relative group flex items-center gap-2 ${
                      activeLink === item.id 
                        ? "text-white" 
                        : "text-white/60 hover:text-white"
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={() => {
                      setHoveredLink(item.id)
                      setCursorVariant("hover")
                    }}
                    onMouseLeave={() => {
                      setHoveredLink(null)
                      setCursorVariant("default")
                    }}
                  >
                    <span className="relative z-10">{item.icon}</span>
                    <span className="relative z-10">{item.label}</span>
                    
                    {/* Active indicator */}
                    {activeLink === item.id && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30 shadow-lg"
                        layoutId="activeNav"
                        transition={{ 
                          type: "spring",
                          stiffness: 300,
                          damping: 30
                        }}
                      />
                    )}
                    
                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: hoveredLink === item.id && activeLink !== item.id ? 1 : 0,
                        scale: hoveredLink === item.id && activeLink !== item.id ? 1 : 0.8
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    
                    {/* Glow effect */}
                    {activeLink === item.id && (
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-xl blur-md opacity-50"></div>
                    )}
                  </motion.button>
                </li>
              ))}
            </ul>

            {/* Resume Download Button */}
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative ml-4 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-xl shadow-2xl overflow-hidden"
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <div className="absolute inset-0 shimmer opacity-30"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-green-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <FileText className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Resume</span>
            </motion.button>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative ml-2 inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-2xl overflow-hidden"
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <div className="absolute inset-0 shimmer opacity-30"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative z-10">Let's Connect</span>
              <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden w-12 h-12 backdrop-blur-xl border border-white/10 bg-white/5 rounded-xl flex items-center justify-center relative group"
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-white relative z-10" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-white relative z-10" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95 backdrop-blur-xl z-30 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-gradient-to-b from-black via-gray-900 to-black border-l border-white/10 z-40 lg:hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <motion.div 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="font-bold text-lg text-white">Shubham</h2>
                      <p className="text-xs text-white/40">Full-Stack Developer</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Mobile menu items */}
              <div className="p-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 + 0.2 }}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                      activeLink === item.id
                        ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30"
                        : "border border-white/5 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${
                        activeLink === item.id 
                          ? "bg-gradient-to-r from-cyan-500 to-blue-500" 
                          : "bg-white/5"
                      }`}>
                        {item.icon}
                      </div>
                      <span className="font-medium text-white">{item.label}</span>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform ${
                      activeLink === item.id ? "text-cyan-400 rotate-90" : "text-white/40"
                    }`} />
                  </motion.button>
                ))}
              </div>

              {/* Mobile Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 space-y-4"
              >
                {/* Availability */}
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <div className="absolute -inset-1 bg-emerald-400/30 rounded-full blur-sm animate-ping"></div>
                  </div>
                  <span className="text-sm text-white/60">Available for opportunities</span>
                </div>
                
                {/* Resume Button */}
                <motion.button
                  onClick={handleDownloadResume}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-xl text-center shadow-2xl relative overflow-hidden flex items-center justify-center gap-3"
                >
                  <div className="absolute inset-0 shimmer opacity-30"></div>
                  <FileText className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Download Resume</span>
                </motion.button>
                
                {/* Contact Button */}
                <motion.a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-semibold rounded-xl text-center shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute inset-0 shimmer opacity-30"></div>
                  <span className="relative z-10">Let's Connect</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 origin-left z-50"
        initial={{ scaleX: 0 }}
        animate={{ 
          scaleX: window.scrollY / (document.body.scrollHeight - window.innerHeight)
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  )
}