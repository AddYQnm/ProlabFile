"use client";
import { motion } from "framer-motion";

const blocks = [
  {
    k: "(01)",
    title: "Bénéficiez d'un support",
    text:
      "Un accompagnement sur mesure et un soutien à chaque étape pour concrétiser vos projets.",
  },
  {
    k: "(02)",
    title: "Découvrez les opportunités",
    text:
      "Explorez les opportunités numériques en plein essor sur le continent africain et saisissez les occasions de marché.",
  },
  {
    k: "(03)",
    title: "Collaborez et innovez",
    text:
      "Rejoignez une dynamique de collaboration pour repousser les limites et transformer des idées en réalité.",
  },
  {
    k: "(04)",
    title: "Lancez votre projet",
    text:
      "Donnez vie à vos projets ambitieux avec une équipe expérimentée et un cadre clair.",
  },
];

export default function PageProject() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-black text-white">
      <Noise />
      <TopBar index="(04)" title="DÉMARREZ VOTRE PROJET" />

      <div className="mx-auto flex h-full max-w-6xl flex-col justify-center px-8 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-[42px] font-semibold leading-[0.95] md:text-[78px]"
        >
          Démarrez votre projet
          <br className="hidden md:block" />
          avec <span className="italic text-white/75">ProlabAfrik</span>.
        </motion.h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {blocks.map((b, i) => (
            <motion.div
              key={b.k}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i, duration: 0.55, ease: "easeOut" }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-xs tracking-widest text-white/60">{b.k}</div>
              <h3 className="mt-2 text-xl font-semibold">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{b.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between text-xs text-white/55">
          <div className="tracking-widest">
            <span className="text-white/80">(05)</span> Contact →
          </div>
          <span className="text-white/70">→</span>
        </div>
      </div>

      <CornerMarks />
    </div>
  );
}

/** helpers (identiques aux autres pages) */
function TopBar({ title, index }: { title: string; index: string }) {
  return (
    <div className="absolute left-8 right-8 top-8 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Mark />
        <div className="text-xs tracking-[0.35em] text-white/60">{index} {title}</div>
      </div>
      <Plus />
    </div>
  );
}
function Noise() { /* idem */ 
  return (
    <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay">
      <div className="h-full w-full" style={{ backgroundImage:
        "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22 opacity=%220.5%22/%3E%3C/svg%3E')" }} />
    </div>
  );
}
function Mark() {
  return (
    <div className="grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-white/5">
      <div className="h-3 w-3 rounded-sm bg-white/70" />
    </div>
  );
}
function Plus() {
  return (
    <div className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5">
      <span className="text-lg leading-none text-white/80">+</span>
    </div>
  );
}
function CornerMarks() {
  return (
    <>
      <div className="absolute left-8 top-8 text-white/50">*</div>
      <div className="absolute right-8 bottom-8 text-white/25">—</div>
    </>
  );
}
