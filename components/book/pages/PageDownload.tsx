"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookFooter, BookHeader } from "@/components/book/BookChrome";

const ACCENT = "#CF2B5B";

export default function PageDownload() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", company: "", email: "" });

  const emailOk = useMemo(
    () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()),
    [form.email]
  );
  const canSubmit =
    form.name.trim() && form.company.trim() && emailOk && status !== "loading";

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
    <section className="relative w-full bg-[#f5f5f3] text-[#111] md:h-screen md:w-screen md:overflow-hidden">
      <PaperNoise />
      <PaperVignette />

      <div className="mx-auto w-full max-w-7xl px-5 pt-10 sm:px-6 md:px-12 md:pt-14">
        <BookHeader page="PAGE 08" />
      </div>

      {/* rail top (plus sobre + accent) */}
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-12">
        <div className="mt-6 flex items-center justify-between gap-6">
          <div className="hidden md:flex items-center gap-3 text-[10px] tracking-[0.26em] text-black/50">
            <span style={{ color: ACCENT }}>B2B PDF</span>
            <span className="text-black/25">—</span>
            <span className="text-black/70">Livraison immédiate</span>
          </div>

          <div className="flex flex-1 items-center justify-end gap-4">
            <div className="h-[2px] flex-1 overflow-hidden rounded-full bg-black/10 md:max-w-[420px]">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.1, ease: "easeOut" }}
                className="h-full w-full"
                style={{ transformOrigin: "0% 50%", backgroundColor: `${ACCENT}B3` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-center px-6 pt-12 pb-24 md:h-[calc(100vh-240px)] md:px-16 md:pt-10 md:pb-0">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          {/* Left */}
          <div className="md:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="font-semibold leading-[0.92] tracking-[-0.02em]"
              style={{ fontSize: "clamp(40px, 4.8vw, 86px)" }}
            >
              Recevez le dossier
              <br className="hidden md:block" />
              de présentation.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
              className="mt-8 max-w-2xl text-[16px] leading-relaxed text-black/65"
            >
              Un PDF clair et synthétique — conçu pour vos échanges B2B, prêt à partager
              (email, meeting, WhatsApp).
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.65, ease: "easeOut" }}
              className="mt-10 grid gap-3 md:grid-cols-2"
            >
              <MiniCard label="Contenu" value="Présentation, offres, méthode" />
              <MiniCard label="Format" value="PDF — 4 à 8 pages" />
              <MiniCard label="Usage" value="Email, meeting, pitch" />
              <MiniCard label="Délai" value="Instantané" />
            </motion.div>

            <div className="mt-10 hidden md:block">
              <div
                className="h-px w-full"
                style={{
                  backgroundImage: `linear-gradient(to right, transparent, ${ACCENT}3D, transparent)`,
                }}
              />
              <div className="mt-6 text-[11px] tracking-[0.22em] text-black/55">
                CONTACT DIRECT —{" "}
                <span className="text-black/75">contact.tiegoquenum@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.7, ease: "easeOut" }}
              className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.02)_inset] md:p-7"
            >
              {/* glow accent très léger */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.55]">
                <div
                  className="absolute -left-24 -top-24 h-64 w-64 rounded-full blur-3xl"
                  style={{ backgroundColor: `${ACCENT}14` }}
                />
                <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-black/5 blur-3xl" />
              </div>

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] tracking-[0.26em]" style={{ color: ACCENT }}>
                    TÉLÉCHARGEMENT
                  </div>
                  <span className="text-[10px] tracking-[0.26em] text-black/35">
                    Formulaire
                  </span>
                </div>

                <form onSubmit={onSubmit} className="mt-6 grid gap-3">
                  <Input
                    placeholder="Nom"
                    value={form.name}
                    onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                    accent={ACCENT}
                  />
                  <Input
                    placeholder="Société"
                    value={form.company}
                    onChange={(e) => setForm((s) => ({ ...s, company: e.target.value }))}
                    accent={ACCENT}
                  />
                  <Input
                    placeholder="Email professionnel"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                    accent={ACCENT}
                    state={form.email.length === 0 ? "idle" : emailOk ? "ok" : "bad"}
                  />

                  <motion.button
                    type="submit"
                    whileTap={{ scale: 0.99 }}
                    whileHover={canSubmit ? { y: -1 } : undefined}
                    disabled={!canSubmit}
                    className={[
                      "mt-2 inline-flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-[11px] tracking-[0.26em] transition",
                      canSubmit
                        ? "text-white"
                        : "cursor-not-allowed text-black/55",
                    ].join(" ")}
                    style={{
                      borderColor: canSubmit ? `${ACCENT}55` : "rgba(0,0,0,0.10)",
                      backgroundColor: canSubmit ? ACCENT : "rgba(0,0,0,0.06)",
                      boxShadow: canSubmit ? `0 10px 30px ${ACCENT}26` : "none",
                    }}
                  >
                    <span>
                      {status === "loading"
                        ? "ENVOI..."
                        : status === "success"
                        ? "ENVOYÉ"
                        : "RECEVOIR LE DOSSIER"}
                    </span>
                    <span className={canSubmit ? "text-white/90" : "text-black/40"}>
                      {status === "loading" ? "…" : "→"}
                    </span>
                  </motion.button>

                  <AnimatePresence mode="popLayout">
                    {status === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="rounded-2xl border p-4 text-[12px] text-black/70"
                        style={{
                          borderColor: `${ACCENT}33`,
                          backgroundColor: `${ACCENT}0D`,
                        }}
                      >
                        Dossier envoyé. Vérifiez votre boîte mail (et les spams).
                      </motion.div>
                    )}
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="rounded-2xl border border-black/10 bg-black/[0.03] p-4 text-[12px] text-black/70"
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

                {/* Contact block */}
                <div className="mt-7 rounded-3xl border border-black/10 bg-white/60 p-5">
                  <div className="flex items-center justify-between">
                    <div className="text-[11px] tracking-[0.26em]" style={{ color: ACCENT }}>
                      CONTACT
                    </div>
                    <span className="text-[10px] tracking-[0.26em] text-black/35">
                      Direct
                    </span>
                  </div>

                  <div className="mt-4 space-y-2 text-[13px] text-black/75">
                    <div className="flex flex-wrap gap-x-2">
                      <span className="font-semibold">Email :</span>
                      <span className="break-all">contact.tiegoquenum@gmail.com</span>
                    </div>
                    <div className="flex flex-wrap gap-x-2">
                      <span className="font-semibold">Téléphone :</span>
                      <span>+33 6 81 68 09 13 <br />
                       +229 52 62 29 10
                    </span>
                    </div>
                  </div>

                  <div
                    className="mt-5 h-px w-full"
                    style={{
                      backgroundImage: `linear-gradient(to right, transparent, ${ACCENT}3D, transparent)`,
                    }}
                  />
                  <div className="mt-4 flex items-center justify-between text-[10px] tracking-[0.26em] text-black/45">
                    <span>RÉPONSE</span>
                    <span className="text-black/65">Rapide</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* mobile contact */}
            <div className="mt-6 md:hidden text-[11px] tracking-[0.22em] text-black/55">
              CONTACT — <span className="text-black/75">contact@prolabafrik.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 pb-10 sm:px-6 md:px-12 md:pb-14">
        <BookFooter left="PROLABAFRIK · DOSSIER" right="FIN →" />
      </div>

      <PaperCorners />
    </section>
  );
}

/* ----------------- atoms ----------------- */

function MiniCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/55 p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.02)_inset]">
      <div className="text-[11px] tracking-[0.26em] text-black/55">{label}</div>
      <div className="mt-2 text-[13px] text-black/75">{value}</div>
    </div>
  );
}

function Input({
  accent,
  state = "idle",
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  accent: string;
  state?: "idle" | "ok" | "bad";
  className?: string;
}) {
  const border =
    state === "ok"
      ? `${accent}55`
      : state === "bad"
      ? "rgba(0,0,0,0.18)"
      : "rgba(0,0,0,0.14)";

  const ring =
    state === "ok"
      ? `${accent}1A`
      : state === "bad"
      ? "rgba(0,0,0,0.10)"
      : `${accent}14`;

  return (
    <div className="relative">
      <input
        {...props}
        className={[
          "w-full rounded-2xl border bg-white/70 px-4 py-3 text-black placeholder:text-black/40 outline-none transition",
          className,
        ].join(" ")}
        style={{
          borderColor: border,
          boxShadow: `0 0 0 6px ${ring}`,
        }}
        onFocus={(e) => {
          // let browser handle focus; we keep the ring
          props.onFocus?.(e);
        }}
      />

      {/* tiny status dot (subtil) */}
      {state !== "idle" && (
        <span
          className="pointer-events-none absolute right-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full"
          style={{ backgroundColor: state === "ok" ? `${accent}CC` : "rgba(0,0,0,0.35)" }}
        />
      )}
    </div>
  );
}

/* ----------------- paper treatment ----------------- */

function PaperNoise() {
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

function PaperVignette() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_20%,rgba(0,0,0,0.06),rgba(0,0,0,0)_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_100%,rgba(0,0,0,0.05),rgba(0,0,0,0)_55%)]" />
    </div>
  );
}

function PaperCorners() {
  return (
    <>
      <div className="pointer-events-none absolute left-6 top-6 text-black/20">*</div>
      <div className="pointer-events-none absolute right-6 bottom-6 text-black/20">
        —
      </div>
    </>
  );
}