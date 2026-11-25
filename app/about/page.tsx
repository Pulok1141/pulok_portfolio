import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  BrainCircuit,
  MonitorSmartphone,
  Layers,
  Compass,
  ArrowRight,
  FileText,
  Download,
  Mail,
  Calendar,
  MapPin,
  CheckCircle2,
  Languages,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Me | Mahmudul Hasan Pulok",
  description:
    "Learn more about Mahmudul Hasan Pulok, Computer Science undergraduate at Daffodil International University, his engineering philosophy, education, and machine learning focus.",
};

const educationTimeline = [
  {
    degree: "BSc in Computer Science and Engineering",
    institution: "Daffodil International University",
    period: "2023 – Present (Final Year)",
    location: "Daffodil Smart City, Dhaka, Bangladesh",
    status: "Active / Final Year Undergraduate",
    highlight: "Focus on Applied Deep Learning, ML Optimization & Distributed Web Architecture",
  },
  {
    degree: "Higher Secondary School Certificate (HSC)",
    institution: "Savar Government College",
    period: "2021",
    location: "Savar, Dhaka",
    status: "Completed",
    highlight: "Science Division with focus on Mathematics & Physics",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Chapain New Model High School",
    period: "2019",
    location: "Dhaka, Bangladesh",
    status: "Completed",
    highlight: "Science Division",
  },
];

const competencies = [
  "End-to-End ML Pipeline Architecture",
  "Bayesian Hyperparameter Tuning (Optuna)",
  "Deep Learning & CNNs (Knowledge Distillation, Grad-CAM)",
  "Responsive Enterprise B2B Frontend Systems",
  "Low-Level Rasterization & Computational Graphics",
  "Mathematical Modeling & Algorithmic Problem Solving",
];

const softSkills = [
  "Professionalism & Ownership",
  "Strong Technical Communication",
  "Analytical & Critical Thinking",
  "Cross-functional Team Collaboration",
  "Continuous Learning & Adaptability",
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb & Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200 font-medium">About</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900/60 mb-3">
          <Compass className="w-3.5 h-3.5" />
          <span>Biography & Engineering Philosophy</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          About Me
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
          A deeper look into my background, technical philosophy, academic milestones at Daffodil International University, and software lifecycle principles.
        </p>
      </div>

      {/* Main Profile & Exact Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Left Column: Portrait Card */}
        <div className="lg:col-span-4 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200/80 dark:border-white/10 p-6 shadow-sm backdrop-blur-md text-center">
          <div className="relative mx-auto mb-5 w-36 h-36 sm:w-44 sm:h-44">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-cyan-400 blur-lg opacity-40 -z-10" />
            <div className="w-full h-full p-1.5 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 shadow-xl shadow-blue-500/20">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 border-2 border-white dark:border-slate-900">
                <Image
                  src="/profile.jpg"
                  alt="Mahmudul Hasan Pulok"
                  width={200}
                  height={200}
                  priority
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Mahmudul Hasan Pulok
          </h2>
          <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-1">
            CSE Student @ Daffodil International University
          </p>

          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/5 space-y-2 text-left text-xs text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span>Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
              <span>Final-Year Undergraduate</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Machine Learning & UI Engineering</span>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <a
              href="/Mahmudul_Hasan_Pulok_CV_Updated_Latest.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Full CV</span>
            </a>
            <a
              href="/Mahmudul_Hasan_Pulok_CV_Updated_Latest.pdf"
              download="Mahmudul_Hasan_Pulok_CV_Updated_Latest.pdf"
              className="inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-semibold border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-emerald-500" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Right Column: Statement & Engineering Philosophy */}
        <div className="lg:col-span-8 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200/80 dark:border-white/10 p-6 sm:p-8 shadow-sm backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 opacity-80 rounded-full" />

          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
            Professional Statement
          </h3>

          {/* Exact Narrative Injected */}
          <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed font-normal mb-6">
            I am a final-year Computer Science undergraduate at Daffodil International University with a distinct focus on engineering end-to-end solutions. My expertise spans the entire software lifecycle—from developing rigorous machine learning pipelines that extract and model unstructured data, to architecting responsive, user-centric frontend interfaces for enterprise B2B products. I am driven by the challenge of transforming complex, real-world problems into scalable, highly usable digital products. I don&apos;t just write code; I build robust systems that deliver tangible value and exceptional user experiences.
          </p>

          <div className="pt-6 border-t border-slate-100 dark:border-white/5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
              Core Engineering Competencies
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {competencies.map((c) => (
                <div key={c} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Education Timeline */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <GraduationCap className="w-5 h-5 text-blue-500" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Academic Background
          </h2>
        </div>

        <div className="space-y-4">
          {educationTimeline.map((item, index) => (
            <div
              key={item.degree}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {item.degree}
                </h3>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/60 w-fit">
                  {item.period}
                </span>
              </div>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {item.institution}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {item.location}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3 pt-3 border-t border-slate-100 dark:border-white/5">
                {item.highlight}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills & Languages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {/* Soft Skills */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 shadow-xs">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Professional Strengths</span>
          </h3>
          <ul className="space-y-2.5">
            {softSkills.map((s) => (
              <li key={s} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Languages & Communication */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 shadow-xs">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Languages className="w-4 h-4 text-blue-500" />
            <span>Languages</span>
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                <span>Bangla</span>
                <span>Native / Bilingual</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full w-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                <span>English</span>
                <span>Professional Working Proficiency</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div className="h-full bg-indigo-600 rounded-full w-[85%]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 border border-blue-500/20">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Ready to explore technical projects?
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            View deep learning frameworks, Optuna hyperparameter trials, and UI architecture.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/skills"
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            Skills Matrix
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-xs"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
