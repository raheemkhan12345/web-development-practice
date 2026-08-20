import React from "react";
import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiCode,
  FiCpu,
  FiCheckCircle,
  FiAward,
  FiZap,
  FiLayout,
  FiServer,
  FiArrowUpRight,
} from "react-icons/fi";
import TiltCard from "./common/TiltCard";
import myResume from "../assets/images/resume.pdf";

const About = () => {
  const pillars = [
    {
      title: "Modular Clean Architecture",
      description:
        "Structuring decoupled, maintainable React codebases with reusable component patterns, centralized state management, and clear separation of concerns.",
      icon: <FiCode className="text-cyan-400 text-2xl" />,
      borderGlow: "group-hover:border-cyan-500/50",
      accent: "from-cyan-500/20 to-blue-500/10",
    },
    {
      title: "Performance & Responsive First",
      description:
        "Building pixel-perfect interfaces that load swiftly across all device tiers with optimized asset delivery, GPU animations, and zero layout shift.",
      icon: <FiZap className="text-amber-400 text-2xl" />,
      borderGlow: "group-hover:border-amber-500/50",
      accent: "from-amber-500/20 to-orange-500/10",
    },
    {
      title: "Modern UI/UX & Motion Design",
      description:
        "Transforming wireframes into engaging experiences with fluid micro-interactions, 3D visual accents, and accessible design principles.",
      icon: <FiLayout className="text-indigo-400 text-2xl" />,
      borderGlow: "group-hover:border-indigo-500/50",
      accent: "from-indigo-500/20 to-purple-500/10",
    },
    {
      title: "API & Data Integration",
      description:
        "Connecting frontend interfaces smoothly with REST APIs, WebSocket streams, and backend services with robust error handling and loading feedback.",
      icon: <FiServer className="text-emerald-400 text-2xl" />,
      borderGlow: "group-hover:border-emerald-500/50",
      accent: "from-emerald-500/20 to-teal-500/10",
    },
  ];

  const milestones = [
    {
      year: "Graduation",
      title: "BS Software Engineering",
      institution: "Sarhad University of Science and Information Technology, Peshawar",
      description:
        "Comprehensive training in software design patterns, data structures, algorithms, database systems, and modern web application development.",
      badge: "Academic Degree",
    },
    {
      year: "Focus Area",
      title: "Frontend Engineering & Modern Web",
      institution: "Specialized Project Track",
      description:
        "Engineered full-scale production applications including the Crown Elite Wedding Hall System, Institutional LMS, and multiple React utility micro-apps.",
      badge: "Engineering Focus",
    },
  ];

  const highlights = [
    { number: "100%", label: "Responsive Layouts", detail: "Flawless on Mobile & Desktop" },
    { number: "6+", label: "Featured Projects", detail: "Enterprise & Utility Apps" },
    { number: "Modern", label: "React 19 & Tailwind", detail: "Cutting-edge Frontend Stack" },
    { number: "Clean", label: "Architecture", detail: "Maintainable & Modular Code" },
  ];

  return (
    <section
      id="about"
      className="w-full bg-[#080d1a] text-slate-100 py-24 sm:py-32 relative overflow-hidden border-t border-slate-900"
    >
      {/* Ambient Cyber Gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-4 py-1.5 rounded-full inline-block backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            Professional Profile
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-['Space_Grotesk'] mb-4">
            Engineering with <span className="text-gradient-cyan">Precision & Passion</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Bridging the gap between creative visual design and robust digital architecture.
          </p>
        </div>

        {/* Executive Split Section: Bio & Key Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left Column: Biography & Background (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk']">
              Building scalable digital experiences that users love.
            </h3>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              I am <span className="text-white font-semibold">Abdul Rahim</span>, a Software Engineer graduated with a BS in Software Engineering from the{" "}
              <span className="text-cyan-300 font-medium">
                Sarhad University of Science and Information Technology, Peshawar
              </span>
              .
            </p>

            <p className="text-slate-400 text-base leading-relaxed">
              My engineering philosophy revolves around writing clean, decoupled, and easily maintainable systems. I specialize in architecting modern web user interfaces that balance high-speed execution with tasteful visual sophistication and interactive polish.
            </p>

            {/* Core Values / Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {[
                "Component-Driven Architecture",
                "Intuitive UI/UX Micro-Interactions",
                "Modern Tailwind & Responsive Systems",
                "Clean Code & Scalable State Management",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-300">
                  <FiCheckCircle className="text-cyan-400 shrink-0 text-base" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href={myResume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200 group"
              >
                <span>Read Full Resume & Credentials</span>
                <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Metrics Cards (5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <TiltCard
                key={index}
                maxTilt={10}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-lg hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex flex-col justify-between h-full">
                  <div className="text-2xl sm:text-3xl font-black text-gradient-cyan font-mono mb-2">
                    {item.number}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      {item.label}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

        </div>

        {/* ================= CORE ENGINEERING PILLARS ================= */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk'] mb-3">
              Core Engineering Pillars
            </h3>
            <p className="text-sm text-slate-400">
              The foundational principles guiding every application I build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <TiltCard
                key={index}
                maxTilt={12}
                className={`group p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md hover:bg-slate-900/70 transition-all duration-300 ${pillar.borderGlow}`}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-slate-700 transition-all duration-300">
                      {pillar.icon}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* ================= EDUCATION & MILESTONES TIMELINE ================= */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/50 border border-indigo-500/30 px-3 py-1 rounded-full inline-block mb-3">
              Background
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk']">
              Education & Academic Track
            </h3>
          </div>

          <div className="space-y-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="group relative p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/40 backdrop-blur-md transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                      <FiBookOpen />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {m.title}
                      </h4>
                      <p className="text-xs sm:text-sm font-medium text-slate-400">
                        {m.institution}
                      </p>
                    </div>
                  </div>

                  <span className="self-start sm:self-center px-3 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-indigo-950/80 text-indigo-300 border border-indigo-500/30">
                    {m.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-4 pl-0 sm:pl-14">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
