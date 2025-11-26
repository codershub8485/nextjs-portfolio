"use client";

import Link from "next/link";
import { FadeSection } from "../../components/FadeSection";

const aboutStats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Delivered", value: "25+" },
  { label: "Technologies Used", value: "15+" },
];

export default function AboutSection() {
  return (
    <FadeSection>
      <section id="about" data-scroll-section>
        <div
          data-scroll
          data-scroll-speed=".4"
          data-scroll-position="top"
          className="my-14 max-w-6xl mx-auto flex flex-col space-y-12"
        >
          <h2 className="text-3xl xl:text-[40px] font-light leading-relaxed tracking-tight text-foreground">
            I'm <span className="font-semibold">Shubham Pawar</span>, a results-driven
            <span className="font-semibold"> Full-Stack Developer</span> specializing in
            scalable systems, modern UI/UX, backend architecture, and AI-powered
            applications.
            <br /><br />
            I work extensively with{" "}
            <a href="https://nextjs.org/" target="_blank" className="underline">
              Next.js
            </a>
            ,{" "}
            <a href="https://nodejs.org/" target="_blank" className="underline">
              Node.js
            </a>
            ,{" "}
            <a
              href="https://spring.io/projects/spring-boot"
              target="_blank"
              className="underline"
            >
              Java (Spring Boot)
            </a>
            , and{" "}
            <a
              href="https://www.python.org/"
              target="_blank"
              className="underline"
            >
              Python
            </a>
            . I enjoy building high-performance APIs, microservices, clean-architecture
            solutions, and AI-driven features that enhance user experience.
            <br /><br />
            With over 2 years of professional experience, I've contributed to
            startup and enterprise projects—leading modules, optimizing performance,
            and delivering reliable, production-grade software with a focus on clean,
            maintainable code.
          </h2>


          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {aboutStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="clash-grotesk text-gradient text-4xl font-semibold tracking-tight xl:text-6xl">
                  {stat.value}
                </span>
                <span className="mt-2 text-lg font-medium text-gray-600 dark:text-gray-300">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeSection>
  );
}
