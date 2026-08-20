import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiPostman, SiVite } from "react-icons/si";
import { FiLayers, FiGlobe, FiCode, FiZap } from "react-icons/fi";
import TiltCard from "./common/TiltCard";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Technologies" },
    { id: "frontend", label: "Frontend Core" },
    { id: "tools", label: "Tools & Ecosystem" },
    { id: "architecture", label: "Architecture & APIs" },
  ];

  const skillList = [
    {
      name: "React 19 / 18",
      category: "frontend",
      level: "Advanced",
      proficiency: 92,
      icon: <FaReact />,
      colorClass: "text-cyan-400",
      glowColor: "rgba(6, 182, 212, 0.25)",
      description: "Hooks, Context API, Virtual DOM, Component Lifecycle & Performance.",
    },
    {
      name: "Tailwind CSS v4",
      category: "frontend",
      level: "Advanced",
      proficiency: 95,
      icon: <SiTailwindcss />,
      colorClass: "text-sky-400",
      glowColor: "rgba(56, 189, 248, 0.25)",
      description: "Utility-first architecture, custom theme variables, responsive design.",
    },
    {
      name: "JavaScript (ES6+)",
      category: "frontend",
      level: "Advanced",
      proficiency: 90,
      icon: <FaJsSquare />,
      colorClass: "text-yellow-400",
      glowColor: "rgba(250, 204, 21, 0.25)",
      description: "Asynchronous programming, closures, DOM manipulation, ESNext features.",
    },
    {
      name: "HTML5 & Semantic Web",
      category: "frontend",
      level: "Advanced",
      proficiency: 96,
      icon: <FaHtml5 />,
      colorClass: "text-orange-500",
      glowColor: "rgba(249, 115, 22, 0.25)",
      description: "Semantic tagging, SEO optimization, web accessibility (a11y).",
    },
    {
      name: "CSS3 & Modern Motion",
      category: "frontend",
      level: "Advanced",
      proficiency: 92,
      icon: <FaCss3Alt />,
      colorClass: "text-blue-400",
      glowColor: "rgba(96, 165, 250, 0.25)",
      description: "Flexbox, Grid, keyframe animations, 3D transforms, glassmorphism.",
    },
    {
      name: "Git Version Control",
      category: "tools",
      level: "Proficient",
      proficiency: 88,
      icon: <FaGitAlt />,
      colorClass: "text-rose-500",
      glowColor: "rgba(244, 63, 94, 0.25)",
      description: "Branching strategies, merge conflict resolution, commit hygiene.",
    },
    {
      name: "GitHub Ecosystem",
      category: "tools",
      level: "Proficient",
      proficiency: 90,
      icon: <FaGithub />,
      colorClass: "text-slate-200",
      glowColor: "rgba(226, 232, 240, 0.2)",
      description: "Repository management, collaboration workflows, GitHub Pages deployment.",
    },
    {
      name: "Vite Tooling",
      category: "tools",
      level: "Proficient",
      proficiency: 90,
      icon: <SiVite />,
      colorClass: "text-purple-400",
      glowColor: "rgba(192, 132, 252, 0.25)",
      description: "High-speed HMR, build optimization, bundle inspection, asset processing.",
    },
    {
      name: "REST API Integration",
      category: "architecture",
      level: "Advanced",
      proficiency: 90,
      icon: <FiGlobe />,
      colorClass: "text-emerald-400",
      glowColor: "rgba(52, 211, 153, 0.25)",
      description: "Fetch, Axios, live data streaming, error boundary handling, payload parsing.",
    },
    {
      name: "State Management & Context",
      category: "architecture",
      level: "Advanced",
      proficiency: 92,
      icon: <FiLayers />,
      colorClass: "text-indigo-400",
      glowColor: "rgba(129, 140, 248, 0.25)",
      description: "Decoupled global state, prop-drilling mitigation, modular providers.",
    },
    {
      name: "3D & Interactive Motion",
      category: "frontend",
      level: "Proficient",
      proficiency: 85,
      icon: <FiZap />,
      colorClass: "text-cyan-300",
      glowColor: "rgba(103, 232, 249, 0.25)",
      description: "Three.js, React Three Fiber, Framer Motion transitions & micro-interactions.",
    },
    {
      name: "API Testing & Debugging",
      category: "tools",
      level: "Proficient",
      proficiency: 85,
      icon: <SiPostman />,
      colorClass: "text-orange-400",
      glowColor: "rgba(251, 146, 60, 0.25)",
      description: "Endpoint validation, headers inspection, payload debugging.",
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skillList
      : skillList.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      className="w-full bg-[#050811] text-slate-100 py-24 sm:py-32 relative overflow-hidden border-t border-slate-900"
    >
      {/* Background Neon Mesh */}
      <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-4 py-1.5 rounded-full inline-block backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-['Space_Grotesk'] mb-4">
            Technical <span className="text-gradient-cyan">Arsenal</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Technologies and frameworks I use to engineer robust, modern software products.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "text-white bg-linear-to-r from-cyan-500 to-indigo-600 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                      : "text-slate-400 bg-slate-900/60 border border-slate-800 hover:text-white hover:border-slate-700"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Responsive 3D Tilt Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <TiltCard
                  maxTilt={14}
                  className="h-full group p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                >
                  <div>
                    {/* Top Row: Icon & Level Badge */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div
                        className={`p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-2xl group-hover:scale-110 transition-transform duration-300 ${skill.colorClass}`}
                      >
                        {skill.icon}
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/50 border border-cyan-500/20 px-2.5 py-1 rounded-md">
                        {skill.level}
                      </span>
                    </div>

                    {/* Skill Info */}
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5 font-['Space_Grotesk']">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {skill.description}
                    </p>
                  </div>

                  {/* Proficiency Meter */}
                  <div className="pt-3 border-t border-slate-800/60">
                    <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mb-1.5">
                      <span>Proficiency</span>
                      <span className="text-cyan-400 font-bold">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-cyan-500 to-indigo-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;