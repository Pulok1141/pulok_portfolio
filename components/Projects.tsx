"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FolderGit2,
  ArrowUpRight,
  TrendingUp,
  Network,
  Activity,
  Layers,
  Sparkles,
  ExternalLink,
} from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  stack: string[];
  highlight: string;
  icon: React.ElementType;
  gradient: string;
  githubUrl: string;
}

const projects: ProjectItem[] = [
  {
    id: "tour-budget-engine",
    title: "Automated Tour Budget Engine",
    subtitle: "ML-Driven Financial Extraction & Forecasting",
    category: "Machine Learning & NLP",
    description:
      "ML-based recommendation system extracting financial details from unstructured Bangla YouTube vlogs. Engineered a travel cost prediction framework optimized via 1,600 Optuna hyperparameter trials.",
    stack: ["Python", "Scikit-Learn", "LightGBM", "Optuna"],
    highlight: "1,600 Optuna Trials",
    icon: TrendingUp,
    gradient: "from-blue-500/10 to-indigo-500/10 text-blue-500",
    githubUrl: "https://github.com/Pulok1141",
  },
  {
    id: "async-graph",
    title: "AsyncGraph",
    subtitle: "Enterprise Voice-Note Knowledge Mapping",
    category: "Enterprise B2B / UI Systems",
    description:
      "Enterprise B2B prototype for asynchronous voice-note knowledge mapping. Led the UI/UX design and architected the frontend interactive layout.",
    stack: ["React", "TypeScript", "Vite", "Figma"],
    highlight: "UI/UX & Frontend Architecture",
    icon: Network,
    gradient: "from-purple-500/10 to-pink-500/10 text-purple-500",
    githubUrl: "https://github.com/Pulok1141",
  },
  {
    id: "road-pulse",
    title: "RoadPulse",
    subtitle: "Hardware-Accelerated Rasterization Simulation",
    category: "Computer Graphics & Algorithms",
    description:
      "Animated 2D traffic and environment simulation utilizing core rasterization algorithms, including Bresenham line drawing and double buffering.",
    stack: ["C", "OpenGL"],
    highlight: "Bresenham & Double Buffering",
    icon: Activity,
    gradient: "from-emerald-500/10 to-teal-500/10 text-emerald-500",
    githubUrl: "https://github.com/Pulok1141",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-left mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900/60 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03 // Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Engineered Projects
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            A selection of projects demonstrating rigorous machine learning optimization, production-level frontend architecture, and low-level algorithmic engineering.
          </p>
        </motion.div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-blue-500/40 dark:hover:border-blue-400/30 transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-md"
              >
                {/* Top bar: Category & Metric Highlight */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                      {project.highlight}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${project.gradient} border border-slate-200/60 dark:border-white/10 shadow-2xs group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Exact Project Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-4 font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Bottom bar: Tech Stack Pill Badges + Link */}
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-white/5">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100/90 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-xs font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors pt-1"
                  >
                    <span>View Repository Details</span>
                    <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
