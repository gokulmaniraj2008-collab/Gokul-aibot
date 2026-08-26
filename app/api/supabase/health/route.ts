import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    return NextResponse.json(
      { ok: false, connected: false, error: "Supabase environment variables are not configured" },
      { status: 503 },
    );
  }

  try {
    const supabase = createClient(url, key, { auth: { persistSession: false } });
    const { error } = await supabase.from("profiles").select("id").limit(1);

    if (error) {
      return NextResponse.json(
        { ok: false, connected: false, error: error.message },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, connected: true, service: "supabase" });
  } catch (error) {
    return NextResponse.json(
      { ok: false, connected: false, error: error instanceof Error ? error.message : "Supabase connection failed" },
      { status: 502 },
    );
  }
}
