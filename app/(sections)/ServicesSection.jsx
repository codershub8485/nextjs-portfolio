"use client"
import { FadeSection } from "../../components/FadeSection"
import { Code2, Frame, SearchCheck, MonitorSmartphone, Eye } from "lucide-react"

const services = [
  {
    service: "Frontend Development",
    description:
      "Building modern, responsive, and visually appealing UI using React, Next.js, and TailwindCSS with smooth animations.",
    icon: Code2,
  },
  {
    service: "UX Design",
    description:
      "Designing clean interfaces with a focus on usability, accessibility, and seamless user experience.",
    icon: Frame,
  },
  {
    service: "SEO Optimization",
    description:
      "Improving website visibility and ranking with structural optimization, metadata, and performance tuning.",
    icon: SearchCheck,
  },
  {
    service: "Responsive Design",
    description:
      "Creating layouts that perform consistently across all screen sizes — mobile, tablet, and desktop.",
    icon: MonitorSmartphone,
  },
  {
    service: "Backend Development",
    description:
      "Building secure, scalable backend systems with Node.js or Java Spring Boot, including REST APIs and database design.",
    icon: Eye,
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <FadeSection>
        <h2 className="text-4xl font-bold mb-12 text-center">Services</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all backdrop-blur-lg shadow-lg"
              >
                <Icon className="w-12 h-12 mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">{item.service}</h3>
                <p className="text-neutral-300">{item.description}</p>
              </div>
            )
          })}
        </div>
      </FadeSection>
    </section>
  )
}
