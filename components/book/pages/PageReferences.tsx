/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useSpring,
} from "framer-motion";

const ACCENT = "#CF2B5B";

type RefItem = {
  id: string;
  name: string;
  detail: string;
  tag?: string;
};

/** ✅ Données (issues du PDF client / adaptées en version “dossier”) */
const EUROPE: RefItem[] = [
  {
    id: "bpce",
    name: "Groupe BPCE",
    detail:
      "Direction IT Monétique : modernisation des flux bancaires et infrastructures de paiement.",
    tag: "Banque",
  },
  {
    id: "socotec",
    name: "SOCOTEC",
    detail:
      "Intégration IT post-acquisition internationale (M&A) et coordination des intégrations.",
    tag: "Industrie",
  },
  {
    id: "bdf",
    name: "Banque de France",
    detail:
      "Projets structurants : interconnexion bancaire nationale & sécurisation des flux.",
    tag: "Institution",
  },
  {
    id: "engie",
    name: "ENGIE",
    detail: "Digitalisation & infrastructures critiques.",
    tag: "Énergie",
  },
];

const AFRIQUE: RefItem[] = [
  {
    id: "hp-gabon",
    name: "HP Services (Gabon)",
    detail:
      "Digitalisation des processus de contrôle conformité des transporteurs de produits pétroliers.",
    tag: "Transport",
  },
  {
    id: "as-logistics",
    name: "AS-LOGISTICS (Niger)",
    detail:
      "Digitalisation des activités de transport de marchandises à l’international.",
    tag: "Logistique",
  },
  {
    id: "consulaire",
    name: "Service consulaire (Gabon–Bénin)",
    detail:
      "Digitalisation de la gestion des accès aux ressources consulaires.",
    tag: "Public",
  },
  {
    id: "municipaux",
    name: "Services municipaux (Bénin)",
    detail:
      "Digitalisation des activités de contrôle des marchandises.",
    tag: "Collectivités",
  },
];

const PARTENAIRES: RefItem[] = [
  {
    id: "p1",
    name: "Transport & logistique",
    detail: "AS Logistics (Niger), HP Services (Gabon).",
    tag: "Secteur",
  },
  {
    id: "p2",
    name: "Institutions consulaires",
    detail: "Projets Gabon–Bénin.",
    tag: "Institution",
  },
  {
    id: "p3",
    name: "Collectivités & services publics",
    detail: "Services municipaux (Bénin).",
    tag: "Public",
  },
  {
    id: "p4",
    name: "Ingénierie & BTP",
    detail: "Partenariats sectoriels (selon projets).",
    tag: "Industrie",
  },
];

type TabKey = "europe" | "afrique" | "partenaires";

export default function PageReferences() {
  const [tab, setTab] = useState<TabKey>("europe");
  const [active, setActive] = useState<RefItem | null>(null);

  // progress bar (utile surtout mobile si scroll interne)
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const progress = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 28,
    mass: 0.2,
  });

  const data = useMemo(() => {
    if (tab === "europe") return EUROPE;
    if (tab === "afrique") return AFRIQUE;
    return PARTENAIRES;
  }, [tab]);

  return (
    <section className="relative h-full w-full bg-[#f5f5f3] text-[#111]">
      <PaperNoise />
      <Vignette />

      {/* Progress bar (ACCENT) */}
      <motion.div
        style={{ scaleX: progress }}
        className="origin-left absolute left-0 top-0 z-20 h-[2px] w-full"
      >
        <div className="h-full w-full" style={{ backgroundColor: `${ACCENT}B3` }} />
      </motion.div>

      {/* Mobile can scroll if needed */}
      <div
        ref={scrollRef}
        className="mx-auto h-full max-w-7xl overflow-y-auto md:overflow-hidden"
      >
        <div className="flex h-full flex-col px-6 py-6 md:px-12 md:py-8">
          {/* Running header */}
          <div className="flex items-center justify-between text-[10px] tracking-[0.24em] text-black/55 md:text-[11px]">
            <div className="truncate">PROLABAFRIK — DOSSIER</div>
            <div className="hidden sm:block">
              <span className="text-black/35">EDITION</span>{" "}
              <span style={{ color: ACCENT }}>2026</span>
            </div>
            <div>PAGE 06</div>
          </div>

          <div className="mt-3 h-px bg-black/10" />

          {/* Title */}
          <header className="mt-6">
            <div className="text-[11px] tracking-[0.28em] text-black/55">
              RÉFÉRENCES & PARTENAIRES
            </div>

            <div className="mt-2 grid gap-6 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="text-[28px] font-semibold leading-tight tracking-tight md:text-[40px]"
                >
                  Des preuves concrètes,{" "}
                  <span className="italic" style={{ color: ACCENT }}>
                    des références
                  </span>{" "}
                  solides.
                </motion.h1>

                <p className="mt-3 max-w-3xl text-[12px] leading-relaxed text-black/65">
                  Un parcours construit entre Europe et Afrique : conseil, gestion
                  de projets IT et transformation digitale. Une approche orientée
                  impact, qualité et exécution.
                </p>

                <div className="mt-6 h-[2px] w-12" style={{ backgroundColor: ACCENT }} />
              </div>

              <div className="md:col-span-4">
                <ExperienceCounter />
              </div>
            </div>
          </header>

          {/* Tabs */}
          <div className="mt-10 border-t border-black/10 pt-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="text-[11px] tracking-[0.24em] text-black/55">
                NAVIGATION
              </div>

              <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-2 py-2">
                <TabButton active={tab === "europe"} onClick={() => setTab("europe")}>
                  Europe
                </TabButton>
                <TabButton active={tab === "afrique"} onClick={() => setTab("afrique")}>
                  Afrique
                </TabButton>
                <TabButton
                  active={tab === "partenaires"}
                  onClick={() => setTab("partenaires")}
                >
                  Partenaires
                </TabButton>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="mt-8 grid flex-1 gap-10 md:grid-cols-12">
            {/* Left editorial column */}
            <aside className="md:col-span-4">
              <div className="border-t border-black/10 pt-6">
                <div className="text-[11px] tracking-[0.24em] text-black/55">
                  LECTURE RAPIDE
                </div>
                <p className="mt-4 text-[12px] leading-relaxed text-black/65">
                  Cliquez sur une référence pour afficher plus de détails. Naviguez
                  par zone (Europe/Afrique) ou par type de partenaires.
                </p>

                <div
                  className="mt-6 h-px w-full"
                  style={{
                    backgroundImage: `linear-gradient(to right, transparent, ${ACCENT}3D, transparent)`,
                  }}
                />
              </div>

              <div className="mt-8 border-t border-black/10 pt-6">
                <div className="text-[11px] tracking-[0.24em] text-black/55">
                  POSITIONNEMENT
                </div>
                <p className="mt-4 text-[12px] leading-relaxed text-black/65">
                  Une exécution rigoureuse et des solutions adaptées aux réalités
                  terrain.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Chip>Europe</Chip>
                  <Chip>Afrique</Chip>
                  <Chip>IT</Chip>
                  <Chip>Transformation</Chip>
                </div>
              </div>

              <div className="mt-10 flex items-center justify-between text-[11px] tracking-[0.22em] text-black/45">
                <span>SECTION</span>
                <span style={{ color: ACCENT }}>06</span>
              </div>
            </aside>

            {/* Grid */}
            <div className="md:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="grid gap-6 sm:grid-cols-2"
                >
                  {data.map((item, idx) => (
                    <RefCard
                      key={item.id}
                      item={item}
                      index={idx}
                      onOpen={() => setActive(item)}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>

              <div className="mt-10 flex items-center justify-between text-[11px] tracking-[0.22em] text-black/55">
                <span className="truncate">SECTION SUIVANTE : TÉLÉCHARGEMENT</span>
                <span style={{ color: ACCENT }}>→</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 h-px bg-black/10" />
          <footer className="mt-3 flex items-center justify-between text-[11px] tracking-[0.22em] text-black/55">
            <span className="truncate">PROLABAFRIK · RÉFÉRENCES</span>
            <span>
              (07) DOWNLOAD <span style={{ color: ACCENT }}>→</span>
            </span>
          </footer>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {active && (
            <Modal onClose={() => setActive(null)}>
              <motion.div
                layoutId={`card-${active.id}`}
                className="w-full max-w-2xl rounded-3xl border border-black/10 bg-white p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="text-[11px] tracking-[0.24em] text-black/55">
                      DÉTAIL
                    </div>
                    <h3 className="mt-2 text-[18px] font-semibold text-black/85">
                      {active.name} <span style={{ color: ACCENT }}>•</span>
                    </h3>
                  </div>

                  <button
                    onClick={() => setActive(null)}
                    className="rounded-full border px-3 py-2 text-[12px] transition hover:bg-black/5"
                    style={{
                      borderColor: `${ACCENT}33`,
                      backgroundColor: `${ACCENT}0D`,
                      color: "rgba(0,0,0,0.70)",
                    }}
                  >
                    Fermer
                  </button>
                </div>

                <div className="mt-5 text-[13px] leading-relaxed text-black/70">
                  {active.detail}
                </div>

                {active.tag && (
                  <div
                    className="mt-5 inline-flex rounded-full border px-3 py-1 text-[11px] tracking-[0.18em]"
                    style={{
                      borderColor: `${ACCENT}33`,
                      backgroundColor: `${ACCENT}0D`,
                      color: "rgba(0,0,0,0.70)",
                    }}
                  >
                    {active.tag}
                  </div>
                )}

                <div
                  className="mt-6 h-px w-full"
                  style={{
                    backgroundImage: `linear-gradient(to right, transparent, ${ACCENT}3D, transparent)`,
                  }}
                />
              </motion.div>
            </Modal>
          )}
        </AnimatePresence>
      </div>

      <CornerMarks />
    </section>
  );
}

/* ---------------- components ---------------- */

function RefCard({
  item,
  index,
  onOpen,
}: {
  item: RefItem;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.button
      layoutId={`card-${item.id}`}
      type="button"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.03 * index, duration: 0.45, ease: "easeOut" }}
      onClick={onOpen}
      className="group text-left border-t border-black/10 pt-5"
    >
      <div className="flex items-start gap-4">
        {/* big index */}
        <div className="min-w-[52px] text-[44px] font-semibold leading-none tracking-tight text-black/15">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="pt-1">
          {/* accent dot */}
          <div
            className="mb-3 h-2.5 w-2.5 rounded-full"
            style={{
              backgroundColor: `${ACCENT}CC`,
              boxShadow: `0 0 0 7px ${ACCENT}14`,
            }}
          />

          <div className="flex items-center gap-2">
            <div className="text-[13px] font-semibold text-black/85">{item.name}</div>
            <span style={{ color: ACCENT }} className="text-[13px]">
              •
            </span>
          </div>

          <div className="mt-2 text-[12px] leading-relaxed text-black/60 line-clamp-3">
            {item.detail}
          </div>

          <div
            className="mt-4 h-px w-12"
            style={{ backgroundColor: `${ACCENT}55` }}
          />

          <div className="mt-4 flex items-center justify-between text-[11px] tracking-[0.22em] text-black/45">
            <span>DÉTAIL</span>
            <span
              style={{ color: ACCENT }}
              className="transition group-hover:translate-x-1"
            >
              →
            </span>
          </div>
        </div>
      </div>
    </motion.button>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "relative rounded-full px-4 py-2 text-[11px] tracking-[0.22em] transition",
        active ? "text-black" : "text-black/55 hover:text-black/75",
      ].join(" ")}
      style={active ? { backgroundColor: `${ACCENT}14` } : undefined}
    >
      {children}
      {active && (
        <motion.span
          layoutId="tab-underline"
          className="absolute inset-x-3 -bottom-[1px] h-[2px]"
          style={{ backgroundColor: `${ACCENT}CC` }}
        />
      )}
    </button>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="rounded-full border bg-white px-3 py-1 text-[11px] tracking-[0.18em]"
      style={{
        borderColor: `${ACCENT}33`,
        backgroundColor: `${ACCENT}0D`,
        color: "rgba(0,0,0,0.70)",
      }}
    >
      {children}
    </span>
  );
}

function Modal({
  onClose,
  children,
}: {
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 grid place-items-center bg-black/35 px-6"
      onMouseDown={onClose}
      role="dialog"
      aria-modal="true"
    >
      <motion.div
        initial={{ y: 16, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 10, scale: 0.98 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function ExperienceCounter() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-25% 0px" });

  return (
    <div ref={ref} className="border-t border-black/10 pt-6">
      <div className="text-[11px] tracking-[0.24em] text-black/55">
        INDICATEUR
      </div>

      <div className="mt-3 flex items-baseline justify-between gap-4">
        <div className="text-[12px] leading-relaxed text-black/65">
          Expériences cumulées (Europe + Afrique)
        </div>

        <div className="text-right">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="text-[40px] font-semibold leading-none tracking-tight text-black/25"
          >
            30
          </motion.div>
          <div className="mt-1 text-[11px] tracking-[0.22em] text-black/55">
            ANS
          </div>
        </div>
      </div>

      <div className="mt-5 h-[2px] w-12" style={{ backgroundColor: `${ACCENT}B3` }} />
    </div>
  );
}

/* ---------------- visuals ---------------- */

function Vignette() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_20%,rgba(0,0,0,0.06),rgba(0,0,0,0)_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_100%,rgba(0,0,0,0.05),rgba(0,0,0,0)_55%)]" />
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

function CornerMarks() {
  return (
    <>
      <div className="absolute left-8 top-8 text-black/35">*</div>
      <div className="absolute right-8 bottom-8 text-black/20">—</div>
    </>
  );
}