"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const tintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const tint = tintRef.current;
    if (!video || !tint) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        video,
        { yPercent: -6, scale: 1.12 },
        {
          yPercent: 10,
          scale: 1.0,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        tint,
        { opacity: 0.78 },
        {
          opacity: 0.92,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div ref={tintRef} className="absolute inset-0 bg-navy will-change-[opacity]" />
    </div>
  );
}
