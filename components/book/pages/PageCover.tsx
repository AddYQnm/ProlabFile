"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const ACCENT = "#CF2B5B";
const EASE = [0.22, 1, 0.36, 1] as const;

export default function PageCover() {
  const imgRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });

  const yImg = useTransform(scrollYProgress, [0, 1], ["-2%", "2%"]);

  return (
    <section className="relative h-full w-full overflow-hidden bg-[#f5f5f3] text-black">
      <PaperNoise />
      <PaperVignette />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-4 py-5 sm:px-6 sm:py-6 md:px-12 md:py-8">
        {/* HEADER */}
        <header className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-6">
          <div className="min-w-0">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="inline-flex flex-wrap items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-2 sm:px-4 shadow-[0_0_0_1px_rgba(0,0,0,0.02)_inset]"
            >
              <span className="text-[10px] tracking-[0.30em] uppercase text-black/55 sm:text-[10px]">
                PAGE 01 — COUVERTURE
              </span>
              <span className="h-1 w-1 rounded-full" style={{ backgroundColor: `${ACCENT}CC` }} />
              <span className="text-[10px] tracking-[0.30em] uppercase" style={{ color: ACCENT }}>
                2026
              </span>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE }}
              className="mt-7 sm:mt-8"
            >
              <h1
                className="font-semibold leading-[0.92] tracking-[-0.03em]"
                style={{ fontSize: "clamp(40px, 9vw, 76px)" }}
              >
                PROLAB<span style={{ color: ACCENT }}>AFRIK</span>
              </h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.2, duration: 0.9, ease: EASE }}
                className="mt-4 h-[2px] w-20 sm:w-24"
                style={{ transformOrigin: "0% 50%", backgroundColor: ACCENT }}
              />

             {/* ✅ Sous-titre (plus esthétique) */}
<div className="mt-5 max-w-2xl">
  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] tracking-[0.28em] text-black/55 sm:text-[12px]">
    <span className="uppercase">Holding de transformation digitale</span>
    <span className="text-black/25">—</span>
    <span className="uppercase" style={{ color: ACCENT }}>
      Europe – Afrique
    </span>
  </div>

  <div className="mt-4 h-px w-16 bg-black/10" />

  <p className="mt-4 text-[13px] leading-relaxed text-black/60 sm:text-[14px]">
    <span className="italic">
      Structurer aujourd’hui les systèmes qui porteront l’Afrique de demain.
    </span>
  </p>
</div>
            </motion.div>

            {/* Pills tagline */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } },
              }}
              className="mt-7 flex flex-wrap items-center gap-2 sm:mt-10 sm:gap-3"
            >
              {["ENERGIE", "TRANSPORT", "SECURITE", "INDUSTRIE"].map((word, i) => (
                <motion.span
                  key={word}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                  }}
                  className="inline-flex items-center rounded-full border bg-white/70 px-4 py-2 text-[10px] tracking-[0.18em] text-black/70 shadow-[0_0_0_1px_rgba(0,0,0,0.02)_inset] sm:px-5 sm:text-[11px] sm:tracking-[0.26em]"
                  style={{
                    borderColor: i % 2 === 1 ? `${ACCENT}40` : "rgba(0,0,0,0.10)",
                  }}
                >
                  {word}
                  <span className="ml-2 h-1 w-1 rounded-full sm:ml-3" style={{ backgroundColor: `${ACCENT}CC` }} />
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="flex shrink-0 items-start justify-start md:justify-end"
          >
            <Image
              src="/prolabafrik-logo.svg"
              alt="ProlabAfrik"
              width={160}
              height={40}
              priority
              className="h-7 w-auto opacity-90 md:h-8"
            />
          </motion.div>
        </header>

        {/* HERO IMAGE */}
        <motion.div
          ref={imgRef}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
          className="relative mt-8 overflow-hidden rounded-2xl border border-black/10 bg-white/40 shadow-[0_0_0_1px_rgba(0,0,0,0.02)_inset] md:mt-auto"
        >
          <div className="relative h-[46vh] w-full sm:h-[48vh] md:h-[52vh]">
            <motion.div style={{ y: yImg }} className="absolute inset-0">
              <Image src="/afrik.png" alt="Couverture ProlabAfrik" fill className="object-cover" priority />
            </motion.div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0" />

            <div className="absolute left-3 top-3 rounded-full border border-white/25 bg-black/35 px-3 py-2 backdrop-blur-sm sm:left-4 sm:top-4 sm:px-4">
              <div className="text-[9px] tracking-[0.28em] text-white/85 sm:text-[10px] sm:tracking-[0.35em]">
                DOSSIER · B2B <span style={{ color: ACCENT }}>•</span> EDITION 2026
              </div>
            </div>
          </div>

          {/* Caption */}
          <div className="flex flex-col gap-2 bg-white/85 px-4 py-3 backdrop-blur-[2px] md:flex-row md:items-center md:justify-between">
            <div className="text-[10px] tracking-[0.28em] uppercase text-black/50 sm:tracking-[0.35em]">
              PROLABAFRIK · EUROPE – AFRIQUE
            </div>

            <div className="text-[12px] leading-[1.6] text-black/60">
              <span className="break-all sm:break-normal">contact@prolabafrik.com</span>
              <span className="text-black/35"> · </span>
              +33 6 81 68 09 13
              <span className="text-black/35"> · </span>
              +229 52 62 29 10
            </div>
          </div>
        </motion.div>
      </div>

      <PaperCorners />
    </section>
  );
}

/* ---------- paper treatment ---------- */

function PaperNoise() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.06] mix-blend-multiply">
      <div
        className="h-full w-full"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22/%3E%3C/filter%3E%3Crect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22 opacity=%220.55%22/%3E%3C/svg%3E')",
        }}
      />
    </div>
  );
}

function PaperVignette() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_10%,rgba(0,0,0,0.05),rgba(0,0,0,0)_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_100%,rgba(0,0,0,0.07),rgba(0,0,0,0)_55%)]" />
    </div>
  );
}

function PaperCorners() {
  return (
    <>
      <div className="pointer-events-none absolute left-6 top-6 z-20 text-black/20">*</div>
      <div className="pointer-events-none absolute right-6 bottom-6 z-20 text-black/20">—</div>
    </>
  );
}