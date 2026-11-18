"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Layout, Database, Wrench, Sparkles } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  description: string;
  badgeStyle: {
    bg: string;
    border: string;
    text: string;
    dot: string;
  };
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Core",
    icon: Code,
    description: "Foundational programming languages powering low-level systems and scalable architectures.",
    badgeStyle: {
      bg: "bg-emerald-500/10 dark:bg-emerald-500/15",
      border: "border-emerald-500/30 dark:border-emerald-500/30",
      text: "text-emerald-800 dark:text-emerald-300",
      dot: "bg-emerald-500",
    },
    skills: ["JavaScript", "TypeScript", "Python", "C", "C++"],
  },
  {
    title: "Frontend & UI",
    icon: Layout,
    description: "Modern frameworks and tooling for reactive, performant, and accessible interfaces.",
    badgeStyle: {
      bg: "bg-blue-500/10 dark:bg-blue-500/15",
      border: "border-blue-500/30 dark:border-blue-500/30",
      text: "text-blue-800 dark:text-blue-300",
      dot: "bg-blue-500",
    },
    skills: ["React", "Vite", "Next.js", "Tailwind CSS", "Figma"],
  },
  {
    title: "Data Science & ML",
    icon: Database,
    description: "Predictive modeling, gradient boosting frameworks, hyperparameter tuning, and model explainability.",
    badgeStyle: {
      bg: "bg-purple-500/10 dark:bg-purple-500/15",
      border: "border-purple-500/30 dark:border-purple-500/30",
      text: "text-purple-800 dark:text-purple-300",
      dot: "bg-purple-500",
    },
    skills: ["Scikit-Learn", "LightGBM", "XGBoost", "CatBoost", "Optuna", "SHAP"],
  },
  {
    title: "Tools & Graphics",
    icon: Wrench,
    description: "Version control workflows, collaborative tooling, and hardware-accelerated computer graphics.",
    badgeStyle: {
      bg: "bg-amber-500/10 dark:bg-amber-500/15",
      border: "border-amber-500/30 dark:border-amber-500/30",
      text: "text-amber-800 dark:text-amber-300",
      dot: "bg-amber-500",
    },
    skills: ["Git", "GitHub", "OpenGL"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-left mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900/60 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02 // Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Technical Skills
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            A comprehensive overview of programming languages, libraries, machine learning frameworks, and graphics toolsets I leverage to engineer end-to-end software solutions.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 p-6 sm:p-7 shadow-xs hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Pill-shaped badges */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border ${category.badgeStyle.bg} ${category.badgeStyle.border} ${category.badgeStyle.text} shadow-2xs transition-shadow cursor-default`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${category.badgeStyle.dot}`} />
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
