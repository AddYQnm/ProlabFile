/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookFooter, BookHeader } from "@/components/book/BookChrome";

const ACCENT = "#CF2B5B";
const PDF_URL = "/prolabafrik-dossier-2026.pdf";

export default function PageDownload() {
  function downloadPdf() {
    const a = document.createElement("a");
    a.href = PDF_URL;
    a.download = "PROLABAFRIK_DOSSIER_2026.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  return (
    <section className="relative w-full bg-[#f5f5f3] text-[#111] md:h-screen md:w-screen md:overflow-hidden">
      <PaperNoise />
      <PaperVignette />

      <div className="mx-auto w-full max-w-7xl px-5 pt-10 sm:px-6 md:px-12 md:pt-14">
        <BookHeader page="PAGE 08" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col justify-center px-6 pt-12 pb-24 md:h-[calc(100vh-240px)] md:px-16 md:pt-10 md:pb-0">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="font-semibold leading-[0.92] tracking-[-0.02em]"
              style={{ fontSize: "clamp(40px, 4.8vw, 86px)" }}
            >
              Téléchargez le dossier
              <br className="hidden md:block" />
              de présentation.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
              className="mt-8 max-w-2xl text-[16px] leading-relaxed text-black/65"
            >
              PDF clair et synthétique — prêt à partager (email, meeting, WhatsApp).
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.65, ease: "easeOut" }}
              className="mt-10 grid gap-3 md:grid-cols-2"
            >
              <MiniCard label="Contenu" value="Présentation, offres, méthode" />
              <MiniCard label="Format" value="PDF — A4 paysage" />
              <MiniCard label="Usage" value="Email, meeting, pitch" />
              <MiniCard label="Délai" value="Instantané" />
            </motion.div>
          </div>

          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.7, ease: "easeOut" }}
              className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.02)_inset] md:p-7"
            >
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
                  <span className="text-[10px] tracking-[0.26em] text-black/35">Accès libre</span>
                </div>

                <motion.button
                  type="button"
                  whileTap={{ scale: 0.99 }}
                  whileHover={{ y: -1 }}
                  onClick={downloadPdf}
                  className="mt-6 inline-flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-[11px] tracking-[0.26em] text-white transition"
                  style={{
                    borderColor: `${ACCENT}55`,
                    backgroundColor: ACCENT,
                    boxShadow: `0 10px 30px ${ACCENT}26`,
                  }}
                >
                  <span>TÉLÉCHARGER LE DOSSIER</span>
                  <span className="text-white/90">→</span>
                </motion.button>

                

                <div className="mt-7 rounded-3xl border border-black/10 bg-white/60 p-5">
                  <div className="flex items-center justify-between">
                    <div className="text-[11px] tracking-[0.26em]" style={{ color: ACCENT }}>
                      CONTACT
                    </div>
                    <span className="text-[10px] tracking-[0.26em] text-black/35">Direct</span>
                  </div>

                  <div className="mt-4 space-y-2 text-[13px] text-black/75">
                    <div className="flex flex-wrap gap-x-2">
                      <span className="font-semibold">Email :</span>
                      <span className="break-all">contact@prolabafrik.com</span>
                    </div>
                    <div className="flex flex-wrap gap-x-2">
                      <span className="font-semibold">Téléphone :</span>
                      <span>
                        +33 6 81 68 09 13 <br />
                        +229 52 62 29 10
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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

/* ---- atoms + paper (inchangés) ---- */

function MiniCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/55 p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.02)_inset]">
      <div className="text-[11px] tracking-[0.26em] text-black/55">{label}</div>
      <div className="mt-2 text-[13px] text-black/75">{value}</div>
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
      <div className="pointer-events-none absolute right-6 bottom-6 text-black/20">—</div>
    </>
  );
}