import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body?.name ?? "").trim();
    const company = String(body?.company ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const source = String(body?.source ?? "unknown").trim();

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !company || !emailOk) {
      return NextResponse.json(
        { ok: false, error: "Invalid payload" },
        { status: 400 }
      );
    }

    // ✅ Ici tu peux:
    // - envoyer vers Airtable / Notion / Google Sheet
    // - envoyer un email à toi (Resend, Nodemailer)
    // - stocker en DB
    // Pour l’instant: log server (Vercel logs)
    console.log("[LEAD]", { name, company, email, source, at: new Date().toISOString() });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("POST /api/lead error", e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}