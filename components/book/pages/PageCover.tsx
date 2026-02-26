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
            <div className="text-[12px] font-semibold tracking-[0.3em] text-black/70">
              DIGITAL
            </div>

            <div className="mt-1 text-[40px] font-extrabold leading-[0.95] md:text-[48px]">
              E-BOOK
            </div>

            <div className="mt-3 text-[10px] tracking-[0.35em] uppercase text-black/50">
              DOSSIER DE PRÉSENTATION B2B
            </div>
          </div>

          {/* LOGO */}
          <div className="flex items-start justify-end">
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
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl"
        >
          <h1 className="text-[28px] font-medium leading-[1.15] md:text-[34px]">
            Solutions logicielles
            <br />
            <span className="font-semibold">sur mesure pour l’Afrique</span>
          </h1>

          <p className="mt-4 max-w-[520px] text-[14px] leading-[1.75] text-black/65">
            ProlabAfrik accompagne les entreprises et organisations dans la
            conception de solutions digitales innovantes, adaptées aux enjeux
            métiers et aux réalités locales.
          </p>
        </motion.div>

        {/* IMAGE BLOCK */}
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
            <div className="text-[10px] tracking-[0.35em] uppercase text-black/50">
              INTERACTIVE · DIGITAL DOSSIER
            </div>

            <div className="text-[12px] leading-[1.6] text-black/60">
              contact@prolabafrik.com
              <br />
              +33 6 81 68 09 13
              <br />
              +229 52 62 29 10
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}