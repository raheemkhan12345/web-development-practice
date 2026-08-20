import React from "react";
import { motion } from "framer-motion";
import {
  FiLayout,
  FiZap,
  FiSmartphone,
  FiLayers,
  FiCheck,
  FiArrowRight,
} from "react-icons/fi";
import TiltCard from "./common/TiltCard";

const Services = () => {
  const services = [
    {
      id: "01",
      title: "Frontend Architecture & SPAs",
      description:
        "Architecting clean, scalable single-page applications in React with modular design systems, reusable components, and resilient state architectures.",
      deliverables: [
        "React 19 & Context API state architecture",
        "Clean folder hierarchy & decoupled logic",
        "Custom hooks & reusable design system",
      ],
      icon: <FiLayers className="text-cyan-400 text-2xl" />,
      themeGlow: "group-hover:border-cyan-500/50",
    },
    {
      id: "02",
      title: "Responsive & Modern UI/UX",
      description:
        "Translating creative designs into pixel-perfect, highly responsive interfaces that adapt fluidly from mobile displays to ultra-wide desktop monitors.",
      deliverables: [
        "Tailwind CSS v4 modern layout engineering",
        "Mobile-first responsive touch interactions",
        "Accessible contrast & clean typography",
      ],
      icon: <FiSmartphone className="text-indigo-400 text-2xl" />,
      themeGlow: "group-hover:border-indigo-500/50",
    },
    {
      id: "03",
      title: "3D Motion & Micro-Interactions",
      description:
        "Elevating web experiences with subtle Three.js / WebGL scenes, 3D card tilts, Framer Motion staggered reveals, and magnetic micro-interactions.",
      deliverables: [
        "React Three Fiber 3D interactive canvases",
        "Framer Motion physics & scroll reveals",
        "GPU-accelerated smooth animations",
      ],
      icon: <FiZap className="text-purple-400 text-2xl" />,
      themeGlow: "group-hover:border-purple-500/50",
    },
    {
      id: "04",
      title: "API Integration & Performance",
      description:
        "Integrating dynamic RESTful endpoints and external services while guaranteeing high-speed load times, bundle optimization, and zero layout shift.",
      deliverables: [
        "REST API ingestion & error resilience",
        "Vite build optimization & asset minification",
        "Lightning-fast Core Web Vitals",
      ],
      icon: <FiLayout className="text-emerald-400 text-2xl" />,
      themeGlow: "group-hover:border-emerald-500/50",
    },
  ];

  return (
    <section
      id="services"
      className="w-full bg-[#050811] text-slate-100 py-24 sm:py-32 relative overflow-hidden border-t border-slate-900"
    >
      {/* Ambient Cyber Lights */}
      <div className="absolute top-1/2 -left-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-4 py-1.5 rounded-full inline-block backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            Solutions
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-['Space_Grotesk'] mb-4">
            Services & <span className="text-gradient-cyan">Capabilities</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High-caliber frontend engineering services focused on building performant, aesthetic, and production-ready applications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {services.map((srv) => (
            <TiltCard
              key={srv.id}
              maxTilt={8}
              className={`group p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:bg-slate-900/70 hover:shadow-[0_15px_45px_rgba(0,0,0,0.5)] ${srv.themeGlow}`}
            >
              <div>
                {/* Header: Service ID + Icon */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-950/90 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {srv.icon}
                  </div>
                  <span className="text-2xl font-black font-mono text-slate-700 group-hover:text-cyan-400/40 transition-colors">
                    {srv.id}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3 font-['Space_Grotesk']">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                  {srv.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2.5 pt-4 border-t border-slate-800/60">
                  {srv.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <FiCheck className="text-cyan-400 shrink-0 text-sm" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 mt-6 border-t border-slate-800/40">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 group-hover:text-cyan-300 transition-colors"
                >
                  <span>Request This Service</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-10 bg-linear-to-r from-cyan-950/40 via-indigo-950/40 to-slate-900/60 border border-cyan-500/20 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-2xl">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk'] mb-2">
              Ready to start your next project?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 max-w-lg">
              Let's connect to discuss how we can turn your architectural concepts and design requirements into high-performing reality.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-8 py-3.5 rounded-full bg-linear-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all duration-300 cursor-pointer"
          >
            Get In Touch
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;
