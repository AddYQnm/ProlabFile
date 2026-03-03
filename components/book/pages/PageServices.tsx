"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookFooter, BookHeader } from "@/components/book/BookChrome";

const ACCENT = "#E94E77";

const blocks = [
  {
    k: "01",
    title: "Moderniser sans déséquilibrer les finances publiques",
    text: "Amélioration des recettes, optimisation des dépenses, réduction des fraudes, accélération des procédures.",
  },
  {
    k: "02",
    title: "Garantir la souveraineté et la sécurité des données stratégiques",
    text: "Architectures robustes, sécurisées et maîtrisées localement, afin de limiter la dépendance technologique extérieure.",
  },
  {
    k: "03",
    title: "Structurer des systèmes d’information souvent fragmentés",
    text: "La digitalisation impose une urbanisation progressive et cohérente du système d’information.",
  },
  {
    k: "04",
    title: "Renforcer la transparence et la traçabilité",
    text: "Suivi des flux, traçabilité des opérations, contrôle des processus, pilotage par la donnée.",
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
    // ✅ svh = stable sur mobile (barres navigateur). dvh en fallback ok.
    <section className="pdf-page relative min-h-svh w-full overflow-hidden bg-[#f5f5f3] text-[#111]">
      <PaperNoise />
      <PaperVignette />

      {/* ✅ Header/footer fixes dans la grille, contenu central scrollable */}
      <div className="relative z-10 mx-auto grid min-h-svh w-full max-w-7xl grid-rows-[auto_minmax(0,1fr)_auto] gap-4 px-4 py-5 sm:px-6 md:px-12 md:py-8">
        {/* HEADER */}
        <div className="min-h-0">
          <BookHeader page="PAGE 03" />
        </div>

        {/* CONTENT */}
        <div className="min-h-0 overflow-auto pr-1 md:pr-2">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1
              className="font-semibold tracking-[-0.01em]"
              style={{ fontSize: "clamp(20px, 3.6vw, 40px)", lineHeight: 1.08 }}
            >
              LES DÉFIS DE LA TRANSFORMATION PUBLIQUE
            </h1>

            <div className="mt-3 h-[2px] w-12" style={{ backgroundColor: ACCENT }} />

            <p className="mt-3 max-w-3xl text-[12px] leading-relaxed text-black/60 sm:text-[13px]">
              La transformation digitale des administrations publiques africaines ne constitue pas un simple
              projet technologique. Elle représente une réforme structurelle engageant la performance de l’État,
              la qualité du service au citoyen et la souveraineté numérique nationale.
            </p>

            <p className="mt-2 max-w-3xl text-[12px] leading-relaxed text-black/60 sm:text-[13px]">
              Aujourd’hui, les États africains font face à une équation complexe :
            </p>
          </motion.div>

          {/* Body grid */}
          {/* ✅ Mobile: 1 colonne (blocks puis aside). Desktop: 12 colonnes */}
          <div className="mt-5 grid gap-6 md:grid-cols-12 md:items-start">
            {/* Left blocks */}
            <div className="md:col-span-8">
              {/* ✅ Mobile: 1 colonne, sm: 2 colonnes */}
              <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
                <TOCBlock n="01" title={blocks[0].title} text={blocks[0].text} delay={0.0} />
                <TOCBlock n="02" title={blocks[1].title} text={blocks[1].text} delay={0.05} />
                <TOCBlock n="03" title={blocks[2].title} text={blocks[2].text} delay={0.1} />
                <TOCBlock n="04" title={blocks[3].title} text={blocks[3].text} delay={0.15} />
              </div>
            </div>

            {/* Right column */}
            <aside className="md:col-span-4">
              <div className="space-y-5">
                <div className="rounded-2xl border border-black/10 bg-white/65 p-4 sm:p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.02)_inset]">
                  <div className="text-[11px] tracking-[0.26em]" style={{ color: ACCENT }}>
                    POINT CRITIQUE
                  </div>

                  <ul className="mt-3 space-y-2 text-[12px] leading-relaxed text-black/65 sm:text-[13px]">
                    {focus.map((r) => (
                      <li key={r.org}>
                        — <span className="font-semibold text-black/75">{r.org}</span>{" "}
                        <span className="text-black/60">– {r.detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 h-px bg-black/10" />
                  <div className="mt-3 flex items-center justify-between text-[10px] tracking-[0.26em] text-black/45">
                    <span>TRANSFORMATION</span>
                    <span style={{ color: ACCENT }}>→</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-black/10 bg-white/65 p-4 sm:p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.02)_inset]">
                  <div className="text-[11px] tracking-[0.26em]" style={{ color: ACCENT }}>
                    MESSAGE CLÉ
                  </div>

                  <p className="mt-3 text-[12px] leading-relaxed text-black/65 sm:text-[13px]">
                    La digitalisation publique n’est durable que si elle est pensée comme une{" "}
                    <span className="font-semibold text-black/80">réforme structurante</span> : gouvernance,
                    sécurité, architecture cible et montée en compétences —{" "}
                    <span style={{ color: ACCENT }}>avant</span> l’outillage.
                  </p>

                  <div className="mt-5 h-px bg-black/10" />
                  <div className="mt-3 flex items-center justify-between text-[10px] tracking-[0.26em] text-black/45">
                    <span>CAP</span>
                    <span style={{ color: ACCENT }}>→</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* FOOTER */}
        <div className="min-h-0">
          <BookFooter left="PROLABAFRIK · DÉFIS PUBLICS" right="(04) PROJET →" />
        </div>
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
      className="border-t border-black/10 pt-4"
    >
      <div className="flex items-start gap-3 sm:gap-4">
        {/* ✅ le chiffre ne doit pas “exploser” en mobile */}
        <div
          className="select-none font-semibold leading-none tracking-tight"
          style={{
            color: `${ACCENT}55`,
            fontSize: "clamp(34px, 6vw, 56px)",
          }}
        >
          {n}
        </div>

        <div className="pt-1">
          <div className="text-[13px] font-semibold text-black/85 sm:text-[14px]">{title}</div>

          <div className="mt-2 max-w-sm text-[12px] leading-relaxed text-black/60 sm:text-[13px]">
            {text}
          </div>

          <div className="mt-4 h-px w-14" style={{ backgroundColor: `${ACCENT}55` }} />
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