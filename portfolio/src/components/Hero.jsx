import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/images/profile.jpg";
import myResume from "../assets/images/resume.pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const headingAnimation = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const paragraphAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: 0.25, ease: "easeOut" },
    },
  };

  const buttonHover = {
    whileHover: { y: -2, scale: 1.02 },
    whileTap: { y: 0, scale: 0.98 },
  };

  return (
    <div
      id="home"
      className="w-full min-h-screen bg-[#0b0f19] text-white flex items-center justify-center pt-24 pb-12 md:py-0 relative overflow-hidden"
    >
      {/* Background Aesthetic Subtle Ambient Lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-12 z-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Subtle Tagline */}
          <span className="inline-block text-xs md:text-sm font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-400/10 px-4 py-1.5 rounded-full mb-4 border border-cyan-400/20">
            Available For Opportunities
          </span>

          {/* Premium Gradient Name */}
          <motion.h1
            variants={headingAnimation}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight bg-linear-to-r from-white via-indigo-200 to-cyan-300 text-transparent bg-clip-text"
          >
            Abdul Rahim
          </motion.h1>

          {/* Clear Subtitle */}
          <motion.p
            variants={paragraphAnimation}
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-xl md:text-2xl font-medium text-gray-400 mb-8 max-w-xl leading-relaxed"
          >
            Frontend Developer specialized in crafting high-performance,
            visually stunning <span className="text-white">React</span> &{" "}
            <span className="text-cyan-400">Tailwind CSS</span> web
            applications.
          </motion.p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <motion.a
              href="#contact"
              className="w-full sm:w-auto text-center bg-linear-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 px-8 py-3.5 rounded-full text-white font-semibold shadow-[0_4px_20px_rgba(6,182,212,0.25)] text-sm uppercase tracking-wider"
              whileHover={buttonHover.whileHover}
              whileTap={buttonHover.whileTap}
              transition={{ duration: 0.25 }}
            >
              Hire Me
            </motion.a>
            <motion.a
              href={myResume}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 px-8 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wider text-gray-200"
              whileHover={buttonHover.whileHover}
              whileTap={buttonHover.whileTap}
              transition={{ duration: 0.25 }}
            >
              View Resume
            </motion.a>
          </div>

          {/* Social Links with Premium Hover */}
          <div className="flex items-center justify-center md:justify-start gap-5 mt-10">
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mr-2">
              Connect:
            </span>
            <a
              href="https://github.com/raheemkhan12345/Mini_project1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300 text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-rahim-07224824a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-[#0077b5] hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300 text-xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Content (Premium Profile Image) */}
        <div className="flex-1 flex justify-center md:justify-end">
          <motion.div
            className="relative group"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Outer Rotating/Glowing Gradient Background Layer */}
            <div className="absolute -inset-1 rounded-full bg-linear-to-r from-violet-600 to-cyan-400 opacity-40 blur-xl group-hover:opacity-70 group-hover:blur-2xl transition duration-500"></div>

            {/* Inner Border Wrapper */}
            <div className="relative p-1.5 rounded-full bg-linear-to-tr from-violet-500 via-transparent to-cyan-400 shadow-2xl">
              <img
                src={profileImage}
                alt="Abdul Rahim Profile"
                className="w-52 h-52 sm:w-68 sm:h-68 md:w-80 md:h-80 rounded-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
