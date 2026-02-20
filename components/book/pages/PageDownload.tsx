"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageDownload() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", company: "", email: "" });

  const emailOk = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()), [form.email]);
  const canSubmit = form.name.trim() && form.company.trim() && emailOk && status !== "loading";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    try {
      setStatus("loading");
      // TODO: brancher ici ton endpoint (ex: /api/dossier) pour envoyer le PDF / lien
      await new Promise((r) => setTimeout(r, 900));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    // ✅ Responsive wrapper:
    // - mobile: scroll vertical normal (pas de h-screen / overflow-hidden)
    // - desktop: plein écran + overflow hidden (look magazine)
    // ✅ Thème clair cohérent
    <div className="relative w-full bg-[#f5f5f3] text-[#111] md:h-screen md:w-screen md:overflow-hidden">
      <Noise />
      <Vignette />
      <TopBar title="DOSSIER" index="(06)" />

      {/* rail top magazine */}
      <div className="absolute left-8 right-8 top-[84px] z-20 flex items-center justify-between gap-6">
        <div className="hidden md:flex items-center gap-3 text-xs text-black/55">
          <span className="tracking-[0.35em]">B2B PDF</span>
          <span className="text-black/25">—</span>
          <span className="text-black/70">Edition courte & claire</span>
        </div>

        <div className="flex flex-1 items-center justify-end gap-4">
          <div className="hidden md:block text-xs tracking-[0.35em] text-black/45">
            <span className="text-black/70">→</span> Livraison immédiate
          </div>
          <div className="h-[2px] w-[160px] overflow-hidden rounded-full bg-black/10">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="h-full w-full bg-black/45"
              style={{ transformOrigin: "0% 50%" }}
            />
          </div>
        </div>
      </div>

      {/* ✅ Desktop: center vertically (magazine cover feel) */}
      {/* ✅ Mobile: normal flow, no forced height */}
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-center px-6 pt-28 pb-24 md:h-full md:px-16 md:pt-28 md:pb-0">
        {/* Headline + sub */}
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="text-[42px] font-semibold leading-[0.92] tracking-[-0.02em] md:text-[86px]"
            >
              Recevez le dossier
              <br className="hidden md:block" />
              de présentation.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
              className="mt-8 max-w-2xl text-lg leading-relaxed text-black/65"
            >
              Un PDF clair et synthétique, basé sur les informations du site, conçu pour vos échanges B2B — prêt à partager.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.65, ease: "easeOut" }}
              className="mt-10 grid gap-3 md:grid-cols-2"
            >
              <MiniCard label="Contenu" value="Présentation, services, méthode" />
              <MiniCard label="Format" value="PDF — 4 à 8 pages" />
              <MiniCard label="Usage" value="Email, meeting, pitch" />
              <MiniCard label="Délai" value="Instantané" />
            </motion.div>

            <div className="mt-10 hidden md:block">
              <div className="h-px w-full bg-gradient-to-r from-black/0 via-black/15 to-black/0" />
              <div className="mt-6 text-xs text-black/55">
                <span className="text-black/80">(07)</span> Contact direct :{" "}
                <span className="text-black/75">contact.tiegoquenum@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.7, ease: "easeOut" }}
              className="relative overflow-hidden rounded-3xl border border-black/10 bg-black/[0.03] p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.02)_inset] md:p-7"
            >
              {/* subtle glow */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.7]">
                <div className="absolute -left-24 -top-24 h-60 w-60 rounded-full bg-black/10 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 h-60 w-60 rounded-full bg-black/5 blur-3xl" />
              </div>

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="text-xs tracking-[0.35em] text-black/55">FORMULAIRE</div>
                  <span className="text-xs text-black/35">Secure</span>
                </div>

                <form onSubmit={onSubmit} className="mt-6 grid gap-3">
                  <Input
                    placeholder="Nom"
                    value={form.name}
                    onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                  />
                  <Input
                    placeholder="Société"
                    value={form.company}
                    onChange={(e) => setForm((s) => ({ ...s, company: e.target.value }))}
                  />
                  <Input
                    placeholder="Email professionnel"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                    className={
                      form.email.length === 0
                        ? ""
                        : emailOk
                        ? "border-black/20 focus:border-black/35"
                        : "border-black/10 focus:border-black/25"
                    }
                  />

                  <motion.button
                    type="submit"
                    whileTap={{ scale: 0.99 }}
                    whileHover={{ y: -1 }}
                    disabled={!canSubmit}
                    className={[
                      "mt-2 inline-flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-xs tracking-[0.35em] transition",
                      canSubmit
                        ? "border-black/15 bg-black text-white hover:border-black/25"
                        : "border-black/10 bg-black/20 text-black/60 cursor-not-allowed",
                    ].join(" ")}
                  >
                    <span>{status === "loading" ? "ENVOI..." : status === "success" ? "ENVOYÉ" : "RECEVOIR LE DOSSIER"}</span>
                    <span className="text-white/80">{status === "loading" ? "…" : "→"}</span>
                  </motion.button>

                  <AnimatePresence mode="popLayout">
                    {status === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="rounded-2xl border border-black/10 bg-black/[0.04] p-4 text-xs text-black/70"
                      >
                        Dossier envoyé. Vérifiez votre boîte mail (et les spams).
                      </motion.div>
                    )}
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="rounded-2xl border border-black/10 bg-black/[0.04] p-4 text-xs text-black/70"
                      >
                        Oups — réessayez ou contactez-nous directement par email.
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex items-center justify-between text-[11px] text-black/50">
                    <span>Vos informations restent confidentielles.</span>
                    <span className="hidden md:block">RGPD</span>
                  </div>
                </form>

                {/* Contact block “magazine” */}
                <div className="mt-7 grid gap-3 rounded-3xl border border-black/10 bg-black/[0.04] p-5">
                  <div className="flex items-center justify-between">
                    <div className="text-xs tracking-[0.35em] text-black/55">CONTACT</div>
                    <span className="text-xs text-black/35">Direct</span>
                  </div>
                  <div className="text-sm text-black/75">Email : contact.tiegoquenum@gmail.com</div>
                  <div className="text-sm text-black/75">Tél : 07 55 84 73 19</div>

                  <div className="mt-2 h-px w-full bg-gradient-to-r from-black/0 via-black/12 to-black/0" />
                  <div className="flex items-center justify-between text-xs text-black/50">
                    <span className="tracking-[0.35em]">DISPONIBILITÉ</span>
                    <span className="text-black/70">Réponse rapide</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* mobile contact */}
            <div className="mt-6 md:hidden text-xs text-black/55">
              <span className="text-black/80">(07)</span> Contact direct :{" "}
              <span className="text-black/75">contact.tiegoquenum@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <CornerMarks />
    </div>
  );
}

/* ----------------- UI atoms ----------------- */

function MiniCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4">
      <div className="text-[11px] tracking-[0.35em] text-black/55">{label}</div>
      <div className="mt-2 text-sm text-black/75">{value}</div>
    </div>
  );
}

function Input({
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { className?: string }) {
  return (
    <input
      {...props}
      className={[
        "w-full rounded-2xl border border-black/15 bg-white/70 px-4 py-3 text-black placeholder:text-black/40 outline-none transition",
        "focus:border-black/30 focus:ring-0",
        className,
      ].join(" ")}
    />
  );
}

/** shared bits */
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

function Vignette() {
  // ✅ vignette adaptée au thème clair
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_20%,rgba(0,0,0,0.06),rgba(0,0,0,0)_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_100%,rgba(0,0,0,0.05),rgba(0,0,0,0)_55%)]" />
    </div>
  );
}

function Noise() {
  // ✅ grain discret sur fond clair
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
      <div className="h-3 w-3 rounded-sm bg-black/60" />
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