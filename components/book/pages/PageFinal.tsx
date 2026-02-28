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
    bullets: ["Audit & cartographie métier", "Simplification", "Automatisation", "Traçabilité"],
    note: "Du papier au workflow.",
  },
  {
    n: "02",
    emoji: "2️⃣",
    title: "Solutions métiers sur mesure",
    bullets: ["Transport & logistique", "Administration & collectivités", "Services consulaires", "Énergie & infrastructures"],
    note: "Plateformes & applications métiers.",
  },
  {
    n: "03",
    emoji: "3️⃣",
    title: "Data & IA",
    bullets: ["Tableaux de bord décisionnels", "Analyse prédictive", "Pilotage en temps réel"],
    note: "Décision & pilotage en continu.",
  },
];

export default function PageOffers() {
  return (
    <section className="relative h-screen w-full bg-[#f5f5f3] text-[#111]">
      <PaperNoise />
      <PaperVignette />

      <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-6 md:px-12 md:py-14">
        <BookHeader page="PAGE 07" />

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 md:mt-14"
        >
          <div className="text-[11px] tracking-[0.26em] text-black/55">
            OFFRES
          </div>

          <h1
            className="mt-2 font-semibold tracking-[-0.01em]"
            style={{ fontSize: "clamp(28px, 3.2vw, 46px)", lineHeight: 1.05 }}
          >
            NOS OFFRES STRUCTURÉES
          </h1>

          <div className="mt-3 h-[2px] w-12" style={{ backgroundColor: ACCENT }} />

          <p className="mt-4 max-w-2xl text-[12px] leading-relaxed text-black/60 md:text-[13px]">
            Trois blocs simples, combinables, pensés pour livrer vite et proprement
            — sans complexifier inutilement.
          </p>
        </motion.div>

        {/* Content */}
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
                {/* big watermark */}
                <div className="pointer-events-none absolute -right-4 -top-6 select-none text-[92px] font-semibold leading-none tracking-tight text-black/[0.06]">
                  {o.n}
                </div>

                {/* header line */}
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

          {/* Bottom editorial strip */}
          <div className="mt-8 rounded-3xl border border-black/10 bg-white/45 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.02)_inset]">
            <div className="grid gap-6 md:grid-cols-12 md:items-center">
              <div className="md:col-span-4">
                <div className="text-[11px] tracking-[0.26em]" style={{ color: ACCENT }}>
                  LECTURE RAPIDE
                </div>
                <div className="mt-3 text-[12px] leading-relaxed text-black/65 md:text-[13px]">
                  Commencer par la digitalisation des processus, puis construire du sur-mesure,
                  et enfin piloter avec la data.
                </div>
              </div>

              <div className="md:col-span-8">
                <div className="grid gap-3 sm:grid-cols-3">
                  <MiniPill k="01" v="Process" />
                  <MiniPill k="02" v="Sur mesure" />
                  <MiniPill k="03" v="Data & IA" />
                </div>

                <div className="mt-4 flex items-center justify-between text-[10px] tracking-[0.26em] text-black/45">
                  <span>MODULES COMBINABLES</span>
                  <span style={{ color: ACCENT }}>→</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BookFooter left="PROLABAFRIK · OFFRES" right="(08) CONTACT →" />
      </div>

      <PaperCorners />
    </section>
  );
}

/* ---------- atoms ---------- */

function MiniPill({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/60 px-4 py-3">
      <div className="flex items-center justify-between">
        <span className="text-[10px] tracking-[0.26em] text-black/45">{k}</span>
        <span className="text-[10px] tracking-[0.26em]" style={{ color: ACCENT }}>
          →
        </span>
      </div>
      <div className="mt-2 text-[12px] text-black/70">{v}</div>
    </div>
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