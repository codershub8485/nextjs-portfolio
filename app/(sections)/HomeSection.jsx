"use client"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export default function HomeSection() {
  // Variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <section id="home" className="h-screen flex items-center justify-center text-center px-6 bg-gray-900">
      <motion.div
        className="flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-6xl font-extrabold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Hi, I'm Shubham Pawar
        </motion.h1>

        <motion.p
          className="text-neutral-300 text-xl mt-6 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          A passionate Full-Stack Developer building AI-driven scalable applications
          with clean UI/UX and robust backend architecture.
        </motion.p>

        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg"
          variants={itemVariants}
        >
          Explore My Work{" "}
          <motion.span
            whileHover={{ y: 5 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.6 }}
          >
            <ArrowDown />
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  )
}
