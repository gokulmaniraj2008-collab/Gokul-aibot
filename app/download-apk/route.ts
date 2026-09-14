import { NextResponse } from "next/server";

const APK_URL =
  "https://github.com/gokulmaniraj2008-collab/Gokul-aibot/releases/latest/download/Gokul-AI.apk";

export async function GET() {
  const response = await fetch(APK_URL, {
    cache: "no-store",
    redirect: "follow",
  });

  if (!response.ok || !response.body) {
    return NextResponse.json(
      { error: "APK is currently unavailable." },
      { status: 503 },
    );
  }

  return new NextResponse(response.body, {
    status: 200,
    headers: {
      "Content-Type": "application/vnd.android.package-archive",
      "Content-Disposition": 'attachment; filename="Gokul-AI.apk"',
      "Cache-Control": "no-store",
    },
  });
}
