import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowUpRight, FiCode } from "react-icons/fi";
import myResume from "../assets/images/resume.pdf";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }

      setScrolled(currentScroll > 20);

      // Section Spy
      const sections = ["home", "about", "skills", "projects", "services", "contact"];
      const scrollPosition = currentScroll + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActive(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-60 bg-transparent">
        <div
          className="h-full bg-linear-to-r from-cyan-400 via-indigo-500 to-purple-500 transition-all duration-100 ease-out shadow-[0_0_10px_#22d3ee]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "glass-nav border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)] py-3.5"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group cursor-pointer"
            onClick={() => setActive("home")}
          >
            <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400 group-hover:scale-105 transition-all duration-300">
              <FiCode className="text-cyan-400 text-lg group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-white group-hover:text-cyan-300 transition-colors font-['Space_Grotesk']">
                Abdul Rahim<span className="text-cyan-400">.</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase -mt-1">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center bg-slate-900/60 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-xl shadow-inner">
            <ul className="flex items-center space-x-1 text-sm font-medium">
              {navItems.map((item) => {
                const isLinkActive = active === item.name.toLowerCase();
                return (
                  <li key={item.name} className="relative">
                    <a
                      href={item.href}
                      onClick={() => setActive(item.name.toLowerCase())}
                      className={`relative px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-200 block z-10 ${
                        isLinkActive
                          ? "text-white"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      {item.name}
                    </a>
                    {isLinkActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute inset-0 bg-linear-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-400/40 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={myResume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full border border-slate-700 bg-slate-900/60 text-slate-300 hover:text-white hover:border-slate-500 transition-all duration-200"
            >
              <span>Resume</span>
              <FiArrowUpRight className="text-xs" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full bg-linear-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden p-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white hover:text-cyan-400 focus:outline-none transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#070b15]/95 border-b border-white/10 backdrop-blur-2xl px-6 py-6 overflow-hidden"
            >
              <ul className="flex flex-col space-y-2">
                {navItems.map((item, index) => {
                  const isLinkActive = active === item.name.toLowerCase();
                  return (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <a
                        href={item.href}
                        onClick={() => {
                          setMenuOpen(false);
                          setActive(item.name.toLowerCase());
                        }}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                          isLinkActive
                            ? "bg-linear-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border-l-4 border-cyan-400"
                            : "text-slate-300 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span>{item.name}</span>
                        {isLinkActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                        )}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="pt-6 mt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href={myResume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl border border-slate-700 bg-slate-900 text-center text-xs font-semibold uppercase tracking-wider text-slate-200"
                >
                  View Resume
                </a>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="w-full py-3 rounded-xl bg-linear-to-r from-cyan-500 to-indigo-600 text-center text-xs font-semibold uppercase tracking-wider text-white shadow-md"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
