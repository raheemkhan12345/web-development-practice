import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUp, FiArrowUpRight, FiTerminal, FiShield } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full bg-[#050811] text-slate-400 pt-20 pb-10 relative overflow-hidden border-t border-slate-900">
      {/* Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[200px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[300px] h-[150px] bg-cyan-600/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16">
          
          {/* Brand & Mission Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-[11px] font-mono tracking-wider text-cyan-400">
              <FiTerminal className="text-sm animate-pulse" />
              <span>Engineered to Perform • v3.0</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-['Space_Grotesk']">
                Abdul Rahim<span className="text-cyan-400">.</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
                Software Engineer graduated from Sarhad University Peshawar. Focused on architecting modern, high-performance web ecosystems using React 19, Tailwind CSS, and 3D visual dynamics.
              </p>
            </div>
          </div>

          {/* Quick Navigation Column (3 Cols) */}
          <div className="lg:col-span-3 lg:col-start-7 space-y-4">
            <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-[0.2em] border-l-2 border-cyan-400 pl-2.5">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-400 hover:text-cyan-300 transition-colors py-1 font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Digital Networks & Outlets Column (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-[0.2em] border-l-2 border-indigo-500 pl-2.5">
              Connect
            </h4>
            <div className="space-y-2.5">
              <a
                href="https://github.com/raheemkhan12345/Mini_project1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-slate-900/60 border border-slate-800/80 rounded-xl text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-slate-900 transition-all duration-200 text-xs font-semibold group"
              >
                <div className="flex items-center gap-2.5">
                  <FaGithub className="text-base text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  <span>GitHub Repositories</span>
                </div>
                <FiArrowUpRight className="text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href="https://www.linkedin.com/in/abdul-rahim-07224824a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-slate-900/60 border border-slate-800/80 rounded-xl text-slate-300 hover:text-white hover:border-indigo-500/40 hover:bg-slate-900 transition-all duration-200 text-xs font-semibold group"
              >
                <div className="flex items-center gap-2.5">
                  <FaLinkedinIn className="text-base text-slate-400 group-hover:text-[#0a66c2] transition-colors" />
                  <span>LinkedIn Network</span>
                </div>
                <FiArrowUpRight className="text-slate-500 group-hover:text-[#0a66c2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Status Ledger & Back-To-Top */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {currentYear} ABDUL RAHIM. ALL RIGHTS RESERVED.</p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"></span>
              <span className="text-slate-400">SYSTEM OPERATIONAL</span>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all duration-200 cursor-pointer"
            >
              <FiArrowUp className="text-sm" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;