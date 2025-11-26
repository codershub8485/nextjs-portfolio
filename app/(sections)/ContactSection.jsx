"use client"
import { motion } from "framer-motion"
import { Mail, ArrowRight } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-4 text-center"
      >
        
        <h2 className="text-4xl font-bold mb-6 text-gradient">Contact Me</h2>

        <p className="text-lg text-neutral-300 mb-10">
          Feel free to reach out for work, collaboration, or any queries.
        </p>

        <motion.a
          href="mailto:shubhampawar848582@gmail.com"
          whileHover={{ scale: 1.05 }}
          className="
            inline-flex items-center gap-3 px-8 py-4 rounded-xl 
            text-lg font-medium text-white 
            bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
            shadow-xl shadow-purple-700/30
          "
        >
          <Mail size={22} />
          Send Email
          <ArrowRight size={22} />
        </motion.a>

      </motion.div>
    </section>
  )
}
