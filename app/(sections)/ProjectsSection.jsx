"use client"
import { FadeSection } from "../../components/FadeSection"
import { motion } from "framer-motion"

const projects = [
  {
    title: "MAMCO",
    description:
      "A modern and dynamic e-commerce platform combined with tailor-made portfolio management. Designed for CA professionals and enterprises to showcase services, manage clients, and deliver a seamless digital experience.",
    image: "/assets/mittal_website.webm",
    href: "https://www.mamco-ca.com/",
  },

  {
    title: "Voice BroadCast",
    description:
      "A scalable voice broadcasting platform integrated with VPS management. Features automated campaign scheduling, real-time delivery reports, user dashboards, and robust backend infrastructure.",
    image: "/assets/bonvoice.webm",
    href: "https://bonvoice.austere.biz",
  },
];

export default function ProjectsSection() {
  return (
    <FadeSection>
      <section id="projects" className="py-24 px-6 max-w-8xl mx-auto">
        <h2 className="text-4xl font-bold text-gradient mb-10 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="
                bg-neutral-900 
                p-10 
                rounded-2xl 
                border border-neutral-800 
                shadow-xl
                h-[550px]
                min-w-[550px]
                w-full
                flex 
                flex-col 
                justify-between
                text-center             /* 🔥 Center title + text */
              "
            >
              <div>
                <h3 className="text-3xl font-semibold text-white">
                  {proj.title}
                </h3>

                <p className="text-neutral-400 mt-3 mb-5 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              {proj.image?.endsWith(".webm") || proj.image?.endsWith(".mp4") ? (
                <video
                  src={proj.image}
                  controls
                  autoPlay
                  muted
                  loop
                  className="
                    rounded-lg 
                    w-full 
                    h-[320px]
                    object-cover 
                    border border-neutral-700
                  "
                />
              ) : (
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="
                    rounded-lg 
                    w-full 
                    h-[320px]
                    object-cover 
                    border border-neutral-700
                  "
                />
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </FadeSection>
  )
}
