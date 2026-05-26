"use client";

import { motion } from "framer-motion";

const pills = [
  {
    label: "Segurança jurídica total",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    label: "Dados 100% protegidos",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    label: "Sem custo até encontrar resultados",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function TrustFooter() {
  return (
    <div className="relative">
      {/* Divisor suave entre StatsStrip e TrustFooter */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px pointer-events-none bg-gradient-to-r from-transparent via-cyan/15 to-transparent"
      />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-1 flex items-center justify-center gap-12 px-15 py-10 flex-wrap md:gap-12 gap-4 md:px-15 px-6 md:py-10 py-8"
      >
      {pills.map((pill, i) => (
        <motion.div
          key={pill.label}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
          className="flex items-center gap-2.5 px-5 py-2.5 bg-cyan/5 border border-cyan/10 rounded-full text-sm text-white/50 font-medium"
        >
          <span className="text-cyan shrink-0">{pill.icon}</span>
          {pill.label}
        </motion.div>
      ))}
      </motion.div>
    </div>
  );
}
