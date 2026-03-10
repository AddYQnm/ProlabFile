"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookFooter, BookHeader } from "@/components/book/BookChrome";

const ACCENT = "#CF2B5B";

const OFFERS = [
  {
    n: "01",
    emoji: "1️⃣",
    title: "Digitalisation des processus",
    bullets: [
      "Audit et cartographie métier",
      "Optimisation des procédures",
      "Automatisation des flux",
      "Traçabilité des opérations",
    ],
    note: "Du papier au workflow.",
  },
  {
    n: "02",
    emoji: "2️⃣",
    title: "Système d’Information et de Gestion (SIG)",
    bullets: [
      "Marchés publics",
      "Transport & Logistique",
      "Energie & Infrastructure",
      "Sécurité & Défense",
    ],
    note: "Plateformes & applications métiers.",
  },
  {
    n: "03",
    emoji: "3️⃣",
    title: "Cas d’usage typiques",
    bullets: [
      "Gestion des RH & des carrières",
      "Gestion des sites de distribution de produits",
      "Digitalisation des procédures administratives",
    ],
    note: "Applications concrètes et métiers.",
  },
];

const USE_CASES = [
  "Gestion des RH & des carrières",
  "Gestion des sites de distribution de produits",
  "Digitalisation des procédures administratives",
  "Traçabilité et suivi des opérations",
];

export default function PageOffers() {
  return (
    <section className="relative min-h-screen w-full bg-[#f5f5f3] text-[#111]">
      <PaperNoise />
      <PaperVignette />

      <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-6 md:px-12 md:py-14">
        <BookHeader page="PAGE 07" />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 md:mt-14"
        >
          <div className="text-[11px] tracking-[0.26em] text-black/55">OFFRES</div>

          <h1
            className="mt-2 max-w-4xl font-semibold tracking-[-0.01em]"
            style={{ fontSize: "clamp(28px, 3.2vw, 46px)", lineHeight: 1.05 }}
          >
            NOS OFFRES STRUCTURÉES
          </h1>

          <div className="mt-3 h-[2px] w-12" style={{ backgroundColor: ACCENT }} />

          <p className="mt-4 max-w-3xl text-[12px] leading-relaxed text-black/60 md:text-[13px]">
            Nous concevons des plateformes métiers et des workflows digitaux pour structurer,
            automatiser et sécuriser les opérations des organisations publiques et privées.
          </p>
        </motion.div>

        <div className="mt-10 md:mt-14">
          <div className="grid gap-6 md:grid-cols-3">
            {OFFERS.map((o, i) => (
              <motion.article
                key={o.n}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{ delay: 0.06 * i, duration: 0.6, ease: "easeOut" }}
                className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/60 p-7 shadow-[0_0_0_1px_rgba(0,0,0,0.02)_inset]"
              >
                <div className="pointer-events-none absolute -right-4 -top-6 select-none text-[92px] font-semibold leading-none tracking-tight text-black/[0.06]">
                  {o.n}
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div className="text-[18px] leading-none">{o.emoji}</div>
                  <div className="text-[10px] tracking-[0.26em] text-black/45">
                    OFFRE <span style={{ color: ACCENT }}>{o.n}</span>
                  </div>
                </div>

                <h3 className="mt-5 text-[16px] font-semibold tracking-[-0.01em] text-black/85">
                  {o.title}
                </h3>

                <div
                  className="mt-5 h-px w-full"
                  style={{
                    backgroundImage: `linear-gradient(to right, transparent, ${ACCENT}55, transparent)`,
                  }}
                />

                <ul className="mt-5 space-y-2 text-[12px] leading-relaxed text-black/65 md:text-[13px]">
                  {o.bullets.map((b) => (
                    <li key={b}>— {b}</li>
                  ))}
                </ul>

                <div className="mt-6 h-px bg-black/10" />

                <div className="mt-4 flex items-center justify-between text-[10px] tracking-[0.26em] text-black/45">
                  <span className="truncate">{o.note}</span>
                  <span style={{ color: ACCENT }}>→</span>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-black/10 bg-white/45 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.02)_inset]">
            <div className="grid gap-6 md:grid-cols-12 md:items-center">
              <div className="md:col-span-4">
                <div className="text-[11px] tracking-[0.26em]" style={{ color: ACCENT }}>
                  LECTURE RAPIDE
                </div>
                <div className="mt-3 text-[12px] leading-relaxed text-black/65 md:text-[13px]">
                  Une approche en trois niveaux : digitaliser les processus, déployer un SIG
                  sectoriel, puis couvrir les cas d’usage les plus critiques.
                </div>
              </div>

              <div className="md:col-span-8">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {USE_CASES.map((item, index) => (
                    <MiniPill
                      key={item}
                      k={`0${index + 1}`}
                      v={item}
                    />
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between text-[10px] tracking-[0.26em] text-black/45">
                  <span>SECTEURS ET USAGES COMBINABLES</span>
                  <span style={{ color: ACCENT }}>→</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BookFooter left="PROLABAFRIK · OFFRES" right="(08) CAS D’USAGE →" />
      </div>

      <PaperCorners />
    </section>
  );
}

function MiniPill({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/60 px-4 py-3">
      <div className="flex items-center justify-between gap-3">
        <span className="text-[10px] tracking-[0.26em] text-black/45">{k}</span>
        <span className="text-[10px] tracking-[0.26em]" style={{ color: ACCENT }}>
          →
        </span>
      </div>
      <div className="mt-2 text-[12px] leading-relaxed text-black/70">{v}</div>
    </div>
  );
}

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
