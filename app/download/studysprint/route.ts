import { NextResponse } from "next/server";

const apkUrl = "https://github.com/gokulmaniraj2008-collab/Gokul-aibot/releases/download/studysprint-v0.1.0/studysprint-v0.1.0.apk";

export function GET() {
  return NextResponse.redirect(apkUrl, 302);
}
