/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { BookHeader, BookFooter } from "@/components/book/BookChrome";

/** ✅ Accent (rose ProlabAfrik) */
const ACCENT = "#E94E77";

/**
 * ✅ CONTENU COMPLET (PAGE 04)
 * NOTRE POSITIONNEMENT FACE À CES ENJEUX
 */
const steps = [
  {
    n: "01",
    title: "Une approche centrée sur la structure avant l’outil",
    lead:
      "Chaque projet débute par une structuration rigoureuse. La technologie n’intervient qu’une fois les fondations consolidées.",
    bullets: [
      "Une analyse des processus existants",
      "Une cartographie des flux et des données",
      "Une définition claire des priorités stratégiques",
      "La mise en place d’une gouvernance projet adaptée",
    ],
    closing: "La technologie n’intervient qu’une fois les fondations consolidées.",
    deliverable: "Cadrage + gouvernance + priorisation",
  },
  {
    n: "02",
    title: "Une expertise issue d’environnements régulés",
    lead:
      "Notre expérience dans des secteurs à forte exigence (finance, infrastructures critiques, institutions publiques) nous permet d’intégrer des standards élevés dès la conception.",
    bullets: [
      "Les impératifs de sécurité",
      "Les exigences de conformité",
      "La gestion des risques",
      "La continuité de service",
    ],
    closing: "Ces standards sont transposés et adaptés aux contextes africains.",
    deliverable: "Standards sécurité & conformité intégrés",
  },
  {
    n: "03",
    title: "Une logique d’investissement responsable",
    lead:
      "Nous accompagnons les décideurs dans la priorisation des projets en recherchant l’impact réel et la soutenabilité budgétaire.",
    bullets: [
      "Leur impact économique",
      "Leur effet sur la performance administrative",
      "Leur capacité à renforcer la souveraineté numérique",
      "Leur soutenabilité budgétaire",
    ],
    closing: "Chaque transformation doit produire un bénéfice tangible.",
    deliverable: "Portefeuille priorisé & trajectoire budgétaire",
  },
  {
    n: "04",
    title: "Un engagement vers l’autonomie locale",
    lead:
      "La réussite d’un projet public repose sur la capacité des équipes à s’approprier les outils et les méthodes. Nous intégrons systématiquement la montée en autonomie.",
    bullets: [
      "Transfert de compétences",
      "Documentation structurée",
      "Formation des équipes",
      "Accompagnement progressif",
    ],
    closing: "Une digitalisation durable est une digitalisation maîtrisée localement.",
    deliverable: "Montée en autonomie + runbook & formation",
  },
];

export default function PageMethod() {
  return (
    <section className="relative h-screen w-full bg-[#f5f5f3] text-[#111]">
      <PaperNoise />
      <PaperVignette />

      {/* Header global partagé */}
      <div className="mx-auto w-full max-w-7xl px-5 pt-10 sm:px-6 md:px-12 md:pt-14">
        <BookHeader page="PAGE 04" />
      </div>

      {/* ✅ MOBILE: stack vertical */}
      <div className="md:hidden">
        <MobilePositioning />
      </div>

      {/* ✅ DESKTOP: panels horizontaux */}
      <div className="hidden md:block">
        <DesktopPositioning />
      </div>

      {/* Footer global partagé */}
      <div className="mx-auto w-full max-w-7xl px-5 pb-10 sm:px-6 md:px-12 md:pb-14">
        <BookFooter left="PROLABAFRIK · POSITIONNEMENT" right="(05) POURQUOI →" />
      </div>

      <PaperCorners />
    </section>
  );
}

/* ----------------- MOBILE (vertical) ----------------- */

function MobilePositioning() {
  const [active, setActive] = useState(0);
  const s = steps[active];

  return (
    <div className="mx-auto w-full max-w-7xl px-5 pb-10 sm:px-6 md:px-12">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-10"
      >
        <h2
          className="font-semibold tracking-[-0.01em]"
          style={{ fontSize: "clamp(28px, 7vw, 44px)", lineHeight: 1.05 }}
        >
          NOTRE POSITIONNEMENT
          <br />
          <span className="italic" style={{ color: ACCENT }}>
            FACE À CES ENJEUX
          </span>
          .
        </h2>

        <div className="mt-4 h-[2px] w-12" style={{ backgroundColor: ACCENT }} />

        <p className="mt-4 max-w-2xl text-[12px] leading-relaxed text-black/60">
          Face aux défis structurels de la transformation publique, ProlabAfrik intervient comme partenaire
          de structuration stratégique et de sécurisation des projets digitaux.
          <br />
          Nous ne proposons pas une digitalisation opportuniste.
          <br />
          Nous accompagnons une transformation organisée, progressive et maîtrisée.
        </p>
      </motion.div>

      {/* Step selector */}
      <div className="mt-8 grid grid-cols-2 gap-3">
        {steps.map((st, i) => (
          <button
            key={st.n}
            onClick={() => setActive(i)}
            className={[
              "rounded-2xl border px-4 py-3 text-left transition",
              i === active ? "bg-white/80" : "bg-white/55",
            ].join(" ")}
            style={{
              borderColor: i === active ? `${ACCENT}40` : "rgba(0,0,0,0.10)",
            }}
          >
            <div className="text-[10px] tracking-[0.26em] text-black/50">
              (<span style={{ color: ACCENT }}>{st.n}</span>)
            </div>
            <div className="mt-2 text-[13px] font-semibold text-black/80">{st.title}</div>
          </button>
        ))}
      </div>

      {/* Active detail */}
      <div className="mt-6 rounded-2xl border border-black/10 bg-white/65 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.02)_inset]">
        <div className="flex items-center justify-between">
          <div className="text-[11px] tracking-[0.26em]" style={{ color: ACCENT }}>
            DÉTAIL
          </div>
          <span className="text-[10px] tracking-[0.26em] text-black/35">AXE</span>
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mt-5"
          >
            <div className="text-[16px] font-semibold tracking-[-0.01em] text-black/85">
              (<span style={{ color: ACCENT }}>{s.n}</span>) {s.title}
            </div>

            <p className="mt-3 text-[12px] leading-relaxed text-black/65">{s.lead}</p>

            <ul className="mt-4 space-y-2 pl-5 text-[12px] leading-relaxed text-black/65">
              {s.bullets.map((b) => (
                <li key={b} className="list-disc">
                  {b}
                </li>
              ))}
            </ul>

            <p className="mt-4 text-[12px] leading-relaxed text-black/65">{s.closing}</p>

            <div
              className="mt-5 h-px"
              style={{
                backgroundImage: `linear-gradient(to right, transparent, ${ACCENT}55, transparent)`,
              }}
            />

            <div className="mt-4">
              <div className="text-[10px] tracking-[0.26em]" style={{ color: ACCENT }}>
                RÉSULTAT
              </div>
              <div className="mt-2 text-[13px] font-semibold text-black/80">{s.deliverable}</div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Meta */}
      <div className="mt-8 grid gap-3">
        <MetaRow k="Rôle" v="partenaire de structuration stratégique" />
        <MetaRow k="Cadence" v="progressive & maîtrisée" />
        <MetaRow k="Finalité" v="bénéfice tangible & souveraineté" />
      </div>
    </div>
  );
}

/* ----------------- DESKTOP (horizontal panels) ----------------- */

function DesktopPositioning() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const [panelIndex, setPanelIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  const p = useMotionValue(0);
  const pSpring = useSpring(p, { stiffness: 140, damping: 24, mass: 0.7 });

  const cursorX = useTransform(pSpring, [0, 1], ["0%", "100%"]);
  const barScale = useTransform(pSpring, [0, 1], [0, 1]);

  const panels = useMemo(
    () => [
      <Intro key="intro" />,
      <PositionRail key="rail" active={stepIndex} onChange={setStepIndex} progress={pSpring} />,
      <Details key="details" active={stepIndex} onChange={setStepIndex} />,
      <Next key="next" />,
    ],
    [stepIndex, pSpring]
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const el = scrollerRef.current;
    if (!el) return;
    if (!mq.matches) return;

    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      const prog = max <= 0 ? 0 : el.scrollLeft / max;
      p.set(prog);

      const idx = Math.round(el.scrollLeft / el.clientWidth);
      setPanelIndex(Math.min(panels.length - 1, Math.max(0, idx)));
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => el.removeEventListener("scroll", onScroll as any);
  }, [p, panels.length]);

  const goTo = (idx: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: idx * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* progress rail top */}
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-12">
        <div className="mt-6 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-[10px] tracking-[0.26em] text-black/50">
            <span style={{ color: ACCENT }}>POSITIONNEMENT</span>
            <span className="text-black/30">—</span>
            <span className="text-black/70">Lecture gauche → droite</span>
          </div>

          <div className="flex flex-1 items-center justify-end gap-4">
            <div className="h-[2px] flex-1 overflow-hidden rounded-full bg-black/10 md:max-w-[420px]">
              <motion.div
                className="h-full w-full"
                style={{
                  backgroundColor: `${ACCENT}66`,
                  transformOrigin: "0% 50%",
                  scaleX: barScale,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* horizontal panels */}
      <div
        ref={scrollerRef}
        className="mt-8 flex h-[70vh] w-full overflow-x-hidden overflow-y-hidden snap-x snap-mandatory"
      >
        {panels.map((node, i) => (
          <section key={i} className="relative h-full w-screen flex-none snap-start">
            <div className="mx-auto h-full max-w-6xl px-8 md:px-16">
              <div className="h-full">{node}</div>
            </div>
          </section>
        ))}
      </div>

      {/* pager items */}
      <div className="mx-auto w-full max-w-7xl px-12">
        <div className="mt-6 flex items-center justify-center gap-4">
          {panels.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Aller à la page ${i + 1}`}
              className="h-2.5 w-2.5 rounded-full transition"
              style={{
                backgroundColor: i === panelIndex ? ACCENT : "rgba(0,0,0,0.20)",
                boxShadow: i === panelIndex ? `0 0 0 6px ${ACCENT}1A` : "none",
              }}
            />
          ))}
        </div>
      </div>

      {/* cursor indicator */}
      <div className="pointer-events-none mx-auto w-full max-w-7xl px-12">
        <div className="relative mt-6 h-8">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-black/10" />
          <motion.div
            style={{ left: cursorX }}
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: `${ACCENT}CC` }} />
          </motion.div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] tracking-[0.26em] text-black/40">
            PAGE {String(panelIndex + 1).padStart(2, "0")}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------- Panels (desktop) ----------------- */

function Intro() {
  return (
    <div className="grid h-full items-center gap-10 md:grid-cols-12">
      <div className="md:col-span-8">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-[44px] font-semibold leading-[0.92] tracking-[-0.02em] md:text-[76px]"
        >
          NOTRE POSITIONNEMENT
          <br className="hidden md:block" />
          <span className="italic" style={{ color: ACCENT }}>
            face à ces enjeux
          </span>
          .
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.65, ease: "easeOut" }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-black/60"
        >
          Face aux défis structurels de la transformation publique, ProlabAfrik intervient comme partenaire
          de structuration stratégique et de sécurisation des projets digitaux. Nous ne proposons pas une
          digitalisation opportuniste. Nous accompagnons une transformation organisée, progressive et
          maîtrisée.
        </motion.p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Tag>Structure</Tag>
          <Tag>Sécurité</Tag>
          <Tag>Investissement</Tag>
          <Tag>Autonomie</Tag>
          <span className="text-[10px] tracking-[0.26em] text-black/40">
            — <span style={{ color: ACCENT }}>EDITION 2026</span>
          </span>
        </div>
      </div>

      <div className="md:col-span-4">
        <Card>
          <div className="flex items-center justify-between">
            <div className="text-[10px] tracking-[0.26em]" style={{ color: ACCENT }}>
              SYNTHÈSE
            </div>
            <span className="text-[10px] tracking-[0.26em] text-black/35">Public</span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-black/65">
            ProlabAfrik est partenaire de structuration stratégique et de sécurisation : une transformation
            progressive, organisée et maîtrisée.
          </p>
          <Divider />
          <div className="flex items-center justify-between text-[10px] tracking-[0.26em] text-black/45">
            <span>LIRE</span>
            <span style={{ color: ACCENT }}>→</span>
          </div>
        </Card>
      </div>
    </div>
  );
}

function PositionRail({
  active,
  onChange,
  progress,
}: {
  active: number;
  onChange: (i: number) => void;
  progress: any;
}) {
  const glow = useTransform(progress, [0, 0.25, 1], [0, 1, 1]);

  return (
    <div className="grid h-full items-center gap-10 md:grid-cols-12">
      {/* LEFT */}
      <div className="md:col-span-4">
        <div className="text-[10px] tracking-[0.26em]" style={{ color: ACCENT }}>
          AXES
        </div>

        <h3 className="mt-5 text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
          Quatre engagements.
          <br />
          <span className="italic text-black/60">Une méthode</span>.
        </h3>

        <p className="mt-6 text-sm leading-relaxed text-black/55">
          Choisissez un axe : vous voyez l’intention, la liste d’actions, et le résultat attendu.
        </p>

        {/* ACTIVE CARD */}
        <motion.div
          key={steps[active]?.n}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ opacity: glow }}
          className="mt-10"
        >
          <Card>
            <div className="flex items-center justify-between">
              <div className="text-[10px] tracking-[0.26em]" style={{ color: ACCENT }}>
                AXE ACTIF
              </div>
              <div className="text-[10px] tracking-[0.26em] text-black/35">POSITIONNEMENT</div>
            </div>

            {steps[active] && (
              <>
                <div className="mt-3 text-2xl font-semibold tracking-[-0.015em] text-black/80">
                  (<span style={{ color: ACCENT }}>{steps[active].n}</span>) {steps[active].title}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-black/60">{steps[active].lead}</p>

                {/* Micro navigation */}
                <div className="mt-6 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onChange(Math.max(0, active - 1))}
                    disabled={active === 0}
                    className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[10px] tracking-[0.26em] text-black/60 disabled:opacity-30"
                  >
                    ← PREV
                  </button>
                  <button
                    type="button"
                    onClick={() => onChange(Math.min(steps.length - 1, active + 1))}
                    disabled={active === steps.length - 1}
                    className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[10px] tracking-[0.26em] text-black/60 disabled:opacity-30"
                  >
                    NEXT <span style={{ color: ACCENT }}>→</span>
                  </button>
                </div>
              </>
            )}
          </Card>
        </motion.div>
      </div>

      {/* RIGHT — Rail */}
      <div className="md:col-span-8">
        <div className="relative rounded-3xl border border-black/10 bg-white/55 p-7 shadow-[0_0_0_1px_rgba(0,0,0,0.02)_inset] md:p-9">
          <div className="pointer-events-none absolute left-8 right-8 top-1/2 h-px -translate-y-1/2 bg-black/10" />
          <motion.div
            style={{ opacity: glow, backgroundColor: `${ACCENT}55` }}
            className="pointer-events-none absolute left-8 right-8 top-1/2 h-px -translate-y-1/2"
          />

          <div className="relative grid grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <button
                key={s.n}
                type="button"
                onClick={() => onChange(i)}
                aria-current={i === active}
                className="relative text-left focus:outline-none"
              >
                <Node step={s as any} active={i === active} side={i % 2 === 0 ? "top" : "bottom"} />
              </button>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-between text-[10px] tracking-[0.26em] text-black/45">
            <span>RAIL — POSITIONNEMENT</span>
            <span style={{ color: ACCENT }}>→</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ✅ DETAILS — avec accès direct aux autres axes */
function Details({
  active,
  onChange,
}: {
  active: number;
  onChange: (i: number) => void;
}) {
  const s = steps[active] as any;

  return (
    <div className="grid h-full items-center gap-10 md:grid-cols-12">
      <div className="md:col-span-7">
        <div className="text-[10px] tracking-[0.26em]" style={{ color: ACCENT }}>
          NOTRE POSITIONNEMENT FACE À CES ENJEUX
        </div>

        <motion.h3
          key={s.n}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.02em] md:text-6xl"
        >
          <span style={{ color: ACCENT }}>{s.n}</span>.
          <br />
          <span className="italic text-black/60">{s.title}</span>
        </motion.h3>

        <motion.p
          key={s.title + "_lead"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.55, ease: "easeOut" }}
          className="mt-7 max-w-xl text-sm leading-relaxed text-black/55"
        >
          {s.lead}
        </motion.p>

        {/* ✅ Accès direct aux axes */}
        <div className="mt-6 flex flex-wrap gap-2">
          {steps.map((ax, i) => {
            const isActive = i === active;
            return (
              <button
                key={ax.n}
                type="button"
                onClick={() => onChange(i)}
                className="rounded-full border px-3 py-1 text-[10px] tracking-[0.22em] transition"
                style={{
                  borderColor: isActive ? `${ACCENT}55` : "rgba(0,0,0,0.12)",
                  backgroundColor: isActive ? `${ACCENT}0D` : "rgba(255,255,255,0.60)",
                  color: isActive ? ACCENT : "rgba(0,0,0,0.70)",
                  boxShadow: isActive ? `0 0 0 6px ${ACCENT}12` : "none",
                }}
                aria-current={isActive}
              >
                {ax.n} · {ax.title}
              </button>
            );
          })}
        </div>

        {/* ✅ Prev / Next */}
        <div className="mt-4 flex items-center gap-3">
          <button
            type="button"
            onClick={() => onChange(Math.max(0, active - 1))}
            disabled={active === 0}
            className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[10px] tracking-[0.26em] text-black/60 disabled:opacity-30"
          >
            ← PREV
          </button>
          <button
            type="button"
            onClick={() => onChange(Math.min(steps.length - 1, active + 1))}
            disabled={active === steps.length - 1}
            className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[10px] tracking-[0.26em] text-black/60 disabled:opacity-30"
          >
            NEXT <span style={{ color: ACCENT }}>→</span>
          </button>
        </div>

        <ul className="mt-6 space-y-2 pl-5 text-sm leading-relaxed text-black/55">
          {s.bullets.map((b: string) => (
            <li key={b} className="list-disc">
              {b}
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-xl text-sm leading-relaxed text-black/55">{s.closing}</p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Tag>Structuration</Tag>
          <Tag>Sécurisation</Tag>
          <Tag>Maîtrise</Tag>
        </div>
      </div>

      <div className="md:col-span-5">
        <Card>
          <div className="flex items-center justify-between">
            <div className="text-[10px] tracking-[0.26em]" style={{ color: ACCENT }}>
              CONTEXTE
            </div>
            <span className="text-[10px] tracking-[0.26em] text-black/35">Public</span>
          </div>

          <div className="mt-5 space-y-4 text-sm leading-relaxed text-black/65">
            <p>
              Face aux défis structurels de la transformation publique, ProlabAfrik intervient comme partenaire
              de structuration stratégique et de sécurisation des projets digitaux.
            </p>
            <p>
              Nous ne proposons pas une digitalisation opportuniste. Nous accompagnons une transformation organisée,
              progressive et maîtrisée.
            </p>
          </div>

          <Divider />

          <div className="flex items-center justify-between">
            <div className="text-[10px] tracking-[0.26em]" style={{ color: ACCENT }}>
              RÉSULTAT ATTENDU
            </div>
            <span className="text-[10px] tracking-[0.26em] text-black/35">Output</span>
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={s.deliverable}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="mt-5"
            >
              <div className="text-2xl font-semibold tracking-[-0.015em] text-black/80">
                {s.deliverable}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-black/60">
                Une trajectoire claire, un cadre maîtrisé, et une transformation durable.
              </p>
            </motion.div>
          </AnimatePresence>

          <Divider />

          <div className="grid gap-3">
            <MetaRow k="Cadence" v="progressive" />
            <MetaRow k="Exigence" v="sécurité & conformité" />
            <MetaRow k="Finalité" v="bénéfice tangible & autonomie" />
          </div>
        </Card>
      </div>
    </div>
  );
}

function Next() {
  return (
    <div className="grid h-full items-center gap-10 md:grid-cols-12">
      <div className="md:col-span-8">
        <div className="text-[10px] tracking-[0.26em]" style={{ color: ACCENT }}>
          ENGAGEMENT
        </div>

        <h3 className="mt-5 text-6xl font-semibold leading-[0.92] tracking-[-0.02em] md:text-7xl">
          ProlabAfrik :
          <br />
          <span className="italic" style={{ color: ACCENT }}>
            un partenaire de long terme
          </span>
          .
        </h3>

        <p className="mt-8 max-w-xl text-sm leading-relaxed text-black/55">
          Nous intervenons non comme un prestataire ponctuel, mais comme un acteur engagé dans la structuration durable
          des systèmes publics.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Tag>Structuration durable</Tag>
          <Tag>Vision long terme</Tag>
          <Tag>Souveraineté</Tag>
        </div>
      </div>

      <div className="md:col-span-4">
        <Card>
          <div className="text-[10px] tracking-[0.26em]" style={{ color: ACCENT }}>
            POSITION
          </div>

          <div className="mt-5 text-sm leading-relaxed text-black/65">
            Un partenaire stratégique engagé dans la performance, la sécurisation et l’autonomie progressive des systèmes publics.
          </div>

          <Divider />

          <div className="flex items-center justify-between text-[10px] tracking-[0.26em] text-black/45">
            <span>LONG TERME</span>
            <span style={{ color: ACCENT }}>→</span>
          </div>
        </Card>
      </div>
    </div>
  );
}

/* ----------------- UI pieces ----------------- */

function Node({
  step,
  active,
  side,
}: {
  step: any;
  active: boolean;
  side: "top" | "bottom";
}) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: side === "top" ? -10 : 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="absolute left-1/2 top-1/2 h-8 w-px -translate-x-1/2 -translate-y-1/2 bg-black/10" />
      <div
        className="absolute left-1/2 top-1/2 h-8 w-px -translate-x-1/2 -translate-y-1/2"
        style={{ backgroundColor: active ? `${ACCENT}66` : "rgba(0,0,0,0.10)" }}
      />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="h-2 w-2 rounded-full transition"
          style={{
            backgroundColor: active ? `${ACCENT}CC` : "rgba(0,0,0,0.25)",
            boxShadow: active ? `0 0 0 7px ${ACCENT}1A` : "none",
          }}
        />
      </div>

      <motion.div
        whileHover={{ y: side === "top" ? -2 : 2 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={[
          "rounded-2xl border bg-white/75 p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.02)_inset] transition",
          side === "top" ? "mb-20" : "mt-20",
        ].join(" ")}
        style={{
          borderColor: active ? `${ACCENT}40` : "rgba(0,0,0,0.10)",
          backgroundColor: active ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.75)",
        }}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="text-[10px] tracking-[0.26em] text-black/50">
            (<span style={{ color: ACCENT }}>{step.n}</span>)
          </div>
          <motion.div animate={{ opacity: active ? 1 : 0.5 }} className="text-[10px] tracking-[0.26em] text-black/45">
            AXE
          </motion.div>
        </div>

        <div className="mt-3 text-sm font-semibold tracking-[-0.01em] text-black/80">{step.title}</div>

        <div className="mt-3 text-[12px] leading-relaxed text-black/55 line-clamp-3">{step.lead}</div>

        <motion.div
          initial={false}
          animate={{ width: active ? 180 : 90, opacity: active ? 1 : 0.55 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mt-5 h-px"
          style={{ backgroundColor: `${ACCENT}66` }}
        />
      </motion.div>
    </motion.div>
  );
}

function MetaRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-black/10 bg-white/60 px-4 py-3">
      <div className="text-[10px] tracking-[0.26em] text-black/50">{k}</div>
      <div className="text-sm text-black/65">{v}</div>
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white/70 p-7 shadow-[0_0_0_1px_rgba(0,0,0,0.02)_inset]">
      {children}
    </div>
  );
}

function Divider() {
  return <div className="my-7 h-px w-full bg-black/10" />;
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="rounded-full border bg-white/70 px-3 py-1 text-[10px] tracking-[0.26em]"
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

/* ----------------- paper treatment ----------------- */

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
      <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_15%,rgba(0,0,0,0.06),rgba(0,0,0,0)_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_100%,rgba(0,0,0,0.08),rgba(0,0,0,0)_55%)]" />
    </div>
  );
}

function PaperCorners() {
  return (
    <>
      <div className="pointer-events-none absolute left-6 top-6 z-20 text-black/20">*</div>
      <div className="pointer-events-none absolute right-6 bottom-6 z-20 text-black/20">—</div>
    </>
  );
}