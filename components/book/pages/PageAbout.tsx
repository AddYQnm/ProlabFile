"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ACCENT = "#E94E77";

export default function PageAbout() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="relative h-dvh w-full overflow-hidden bg-[#f5f5f3] text-[#111]">
      <PaperNoise />
      <PaperVignette />

      <div className="mx-auto grid h-dvh w-full max-w-7xl grid-rows-[auto_1fr_auto] px-5 py-6 sm:px-6 md:px-12 md:py-10">
        {/* Header + Title */}
        <div>
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

          <div className="mt-6 md:mt-10">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-semibold tracking-[-0.01em]"
              style={{ fontSize: "clamp(26px, 3.0vw, 44px)", lineHeight: 1.05 }}
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
        </div>

        {/* Content (scrollable, scrollbar hidden, arrows) */}
        <div className="min-h-0">
          <div className="relative mt-7 h-full md:mt-10">
            <div ref={scrollRef} className="h-full overflow-y-auto pr-1 no-scrollbar">
              <div className="grid gap-7 md:grid-cols-12 md:items-start md:gap-10">
                {/* NOTES */}
                <motion.aside
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                  className="md:col-span-3"
                >
                  <div className="space-y-6 md:space-y-8">
                    <Note accent={ACCENT} title="NOTRE CONVICTION STRATÉGIQUE">
                      <p>
                        La transformation digitale en Afrique ne peut être une simple transposition des modèles
                        européens.
                      </p>
                      <p className="mt-3">
                        Elle doit être pensée à partir des réalités opérationnelles locales : maturité des
                        systèmes d’information, contraintes budgétaires, exigences réglementaires, capacités
                        humaines et enjeux de souveraineté numérique.
                      </p>
                      <p className="mt-3">
                        Digitaliser ne consiste pas à déployer un outil.
                        <br />
                        Digitaliser consiste à structurer durablement une organisation
                      </p>
                    </Note>

                    <Note accent={ACCENT} title="LES ENJEUX STRUCTURANTS">
                      <p>
                        Les organisations africaines évoluent dans un environnement spécifique qui impose rigueur
                        et discernement dans toute démarche de digitalisation.
                      </p>

                      <p className="mt-3">Parmi les principaux enjeux :</p>

                      <ul className="mt-3 space-y-2 pl-5 text-[12px] leading-relaxed text-black/65 md:text-[13px]">
                        <li className="list-disc">Infrastructures hétérogènes et instables</li>
                        <li className="list-disc">Processus métiers encore manuels</li>
                        <li className="list-disc">Faible interopérabilité des données</li>
                        <li className="list-disc">Exigences de traçabilité et de conformité</li>
                        <li className="list-disc">Risque de dépendance technologique externe</li>
                      </ul>

                      <p className="mt-3">
                        Dans ce contexte, la digitalisation ne peut être improvisée.
                        <br />
                        Elle doit être progressive, structurée et priorisée selon l’impact réel sur la
                        performance, la gouvernance et la sécurité des flux.
                      </p>
                    </Note>

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

                    <div className="mt-5 text-[12px] leading-[1.8] text-black/70 md:mt-6 md:text-[13px]">
                      <p className="font-medium text-black/80">NOTRE ENGAGEMENT AUPRÈS DES DÉCIDEURS</p>

                      <p className="mt-3">Nous accompagnons chaque organisation avec une exigence claire :</p>

                      <ul className="mt-4 space-y-4 pl-5">
                        <li className="list-disc">
                          <span className="font-medium text-black/80">
                            Priorisation stratégique des investissements
                          </span>
                          <div className="mt-1 text-black/70">
                            Chaque projet est évalué selon son impact réel et sa soutenabilité budgétaire.
                          </div>
                        </li>

                        <li className="list-disc">
                          <span className="font-medium text-black/80">Structuration avant développement</span>
                          <div className="mt-1 text-black/70">
                            Audit des processus, architecture cible, gouvernance définie avant toute mise en
                            œuvre.
                          </div>
                        </li>

                        <li className="list-disc">
                          <span className="font-medium text-black/80">Sécurisation des flux critiques</span>
                          <div className="mt-1 text-black/70">
                            Intégrité des données, traçabilité, conformité et robustesse technique.
                          </div>
                        </li>

                        <li className="list-disc">
                          <span className="font-medium text-black/80">Transfert de compétences</span>
                          <div className="mt-1 text-black/70">
                            Montée en autonomie progressive des équipes locales.
                          </div>
                        </li>

                        <li className="list-disc">
                          <span className="font-medium text-black/80">Vision long terme</span>
                          <div className="mt-1 text-black/70">
                            Solutions évolutives, adaptées à la croissance et aux réalités futures.
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div
                      className="mt-7 h-px md:mt-8"
                      style={{
                        backgroundImage: `linear-gradient(to right, transparent, ${ACCENT}55, transparent)`,
                      }}
                    />

                    <div className="mt-6">
                      <p
                        className="pl-4 text-[14px] leading-relaxed text-black/75 md:text-[15px]"
                        style={{ borderLeft: `2px solid ${ACCENT}` }}
                      >
                        “La transformation digitale n’est pas un projet informatique.
                        <br />
                        C’est un projet de gouvernance.”
                      </p>
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
            </div>

            <ScrollArrows accent={ACCENT} targetRef={scrollRef} />
          </div>
        </div>

        {/* Footer */}
        <div>
          <div className="mt-6 h-px bg-black/10 md:mt-8" />
          <footer className="mt-4 flex items-center justify-between text-[11px] tracking-[0.24em] text-black/50">
            <span className="min-w-0 truncate">SECTION SUIVANTE : SERVICES</span>
            <span style={{ color: ACCENT }}>→</span>
          </footer>
        </div>
      </div>

      <PaperCorners />
    </section>
  );
}

/* ---------- arrows ---------- */

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollByAmount = (dir: "up" | "down") => {
    const el = targetRef.current;
    if (!el) return;
    const amount = Math.max(220, Math.floor(el.clientHeight * 0.35));
    el.scrollBy({ top: dir === "down" ? amount : -amount, behavior: "smooth" });
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

/* ---------- atoms ---------- */

function Note({
  title,
  children,
  accent,
}: {
  title: string;
  children: React.ReactNode;
  accent: string;
}) {
  return (
    <div>
      <div className="text-[11px] tracking-[0.26em]" style={{ color: accent }}>
        {title}
      </div>
      <div className="mt-3 text-[12px] leading-relaxed text-black/65 md:text-[13px]">{children}</div>
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

/*
IMPORTANT: ajoute ceci dans ton globals.css :

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
*/