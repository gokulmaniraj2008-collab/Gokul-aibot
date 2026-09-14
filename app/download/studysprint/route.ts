import { NextResponse } from "next/server";

const APK_URL = "https://github.com/gokulmaniraj2008-collab/Gokul-aibot/releases/download/studysprint-v1.0.0/StudySprint-v1.0.0.apk";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const upstream = await fetch(APK_URL, { cache: "no-store", redirect: "follow", headers: { Accept: "application/vnd.android.package-archive" } });
  if (!upstream.ok || !upstream.body) return NextResponse.json({ error: "StudySprint APK is temporarily unavailable." }, { status: 502 });
  const headers = new Headers();
  headers.set("Content-Type", "application/vnd.android.package-archive");
  headers.set("Content-Disposition", 'attachment; filename="StudySprint-v1.0.0.apk"');
  headers.set("Cache-Control", "public, max-age=300, s-maxage=3600");
  const length = upstream.headers.get("content-length");
  if (length) headers.set("Content-Length", length);
  return new NextResponse(upstream.body, { status: 200, headers });
}
