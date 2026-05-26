"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Stat {
  value: number;
  prefix: string;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 200, prefix: "+R$", suffix: "M", label: "Recuperados\n para clientes" },
  { value: 450, prefix: "", suffix: "+", label: "Empresas \n atendidas" },
  { value: 98, prefix: "", suffix: "%", label: "Taxa de \n aproveitamento" },
];

function AnimatedNumber({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let current = 0;
    let target = 0;
    let raf = 0;

    const tick = () => {
      const diff = target - current;
      current += diff * 0.15;

      if (Math.abs(diff) < 0.05) {
        current = target;
        setDisplay(Math.round(current));
        raf = 0;
        return;
      }

      setDisplay(Math.round(current));
      raf = requestAnimationFrame(tick);
    };

    const setTarget = (t: number) => {
      target = t;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 150%",
      end: "max",
      invalidateOnRefresh: true,
      onUpdate: (self) => setTarget(value * self.progress),
      onLeave: () => setTarget(value),
    });

    const handleScroll = () => {
      const max =
        (document.scrollingElement?.scrollHeight ?? document.documentElement.scrollHeight) -
        window.innerHeight;
      if (window.scrollY >= max - 2) setTarget(value);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      trigger.kill();
      window.removeEventListener("scroll", handleScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <div ref={ref} className="font-heading text-[2.2rem] font-extrabold text-cyan tracking-tight mb-2 tabular-nums">
      {`${prefix}${display}${suffix}`}
    </div>
  );
}

export default function StatsStrip() {
  return (
    <section className="relative">

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-1 flex flex-col md:flex-row items-stretch justify-center max-w-[900px] mx-auto"
      >
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
          className="flex-1 py-10 px-9 text-center relative"
        >
          {/* Divider */}
          {i < stats.length - 1 && (
            <>
              {/* Vertical divider (desktop) */}
              <span className="hidden md:block absolute right-0 top-1/4 h-1/2 w-px bg-gradient-to-b from-transparent via-cyan/20 to-transparent" />
              {/* Horizontal divider (mobile) */}
              <span className="block md:hidden absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />
            </>
          )}

          <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
          <div className="text-[0.78rem] text-white/40 uppercase tracking-[1.5px] font-medium leading-[1.4] whitespace-pre-line">
            {stat.label}
          </div>
        </motion.div>
      ))}
      </motion.div>
    </section>
  );
}
