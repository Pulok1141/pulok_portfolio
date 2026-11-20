"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Mail,
  Sparkles,
  Code2,
  Cpu,
  Layout,
  FileText,
  Download,
  ExternalLink,
} from "lucide-react";

export function Hero() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-gradient-to-tr from-blue-500/10 via-indigo-500/15 to-cyan-400/10 dark:from-blue-600/15 dark:via-purple-600/15 dark:to-cyan-400/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-xs mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
            Available for Software Engineering & ML Roles
          </span>
        </motion.div>

        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
          className="relative mx-auto mb-6 w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 group"
        >
          {/* Subtle Ambient Radial Glow Behind Portrait */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-cyan-400 blur-xl opacity-50 dark:opacity-40 -z-10 group-hover:opacity-75 transition-opacity duration-500" />

          {/* Premium Glowing Gradient Border Frame */}
          <div className="w-full h-full p-1.5 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 shadow-xl shadow-blue-500/20 group-hover:scale-[1.02] transition-transform duration-300">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 border-2 border-white dark:border-slate-900 relative">
              <Image
                src="/profile.jpg"
                alt="Mahmudul Hasan Pulok"
                width={220}
                height={220}
                priority
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Active online indicator */}
          <div
            title="Active & Ready to collaborate"
            className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 p-1 rounded-full bg-white dark:bg-slate-900 shadow-md"
          >
            <span className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white dark:border-slate-900"></span>
            </span>
          </div>
        </motion.div>

        {/* Hero Name Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
        >
          Mahmudul Hasan Pulok
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-4 text-lg sm:text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 tracking-tight max-w-3xl mx-auto"
        >
          Computer Science & Engineering Student at Daffodil International University
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal"
        >
          Bridging the gap between complex data engineering and intuitive human-computer interaction.
          I build mathematically sound machine learning pipelines and seamless modern web applications.
        </motion.p>

        {/* Action Buttons: GitHub, View CV, Download CV, Contact Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3.5"
        >
          {/* View GitHub */}
          <a
            href="https://github.com/Pulok1141"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <Github className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>View GitHub</span>
            <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>

          {/* View CV Option */}
          <a
            href="/Mahmudul_Hasan_Pulok_CV_Updated_Latest.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-white/10 hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 shadow-xs hover:shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <FileText className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" />
            <span>View CV</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>

          {/* Download CV Option */}
          <a
            href="/Mahmudul_Hasan_Pulok_CV_Updated_Latest.pdf"
            download="Mahmudul_Hasan_Pulok_CV_Updated_Latest.pdf"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-white/10 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 shadow-xs hover:shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
            <span>Download CV</span>
          </a>

          {/* Contact Me */}
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-slate-700 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/70 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20 shadow-xs hover:shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4 text-indigo-500" />
            <span>Contact Me</span>
          </a>
        </motion.div>

        {/* Subtle Tech Discipline Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mt-14 pt-8 border-t border-slate-200/60 dark:border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left"
        >
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/60 dark:bg-slate-900/40 border border-slate-200/50 dark:border-white/5">
            <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-900 dark:text-white">ML Pipelines</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Optuna & Gradient Boosting</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/60 dark:bg-slate-900/40 border border-slate-200/50 dark:border-white/5">
            <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
              <Layout className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-900 dark:text-white">Modern Frontend</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">React, Next.js & Tailwind</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/60 dark:bg-slate-900/40 border border-slate-200/50 dark:border-white/5">
            <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-900 dark:text-white">Systems & Graphics</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">C, C++ & OpenGL</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
