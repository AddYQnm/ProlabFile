"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ACCENT = "#E94E77";

export default function PageAbout() {
  return (
    <section className="relative h-screen w-full bg-[#f5f5f3] text-[#111]">
      <PaperNoise />
      <PaperVignette />

      <div className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-6 md:px-12 md:py-14">
        {/* Running header */}
        <div className="flex items-center justify-between gap-4 text-[10px] tracking-[0.26em] text-black/45 md:text-[11px]">
          <div className="min-w-0 truncate">
            PROLABAFRIK{" "}
            <span className="font-semibold" style={{ color: ACCENT }}>
              —
            </span>{" "}
            DOSSIER
          </div>
          <div className="hidden sm:block">2026</div>
          <div className="shrink-0">PAGE 02</div>
        </div>

        <div className="mt-4 h-px bg-black/10" />

        {/* Title block */}
        <div className="mt-8 md:mt-14">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-semibold tracking-[-0.01em]"
            style={{ fontSize: "clamp(28px, 3.2vw, 46px)", lineHeight: 1.05 }}
          >
            MANIFESTE
          </motion.h1>

          <div className="mt-3 h-[2px] w-12" style={{ backgroundColor: ACCENT }} />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ delay: 0.08, duration: 0.6, ease: "easeOut" }}
            className="mt-4 max-w-xl text-[12px] leading-relaxed text-black/60 md:text-[13px]"
          >
            Digitaliser l’Afrique avec méthode, exigence et impact.
          </motion.p>
        </div>

        {/* Content */}
        <div className="mt-8 grid gap-8 md:mt-14 md:grid-cols-12 md:items-start md:gap-10">
          {/* NOTES */}
          <motion.aside
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="md:col-span-3"
          >
            <div className="space-y-7 md:space-y-9">
              <Note
                title="PRINCIPE"
                text="La transformation digitale en Afrique ne peut pas être une copie des modèles européens."
                accent={ACCENT}
              />

              <Note
                title="RÉALITÉS"
                text="Infrastructures hétérogènes, contraintes budgétaires, gouvernance publique, enjeux de souveraineté."
                accent={ACCENT}
              />

              <div>
                <div className="text-[11px] tracking-[0.26em]" style={{ color: ACCENT }}>
                  PILIERS
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Chip accent={ACCENT}>Méthode</Chip>
                  <Chip accent={ACCENT}>Exigence</Chip>
                  <Chip accent={ACCENT}>Impact</Chip>
                  <Chip accent={ACCENT}>Adaptation locale</Chip>
                </div>

                <div className="mt-6 h-px bg-black/10" />
                <div className="mt-4 flex items-center justify-between text-[10px] tracking-[0.26em] text-black/45">
                  <span>ANGLE</span>
                  <span className="text-black/60">Vision</span>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* MAIN */}
          <motion.main
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="md:col-span-6"
          >
            <div className="rounded-2xl border border-black/10 bg-white/60 p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.02)_inset] sm:p-7">
              <div className="flex items-center justify-between">
                <div className="text-[11px] tracking-[0.26em]" style={{ color: ACCENT }}>
                  MANIFESTE
                </div>
                <span className="text-[10px] tracking-[0.26em] text-black/35">SECTION</span>
              </div>

              <div className="mt-5 space-y-4 text-[12px] leading-[1.8] text-black/70 md:mt-6 md:text-[13px]">
                <p>
                  La transformation digitale en Afrique ne peut pas être une copie des modèles européens.
                </p>
                <p>
                  Elle doit être adaptée aux réalités locales : infrastructures hétérogènes, contraintes
                  budgétaires, gouvernance publique, enjeux de souveraineté.
                </p>
                <p>
                  Prolab Afrik est née de cette conviction.
                </p>
              </div>

              <div
                className="mt-7 h-px md:mt-8"
                style={{
                  backgroundImage: `linear-gradient(to right, transparent, ${ACCENT}55, transparent)`,
                }}
              />

              <div className="mt-6 grid gap-4 md:grid-cols-12 md:items-start">
                <div className="md:col-span-4">
                  <div className="text-[10px] tracking-[0.26em]" style={{ color: ACCENT }}>
                    PULL QUOTE
                  </div>
                </div>
                <div className="md:col-span-8">
                  <p
                    className="pl-4 text-[14px] leading-relaxed text-black/75 md:text-[15px]"
                    style={{ borderLeft: `2px solid ${ACCENT}` }}
                  >
                    “Digitaliser l’Afrique avec méthode, exigence et impact.”
                  </p>
                </div>
              </div>

              <div className="mt-7 h-px bg-black/10 md:mt-8" />

              <div className="mt-6">
                <div className="text-[11px] tracking-[0.26em]" style={{ color: ACCENT }}>
                  CONVICTION
                </div>
                <p className="mt-3 text-[12px] leading-relaxed text-black/70 md:text-[13px]">
                  Construire des solutions utiles, robustes et adaptées — en tenant compte des contraintes
                  terrain et des exigences de performance, de gouvernance et de souveraineté.
                </p>

                <div className="mt-6 flex items-center justify-between text-[10px] tracking-[0.26em] text-black/45">
                  <span>PROLABAFRIK</span>
                  <span style={{ color: ACCENT }}>→</span>
                </div>
              </div>
            </div>
          </motion.main>

          {/* IMAGE */}
          <motion.aside
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="md:col-span-3"
          >
            <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.02)_inset]">
              <div className="relative aspect-[16/9] md:aspect-[3/4]">
                <Image src="/pp.png" alt="Illustration ProlabAfrik" fill className="object-cover" />
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent p-4">
                <div className="text-[10px] tracking-[0.26em] text-white/85">
                  PROLABAFRIK · <span style={{ color: ACCENT }}>MANIFESTE</span>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-black/10 bg-white/70 p-5">
              <div className="flex items-center justify-between">
                <div className="text-[10px] tracking-[0.26em]" style={{ color: ACCENT }}>
                  CAP
                </div>
                <span className="text-[10px] tracking-[0.26em] text-black/35">B2B</span>
              </div>
              <div className="mt-4 space-y-3 text-[12px] text-black/70">
                <Row k="Approche" v="Terrain" />
                <Row k="Exécution" v="Méthodique" />
                <Row k="Résultat" v="Mesurable" />
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Footer */}
        <div className="mt-10 h-px bg-black/10 md:mt-12" />
        <footer className="mt-4 flex items-center justify-between text-[11px] tracking-[0.24em] text-black/50">
          <span className="min-w-0 truncate">SECTION SUIVANTE : SERVICES</span>
          <span style={{ color: ACCENT }}>→</span>
        </footer>
      </div>

      <PaperCorners />
    </section>
  );
}

/* ---------- atoms ---------- */

function Note({ title, text, accent }: { title: string; text: string; accent: string }) {
  return (
    <div>
      <div className="text-[11px] tracking-[0.26em]" style={{ color: accent }}>
        {title}
      </div>
      <p className="mt-3 text-[12px] leading-relaxed text-black/65 md:text-[13px]">{text}</p>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[10px] tracking-[0.26em] text-black/45">{k}</span>
      <span className="text-[12px] text-black/70">{v}</span>
    </div>
  );
}

function Chip({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <span
      className="rounded-full border px-3 py-1 text-[11px] tracking-[0.18em]"
      style={{
        borderColor: `${accent}4D`,
        backgroundColor: `${accent}0D`,
        color: accent,
      }}
    >
      {children}
    </span>
  );
}

/* ---------- paper treatment ---------- */

function PaperNoise() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply">
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
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_10%,rgba(0,0,0,0.05),rgba(0,0,0,0)_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_100%,rgba(0,0,0,0.07),rgba(0,0,0,0)_55%)]" />
    </div>
  );
}

function PaperCorners() {
  return (
    <>
      <div className="pointer-events-none absolute left-6 top-6 text-black/20">*</div>
      <div className="pointer-events-none absolute right-6 bottom-6 text-black/20">—</div>
    </>
  );
}