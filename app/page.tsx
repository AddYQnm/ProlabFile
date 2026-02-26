"use client";

import { useEffect, useRef } from "react";

import PageCover from "@/components/book/pages/PageCover";
import PageAbout from "@/components/book/pages/PageAbout";
import PageServices from "@/components/book/pages/PageServices";
import PageMethod from "@/components/book/pages/PageMethod";
import PageWhy from "@/components/book/pages/PageWhy";
import PageDownload from "@/components/book/pages/PageDownload";
import PageProject from "@/components/book/pages/PageProject";
import PageReferences from "@/components/book/pages/PageReferences";

export default function Page() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const snapTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // Transforme le scroll vertical en scroll horizontal (naturel)
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();

        const speed = 1.0; // ajuste si besoin (0.8 - 1.4)
        el.scrollLeft += e.deltaY * speed;

        // Snap "doux" : on attend que l'utilisateur arrête de scroller
        if (snapTimerRef.current) window.clearTimeout(snapTimerRef.current);
        snapTimerRef.current = window.setTimeout(() => {
          const pageW = el.clientWidth;
          const index = Math.round(el.scrollLeft / pageW);
          el.scrollTo({ left: index * pageW, behavior: "smooth" });
        }, 120);
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel as any);
      if (snapTimerRef.current) window.clearTimeout(snapTimerRef.current);
    };
  }, []);

  return (
    <main
      ref={scrollerRef}
      className="h-screen w-screen overflow-x-auto overflow-y-hidden bg-black text-white"
      style={{
        WebkitOverflowScrolling: "touch",
        overscrollBehavior: "none",
        scrollbarWidth: "none",
      }}
    >
      <style>{`main::-webkit-scrollbar{display:none;}`}</style>

      <div className="flex h-full w-max">
        <section className="h-screen w-screen flex-shrink-0">
          <PageCover />
        </section>

        <section className="h-screen w-screen flex-shrink-0">
          <PageAbout />
        </section>

        <section id="services" className="h-screen w-screen flex-shrink-0">
          <PageServices />
        </section>

        <section className="h-screen w-screen flex-shrink-0">
          <PageMethod />
        </section>

        <section className="h-screen w-screen flex-shrink-0">
          <PageReferences />
        </section>
z

        <section className="h-screen w-screen flex-shrink-0">
          <PageWhy />
        </section>

        <section id="download" className="h-screen w-screen flex-shrink-0">
          <PageDownload />
        </section>
      </div>
    </main>
  );
}
