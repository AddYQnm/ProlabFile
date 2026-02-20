"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookFooter, BookHeader } from "@/components/book/BookChrome";

/**
 * Accent couleur (rose ProlabAfrik)
 * Recommandé : définir aussi en CSS global
 * :root { --accent: #E94E77; }
 */
const ACCENT = "#E94E77";

const services = [
  {
    k: "01",
    title: "Solutions logicielles innovantes",
    text:
      "Nous développons des solutions logicielles personnalisées qui répondent aux défis uniques de votre secteur.",
  },
  {
    k: "02",
    title: "Révolution de l’IA",
    text:
      "Exploitez vos données pour analyser, prévoir et décider en temps réel. Optimisez vos processus et boostez vos performances.",
  },
  {
    k: "03",
    title: "Digitalisation de vos services",
    text:
      "Nous digitalisons vos processus pour optimiser vos opérations et accélérer votre croissance avec des solutions numériques innovantes.",
  },
];

export default function PageServices() {
  return (
    <section className="relative w-full bg-[#f5f5f3] text-[#111]">
      <PaperNoise />
      <PaperVignette />

      <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-6 md:px-12 md:py-14">
        <BookHeader page="PAGE 03" />

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 md:mt-14"
        >
          <h1
            className="font-semibold tracking-[-0.01em]"
            style={{ fontSize: "clamp(28px, 3.2vw, 46px)", lineHeight: 1.05 }}
          >
            SERVICES
          </h1>

          {/* Accent underline */}
          <div className="mt-3 h-[2px] w-12" style={{ backgroundColor: ACCENT }} />

          <p className="mt-4 max-w-2xl text-[12px] leading-relaxed text-black/60 md:text-[13px]">
            Une offre structurée pour vos besoins technologiques — pensée pour le contexte
            et orientée résultats.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:items-start">
          {/* TOC Blocks */}
          <div className="md:col-span-8">
            <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
              <TOCBlock n="01" title={services[0].title} text={services[0].text} delay={0.00} />
              <TOCBlock n="02" title={services[1].title} text={services[1].text} delay={0.05} />
              <TOCBlock n="03" title={services[2].title} text={services[2].text} delay={0.10} />
              <TOCBlock
                n="04"
                title="Contact / cadrage"
                text="Discutons de votre besoin et cadrons une solution adaptée à votre contexte."
                delay={0.15}
              />
            </div>
          </div>

          {/* Right column */}
          <aside className="md:col-span-4">
            <div className="space-y-10">
              <div className="rounded-2xl border border-black/10 bg-white/65 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.02)_inset]">
                <div
                  className="text-[11px] tracking-[0.26em]"
                  style={{ color: ACCENT }}
                >
                  LIVRABLES TYPIQUES
                </div>
                <ul className="mt-4 space-y-2 text-[12px] leading-relaxed text-black/65 md:text-[13px]">
                  <li>— Applications web & plateformes métiers</li>
                  <li>— Automatisation & digitalisation des processus</li>
                  <li>— Tableaux de bord, analyse & pilotage</li>
                </ul>

                <div className="mt-6 h-px bg-black/10" />
                <div className="mt-4 flex items-center justify-between text-[10px] tracking-[0.26em] text-black/45">
                  <span>CADRE</span>
                  <span style={{ color: ACCENT }}>→</span>
                </div>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white/65 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.02)_inset]">
                <div
                  className="text-[11px] tracking-[0.26em]"
                  style={{ color: ACCENT }}
                >
                  CONTACT
                </div>
                <p className="mt-4 text-[12px] leading-relaxed text-black/65 md:text-[13px]">
                  Discutons <span style={{ color: ACCENT }}>→</span> cadrage, objectifs, solution.
                </p>

                <div className="mt-4 space-y-2 text-[12px] text-black/70 md:text-[13px]">
                  <div className="flex flex-wrap gap-x-2">
                    <span className="font-semibold">Email :</span>
                    <span className="break-all">contact.tiegoquenum@gmail.com</span>
                  </div>
                  <div className="flex flex-wrap gap-x-2">
                    <span className="font-semibold">Téléphone :</span>
                    <span>07 55 84 73 19</span>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a
                    href="#download"
                    className="inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-[11px] tracking-[0.18em] text-white"
                    style={{ backgroundColor: ACCENT }}
                  >
                    Télécharger le dossier
                  </a>
                  <a
                    href="#download"
                    className="inline-flex w-full items-center justify-center rounded-xl border px-5 py-3 text-[11px] tracking-[0.18em]"
                    style={{ borderColor: ACCENT, color: ACCENT }}
                  >
                    Lancer une discussion
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <BookFooter left="PROLABAFRIK · SERVICES" right="(04) PROJET →" />
      </div>
    </section>
  );
}

function TOCBlock({
  n,
  title,
  text,
  delay,
}: {
  n: string;
  title: string;
  text: string;
  delay: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ delay, duration: 0.55, ease: "easeOut" }}
      className="border-t border-black/10 pt-6"
    >
      <div className="flex items-start gap-5">
        <div
          className="select-none text-[54px] font-semibold leading-none tracking-tight md:text-[66px]"
          style={{ color: `${ACCENT}55` }}
        >
          {n}
        </div>

        <div className="pt-2">
          <div className="text-[13px] font-semibold text-black/85 md:text-[14px]">
            {title}
          </div>
          <div className="mt-2 max-w-sm text-[12px] leading-relaxed text-black/60 md:text-[13px]">
            {text}
          </div>

          {/* Accent underline */}
          <div className="mt-5 h-px w-14" style={{ backgroundColor: `${ACCENT}55` }} />
        </div>
      </div>
    </motion.article>
  );
}

/* paper treatment */
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