"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PageCover() {
  return (
    <section className="relative h-full w-full bg-[#f5f5f3] text-black">
      <div className="mx-auto flex h-full max-w-7xl flex-col px-6 py-6 md:px-12 md:py-8">
        {/* TOP HEADER */}
        <header className="flex items-start justify-between">
          <div>
            <div className="text-[13px] font-semibold tracking-wide">DIGITAL</div>
            <div className="text-[36px] font-bold leading-none md:text-[44px]">E-BOOK</div>
            <div className="mt-2 text-[11px] tracking-[0.25em] text-black/60">
              DOSSIER DE PRÉSENTATION B2B
            </div>
          </div>

          {/* ✅ LOGO PROLABAFRIK (remplace le texte) */}
          <div className="flex items-start justify-end">
            {/* 1) Mets ton SVG dans /public sous un nom simple, ex: /public/prolabafrik-logo.svg */}
            <Image
              src="/prolabafrik-logo.svg"
              alt="ProlabAfrik"
              width={140}
              height={34}
              priority
              className="h-7 w-auto opacity-90"
            />
          </div>
        </header>

        {/* MAIN TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-6 max-w-xl"
        >
          <h1 className="text-[26px] font-semibold leading-tight md:text-[32px]">
            Solutions logicielles
            <br />
            sur mesure pour l’Afrique
          </h1>

          <p className="mt-3 text-[14px] leading-relaxed text-black/70">
            ProlabAfrik accompagne les entreprises et organisations dans la conception de solutions
            digitales innovantes, adaptées aux enjeux métiers et aux réalités locales.
          </p>
        </motion.div>

        {/* IMAGE BLOCK — prend le reste de l’écran */}
        <div className="relative mt-auto overflow-hidden rounded-2xl border border-black/10">
          <div className="relative h-[48vh] w-full md:h-[52vh]">
            <Image
              src="/afrik.png"
              alt="Couverture du dossier ProlabAfrik"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* IMAGE CAPTION */}
          <div className="flex flex-col gap-2 bg-white px-4 py-3 md:flex-row md:items-center md:justify-between">
            <div className="text-[11px] tracking-[0.2em] text-black/60">
              INTERACTIVE · DIGITAL DOSSIER
            </div>
            <div className="text-[12px] text-black/65">
              contact@prolabafrik.com<br/> · +33 6 81 68 09 13<br/>· +229 52 62 29 10
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}