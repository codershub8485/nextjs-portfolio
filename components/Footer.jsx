"use client"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="py-8 mt-12 border-t border-neutral-800 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-neutral-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Shubham Pawar
          </span>{" "}
          — All Rights Reserved.
        </p>

        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/codershub8485"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shubham-pawar-001b9a22b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaLinkedin />
          </a>
          {/* <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaTwitter />
          </a> */}
        </div>
      </div>
    </footer>
  )
}
