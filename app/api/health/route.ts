import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  const supabaseConfigured = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY),
  );
  const aiConfigured = Boolean(process.env.AI_API_KEY || process.env.OPENAI_API_KEY);

  return NextResponse.json({
    ok: true,
    service: "gokul-aibot",
    supabaseConfigured,
    aiConfigured,
    timestamp: new Date().toISOString(),
  });
}
