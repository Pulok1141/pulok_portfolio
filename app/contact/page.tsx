import type { Metadata } from "next";
import Link from "next/link";
import { Contact } from "@/components/Contact";
import { MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Mahmudul Hasan Pulok",
  description:
    "Get in touch with Mahmudul Hasan Pulok. Connect via email, LinkedIn, or send a direct message for software engineering and machine learning opportunities.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb Header */}
      <div className="mb-4">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200 font-medium">Contact</span>
        </div>
      </div>

      <Contact />
    </div>
  );
}
