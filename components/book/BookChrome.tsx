"use client";

import React from "react";

export function BookHeader({
  page,
  left = "PROLABAFRIK — DOSSIER",
  year = "2026",
}: {
  page: string; // ex "PAGE 03"
  left?: string;
  year?: string;
}) {
  return (
    <>
      <div className="flex items-center justify-between gap-4 text-[10px] tracking-[0.26em] text-black/45 md:text-[11px]">
        <div className="min-w-0 truncate">{left}</div>
        <div className="hidden sm:block">{year}</div>
        <div className="shrink-0">{page}</div>
      </div>
      <div className="mt-4 h-px bg-black/10" />
    </>
  );
}

export function BookFooter({
  left,
  right,
}: {
  left: string;
  right: string;
}) {
  return (
    <>
      <div className="mt-12 h-px bg-black/10" />
      <footer className="mt-4 flex items-center justify-between gap-4 text-[11px] tracking-[0.24em] text-black/50">
        <span className="min-w-0 truncate">{left}</span>
        <span className="shrink-0">{right}</span>
      </footer>
    </>
  );
}