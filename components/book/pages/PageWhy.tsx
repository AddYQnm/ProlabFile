/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const ACCENT = "#CF2B5B";

const points = [
  { k: "(01)", t: "Sur mesure", d: "Une solution alignée sur vos besoins, sans template générique." },
  { k: "(02)", t: "Qualité & fiabilité", d: "Des bases solides, maintenables et évolutives." },
  { k: "(03)", t: "Accompagnement", d: "Un suivi clair, des échanges simples, des décisions rapides." },
];

const timeline = [
  { k: "(A)", t: "Cadrage", d: "Objectifs, contraintes, priorités. Un cadre net, une direction claire.", meta: "Étape 01" },
  { k: "(B)", t: "Prototype", d: "Parcours, maquettes, validation rapide. On converge sans friction.", meta: "Étape 02" },
  { k: "(C)", t: "Production", d: "Dev propre, tests, performance. Livraison progressive.", meta: "Étape 03" },
  { k: "(D)", t: "Lancement", d: "Déploiement, monitoring, itérations. Le produit vit, on suit.", meta: "Étape 04" },
];

export default function PageWhyHorizontal() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  // progress horizontal (0..1)
  const prog = useMotionValue(0);
  const progSpring = useSpring(prog, { stiffness: 120, damping: 22, mass: 0.6 });
  const barScale = useTransform(progSpring, [0, 1], [0, 1]);

  const [index, setIndex] = useState(0);

  // ✅ Desktop-only wheel->horizontal + progress tracking (responsive safe)
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

      <TopBar title="POURQUOI NOUS" index="(05)" />

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

            {/* petite marge “magazine” */}
            <div className="pointer-events-none absolute bottom-8 left-8 text-xs tracking-[0.35em] text-black/30">
              {String(i + 1).padStart(2, "0")} / {String(pages.length).padStart(2, "0")}
            </div>
          </section>
        ))}
      </div>

      {/* mobile stack — mobile only */}
      <div className="mx-auto max-w-6xl space-y-24 px-6 pb-24 pt-28 md:hidden">
        <SpreadHero />
        <SpreadPoints />
        <SpreadTimeline />
        <SpreadCta />
      </div>

      {/* hint — desktop only */}
      <div className="pointer-events-none absolute bottom-8 right-8 z-20 hidden md:flex items-center gap-3 text-xs text-black/45">
        <span className="tracking-[0.35em]">SCROLL</span>
        <span style={{ color: ACCENT }}>→</span>
      </div>

      <CornerMarks />
    </div>
  );
}

/* ----------------- Spreads (pages) ----------------- */

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
          Un partenaire tech
          <br className="hidden md:block" />
          <span className="italic text-[#CF2B5B] ">orienté résultat</span>.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.7, ease: "easeOut" }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <Badge>Studio</Badge>
          <Badge>Build</Badge>
          <Badge>Ship</Badge>
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
          ProlabAfrik s’appuie sur une approche structurée et un niveau d’exigence élevé pour livrer des solutions fiables
          — pensées comme un produit, conçues comme un système.
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
              PROMESSE
            </div>
            <span className="text-xs text-black/35">Version 01</span>
          </div>

          <div className="mt-6 space-y-4">
            <p className="text-sm leading-relaxed text-black/65">Une expérience claire : cadrage, exécution, livraison, suivi.</p>

            <div
              className="h-px w-full"
              style={{ backgroundImage: `linear-gradient(to right, transparent, ${ACCENT}55, transparent)` }}
            />

            <p className="text-sm leading-relaxed text-black/55">Décisions rapides, jalons visibles, base solide — sans bruit inutile.</p>
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
          POINTS CLÉS
        </div>
        <h3 className="mt-5 text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
          Une exécution
          <br />
          <span className="italic text-black/65">précise</span>.
        </h3>
        <p className="mt-6 text-sm leading-relaxed text-black/60">
          Chaque choix vise la clarté, la fiabilité, et l’impact. Le style est sobre, la livraison est nette.
        </p>

        <div className="mt-8 h-[2px] w-12" style={{ backgroundColor: ACCENT }} />

        <div className="mt-10 rounded-3xl border border-black/10 bg-black/[0.02] p-6">
          <div className="text-xs tracking-[0.35em]" style={{ color: ACCENT }}>
            ANGLE
          </div>
          <p className="mt-3 text-sm leading-relaxed text-black/65">Magazine “class chic” : hiérarchie, respiration, détails fins.</p>
        </div>
      </div>

      <div className="md:col-span-8">
        <div className="grid gap-4 md:grid-cols-3">
          {points.map((p, i) => (
            <motion.div
              key={p.k}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i, duration: 0.6, ease: "easeOut" }}
              className="group rounded-3xl border border-black/10 bg-black/[0.03] p-7 transition hover:border-black/20"
            >
              <div className="text-xs tracking-[0.35em] text-black/55">
                {p.k} <span style={{ color: ACCENT }}>•</span>
              </div>
              <h4 className="mt-3 text-2xl font-semibold tracking-[-0.015em]">{p.t}</h4>
              <p className="mt-4 text-sm leading-relaxed text-black/65">{p.d}</p>

              <div
                className="mt-8 h-px w-full"
                style={{ backgroundImage: `linear-gradient(to right, transparent, ${ACCENT}3D, transparent)` }}
              />

              <div className="mt-5 flex items-center justify-between text-xs text-black/45">
                <span className="tracking-[0.35em]">DÉTAIL</span>
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
          TIMELINE
        </div>
        <h3 className="mt-5 text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
          Notre process
          <br />
          <span className="italic text-black/65">de A à D</span>.
        </h3>
        <p className="mt-6 text-sm leading-relaxed text-black/60">
          Timeline horizontale : glisse la ligne (drag) pour parcourir les étapes. Chaque carte s’anime à l’entrée.
        </p>

        <div className="mt-10">
          <div className="mb-3 flex items-center justify-between text-xs text-black/45">
            <span className="tracking-[0.35em]">PROGRESSION</span>
            <span style={{ color: ACCENT }}>drag →</span>
          </div>
          <div className="h-[2px] w-full overflow-hidden rounded-full bg-black/10">
            <motion.div
              style={{ scaleX: lineScale, transformOrigin: "0% 50%", backgroundColor: `${ACCENT}B3` }}
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
                      style={{ backgroundColor: `${ACCENT}CC`, boxShadow: `0 0 0 7px ${ACCENT}14` }}
                    />
                    <div className="text-xs tracking-[0.35em] text-black/55">
                      {s.k} <span className="text-black/35">— {s.meta}</span>
                    </div>
                    <h4 className="mt-3 text-2xl font-semibold tracking-[-0.015em]">{s.t}</h4>
                    <p className="mt-4 text-sm leading-relaxed text-black/65">{s.d}</p>

                    <div
                      className="mt-7 h-px w-full"
                      style={{ backgroundImage: `linear-gradient(to right, transparent, ${ACCENT}3D, transparent)` }}
                    />

                    <div className="mt-4 flex items-center justify-between text-xs text-black/45">
                      <span className="tracking-[0.35em]">LIVRABLE</span>
                      <span className="text-black/65">Spec / Prototype / Build / Launch</span>
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
          Un rendu
          <br />
          <span className="italic text-black/65">propre</span>, une base
          <br />
          <span className="italic text-black/65">solide</span>.
        </h3>
        <p className="mt-7 max-w-xl text-sm leading-relaxed text-black/60">
          Si tu veux, je peux aussi te faire une version “sommaire” (mini-menu horizontal en haut) + un mode “auto-advance”
          (lecture automatique type story).
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
            DOSSIER
          </div>
          <p className="mt-4 text-sm leading-relaxed text-black/65">
            Téléchargement du dossier (PDF). Version courte + version complète.
          </p>

          <div
            className="mt-8 h-px w-full"
            style={{ backgroundImage: `linear-gradient(to right, transparent, ${ACCENT}3D, transparent)` }}
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
            Télécharger le dossier
            <span style={{ color: ACCENT }}>→</span>
          </a>

          <div className="mt-6 flex items-center justify-between text-xs text-black/45">
            <span className="tracking-[0.35em]">(07)</span>
            <span className="text-black/65">
              Contact <span style={{ color: ACCENT }}>→</span>
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