"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, ExternalLink, Sparkles, Code2, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/codershub8485",
      label: "GitHub",
      color: "hover:text-white",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/shubham-pawar-001b9a22b",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: Mail,
      href: "mailto:shubhampawar848582@gmail.com",
      label: "Email",
      color: "hover:text-cyan-400",
    },
  ];

  return (
    <footer className="relative py-12 md:py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-purple-500/5" />
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #8882 1px, transparent 1px),
                linear-gradient(to bottom, #8882 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
              Let's Build
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Together
            </span>
          </h3>

          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
            Have a project in mind? I'm always open to discussing new
            opportunities and creative ideas.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl shadow-2xl"
          >
            <span>Get In Touch</span>
            <ExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            <div className="absolute inset-0 shimmer opacity-20" />
          </motion.a>
        </motion.div>

        {/* Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">
                  Shubham Pawar
                </h4>
                <p className="text-sm text-white/60">
                  Full-Stack Developer
                </p>
              </div>
            </div>
            <p className="text-white/60 text-sm">
              Building digital experiences that combine innovation with
              functionality.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <Sparkles className="w-3 h-3 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Web Development",
                "UI/UX Design",
                "Backend Solutions",
                "Performance Optimization",
              ].map((service) => (
                <li key={service} className="text-white/60">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:shubhampawar848582@gmail.com"
                  className="text-white/60 hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  shubhampawar848582@gmail.com
                </a>
              </li>
              <li className="text-white/60 flex items-center gap-3">
                <div className="relative">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  <div className="absolute -inset-1 bg-emerald-400/30 rounded-full blur-sm animate-ping" />
                </div>
                Available for freelance work
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-white/60 text-sm">
              © {currentYear}{" "}
              <span className="text-cyan-400 font-semibold">
                Shubham Pawar
              </span>{" "}
              • All rights reserved
            </p>
            <p className="text-white/40 text-xs mt-2 flex items-center gap-1 justify-center md:justify-start">
              Crafted with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> by Shubham Pawar
            </p>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-white/60 ${social.color}`}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Back to Top (FIXED) */}
        <motion.button
          onClick={handleBackToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-12 h-12 backdrop-blur-xl border border-white/10 bg-white/5 rounded-xl flex items-center justify-center"
          aria-label="Back to top"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
}
