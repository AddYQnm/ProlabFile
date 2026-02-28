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
import PageOffers from "@/components/book/pages/PageFinal";

function isCoarsePointer() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: coarse)").matches;
}

export default function Page() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const snapTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    // Mobile/tablette tactile: ne pas intercepter (scroll vertical dans les pages + swipe horizontal natif)
    if (isCoarsePointer()) return;

    const onWheel = (e: WheelEvent) => {
      // Desktop: roulette/trackpad => horizontal (TOUJOURS)
      e.preventDefault();

      const speed = 1.0;
      el.scrollLeft += (e.deltaY + e.deltaX) * speed;

      // Snap "doux"
      if (snapTimerRef.current) window.clearTimeout(snapTimerRef.current);
      snapTimerRef.current = window.setTimeout(() => {
        const pageW = el.clientWidth;
        const index = Math.round(el.scrollLeft / pageW);
        el.scrollTo({ left: index * pageW, behavior: "smooth" });
      }, 120);
    };

    // capture: plus fiable si le curseur est au-dessus d’un scrollable interne
    el.addEventListener("wheel", onWheel, { passive: false, capture: true });

    return () => {
      el.removeEventListener("wheel", onWheel as any, { capture: true } as any);
      if (snapTimerRef.current) window.clearTimeout(snapTimerRef.current);
    };
  }, []);

  return (
    <main
      ref={scrollerRef}
      className="h-screen w-screen overflow-x-auto overflow-y-hidden bg-white/95"
      style={{
        WebkitOverflowScrolling: "touch",
        overscrollBehavior: "none",
        scrollbarWidth: "none",
      }}
    >
      <style>{`main::-webkit-scrollbar{display:none;}`}</style>

      <div className="flex h-full w-max">
        <PageShell>
          <PageCover />
        </PageShell>

        <PageShell>
          <PageAbout />
        </PageShell>

        <PageShell id="services">
          <PageServices />
        </PageShell>

        <PageShell>
          <PageMethod />
        </PageShell>

        <PageShell>
          <PageReferences />
        </PageShell>

        <PageShell>
          <PageWhy />
        </PageShell>

        <PageShell>
          <PageOffers />
        </PageShell>

        <PageShell id="download">
          <PageDownload />
        </PageShell>
      </div>
    </main>
  );
}

function PageShell({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="h-screen w-screen flex-shrink-0 overflow-hidden"
    >
      {/* Scroll vertical par page (mobile) */}
      <div className="h-full min-h-0 w-full overflow-y-auto overflow-x-hidden">
        {children}
      </div>
    </section>
  );
}