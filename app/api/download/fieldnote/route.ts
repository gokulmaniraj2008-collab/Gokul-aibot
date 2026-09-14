import { NextResponse } from "next/server";

const APK_URL =
  "https://github.com/gokulmaniraj2008-collab/Gokul-aibot/releases/download/fieldnote-v1.0.1/FieldNote-v1.0.1.apk";

export async function GET() {
  const response = await fetch(APK_URL, {
    cache: "no-store",
    redirect: "follow",
  });

  if (!response.ok || !response.body) {
    return NextResponse.json(
      { error: "FieldNote APK is currently unavailable." },
      { status: 502 },
    );
  }

  return new Response(response.body, {
    status: 200,
    headers: {
      "Content-Type": "application/vnd.android.package-archive",
      "Content-Disposition": 'attachment; filename="FieldNote-v1.0.1.apk"',
      "Cache-Control": "no-store",
    },
  });
}
