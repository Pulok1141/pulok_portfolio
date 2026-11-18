"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail, Heart, Terminal } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-950 py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Identity */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-xs">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                Mahmudul Hasan Pulok
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Computer Science & Engineering · Daffodil International University
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:mahmudulhasanpulok33@gmail.com"
              aria-label="Send Email"
              className="p-2 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/30 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/mhpulok/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/30 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Pulok1141"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/30 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20 transition-colors ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright statement */}
        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>
            &copy; {currentYear} Mahmudul Hasan Pulok. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Crafted with React, Next.js, Tailwind CSS & Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
