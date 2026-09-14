import { NextResponse } from "next/server";

export const runtime = "nodejs";

const APK_URL = "https://github.com/gokulmaniraj2008-collab/Gokul-aibot/releases/download/queuelens-v1.0.0/QueueLens-v1.0.0.apk";

export async function GET() {
  const upstream = await fetch(APK_URL, { redirect: "follow", cache: "no-store" });
  if (!upstream.ok || !upstream.body) {
    return NextResponse.json({ error: "QueueLens APK is not available yet." }, { status: 503 });
  }
  return new NextResponse(upstream.body, {
    status: 200,
    headers: {
      "Content-Type": "application/vnd.android.package-archive",
      "Content-Disposition": 'attachment; filename="QueueLens-v1.0.0.apk"',
      "Cache-Control": "public, max-age=300",
    },
  });
}
