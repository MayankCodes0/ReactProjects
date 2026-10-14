import React from "react";
import { Link, NavLink } from "react-router";
 
const projects = [
  { name: "Backgorund Color Changer", path: "/bgColorChanger" },
  { name: "Counter", path: "/counter" },
  { name: "Password Generator", path: "/passwordGenerator" },
  { name: "Currency Convertor", path: "/currencyConverter" },
];

export default function Header() {
  const navLinkClass = ({ isActive }) =>
    `relative py-2 text-sm transition-colors duration-200 ${isActive ? "text-[#a3b18a]" : "text-[#a5a79f] hover:text-[#e8e9e4]"}`;

  return (
    <header className="sticky top-0 z-50 border-b border-[#292b28] bg-[#101110]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">

        {/* Logo / Name */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded border border-[#41483a] bg-[#1c1f1a] text-sm font-semibold text-[#a3b18a] transition-colors group-hover:border-[#a3b18a]">
            MP
          </div>

          <span className="text-sm font-semibold tracking-wide text-[#e8e9e4]">
            Mayank Patle<span className="text-[#a3b18a]">.</span>
          </span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-5 sm:gap-7">
          {projects.map((project) => (
            <NavLink
              key={project.path}
              to={project.path}
              className={navLinkClass}
            >
              {({ isActive }) => (
                <>
                  {project.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 h-px w-full bg-[#a3b18a]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

      </nav>
    </header>
  );
}