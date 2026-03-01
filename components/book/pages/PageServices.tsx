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

const blocks = [
  {
    k: "01",
    title: "Moderniser sans déséquilibrer les finances publiques",
    text:
      "Amélioration des recettes, optimisation des dépenses, réduction des fraudes, accélération des procédures.",
  },
  {
    k: "02",
    title: "Garantir la souveraineté et la sécurité des données stratégiques",
    text:
      "Architectures robustes, sécurisées et maîtrisées localement, afin de limiter la dépendance technologique extérieure.",
  },
  {
    k: "03",
    title: "Structurer des systèmes d’information souvent fragmentés",
    text:
      "La digitalisation impose une urbanisation progressive et cohérente du système d’information.",
  },
  {
    k: "04",
    title: "Renforcer la transparence et la traçabilité",
    text:
      "Suivi des flux, traçabilité des opérations, contrôle des processus, pilotage par la donnée.",
  },
];

const focus = [
  {
    org: "Accompagner le changement humain",
    detail: "Former, transférer, structurer : fondements d’une transformation durable.",
  },
];

export default function PageServices() {
  return (
    <section className="relative  h-dvh w-full overflow-hidden bg-[#f5f5f3] text-[#111]">
      <PaperNoise />
      <PaperVignette />

      <div className="relative z-10 mx-auto grid h-full w-full max-w-7xl grid-rows-[auto_1fr_auto] px-5 py-6 sm:px-6 md:px-12 md:py-8">

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
            style={{ fontSize: "clamp(26px, 3.2vw, 46px)", lineHeight: 1.05 }}
          >
            LES DÉFIS DE LA TRANSFORMATION PUBLIQUE EN AFRIQUE
          </h1>

          {/* Accent underline */}
          <div className="mt-3 h-[2px] w-12" style={{ backgroundColor: ACCENT }} />

          <p className="mt-4 max-w-3xl text-[12px] leading-relaxed text-black/60 md:text-[13px]">
            La transformation digitale des administrations publiques africaines ne constitue pas un simple
            projet technologique. Elle représente une réforme structurelle engageant la performance de l’État,
            la qualité du service au citoyen et la souveraineté numérique nationale.
          </p>

          <p className="mt-4 max-w-3xl text-[12px] leading-relaxed text-black/60 md:text-[13px]">
            Aujourd’hui, les États africains font face à une équation complexe :
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:items-start">
          {/* Left blocks */}
          <div className="md:col-span-8">
            <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
              <TOCBlock n="01" title={blocks[0].title} text={blocks[0].text} delay={0.0} />
              <TOCBlock n="02" title={blocks[1].title} text={blocks[1].text} delay={0.05} />
              <TOCBlock n="03" title={blocks[2].title} text={blocks[2].text} delay={0.1} />
              <TOCBlock n="04" title={blocks[3].title} text={blocks[3].text} delay={0.15} />
            </div>
          </div>

          {/* Right column */}
          <aside className="md:col-span-4">
            <div className="space-y-10">
              <div className="rounded-2xl border border-black/10 bg-white/65 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.02)_inset]">
                <div className="text-[11px] tracking-[0.26em]" style={{ color: ACCENT }}>
                  POINT CRITIQUE
                </div>

                <ul className="mt-4 space-y-2 text-[12px] leading-relaxed text-black/65 md:text-[13px]">
                  {focus.map((r) => (
                    <li key={r.org}>
                      — <span className="font-semibold text-black/75">{r.org}</span>{" "}
                      <span className="text-black/60">– {r.detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 h-px bg-black/10" />
                <div className="mt-4 flex items-center justify-between text-[10px] tracking-[0.26em] text-black/45">
                  <span>TRANSFORMATION</span>
                  <span style={{ color: ACCENT }}>→</span>
                </div>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white/65 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.02)_inset]">
                <div className="text-[11px] tracking-[0.26em]" style={{ color: ACCENT }}>
                  MESSAGE CLÉ
                </div>

                <p className="mt-4 text-[12px] leading-relaxed text-black/65 md:text-[13px]">
                  La digitalisation publique n’est durable que si elle est pensée comme une{" "}
                  <span className="font-semibold text-black/80">réforme structurante</span> :
                  gouvernance, sécurité, architecture cible et montée en compétences —{" "}
                  <span style={{ color: ACCENT }}>avant</span> l’outillage.
                </p>

                <div className="mt-6 h-px bg-black/10" />
                <div className="mt-4 flex items-center justify-between text-[10px] tracking-[0.26em] text-black/45">
                  <span>CAP</span>
                  <span style={{ color: ACCENT }}>→</span>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <BookFooter left="PROLABAFRIK · DÉFIS PUBLICS" right="(04) PROJET →" />
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
  const lines = text.split("\n");

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
          <div className="text-[13px] font-semibold text-black/85 md:text-[14px]">{title}</div>

          <div className="mt-2 max-w-sm space-y-2 text-[12px] leading-relaxed text-black/60 md:text-[13px]">
            {lines.map((l, i) => (
              <p key={i} className="whitespace-pre-line">
                {l}
              </p>
            ))}
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