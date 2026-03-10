/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
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

const EUROPE: RefItem[] = [
  {
    id: "e-bpce",
    name: "Groupe BPCE",
    detail: "Direction IT Monétique : modernisation des flux bancaires.",
    tag: "Europe",
  },
  {
    id: "e-socotec",
    name: "SOCOTEC",
    detail: "Intégration IT post-acquisition internationale.",
    tag: "Europe",
  },
  {
    id: "e-bdf",
    name: "Banque de France",
    detail: "Interconnexion bancaire nationale & sécurisation des flux.",
    tag: "Europe",
  },
  {
    id: "e-engie",
    name: "ENGIE",
    detail: "Digitalisation & infrastructures critiques.",
    tag: "Europe",
  },
  {
    id: "e-total",
    name: "TotalEnergies",
    detail: "Transformation digitale & infrastructures énergétiques.",
    tag: "Europe",
  },
  {
    id: "e-volkswagen",
    name: "Volkswagen",
    detail: "Migration des infrastructures IT industrielles.",
    tag: "Europe",
  },
];

const AFRIQUE: RefItem[] = [
  {
    id: "a-hpservices",
    name: "HP Services",
    detail:
      "Digitalisation des processus de Contrôle Conformité des transporteurs de produits pétroliers.",
    tag: "Afrique",
  },
  {
    id: "a-aslogistics",
    name: "AS-LOGISTICS",
    detail:
      "Digitalisation des activités de transport de marchandises à l'international.",
    tag: "Afrique",
  },
  {
    id: "a-bajin",
    name: "BAJIN CONSULTING",
    detail: "Conseil en transformation IT & infrastructures.",
    tag: "Afrique",
  },
  {
    id: "a-ministere-finances",
    name: "MINISTÈRE DES FINANCES",
    detail: "Gestion des marchés publics.",
    tag: "Afrique",
  },
  {
    id: "a-gendarmerie",
    name: "SÉCURITÉ PUBLIQUE",
    detail: "Étude, cahier des charges.",
    tag: "Afrique",
  },
];

export default function PageReferences() {
  const [active, setActive] = useState<RefItem | null>(null);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const progress = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 28,
    mass: 0.2,
  });

  return (
    <section className="relative h-dvh w-full overflow-hidden bg-[#f5f5f3] text-[#111]">
      <PaperNoise />
      <Vignette />

      <motion.div
        style={{ scaleX: progress }}
        className="origin-left absolute left-0 top-0 z-20 h-[2px] w-full"
      >
        <div
          className="h-full w-full"
          style={{ backgroundColor: `${ACCENT}B3` }}
        />
      </motion.div>

      <div className="mx-auto grid h-dvh w-full max-w-7xl grid-rows-[auto_1fr_auto] px-6 py-6 md:px-12 md:py-8">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between text-[10px] tracking-[0.24em] text-black/55 md:text-[11px]">
            <div className="truncate">PROLABAFRIK — DOSSIER</div>
            <div className="hidden sm:block">
              <span className="text-black/35">EDITION</span>{" "}
              <span style={{ color: ACCENT }}>2026</span>
            </div>
            <div>PAGE 05</div>
          </div>

          <div className="mt-3 h-px bg-black/10" />

          <header className="mt-6">
            <div className="mt-2 grid gap-6 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="text-[28px] font-semibold leading-tight tracking-tight md:text-[40px]"
                >
                  Nos{" "}
                  <span className="italic" style={{ color: ACCENT }}>
                    références
                  </span>
                  .
                </motion.h1>

                <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-black/65">
                  Deux ancrages, une même exigence d’exécution. Nos références
                  se lisent ici en miroir : l’Europe d’un côté, l’Afrique de
                  l’autre, sur une seule et même page.
                </p>

                <div
                  className="mt-6 h-[2px] w-12"
                  style={{ backgroundColor: ACCENT }}
                />
              </div>

              <div className="md:col-span-4" />
            </div>
          </header>
        </div>

        {/* Scrollable content */}
        <div className="min-h-0">
          <div className="relative mt-8 h-full">
            <div
              ref={scrollRef}
              className="h-full overflow-y-auto no-scrollbar"
            >
              <div className="grid gap-10 md:grid-cols-2 md:gap-12">
                {/* EUROPE */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col"
                >
                  <div className="flex items-center justify-between border-t border-black/10 pt-5">
                    <div>
                      <h2 className="mt-2 text-[20px] font-semibold text-black/85">
                        Références européennes
                      </h2>
                    </div>

                    <div
                      className="rounded-full border px-3 py-1 text-[11px] tracking-[0.18em]"
                      style={{
                        borderColor: `${ACCENT}33`,
                        backgroundColor: `${ACCENT}0D`,
                        color: "rgba(0,0,0,0.70)",
                      }}
                    >
                      PROJETS PHARES
                    </div>
                  </div>

                  <p className="mt-4 max-w-md text-[12px] leading-relaxed text-black/60">
                    Standards élevés, gouvernance, modernisation des systèmes et
                    transformation des infrastructures critiques.
                  </p>

                  <div className="mt-6 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                    {EUROPE.map((item, idx) => (
                      <RefCard
                        key={item.id}
                        item={item}
                        index={idx}
                        onOpen={() => setActive(item)}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* AFRIQUE */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
                  className="flex flex-col"
                >
                  <div className="flex items-center justify-between border-t border-black/10 pt-5">
                    <div>
                      <h2 className="mt-2 text-[20px] font-semibold text-black/85">
                        Références africaines
                      </h2>
                    </div>

                    <div
                      className="rounded-full border px-3 py-1 text-[11px] tracking-[0.18em]"
                      style={{
                        borderColor: `${ACCENT}33`,
                        backgroundColor: `${ACCENT}0D`,
                        color: "rgba(0,0,0,0.70)",
                      }}
                    >
                      PROJETS PHARES
                    </div>
                  </div>

                  <p className="mt-4 max-w-md text-[12px] leading-relaxed text-black/60">
                    Réalité terrain, déploiement opérationnel, digitalisation
                    des flux métier et adaptation aux usages locaux.
                  </p>

                  <div className="mt-6 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                    {AFRIQUE.map((item, idx) => (
                      <RefCard
                        key={item.id}
                        item={item}
                        index={idx}
                        onOpen={() => setActive(item)}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            <ScrollArrows accent={ACCENT} targetRef={scrollRef} />
          </div>
        </div>

        {/* Footer */}
        <div>
          <div className="mt-6 h-px bg-black/10" />
          <footer className="mt-3 flex items-center justify-between text-[11px] tracking-[0.22em] text-black/55">
            <span className="truncate">PROLABAFRIK · EUROPE / AFRIQUE</span>
            <span>
              RÉFÉRENCES <span style={{ color: ACCENT }}>→</span>
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

function ScrollArrows({
  targetRef,
  accent,
}: {
  targetRef: React.RefObject<HTMLDivElement | null>;
  accent: string;
}) {
  const [canUp, setCanUp] = useState(false);
  const [canDown, setCanDown] = useState(false);

  const update = () => {
    const el = targetRef.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    setCanUp(scrollTop > 2);
    setCanDown(scrollTop + clientHeight < scrollHeight - 2);
  };

  useEffect(() => {
    update();
    const el = targetRef.current;
    if (!el) return;

    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [targetRef]);

  const scrollByAmount = (dir: "up" | "down") => {
    const el = targetRef.current;
    if (!el) return;
    const amount = Math.max(220, Math.floor(el.clientHeight * 0.35));
    el.scrollBy({
      top: dir === "down" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center">
      <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-2 py-2 shadow-sm backdrop-blur">
        <button
          type="button"
          aria-label="Scroll up"
          disabled={!canUp}
          onClick={() => scrollByAmount("up")}
          className={[
            "grid h-9 w-9 place-items-center rounded-full border text-xs transition",
            canUp
              ? "border-black/15 text-black/70 hover:bg-black/5 active:scale-[0.98]"
              : "cursor-not-allowed border-black/10 text-black/25",
          ].join(" ")}
          style={canUp ? { borderColor: `${accent}55` } : undefined}
        >
          ↑
        </button>

        <div className="h-6 w-px bg-black/10" />

        <button
          type="button"
          aria-label="Scroll down"
          disabled={!canDown}
          onClick={() => scrollByAmount("down")}
          className={[
            "grid h-9 w-9 place-items-center rounded-full border text-xs transition",
            canDown
              ? "border-black/15 text-black/70 hover:bg-black/5 active:scale-[0.98]"
              : "cursor-not-allowed border-black/10 text-black/25",
          ].join(" ")}
          style={canDown ? { borderColor: `${accent}55` } : undefined}
        >
          ↓
        </button>
      </div>
    </div>
  );
}

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
        <div className="min-w-[52px] text-[44px] font-semibold leading-none tracking-tight text-black/15">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="pt-1">
          <div
            className="mb-3 h-2.5 w-2.5 rounded-full"
            style={{
              backgroundColor: `${ACCENT}CC`,
              boxShadow: `0 0 0 7px ${ACCENT}14`,
            }}
          />

          <div className="flex items-center gap-2">
            <div className="text-[13px] font-semibold text-black/85">
              {item.name}
            </div>
            <span style={{ color: ACCENT }} className="text-[13px]">
              •
            </span>
            {item.tag && (
              <span className="text-[10px] uppercase tracking-[0.18em] text-black/45">
                {item.tag}
              </span>
            )}
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