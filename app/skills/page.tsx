"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Search,
  Code,
  Layout,
  Database,
  Wrench,
  CheckCircle2,
  ArrowRight,
  SlidersHorizontal,
} from "lucide-react";
import { skillCategoriesData } from "@/data/portfolioData";

const categoryIcons: Record<string, React.ElementType> = {
  Core: Code,
  "Frontend & UI": Layout,
  "Data Science & ML": Database,
  "Tools & Graphics": Wrench,
};

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredCategories = skillCategoriesData
    .filter((cat) => (activeCategory === "All" ? true : cat.title === activeCategory))
    .map((cat) => ({
      ...cat,
      skills: cat.skills.filter((s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.skills.length > 0);

  const totalSkillsCount = skillCategoriesData.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb & Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200 font-medium">Skills</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900/60 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Technical Architecture & Capabilities</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Skills & Tech Stack
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
          An interactive matrix of programming languages, machine learning frameworks, reactive frontend systems, and graphics tooling used across my software development lifecycle.
        </p>
      </div>

      {/* Interactive Controls: Search & Category Tabs */}
      <div className="mb-10 space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {["All", "Core", "Frontend & UI", "Data Science & ML", "Tools & Graphics"].map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-blue-600 text-white shadow-xs"
                      : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
                  }`}
                >
                  {cat}
                </button>
              )
            )}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search a technology..."
              className="w-full pl-9 pr-3.5 py-1.5 text-xs sm:text-sm rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Skills Matrix Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <AnimatePresence>
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.title] || Code;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 p-6 sm:p-7 shadow-xs hover:border-slate-300 dark:hover:border-white/20 transition-all backdrop-blur-md"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                      {category.title}
                    </h2>
                  </div>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Pill-shaped badges */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border ${category.badgeStyle.bg} ${category.badgeStyle.border} ${category.badgeStyle.text} shadow-2xs transition-shadow cursor-default`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${category.badgeStyle.dot}`} />
                      <span>{skill.name}</span>
                      {skill.level && (
                        <span className="text-[10px] opacity-70 border-l border-current/20 pl-1.5">
                          {skill.level}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Cross-Link Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 border border-blue-500/20">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            See these skills applied in real projects
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Discover FlagShip, Automated Tour Budget Engine, AsyncGraph, and RoadPulse.
          </p>
        </div>

        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-xs"
        >
          <span>View Projects</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
