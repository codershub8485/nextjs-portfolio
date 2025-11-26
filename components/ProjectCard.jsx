'use client'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }){
  return (
    <motion.a whileHover={{ scale: 1.03 }} className="block bg-gray-900/60 p-6 rounded-2xl shadow-lg" href={project.link || '#'} target="_blank" rel="noreferrer">
      <img src={project.image} alt={project.title} className="w-full h-44 object-cover rounded-lg mb-4"/>
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-gray-400 mt-2">{project.description}</p>
      <div className="mt-4 flex gap-3 text-sm flex-wrap">
        {project.tech.map(t => <span key={t} className="px-2 py-1 bg-white/5 rounded">{t}</span>)}
      </div>
    </motion.a>
  )
}
