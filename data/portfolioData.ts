import React from "react";
import {
  TrendingUp,
  Network,
  Activity,
  Sparkles,
  Cpu,
  BrainCircuit,
  Layout,
  Code,
  Database,
  Wrench,
  Layers,
} from "lucide-react";

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Deep Learning & AI" | "Machine Learning" | "Enterprise & Web" | "Graphics & Systems";
  description: string;
  longDescription?: string;
  stack: string[];
  highlight: string;
  iconName: "Sparkles" | "TrendingUp" | "Network" | "Activity";
  gradient: string;
  githubUrl: string;
  featured?: boolean;
  metrics?: { label: string; value: string }[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "flagship",
    title: "FlagShip",
    subtitle: "High-Performance Deep Vision & Knowledge Distillation Framework",
    category: "Deep Learning & AI",
    featured: true,
    description:
      "Flagship deep learning pipeline implementing Convolutional Neural Networks (CNNs), teacher-student knowledge distillation, and Grad-CAM visual interpretability for high-precision diagnostic and feature-attribution workflows.",
    longDescription:
      "FlagShip represents a unified multi-stage deep learning ecosystem designed to overcome heavy model deployment constraints. By implementing teacher-student knowledge distillation, complex high-capacity neural architectures are condensed into ultra-efficient student networks without sacrificing predictive fidelity. The framework features integrated Grad-CAM (Gradient-weighted Class Activation Mapping) for explainable AI, generating visual heatmaps of model decision-making.",
    stack: ["PyTorch", "Python", "Deep Learning (CNNs)", "Knowledge Distillation", "Grad-CAM", "Docker"],
    highlight: "Knowledge Distillation & Grad-CAM",
    iconName: "Sparkles",
    gradient: "from-amber-500/20 via-rose-500/20 to-purple-500/20 text-amber-500 dark:text-amber-400",
    githubUrl: "https://github.com/Pulok1141",
    metrics: [
      { label: "Architecture", value: "Teacher-Student CNN" },
      { label: "Interpretability", value: "Grad-CAM Heatmaps" },
      { label: "Deployment", value: "Containerized Docker" },
    ],
  },
  {
    id: "tour-budget-engine",
    title: "Automated Tour Budget Engine",
    subtitle: "ML-Driven Financial Extraction & Forecasting",
    category: "Machine Learning",
    description:
      "ML-based recommendation system extracting financial details from unstructured Bangla YouTube vlogs. Engineered a travel cost prediction framework optimized via 1,600 Optuna hyperparameter trials.",
    longDescription:
      "Engineered an automated data pipeline that parses unstructured multimedia content (Bangla travel vlogs) to extract itemized expenditure patterns. Implemented gradient boosting models (LightGBM, XGBoost, CatBoost) to forecast localized trip expenses, subjected to over 1,600 Bayesian hyperparameter optimization trials using Optuna.",
    stack: ["Python", "Scikit-Learn", "LightGBM", "Optuna", "XGBoost", "CatBoost"],
    highlight: "1,600 Optuna Trials",
    iconName: "TrendingUp",
    gradient: "from-blue-500/15 via-indigo-500/15 to-cyan-500/15 text-blue-500 dark:text-blue-400",
    githubUrl: "https://github.com/Pulok1141",
    metrics: [
      { label: "Optimization Trials", value: "1,600+" },
      { label: "Core Model", value: "Tuned LightGBM" },
      { label: "Data Source", value: "Bangla Video Vlogs" },
    ],
  },
  {
    id: "async-graph",
    title: "AsyncGraph",
    subtitle: "Enterprise Voice-Note Knowledge Mapping",
    category: "Enterprise & Web",
    description:
      "Enterprise B2B prototype for asynchronous voice-note knowledge mapping. Led the UI/UX design and architected the frontend interactive layout.",
    longDescription:
      "Architected the interactive user interface and reactive state engine for AsyncGraph, an enterprise B2B platform transforming asynchronous audio dispatches into connected visual knowledge nodes. Designed with high-performance canvas abstractions, accessible keyboard navigation, and design tokens built in Figma.",
    stack: ["React", "TypeScript", "Vite", "Figma", "Tailwind CSS"],
    highlight: "UI/UX & Frontend Architecture",
    iconName: "Network",
    gradient: "from-purple-500/15 via-pink-500/15 to-indigo-500/15 text-purple-500 dark:text-purple-400",
    githubUrl: "https://github.com/Pulok1141",
    metrics: [
      { label: "Role", value: "Lead UI/UX & Frontend" },
      { label: "Type", value: "Enterprise B2B SaaS" },
      { label: "Tooling", value: "React + TypeScript" },
    ],
  },
  {
    id: "road-pulse",
    title: "RoadPulse",
    subtitle: "Hardware-Accelerated Rasterization Simulation",
    category: "Graphics & Systems",
    description:
      "Animated 2D traffic and environment simulation utilizing core rasterization algorithms, including Bresenham line drawing and double buffering.",
    longDescription:
      "Built a real-time 2D computational simulation environment in pure C and OpenGL. Implemented primitive rasterization algorithms from foundational mathematics, including Bresenham's line and circle algorithms, double-buffered frame swaps, and deterministic collision physics.",
    stack: ["C", "OpenGL", "Algorithms", "Computer Graphics"],
    highlight: "Bresenham & Double Buffering",
    iconName: "Activity",
    gradient: "from-emerald-500/15 via-teal-500/15 to-cyan-500/15 text-emerald-500 dark:text-emerald-400",
    githubUrl: "https://github.com/Pulok1141",
    metrics: [
      { label: "Language", value: "Pure C" },
      { label: "Graphics API", value: "OpenGL" },
      { label: "Rendering", value: "Double Buffered" },
    ],
  },
];

export interface SkillCategory {
  title: string;
  description: string;
  badgeStyle: {
    bg: string;
    border: string;
    text: string;
    dot: string;
  };
  skills: { name: string; level?: string }[];
}

export const skillCategoriesData: SkillCategory[] = [
  {
    title: "Core",
    description: "Foundational programming languages powering low-level systems and scalable architectures.",
    badgeStyle: {
      bg: "bg-emerald-500/10 dark:bg-emerald-500/15",
      border: "border-emerald-500/30 dark:border-emerald-500/30",
      text: "text-emerald-800 dark:text-emerald-300",
      dot: "bg-emerald-500",
    },
    skills: [
      { name: "JavaScript", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Python", level: "Advanced" },
      { name: "C", level: "Proficient" },
      { name: "C++", level: "Proficient" },
    ],
  },
  {
    title: "Frontend & UI",
    description: "Modern frameworks and tooling for reactive, performant, and accessible interfaces.",
    badgeStyle: {
      bg: "bg-blue-500/10 dark:bg-blue-500/15",
      border: "border-blue-500/30 dark:border-blue-500/30",
      text: "text-blue-800 dark:text-blue-300",
      dot: "bg-blue-500",
    },
    skills: [
      { name: "React", level: "Advanced" },
      { name: "Vite", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Figma", level: "Proficient" },
    ],
  },
  {
    title: "Data Science & ML",
    description: "Predictive modeling, gradient boosting frameworks, hyperparameter tuning, and model explainability.",
    badgeStyle: {
      bg: "bg-purple-500/10 dark:bg-purple-500/15",
      border: "border-purple-500/30 dark:border-purple-500/30",
      text: "text-purple-800 dark:text-purple-300",
      dot: "bg-purple-500",
    },
    skills: [
      { name: "Scikit-Learn", level: "Advanced" },
      { name: "LightGBM", level: "Advanced" },
      { name: "XGBoost", level: "Advanced" },
      { name: "CatBoost", level: "Proficient" },
      { name: "Optuna", level: "Advanced" },
      { name: "SHAP", level: "Proficient" },
    ],
  },
  {
    title: "Tools & Graphics",
    description: "Version control workflows, collaborative tooling, and hardware-accelerated computer graphics.",
    badgeStyle: {
      bg: "bg-amber-500/10 dark:bg-amber-500/15",
      border: "border-amber-500/30 dark:border-amber-500/30",
      text: "text-amber-800 dark:text-amber-300",
      dot: "bg-amber-500",
    },
    skills: [
      { name: "Git", level: "Advanced" },
      { name: "GitHub", level: "Advanced" },
      { name: "OpenGL", level: "Proficient" },
    ],
  },
];
