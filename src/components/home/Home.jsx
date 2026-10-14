import React from "react";
import { Link } from "react-router";

const projects = [
  {
    id: "01",
    title: "Background Color Changer",
    description: "A short description of your project.",
    path: "/bgColorChanger",
  },
  {
    id: "02",
    title: "Counter App",
    description: "A short description of your project.",
    path: "/counter",
  },
  {
    id: "03",
    title: "Password Generator",
    description: "A short description of your project.",
    path: "/passwordGenerator",
  },
  {
    id: "04",
    title: "Currency Converter",
    description: "A short description of your project.",
    path: "/currencyConverter",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#101110] px-5 text-[#e8e9e4] sm:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Hero Section */}
        <section className="border-b border-[#292b28] pt-20 pb-10 sm:pt-28 sm:pb-12">
          <p className="mb-8 flex items-center gap-3 text-[11px] font-semibold tracking-[2px] text-[#92968d]">
            <span className="h-2 w-2 rounded-full bg-[#a3b18a]" />
            AVAILABLE FOR OPPORTUNITIES
          </p>

          <h1 className="text-4xl font-semibold leading-tight tracking-[-2px] sm:text-6xl md:text-7xl">
            Hi, I'm{" "}
            <span className="text-[#a3b18a]">Mayank Patle.</span>
          </h1>

          <p className="mt-7 max-w-full text-sm leading-8 text-[#a5a79f] sm:text-base">
            I'm a React developer focused on building responsive user
            interfaces, creating interactive web applications, and turning
            ideas into clean, functional digital experiences.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-[#d0d1ca]">
            <span>Analytical</span>
            <span className="text-[#65685f]">/</span>
            <span>Detail-Oriented</span>
            <span className="text-[#65685f]">/</span>
            <span>Evolving</span>
          </div>
        </section>

        {/* Projects Section */}
        <section className="pt-8 pb-16 sm:pt-10 sm:pb-20">
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-[11px] font-semibold tracking-[2px] text-[#92968d]">
                Built with Intent — small applications, thoughtfully
                engineered, with an emphasis on clean interfaces, practical
                functionality, and maintainable code.
              </p>

              <h2 className="text-3xl font-medium tracking-tight">
                Projects{" "}
                <span className="text-base font-normal text-[#74776e]">
                  (04)
                </span>
              </h2>
            </div>

            <p className="text-sm text-[#85887f]">
              Things I've built & explored.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={project.path}
                className="group flex min-h-[225px] flex-col justify-between rounded border border-[#2c2f2a] bg-[#171916] p-6 transition-colors duration-200 hover:border-[#778468] hover:bg-[#1c1f1a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a3b18a]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-widest text-[#85887f]">
                    {project.id}
                  </span>

                  <span className="text-xl text-[#a3b18a] transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>

                <div className="my-8">
                  <h3 className="text-xl font-medium tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#92958b]">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 text-[10px] font-semibold tracking-[1.5px] text-[#a3b18a]">
                  EXPLORE PROJECT
                  <span className="h-px w-7 bg-[#515b47] transition-all duration-200 group-hover:w-11" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="flex justify-between gap-4 border-t border-[#292b28] py-6 text-[10px] tracking-[1.2px] text-[#777a71]">
          <span>© {new Date().getFullYear()} Mayank Patle</span>
          <span>BUILT WITH REACT</span>
        </footer>

      </div>
    </main>
  );
}