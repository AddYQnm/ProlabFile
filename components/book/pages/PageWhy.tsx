/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const ACCENT = "#CF2B5B";

/** PAGE 06 — ENJEUX */
const points = [
  {
    k: "(01)",
    t: "Manque d’urbanisation SI",
    d: "Systèmes d’information hétérogènes, parfois inexistants, rarement structurés à l’échelle de l’organisation.",
  },
  {
    k: "(02)",
    t: "Processus manuels & dépendance papier",
    d: "Des opérations critiques encore sur papier : lenteur, erreurs, perte d’information et difficulté de traçabilité.",
  },
  {
    k: "(03)",
    t: "Fragmentation des données",
    d: "Données dispersées (fichiers, outils, services). Difficile d’avoir un “single source of truth” fiable.",
  },
  {
    k: "(04)",
    t: "Faible interopérabilité",
    d: "Outils qui ne communiquent pas : doublons, ruptures de parcours, intégrations coûteuses et fragiles.",
  },
  {
    k: "(05)",
    t: "Risque de dépendance technologique étrangère",
    d: "Perte de souveraineté : données, infrastructures, licences et décisions techniques externalisées.",
  },
];

/** On recycle la timeline pour raconter le chemin “du problème à la réponse” */
const timeline = [
  {
    k: "(1)",
    t: "Structurer le SI",
    d: "Cartographier, définir une cible, clarifier l’architecture et les responsabilités.",
    meta: "Enjeu 01",
  },
  {
    k: "(2)",
    t: "Digitaliser les flux",
    d: "Transformer les processus papier en workflows traçables, simples et efficaces.",
    meta: "Enjeu 02",
  },
  {
    k: "(3)",
    t: "Unifier les données",
    d: "Réconcilier, normaliser, gouverner : éviter la fragmentation et fiabiliser la décision.",
    meta: "Enjeu 03",
  },
  {
    k: "(4)",
    t: "Connecter & intégrer",
    d: "Interopérabilité : API, standards, échanges. Réduire les frictions et les coûts.",
    meta: "Enjeu 04",
  },
  {
    k: "(5)",
    t: "Renforcer la souveraineté",
    d: "Choix technos maîtrisés, trajectoire durable, données protégées et ownership clair.",
    meta: "Enjeu 05",
  },
];

export default function PageWhyHorizontal() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  // progress horizontal (0..1)
  const prog = useMotionValue(0);
  const progSpring = useSpring(prog, { stiffness: 120, damping: 22, mass: 0.6 });
  const barScale = useTransform(progSpring, [0, 1], [0, 1]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const el = scrollerRef.current;
    if (!el) return;

    let cleanup: (() => void) | null = null;

    const attach = () => {
      if (cleanup) cleanup();

      if (!mq.matches) {
        prog.set(0);
        setIndex(0);
        cleanup = null;
        return;
      }

      const onWheel = (e: WheelEvent) => {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          e.preventDefault();
          el.scrollLeft += e.deltaY;
        }
      };

      const onScroll = () => {
        const max = el.scrollWidth - el.clientWidth;
        const p = max <= 0 ? 0 : el.scrollLeft / max;
        prog.set(p);

        const w = el.clientWidth || 1;
        const i = Math.round(el.scrollLeft / w);
        setIndex(i);
      };

      el.addEventListener("wheel", onWheel, { passive: false });
      el.addEventListener("scroll", onScroll, { passive: true });
      onScroll();

      cleanup = () => {
        el.removeEventListener("wheel", onWheel as any);
        el.removeEventListener("scroll", onScroll as any);
      };
    };

    attach();

    const onChange = () => attach();
    if (typeof mq.addEventListener === "function") mq.addEventListener("change", onChange);
    else mq.addListener(onChange);

    return () => {
      if (cleanup) cleanup();
      if (typeof mq.removeEventListener === "function") mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, [prog]);

  const pages = useMemo(() => {
    return [
      <SpreadHero key="hero" />,
      <SpreadPoints key="points" />,
      <SpreadTimeline key="timeline" />,
      <SpreadCta key="cta" />,
    ];
  }, []);

  const goTo = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="relative w-full bg-[#f5f5f3] text-[#111] md:h-screen md:w-screen md:overflow-hidden">
      <Noise />
      <Vignette />

      <TopBar title="LES ENJEUX" index="(06)" />

      {/* progress + navigation — desktop only */}
      <div className="absolute left-8 right-8 top-[84px] z-20 hidden md:flex items-center justify-between gap-6">
        <div className="hidden md:flex items-center gap-3 text-xs text-black/55">
          <span className="tracking-[0.35em]">LECTURE</span>
          <span className="text-black/25">—</span>
          <span className="text-black/70">Gauche → Droite</span>
        </div>

        <div className="flex flex-1 items-center gap-4 md:justify-end">
          <div className="h-[2px] flex-1 overflow-hidden rounded-full bg-black/10 md:max-w-[420px]">
            <motion.div
              className="h-full w-full"
              style={{
                transformOrigin: "0% 50%",
                scaleX: barScale,
                backgroundColor: `${ACCENT}B3`,
              }}
            />
          </div>

          <div className="hidden md:flex items-center gap-1">
            {pages.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="h-7 w-7 rounded-full border text-[10px] transition"
                style={{
                  borderColor: i === index ? `${ACCENT}55` : "rgba(0,0,0,0.10)",
                  backgroundColor: i === index ? `${ACCENT}14` : "rgba(0,0,0,0.03)",
                  color: i === index ? "rgba(0,0,0,0.80)" : "rgba(0,0,0,0.55)",
                }}
                aria-label={`Aller à la page ${i + 1}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* horizontal scroller — desktop only */}
      <div
        ref={scrollerRef}
        className="
          hidden md:flex md:h-screen md:w-screen
          overflow-x-auto overflow-y-hidden
          snap-x snap-mandatory scroll-smooth
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
        "
      >
        {pages.map((node, i) => (
          <section
            key={i}
            className="relative h-screen w-screen flex-none snap-start"
            aria-label={`Section ${i + 1}`}
          >
            <div className="mx-auto h-full max-w-6xl px-8 md:px-16">
              <div className="h-full pt-28 md:pt-32">{node}</div>
            </div>

            <div className="pointer-events-none absolute bottom-8 left-8 text-xs tracking-[0.35em] text-black/30">
              {String(i + 1).padStart(2, "0")} / {String(pages.length).padStart(2, "0")}
            </div>
          </section>
        ))}
      </div>

      {/* mobile stack */}
      <div className="mx-auto max-w-6xl space-y-24 px-6 pb-24 pt-28 md:hidden">
        <SpreadHero />
        <SpreadPoints />
        <SpreadTimeline />
        <SpreadCta />
      </div>

      <div className="pointer-events-none absolute bottom-8 right-8 z-20 hidden md:flex items-center gap-3 text-xs text-black/45">
        <span className="tracking-[0.35em]">SCROLL</span>
        <span style={{ color: ACCENT }}>→</span>
      </div>

      <CornerMarks />
    </div>
  );
}

/* ----------------- Spreads ----------------- */

function SpreadHero() {
  return (
    <div className="grid h-full items-center gap-10 md:grid-cols-12">
      <div className="md:col-span-8">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="text-[46px] font-semibold leading-[0.92] tracking-[-0.02em] md:text-[92px]"
        >
          Digitaliser l’Afrique,
          <br className="hidden md:block" />
          c’est{" "}
          <span className="italic text-[#CF2B5B] ">structurer</span>{" "}
          avant de développer.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.7, ease: "easeOut" }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <Badge>SI</Badge>
          <Badge>Process</Badge>
          <Badge>Données</Badge>
          <Badge>Interop</Badge>
          <Badge>Souveraineté</Badge>
          <span className="text-xs tracking-[0.35em] text-black/40">
            — <span style={{ color: ACCENT }}>EDITION 2026</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.65, ease: "easeOut" }}
          className="mt-10 max-w-2xl text-lg leading-relaxed text-black/65"
        >
          Les enjeux ne sont pas “techniques” seulement : ils touchent la gouvernance,
          la fiabilité, l’adoption et l’indépendance. Voici les points clés qui freinent
          (ou accélèrent) une transformation digitale durable.
        </motion.p>

        <div className="mt-8 h-[2px] w-12" style={{ backgroundColor: ACCENT }} />
      </div>

      <div className="md:col-span-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.7, ease: "easeOut" }}
          className="rounded-3xl border border-black/10 bg-black/[0.03] p-7 shadow-[0_0_0_1px_rgba(0,0,0,0.02)_inset]"
        >
          <div className="flex items-center justify-between">
            <div className="text-xs tracking-[0.35em]" style={{ color: ACCENT }}>
              MESSAGE
            </div>
            <span className="text-xs text-black/35">Synthèse</span>
          </div>

          <div className="mt-6 space-y-4">
            <p className="text-sm leading-relaxed text-black/65">
              Les outils seuls ne suffisent pas : sans structure (SI, processus, données),
              la digitalisation crée du bruit.
            </p>

            <div
              className="h-px w-full"
              style={{
                backgroundImage: `linear-gradient(to right, transparent, ${ACCENT}55, transparent)`,
              }}
            />

            <p className="text-sm leading-relaxed text-black/55">
              Notre approche :{" "}
              <span style={{ color: ACCENT }}>structurer</span>{" "}
              avant de développer.
            </p>
          </div>

          <div className="mt-7 flex items-center justify-between text-xs text-black/45">
            <span className="tracking-[0.35em]">NOTE</span>
            <span style={{ color: ACCENT }}>Lire →</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function SpreadPoints() {
  return (
    <div className="grid h-full items-center gap-8 md:grid-cols-12">
      <div className="md:col-span-4">
        <div className="text-xs tracking-[0.35em]" style={{ color: ACCENT }}>
          ENJEUX CLÉS
        </div>
        <h3 className="mt-5 text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
          Les freins
          <br />
          <span className="italic text-black/65">les plus fréquents</span>.
        </h3>
        <p className="mt-6 text-sm leading-relaxed text-black/60">
          La transformation digitale échoue rarement “par manque d’outils”.
          Elle échoue par manque de structure : gouvernance, données, interop et adoption.
        </p>

        <div className="mt-8 h-[2px] w-12" style={{ backgroundColor: ACCENT }} />

        <div className="mt-10 rounded-3xl border border-black/10 bg-black/[0.02] p-6">
          <div className="text-xs tracking-[0.35em]" style={{ color: ACCENT }}>
            NOTRE APPROCHE
          </div>
          <p className="mt-3 text-sm leading-relaxed text-black/65">
            Structurer avant de développer : cadrage, architecture, données, puis livraison progressive.
          </p>
        </div>
      </div>

      <div className="md:col-span-8">
        <div className="grid gap-4 md:grid-cols-2">
          {points.map((p, i) => (
            <motion.div
              key={p.k}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * i, duration: 0.6, ease: "easeOut" }}
              className="group rounded-3xl border border-black/10 bg-black/[0.03] p-7 transition hover:border-black/20"
            >
              <div className="text-xs tracking-[0.35em] text-black/55">
                {p.k} <span style={{ color: ACCENT }}>•</span>
              </div>
              <h4 className="mt-3 text-2xl font-semibold tracking-[-0.015em]">{p.t}</h4>
              <p className="mt-4 text-sm leading-relaxed text-black/65">{p.d}</p>

              <div
                className="mt-8 h-px w-full"
                style={{
                  backgroundImage: `linear-gradient(to right, transparent, ${ACCENT}3D, transparent)`,
                }}
              />

              <div className="mt-5 flex items-center justify-between text-xs text-black/45">
                <span className="tracking-[0.35em]">ENJEU</span>
                <span style={{ color: ACCENT }} className="transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SpreadTimeline() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 140, damping: 26, mass: 0.6 });

  const [bounds, setBounds] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const calc = () => {
      const maxDrag = Math.max(0, el.scrollWidth - el.clientWidth);
      setBounds({ left: -maxDrag, right: 0 });
    };

    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const prog = useTransform(xSpring, [bounds.left, bounds.right], [1, 0]);
  const lineScale = useTransform(prog, [0, 1], [0, 1]);

  return (
    <div className="grid h-full items-center gap-8 md:grid-cols-12">
      <div className="md:col-span-4">
        <div className="text-xs tracking-[0.35em]" style={{ color: ACCENT }}>
          TRAJECTOIRE
        </div>
        <h3 className="mt-5 text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
          Du constat
          <br />
          <span className="italic text-black/65">à la réponse</span>.
        </h3>
        <p className="mt-6 text-sm leading-relaxed text-black/60">
          Une digitalisation durable suit une trajectoire simple : structurer (SI, processus, données, interop)
          et sécuriser la souveraineté.
        </p>

        <div className="mt-10">
          <div className="mb-3 flex items-center justify-between text-xs text-black/45">
            <span className="tracking-[0.35em]">PROGRESSION</span>
            <span style={{ color: ACCENT }}>drag →</span>
          </div>
          <div className="h-[2px] w-full overflow-hidden rounded-full bg-black/10">
            <motion.div
              style={{
                scaleX: lineScale,
                transformOrigin: "0% 50%",
                backgroundColor: `${ACCENT}B3`,
              }}
              className="h-full w-full"
            />
          </div>
        </div>
      </div>

      <div className="md:col-span-8">
        <div className="relative rounded-3xl border border-black/10 bg-black/[0.02] p-6 md:p-8">
          <div className="absolute left-8 right-8 top-10 h-px bg-black/10 md:top-12" />
          <motion.div
            style={{ scaleX: lineScale, transformOrigin: "0% 50%", backgroundColor: `${ACCENT}99` }}
            className="absolute left-8 right-8 top-10 h-px md:top-12"
          />

          <div ref={trackRef} className="overflow-hidden">
            <motion.div
              drag="x"
              dragConstraints={bounds}
              dragElastic={0.08}
              style={{ x }}
              className="flex gap-4 pr-10 pt-10 md:pt-12"
            >
              {timeline.map((s, i) => (
                <motion.div
                  key={s.k}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.6, ease: "easeOut" }}
                  className="w-[320px] flex-none md:w-[360px]"
                >
                  <div className="relative rounded-3xl border border-black/10 bg-black/[0.03] p-6 transition hover:border-black/20">
                    <div
                      className="absolute -top-[10px] left-7 h-5 w-5 rounded-full"
                      style={{
                        backgroundColor: `${ACCENT}CC`,
                        boxShadow: `0 0 0 7px ${ACCENT}14`,
                      }}
                    />
                    <div className="text-xs tracking-[0.35em] text-black/55">
                      {s.k} <span className="text-black/35">— {s.meta}</span>
                    </div>
                    <h4 className="mt-3 text-2xl font-semibold tracking-[-0.015em]">{s.t}</h4>
                    <p className="mt-4 text-sm leading-relaxed text-black/65">{s.d}</p>

                    <div
                      className="mt-7 h-px w-full"
                      style={{
                        backgroundImage: `linear-gradient(to right, transparent, ${ACCENT}3D, transparent)`,
                      }}
                    />

                    <div className="mt-4 flex items-center justify-between text-xs text-black/45">
                      <span className="tracking-[0.35em]">PRINCIPE</span>
                      <span className="text-black/65">Structurer → Déployer</span>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="w-[120px] flex-none" />
            </motion.div>
          </div>

          <div className="mt-6 flex items-center justify-between text-xs text-black/45">
            <span className="tracking-[0.35em]">ASTUCE</span>
            <span className="text-black/65">
              Tu peux <span style={{ color: ACCENT }}>drag</span> la timeline
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpreadCta() {
  return (
    <div className="grid h-full items-center gap-10 md:grid-cols-12">
      <div className="md:col-span-7">
        <div className="text-xs tracking-[0.35em]" style={{ color: ACCENT }}>
          CONCLUSION
        </div>
        <h3 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.02em] md:text-6xl">
          Notre approche :
          <br />
          <span className="italic text-black/65">structurer</span> avant
          <br />
          de <span className="italic text-black/65">développer</span>.
        </h3>
        <p className="mt-7 max-w-xl text-sm leading-relaxed text-black/60">
          On clarifie d’abord le cadre (SI, processus, données, interop), puis on construit
          des solutions progressives, adoptées et maintenables.
        </p>

        <div className="mt-8 h-[2px] w-12" style={{ backgroundColor: ACCENT }} />
      </div>

      <div className="md:col-span-5">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-3xl border border-black/10 bg-black/[0.03] p-7"
        >
          <div className="text-xs tracking-[0.35em]" style={{ color: ACCENT }}>
            SUITE
          </div>
          <p className="mt-4 text-sm leading-relaxed text-black/65">
            Prochaine section : références & projets (preuves concrètes).
          </p>

          <div
            className="mt-8 h-px w-full"
            style={{
              backgroundImage: `linear-gradient(to right, transparent, ${ACCENT}3D, transparent)`,
            }}
          />

          <a
            href="#"
            className="mt-6 inline-flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-xs tracking-[0.35em] transition"
            style={{
              borderColor: `${ACCENT}40`,
              backgroundColor: `${ACCENT}0D`,
              color: "rgba(0,0,0,0.70)",
            }}
          >
            Aller aux références
            <span style={{ color: ACCENT }}>→</span>
          </a>

          <div className="mt-6 flex items-center justify-between text-xs text-black/45">
            <span className="tracking-[0.35em]">(07)</span>
            <span className="text-black/65">
              Continuer <span style={{ color: ACCENT }}>→</span>
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ----------------- Shared bits ----------------- */

function TopBar({ title, index }: { title: string; index: string }) {
  return (
    <div className="absolute left-8 right-8 top-8 z-20 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Mark />
        <div className="text-xs tracking-[0.35em] text-black/60">
          {index} {title}
        </div>
      </div>
      <Plus />
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="rounded-full border bg-black/[0.02] px-3 py-1 text-[11px] tracking-[0.35em] text-black/65"
      style={{ borderColor: `${ACCENT}33` }}
    >
      {children}
    </span>
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

function Noise() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply">
      <div
        className="h-full w-full"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22 opacity=%220.5%22/%3E%3C/svg%3E')",
        }}
      />
    </div>
  );
}

function Mark() {
  return (
    <div className="grid h-9 w-9 place-items-center rounded-xl border border-black/15 bg-black/[0.02] shadow-[0_0_0_1px_rgba(0,0,0,0.02)_inset]">
      <div className="h-3 w-3 rounded-sm" style={{ backgroundColor: `${ACCENT}CC` }} />
    </div>
  );
}

function Plus() {
  return (
    <motion.div
      whileHover={{ rotate: 90 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="grid h-10 w-10 place-items-center rounded-full border border-black/15 bg-black/[0.02]"
    >
      <span className="text-lg leading-none text-black/80">+</span>
    </motion.div>
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