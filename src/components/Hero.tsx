"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative z-1 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-[140px] pb-0 md:px-10 overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" , delay: 0.2 }}
        className="font-heading text-[clamp(2.6rem,5.5vw,4.2rem)] font-extrabold leading-[1.09] tracking-[-1.0px] max-w-[1200px] mb-7">
          <span>Pare de </span><span className=" text-cyan relative"> perder </span>tempo manipulando<span className=" text-cyan relative"> dados tributários. </span>
          <span className="text-white relative"> </span> <span className="text-cyan relative"></span>
          <span className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-[60%] h-[3px] bg-gradient-to-r from-transparent via-cyan to-transparent opacity-35 rounded-sm"/>
      </motion.h1>

      <motion.p
        initial={{ opacity:0,y:28}}
        animate={{ opacity:1,y:0}}
        transition={{duration:0.7, ease:"easeOut", delay:0.2}}
        className="text-lg leading-[1.8] text-white/60 max-w-[900px] mb-12">
        Com o <b>LaraTAX</b> recuperamos créditos tributários, blindamos sua operação e transformamos
        a carga fiscal em vantagem competitiva — com tecnologia exclusiva e
        segurança jurídica total.
        </motion.p>

        <motion.div
        initial={{ opacity:0,y:28}}
        animate={{ opacity:1,y:0}}
        transition={{duration:0.7, ease:"easeOut", delay:0.3}}
        className="flex flex-col items-center gap-4">
      <a href="https://calendar.app.google/84Nb6kwvqFCfgL8NA" className="group relative inline-flex items-center gap-3 px-12 py-4.5 bg-cyan text-navy font-heading font-bold text-[1.05rem] tracking-[0.3px] rounded-[14px] overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(53,185,215,0.35),0_0_0_1px_rgba(53,185,215,0.2)]">
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600 ease-in-out"/>
        <span className="relative">Agendar demonstração</span>
          <svg className="relative w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round">
            <line x1={5} y1={12} x2={19} y2={12}/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
      </a>

      <span className="text-[0.78rem] text-white/35 flex items-center gap-1.5">
        <svg className="text-cyan opacity-60" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
          Sem compromisso · Resultados em até 72h
      </span>
        </motion.div>
    </section>
  );
}