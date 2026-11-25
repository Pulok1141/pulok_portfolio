"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  Copy,
  ExternalLink,
  MessageSquare,
  Sparkles,
  PhoneCall,
  MapPin,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "job",
    inquiryType: "hiring",
    agreeConsent: true,
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        topic: "job",
        inquiryType: "hiring",
        agreeConsent: true,
        message: "",
      });
      setTimeout(() => setSubmitted(false), 5000);
    }, 900);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mahmudulhasanpulok33@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/40">
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
            <MessageSquare className="w-3.5 h-3.5" />
            <span>04 // Let&apos;s Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Have a project in mind, want to collaborate on machine learning research, or discuss engineering opportunities? Feel free to reach out directly or send a message.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Links Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                Direct Channels
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Connect directly through primary communication channels and verified profiles:
              </p>

              <div className="space-y-3.5">
                {/* Email Direct Link */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-white/5 group hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-blue-100/70 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Email Address
                      </p>
                      <a
                        href="mailto:mahmudulhasanpulok33@gmail.com"
                        className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 truncate block transition-colors"
                      >
                        mahmudulhasanpulok33@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 shrink-0 ml-2">
                    <button
                      onClick={handleCopyEmail}
                      title="Copy email to clipboard"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-700/60 transition-colors"
                    >
                      {copiedEmail ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <a
                      href="mailto:mahmudulhasanpulok33@gmail.com"
                      title="Open default email client"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200/60 dark:hover:bg-slate-700/60 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* LinkedIn Direct Link */}
                <a
                  href="https://www.linkedin.com/in/mhpulok/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-white/5 group hover:border-blue-500/30 transition-all hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sky-100/70 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 shrink-0">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        LinkedIn
                      </p>
                      <p className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        linkedin.com/in/mhpulok
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all" />
                </a>

                {/* GitHub Direct Link */}
                <a
                  href="https://github.com/Pulok1141"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-white/5 group hover:border-blue-500/30 transition-all hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-200/70 dark:bg-slate-800 text-slate-800 dark:text-slate-200 shrink-0">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        GitHub
                      </p>
                      <p className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        github.com/Pulok1141
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all" />
                </a>
              </div>
            </div>

            {/* University & Location Accent Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/10 shadow-xs flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-900 dark:text-white">
                  Daffodil Smart City, Dhaka, Bangladesh
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Department of Computer Science & Engineering
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200/80 dark:border-white/10 p-6 sm:p-8 shadow-sm backdrop-blur-md">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Fill out the form below and I will get back to you promptly.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center justify-center text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm">
                    Thank you for reaching out. I have received your message and will reply as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Dropdown Select Option */}
                  <div>
                    <label
                      htmlFor="topic"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Inquiry Subject (Dropdown)
                    </label>
                    <select
                      id="topic"
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all cursor-pointer"
                    >
                      <option value="job">Software Engineering / Machine Learning Role</option>
                      <option value="research">Deep Learning & Academic Research Collaboration</option>
                      <option value="consulting">B2B Frontend Architecture & Systems Consulting</option>
                      <option value="general">General Networking & Technical Discussion</option>
                    </select>
                  </div>

                  {/* Radio Buttons Option */}
                  <div>
                    <span className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Inquiry Category (Radio Selection)
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/60 dark:bg-slate-800/50 cursor-pointer text-xs text-slate-700 dark:text-slate-300 hover:border-blue-500/30">
                        <input
                          type="radio"
                          name="inquiryType"
                          value="hiring"
                          checked={formData.inquiryType === "hiring"}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="text-blue-600 focus:ring-blue-500"
                        />
                        <span>Hiring / Career</span>
                      </label>

                      <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/60 dark:bg-slate-800/50 cursor-pointer text-xs text-slate-700 dark:text-slate-300 hover:border-blue-500/30">
                        <input
                          type="radio"
                          name="inquiryType"
                          value="collaboration"
                          checked={formData.inquiryType === "collaboration"}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="text-blue-600 focus:ring-blue-500"
                        />
                        <span>Collaboration</span>
                      </label>

                      <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/60 dark:bg-slate-800/50 cursor-pointer text-xs text-slate-700 dark:text-slate-300 hover:border-blue-500/30">
                        <input
                          type="radio"
                          name="inquiryType"
                          value="general"
                          checked={formData.inquiryType === "general"}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="text-blue-600 focus:ring-blue-500"
                        />
                        <span>General Inquiry</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Mahmudul, I'd like to talk about..."
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all resize-none"
                    />
                  </div>

                  {/* Checkbox Option */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="agreeConsent"
                      checked={formData.agreeConsent}
                      onChange={(e) => setFormData({ ...formData, agreeConsent: e.target.checked })}
                      className="mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="agreeConsent"
                      className="text-xs text-slate-600 dark:text-slate-400 cursor-pointer"
                    >
                      I confirm that the details provided are accurate and consent to receive a response via email.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        <span>Sending Message...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
