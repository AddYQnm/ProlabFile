"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Accent couleur (rose du site).
 * Option 1 (recommandée) : définis --accent dans globals.css
 * :root { --accent: #E94E77; }
 *
 * Ici on fallback en dur via Tailwind arbitrary values.
 */
const ACCENT = "#E94E77";

export default function PageAbout() {
  return (
    <section className="relative w-full bg-[#f5f5f3] text-[#111]">
      <PaperNoise />
      <PaperVignette />

      <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-6 md:px-12 md:py-14">
        {/* Running header */}
        <div className="flex items-center justify-between gap-4 text-[10px] tracking-[0.26em] text-black/45 md:text-[11px]">
          <div className="min-w-0 truncate">
            PROLABAFRIK <span className="font-semibold" style={{ color: ACCENT }}>—</span> DOSSIER
          </div>
          <div className="hidden sm:block">2026</div>
          <div className="shrink-0">PAGE 02</div>
        </div>

        <div className="mt-4 h-px bg-black/10" />

        {/* Title block */}
        <div className="mt-10 md:mt-14">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-semibold tracking-[-0.01em]"
            style={{ fontSize: "clamp(28px, 3.2vw, 46px)", lineHeight: 1.05 }}
          >
            A PROPOS
          </motion.h1>

          {/* Accent underline (éditorial) */}
          <div className="mt-3 h-[2px] w-12" style={{ backgroundColor: ACCENT }} />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ delay: 0.08, duration: 0.6, ease: "easeOut" }}
            className="mt-4 max-w text-[12px] leading-relaxed text-black/60 md:text-[13px]"
          >
            À propos de ProlabAfrik et de ce dossier de présentation — un support B2B pensé
            pour être lu vite, compris immédiatement, et partagé sans friction.
          </motion.p>
        </div>

        {/* Content: mobile stack + desktop magazine grid */}
        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:items-start">
          {/* IMAGE — mobile first, desktop right */}
          <motion.aside
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="order-1 md:order-3 md:col-span-3"
          >
            <div className="relative overflow-hidden rounded border border-black/10 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.02)_inset]">
              {/* Mobile: 16:10 feel (moins haut) | Desktop: portrait */}
              <div className="relative aspect-[16/10] md:aspect-[3/4]">
                <Image
                  src="/pp.png"
                  alt="Illustration"
                  fill
                  className="object-cover "
                  priority
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>

              {/* Caption overlay + accent */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent p-4">
                <div className="text-[10px] tracking-[0.26em] text-white/85">
                  PROLABAFRIK · <span style={{ color: ACCENT }}>INNOVATION</span>
                </div>
              </div>
            </div>

            {/* Mini spec card */}
            <div className="mt-4 rounded border border-black/10 bg-white/70 p-5">
              <div className="flex items-center justify-between">
                <div className="text-[10px] tracking-[0.26em]" style={{ color: ACCENT }}>
                  FORMAT
                </div>
                <span className="text-[10px] tracking-[0.26em] text-black/35">B2B</span>
              </div>
              <div className="mt-4 space-y-3 text-[12px] text-black/70">
                <Row k="Lecture" v="Rapide" />
                <Row k="Sections" v="Courtes" />
                <Row k="Support" v="Partageable" />
              </div>
            </div>
          </motion.aside>

          {/* MAIN — mobile second, desktop middle */}
          <motion.main
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="order-2 md:order-2 md:col-span-6"
          >
            <div className="rounded border border-black/10 bg-white/60 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.02)_inset] sm:p-7">
              <div className="flex items-center justify-between">
                <div className="text-[11px] tracking-[0.26em]" style={{ color: ACCENT }}>
                  EDITORIAL
                </div>
                <span className="text-[10px] tracking-[0.26em] text-black/35">SECTION</span>
              </div>

              <div className="mt-6 space-y-5 text-[12px] leading-relaxed text-black/70 md:text-[13px]">
                <p>
                  ProlabAfrik accompagne les entreprises et organisations dans la conception
                  de solutions digitales innovantes, adaptées aux réalités locales et aux objectifs métiers.
                </p>
                <p>
                  Notre approche privilégie un cadrage clair, une conception structurée et un développement itératif.
                  L’objectif est de livrer un produit fiable, maintenable et évolutif.
                </p>
                <p>
                  Ce dossier reprend les informations essentielles du site afin de fournir un support simple,
                  partageable et immédiatement compréhensible lors des échanges commerciaux.
                </p>
              </div>

              {/* Accent separator (1 sur 3, comme en rapport) */}
              <div
                className="mt-8 h-px"
                style={{
                  backgroundImage: `linear-gradient(to right, transparent, ${ACCENT}55, transparent)`,
                }}
              />

              {/* Pull quote */}
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
                    “Un dossier pensé pour être lu vite, compris tout de suite, et partagé sans friction.”
                  </p>
                </div>
              </div>

              <div className="mt-8 h-px bg-black/10" />

              <div className="mt-6">
                <div className="text-[11px] tracking-[0.26em]" style={{ color: ACCENT }}>
                  POSITIONNEMENT
                </div>
                <p className="mt-3 text-[12px] leading-relaxed text-black/70 md:text-[13px]">
                  Solutions logicielles sur mesure · Digitalisation · IA & exploitation des données — au service
                  de la performance des organisations en Afrique.
                </p>

                <div className="mt-7 flex items-center justify-between text-[10px] tracking-[0.26em] text-black/45">
                  <span>PROLABAFRIK</span>
                  <span style={{ color: ACCENT }}>→</span>
                </div>
              </div>
            </div>
          </motion.main>

          {/* NOTES — mobile third, desktop left */}
          <motion.aside
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="order-3 md:order-1 md:col-span-3"
          >
            <div className="space-y-9">
              <Note
                title="THE EBOOK"
                text="Dossier digital B2B basé sur le site ProlabAfrik, structuré pour être partagé facilement (email, WhatsApp, rendez-vous)."
                accent={ACCENT}
              />
              <Note
                title="OBJECTIF"
                text="Présenter clairement l’offre, le positionnement et l’approche, dans un format lisible et professionnel."
                accent={ACCENT}
              />

              <div>
                <div className="text-[11px] tracking-[0.26em]" style={{ color: ACCENT }}>
                  MOTS-CLÉS
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Chip accent={ACCENT}>Sur mesure</Chip>
                  <Chip accent={ACCENT}>Afrique</Chip>
                  <Chip accent={ACCENT}>Digitalisation</Chip>
                  <Chip accent={ACCENT}>IA & données</Chip>
                </div>

                <div className="mt-7 h-px bg-black/10" />
                <div className="mt-4 flex items-center justify-between text-[10px] tracking-[0.26em] text-black/45">
                  <span>ANGLE</span>
                  <span className="text-black/60">Éditorial</span>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Footer */}
        <div className="mt-12 h-px bg-black/10" />
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
      className="rounded-full border bg-white px-3 py-1 text-[11px] tracking-[0.18em]"
      style={{
        borderColor: `${accent}4D`, // ~30%
        backgroundColor: `${accent}0D`, // ~5%
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