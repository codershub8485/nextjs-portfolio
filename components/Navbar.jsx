"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Sparkles,
  Code2,
  User,
  Briefcase,
  Mail,
  ChevronRight,
  Home,
  FileText,
} from "lucide-react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [cursorVariant, setCursorVariant] = useState("default");
  const [scrollProgress, setScrollProgress] = useState(0);

  const cursorRef = useRef(null);
  const navRef = useRef(null);

  /* ===================== SCROLL & ACTIVE LINK ===================== */
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "services", "contact"];
      let current = "home";

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) current = section;
      });

      setActiveLink(current);
      setScrolled(window.scrollY > 50);

      const docHeight =
        document.body.scrollHeight - window.innerHeight;
      setScrollProgress(
        docHeight > 0 ? window.scrollY / docHeight : 0
      );
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===================== MOBILE BODY LOCK ===================== */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [mobileMenuOpen]);

  /* ===================== CURSOR FOLLOW ===================== */
  useEffect(() => {
    const move = (e) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: <Home className="w-4 h-4" /> },
    { id: "about", label: "About", icon: <User className="w-4 h-4" /> },
    { id: "projects", label: "Projects", icon: <Briefcase className="w-4 h-4" /> },
    { id: "services", label: "Services", icon: <Code2 className="w-4 h-4" /> },
    { id: "contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
  ];

  const handleNavClick = (id) => {
    setActiveLink(id);
    setMobileMenuOpen(false);

    const el = document.getElementById(id);
    if (!el) return;

    const offset = 80;
    const pos =
      el.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({ top: pos, behavior: "smooth" });
  };

  const handleLogoClick = () => {
    setActiveLink("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/assets/Shubham_Pawar2.pdf";
    link.download = "Shubham_Pawar2.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* ===================== CUSTOM CURSOR ===================== */}
      <div
        ref={cursorRef}
        className={`fixed w-8 h-8 rounded-full pointer-events-none z-50 transition-all duration-100 ${
          cursorVariant === "hover"
            ? "scale-150 bg-cyan-500/30 blur-md"
            : "scale-100 bg-cyan-500/20 blur-sm"
        }`}
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* ===================== NAVBAR ===================== */}
      <motion.nav
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 left-0 w-full z-40 ${
          scrolled
            ? "bg-black/30 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <motion.div
            onClick={handleLogoClick}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
              <Sparkles className="text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white">Shubham</h1>
              <p className="text-xs text-white/40">FULL-STACK DEVELOPER</p>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 rounded-xl flex gap-2 items-center ${
                  activeLink === item.id
                    ? "text-white bg-cyan-500/20"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {item.icon}
                {item.label}
              </motion.button>
            ))}

            {/* Resume */}
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05 }}
              className="ml-4 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold"
            >
              <FileText className="inline w-4 h-4 mr-2" />
              Resume
            </motion.button>

            {/* LETS CONNECT (RESTORED) */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-semibold flex items-center gap-2"
            >
              Let’s Connect
              <ChevronRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            className="lg:hidden"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </motion.nav>

      {/* ===================== MOBILE MENU ===================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed inset-0 bg-black z-50 p-6"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left text-white py-4"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={handleDownloadResume}
              className="mt-6 w-full py-3 bg-emerald-500 rounded-xl text-white font-semibold"
            >
              Download Resume
            </button>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 block w-full py-3 text-center bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white font-semibold"
            >
              Let’s Connect
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===================== SCROLL PROGRESS ===================== */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 origin-left z-50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress }}
      />
    </>
  );
}
