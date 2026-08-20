import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/images/profile.jpg";
import myResume from "../assets/images/resume.pdf";
import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { FiArrowRight, FiDownload, FiTerminal, FiLayers, FiShield } from "react-icons/fi";
import { SiTailwindcss, SiJavascript } from "react-icons/si";
import HeroCanvas from "./3d/HeroCanvas";
import TiltCard from "./common/TiltCard";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center pt-28 pb-16 lg:py-0 overflow-hidden bg-[#050811] text-white"
    >
      {/* Background Cyber Grid & Glowing Ambient Lights */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      
      {/* Ambient Gradient Blobs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-7rem)]">
          
          {/* Left Column: Hero Typography & CTAs (7 Cols) */}
          <motion.div
            className="lg:col-span-7 text-center lg:text-left pt-6 lg:pt-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status Pill Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span>Available for Opportunities</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400">Frontend Developer</span>
              </div>
            </motion.div>

            {/* Main Greeting & Name */}
            <motion.div variants={itemVariants}>
              <h2 className="text-sm sm:text-base font-mono uppercase tracking-[0.25em] text-indigo-400 mb-2 font-semibold">
                Hi, I am
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight font-['Space_Grotesk'] leading-[1.08] mb-6">
                <span className="text-white">Abdul </span>
                <span className="text-gradient-cyan">Rahim</span>
              </h1>
            </motion.div>

            {/* Subtitle / Value Proposition */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-8 mx-auto lg:mx-0"
            >
              Software Engineer specializing in crafting high-performance,
              visually engaging <span className="text-cyan-300 font-medium">React</span> and{" "}
              <span className="text-indigo-300 font-medium">Tailwind CSS</span> web applications
              with modern architectures, 3D interactions, and clean code principles.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-linear-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-semibold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transform hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
              >
                <span>View Projects</span>
                <FiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={myResume}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-900/80 border border-slate-700/80 hover:border-cyan-500/50 hover:bg-slate-800/90 text-slate-200 hover:text-white font-semibold text-sm uppercase tracking-wider backdrop-blur-md transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <FiDownload className="text-base text-cyan-400" />
                <span>Get Resume</span>
              </a>
            </motion.div>

            {/* Live Metrics & Social Connectivity */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 font-mono"
            >
              <div className="flex items-center gap-3">
                <span className="text-slate-500 uppercase tracking-wider">Connect:</span>
                <a
                  href="https://github.com/raheemkhan12345/Mini_project1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-200 text-base"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/abdul-rahim-07224824a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-[#0a66c2] hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-200 text-base"
                >
                  <FaLinkedin />
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-6 border-l border-slate-800 pl-6 text-slate-300">
                <div className="flex items-center gap-2">
                  <FiTerminal className="text-cyan-400" />
                  <span>BS Software Engineering</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiShield className="text-indigo-400" />
                  <span>Clean Architecture</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Interactive Canvas & Profile Artwork (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Background 3D Canvas Scene */}
            <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none opacity-80 lg:opacity-100">
              <HeroCanvas />
            </div>

            {/* Central 3D Profile Avatar Card */}
            <div className="relative z-10 w-full max-w-[320px] sm:max-w-[360px]">
              <TiltCard
                maxTilt={14}
                className="rounded-3xl p-3 bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
              >
                <div className="relative rounded-2xl overflow-hidden group">
                  {/* Glowing Outline */}
                  <div className="absolute -inset-0.5 bg-linear-to-tr from-cyan-500 via-indigo-500 to-purple-500 rounded-2xl opacity-40 group-hover:opacity-75 blur-sm transition-opacity duration-500" />
                  
                  {/* Real Profile Image */}
                  <img
                    src={profileImage}
                    alt="Abdul Rahim — Software Engineer"
                    className="relative w-full h-80 sm:h-96 object-cover object-center rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Bottom Vignette Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#050811] via-transparent to-transparent opacity-80" />

                  {/* Card Bottom Overlay Label */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/80 border border-white/10 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-white font-['Space_Grotesk']">
                          Abdul Rahim
                        </p>
                        <p className="text-[10px] font-mono text-cyan-400">
                          Frontend Developer
                        </p>
                      </div>
                      <span className="px-2 py-0.5 text-[9px] font-mono uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-md">
                        Active
                      </span>
                    </div>
                  </div>
                </div>
              </TiltCard>

              {/* Floating Tech Chips around avatar */}
              <motion.div
                className="absolute -top-4 -left-4 sm:-left-8 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-cyan-500/30 backdrop-blur-md shadow-xl flex items-center gap-2 z-20"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaReact className="text-cyan-400 text-lg animate-spin" style={{ animationDuration: "10s" }} />
                <span className="text-xs font-semibold text-slate-200">React 19</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-4 sm:-right-8 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-indigo-500/30 backdrop-blur-md shadow-xl flex items-center gap-2 z-20"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <SiTailwindcss className="text-sky-400 text-lg" />
                <span className="text-xs font-semibold text-slate-200">Tailwind v4</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-2 sm:-left-6 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-emerald-500/30 backdrop-blur-md shadow-xl flex items-center gap-2 z-20"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <FiLayers className="text-emerald-400 text-base" />
                <span className="text-xs font-semibold text-slate-200">Modern Architecture</span>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
