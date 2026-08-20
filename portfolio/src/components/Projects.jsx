import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCalendarAlt,
  FaGraduationCap,
  FaCloudSun,
  FaDollarSign,
  FaRobot,
  FaShoppingCart,
  FaGithub,
} from "react-icons/fa";
import { FiExternalLink, FiCode, FiLayers, FiCheck } from "react-icons/fi";
import TiltCard from "./common/TiltCard";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterTabs = [
    { id: "all", label: "All Projects" },
    { id: "featured", label: "Featured Enterprise" },
    { id: "micro", label: "Micro Apps & APIs" },
    { id: "ai-store", label: "AI & E-Commerce" },
  ];

  const projectList = [
    {
      id: "crown-elite",
      title: "Crown Elite — Wedding Hall Management System",
      category: "featured",
      type: "Enterprise System",
      description:
        "An enterprise-grade management platform featuring real-time booking schedules, visual calendar modules, customized invoice generation, and administrative control over event pipelines.",
      keyFeatures: [
        "Real-time event booking pipeline",
        "Dynamic invoice calculation & billing",
        "Visual date reservation calendar",
      ],
      tech: ["React", "React Router", "Context API", "Tailwind CSS"],
      github: "https://github.com/engrmasad-Developer/Elite-wedding-hall",
      icon: <FaCalendarAlt className="text-3xl text-amber-400" />,
      themeColor: "from-amber-500/20 to-orange-500/10",
      borderColor: "group-hover:border-amber-500/40",
      featured: true,
    },
    {
      id: "school-lms",
      title: "School Learning Management System (LMS)",
      category: "featured",
      type: "Institutional Portal",
      description:
        "A comprehensive institutional portal engineered to track student analytics, distribute assignments, control academic fee ledgers, and manage classroom structures.",
      keyFeatures: [
        "Student performance tracking",
        "Academic fee ledgers & billing",
        "Teacher & student portal workflows",
      ],
      tech: ["React", "React Router", "Context API", "Tailwind CSS"],
      github: "https://github.com/raheemkhan12345/school-management-lms",
      icon: <FaGraduationCap className="text-3xl text-indigo-400" />,
      themeColor: "from-indigo-500/20 to-purple-500/10",
      borderColor: "group-hover:border-indigo-500/40",
      featured: true,
    },
    {
      id: "weather-app",
      title: "Atmospheric Weather App",
      category: "micro",
      type: "Live API App",
      description:
        "A responsive weather application tracking real-time global atmospheric conditions and multi-day meteorological forecasts with seamless REST API integration.",
      keyFeatures: ["Live weather API streaming", "Dynamic atmospheric metrics", "City search & location geolocation"],
      tech: ["React", "REST API", "Tailwind CSS", "OpenWeather"],
      github: "https://github.com/raheemkhan12345/Mini_project1/tree/main/weather%20app",
      icon: <FaCloudSun className="text-3xl text-blue-400" />,
      themeColor: "from-blue-500/20 to-cyan-500/10",
      borderColor: "group-hover:border-blue-500/40",
      featured: false,
    },
    {
      id: "currency-converter",
      title: "Financial Currency Converter",
      category: "micro",
      type: "Utility Tool",
      description:
        "A precise financial conversion tool providing instant multi-currency computations with live-updating transactional exchange rate feeds.",
      keyFeatures: ["Live exchange rate API hooks", "Bidirectional currency swap", "Precision decimal arithmetic"],
      tech: ["React", "Live Exchange API", "Tailwind CSS", "Hooks"],
      github: "https://github.com/raheemkhan12345/Mini_project1/tree/main/06CurrencyConvertor",
      icon: <FaDollarSign className="text-3xl text-emerald-400" />,
      themeColor: "from-emerald-500/20 to-teal-500/10",
      borderColor: "group-hover:border-emerald-500/40",
      featured: false,
    },
    {
      id: "school-chatbot",
      title: "Intelligent School Chatbot",
      category: "ai-store",
      type: "AI Assistant",
      description:
        "An automated educational assistant engineered with Dialogflow NLP to intelligently answer inquiries regarding student metrics, admissions, and syllabus.",
      keyFeatures: ["Dialogflow conversational engine", "Intent & entity classification", "Automated FAQ resolution"],
      tech: ["Dialogflow", "NLP Integration", "React", "REST"],
      github: "https://github.com/raheemkhan12345/Mini_project1/tree/main/SchoolChatbot",
      icon: <FaRobot className="text-3xl text-purple-400" />,
      themeColor: "from-purple-500/20 to-pink-500/10",
      borderColor: "group-hover:border-purple-500/40",
      featured: false,
    },
    {
      id: "watch-store",
      title: "Watch Store E-Commerce Experience",
      category: "ai-store",
      type: "E-Commerce Frontend",
      description:
        "A responsive and modern frontend interface showcasing luxury timepieces with dynamic filtering, animated cart drawer, and interactive catalog.",
      keyFeatures: ["Interactive shopping cart drawer", "Product catalog filtering", "Responsive product gallery"],
      tech: ["React", "Tailwind CSS", "State Management", "Framer Motion"],
      github: "https://github.com/raheemkhan12345/Mini_project1/tree/main/ecommerce-project",
      icon: <FaShoppingCart className="text-3xl text-rose-400" />,
      themeColor: "from-rose-500/20 to-orange-500/10",
      borderColor: "group-hover:border-rose-500/40",
      featured: false,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projectList
      : projectList.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="w-full bg-[#080d1a] text-slate-100 py-24 sm:py-32 relative overflow-hidden border-t border-slate-900"
    >
      {/* Background Cyber Grid & Ambient Lights */}
      <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-4 py-1.5 rounded-full inline-block backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-['Space_Grotesk'] mb-4">
            Featured <span className="text-gradient-cyan">Work & Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Real production systems, enterprise platforms, and interactive applications built with modern frontend engineering.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "text-white bg-linear-to-r from-cyan-500 to-indigo-600 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                      : "text-slate-400 bg-slate-900/60 border border-slate-800 hover:text-white hover:border-slate-700"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects 3D Tilt Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 max-w-7xl mx-auto"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const isLarge = project.featured;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className={isLarge ? "lg:col-span-6" : "lg:col-span-4 md:col-span-1"}
                >
                  <TiltCard
                    maxTilt={10}
                    className={`h-full group p-6 sm:p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:bg-slate-900/80 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] ${project.borderColor}`}
                  >
                    <div>
                      {/* Top Header: Icon + Category Badge */}
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <div
                          className={`p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          {project.icon}
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-800/60 text-cyan-300 border border-cyan-500/20">
                          {project.type}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3 font-['Space_Grotesk'] leading-tight">
                        {project.title}
                      </h3>

                      {/* Project Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                        {project.description}
                      </p>

                      {/* Key Highlights / Features */}
                      <div className="space-y-2 mb-6">
                        {project.keyFeatures.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-400">
                            <FiCheck className="text-cyan-400 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Badges & CTA Footer */}
                    <div className="pt-6 border-t border-slate-800/80 space-y-4">
                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-mono font-medium text-slate-300 bg-slate-950/80 border border-slate-800 px-2.5 py-1 rounded-md"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl bg-slate-950/80 border border-slate-700/70 hover:border-cyan-500/50 hover:bg-cyan-950/30 text-slate-200 hover:text-cyan-300 text-xs font-semibold uppercase tracking-wider transition-all duration-200 group/btn shadow-md"
                      >
                        <FaGithub className="text-base text-slate-400 group-hover/btn:text-cyan-300 transition-colors" />
                        <span>Inspect Repository</span>
                        <FiExternalLink className="text-xs opacity-60 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
