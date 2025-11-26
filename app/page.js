'use client'

import HomeSection from './(sections)/HomeSection'
import AboutSection from './(sections)/AboutSection'
import ProjectsSection from './(sections)/ProjectsSection'
import ServicesSection from './(sections)/ServicesSection'
import ContactSection from './(sections)/ContactSection'

export default function Page() {
  return (
    <main className="w-full">
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
    </main>
  )
}
