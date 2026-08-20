import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiMapPin,
  FiUser,
  FiSend,
  FiCheckCircle,
  FiLoader,
  FiCopy,
  FiCheck,
  FiAlertCircle,
} from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TiltCard from "./common/TiltCard";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [copied, setCopied] = useState(false);

  const emailAddress = "raheemkhan.rk12345@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    emailjs
      .sendForm(
        "service_8p0wyxn",
        "template_ujvpgg8",
        form.current,
        "WCnb9ga9dvUFlK47f"
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        form.current.reset();

        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      })
      .catch((error) => {
        setLoading(false);
        setErrorMsg("Failed to dispatch message. Please try emailing directly.");
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#080d1a] text-slate-100 py-24 sm:py-32 relative overflow-hidden border-t border-slate-900"
    >
      {/* Ambient Cyber Grid & Glows */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-4 py-1.5 rounded-full inline-block backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-['Space_Grotesk'] mb-4">
            Let's Build Something <span className="text-gradient-cyan">Exceptional</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have a project idea, job opportunity, or technical inquiry? Send a message and I'll respond swiftly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Direct Contact Details & Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card with One-Click Copy */}
            <TiltCard
              maxTilt={8}
              className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-2xl">
                  <FiMail />
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-cyan-950/60 border border-slate-700/80 hover:border-cyan-500/40 text-[11px] font-mono font-medium text-slate-300 hover:text-cyan-300 transition-all duration-200 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <FiCheck className="text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <FiCopy className="text-xs" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                Direct Inquiries
              </span>
              <a
                href={`mailto:${emailAddress}`}
                className="text-base sm:text-lg font-bold text-white hover:text-cyan-300 transition-colors block break-all font-mono"
              >
                {emailAddress}
              </a>
            </TiltCard>

            {/* Location & Developer Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xl w-fit mb-3">
                  <FiMapPin />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                  Location
                </span>
                <span className="text-sm font-semibold text-slate-200 block mt-0.5">
                  Pakistan (GMT+5)
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xl w-fit mb-3">
                  <FiUser />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                  Profile
                </span>
                <span className="text-sm font-semibold text-slate-200 block mt-0.5">
                  Abdul Rahim
                </span>
              </div>
            </div>

            {/* Social Connectivity Stacks */}
            <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                Online Profiles & Network
              </span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/raheemkhan12345/Mini_project1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 text-slate-300 hover:text-white transition-all duration-200 text-xs font-semibold"
                >
                  <FaGithub className="text-base" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/abdul-rahim-07224824a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 text-slate-300 hover:text-[#0a66c2] transition-all duration-200 text-xs font-semibold"
                >
                  <FaLinkedin className="text-base" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Cyber Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-2xl space-y-6"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk'] mb-2">
                Send a Direct Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Your Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 text-sm transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Your Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 text-sm transition-all font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Project Details / Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell me about your project, timeline, or requirements..."
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 text-sm transition-all font-sans resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center gap-2.5 py-4 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  loading
                    ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                    : "bg-linear-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.55)] transform hover:-translate-y-0.5"
                }`}
              >
                {loading ? (
                  <>
                    <FiLoader className="animate-spin text-lg" />
                    <span>Dispatching Transmission...</span>
                  </>
                ) : (
                  <>
                    <FiSend className="text-base" />
                    <span>Send Transmission</span>
                  </>
                )}
              </button>

              {/* Success Notification */}
              {success && (
                <div className="flex items-center justify-center gap-2.5 p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl text-xs sm:text-sm font-medium animate-fadeIn">
                  <FiCheckCircle className="text-lg shrink-0" />
                  <span>Message delivered successfully! I will reach back out soon.</span>
                </div>
              )}

              {/* Error Notification */}
              {errorMsg && (
                <div className="flex items-center justify-center gap-2.5 p-4 bg-rose-500/10 border border-rose-500/30 text-rose-400 rounded-xl text-xs sm:text-sm font-medium animate-fadeIn">
                  <FiAlertCircle className="text-lg shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
