"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BrainCircuit, MonitorSmartphone, Layers, Compass, CheckCircle2 } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: BrainCircuit,
      title: "Data Science & ML Pipelines",
      description: "Extracting patterns from unstructured real-world datasets and tuning models via rigorous hyperparameter trials.",
    },
    {
      icon: MonitorSmartphone,
      title: "B2B Frontend Architecture",
      description: "Designing high-performance, user-centric interfaces with modern component design and fluid micro-interactions.",
    },
    {
      icon: Layers,
      title: "End-to-End System Delivery",
      description: "Building resilient solutions across the full lifecycle—from raw algorithmic modeling to polished user experiences.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-left mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900/60 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>01 // Background & Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
        </motion.div>

        {/* Narrative Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200/80 dark:border-white/10 p-6 sm:p-10 shadow-sm backdrop-blur-md"
        >
          {/* Subtle Decorative accent line */}
          <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 opacity-80 rounded-full" />

          <div className="space-y-6">
            <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <GraduationCap className="w-5 h-5 text-blue-500" />
              <span>Daffodil International University · Senior CSE Undergraduate</span>
            </div>

            {/* Exact Content Required */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
              I am a final-year Computer Science undergraduate at Daffodil International University with a distinct focus on engineering end-to-end solutions. My expertise spans the entire software lifecycle—from developing rigorous machine learning pipelines that extract and model unstructured data, to architecting responsive, user-centric frontend interfaces for enterprise B2B products. I am driven by the challenge of transforming complex, real-world problems into scalable, highly usable digital products. I don&apos;t just write code; I build robust systems that deliver tangible value and exceptional user experiences.
            </p>
          </div>
        </motion.div>

        {/* Three Pillar Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200/70 dark:border-white/5 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
