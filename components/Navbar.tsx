"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import {
  Sun,
  Moon,
  Menu,
  X,
  ArrowUpRight,
  FileText,
  Download,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/75 dark:bg-slate-950/75 backdrop-blur-md border-b border-slate-200/80 dark:border-white/10 shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Profile Avatar */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-bold tracking-tight text-slate-900 dark:text-white"
          >
            <div className="h-9 w-9 rounded-xl overflow-hidden border border-slate-200/80 dark:border-white/20 shadow-sm shadow-blue-500/10 group-hover:scale-105 group-hover:border-blue-500/50 transition-all duration-200 relative bg-slate-100 dark:bg-slate-800 shrink-0">
              <Image
                src="/profile.jpg"
                alt="Mahmudul Hasan Pulok"
                width={36}
                height={36}
                priority
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                Mahmudul Hasan Pulok
              </span>
              <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400">
                Portfolio
              </span>
            </div>
          </Link>

          {/* Desktop Multi-Page Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-200/70 dark:border-white/10 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 ${
                    isActive
                      ? "text-blue-600 dark:text-white font-semibold"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white dark:bg-slate-800 shadow-sm rounded-full -z-10 border border-slate-200/50 dark:border-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle, View CV, Download CV, GitHub CTA */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light mode"
              className="p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/40 transition-all duration-200 shadow-xs"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 transition-transform rotate-0 scale-100" />
              ) : (
                <Moon className="w-4 h-4 transition-transform rotate-0 scale-100" />
              )}
            </button>

            {/* Desktop View CV */}
            <a
              href="/Mahmudul_Hasan_Pulok_CV_Updated_Latest.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/40 transition-all duration-200 shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-blue-500" />
              <span>CV</span>
            </a>

            {/* Desktop Download CV Icon */}
            <a
              href="/Mahmudul_Hasan_Pulok_CV_Updated_Latest.pdf"
              download="Mahmudul_Hasan_Pulok_CV_Updated_Latest.pdf"
              title="Download CV"
              className="hidden lg:inline-flex items-center p-2 text-xs font-medium rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-200 shadow-xs"
            >
              <Download className="w-4 h-4 text-emerald-500" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Pulok1141"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 transition-all duration-200 shadow-xs"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-slate-200 dark:border-white/10 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* Mobile CV actions */}
              <div className="pt-2 grid grid-cols-2 gap-2">
                <a
                  href="/Mahmudul_Hasan_Pulok_CV_Updated_Latest.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200"
                >
                  <FileText className="w-3.5 h-3.5 text-blue-500" />
                  <span>View CV</span>
                </a>
                <a
                  href="/Mahmudul_Hasan_Pulok_CV_Updated_Latest.pdf"
                  download="Mahmudul_Hasan_Pulok_CV_Updated_Latest.pdf"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Download CV</span>
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="https://github.com/Pulok1141"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 w-full py-2.5 px-4 text-xs font-semibold rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                >
                  <span>View GitHub Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
