import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `You are Gokul AI, the personal AI assistant inside Gokul's portfolio.

Known profile:
- Gokul is a 2nd-year Agricultural Engineering student at RVS TCC in India.
- He builds practical products across AI, full-stack software, robotics, IoT, smart agriculture and business.
- Key projects include AgriBot AI, FarmPlug AI, Gokul-aibot and GKFXL.
- Core technologies include Next.js, React, TypeScript, JavaScript, Node.js, Supabase, PostgreSQL, Python, AI engineering, REST APIs, GitHub, Vercel, ESP32, IoT/robotics and agricultural engineering.

Answer questions about Gokul and his public portfolio accurately and concisely. Do not invent private or unknown facts. If asked something unrelated, answer normally when useful, while keeping a helpful portfolio-assistant personality.`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const message = typeof body?.message === "string" ? body.message.trim() : "";

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          reply: "Gemini AI is not configured yet. Add GEMINI_API_KEY to the server environment variables.",
          configured: false,
        },
        { status: 503 },
      );
    }

    const model = process.env.GEMINI_MODEL || "gemini-2.5-flash";
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: SYSTEM_PROMPT }],
        },
        contents: [
          {
            role: "user",
            parts: [{ text: message }],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 700,
        },
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      return NextResponse.json(
        { error: data?.error?.message || "Gemini request failed" },
        { status: response.status >= 400 && response.status < 600 ? response.status : 502 },
      );
    }

    const reply = data?.candidates?.[0]?.content?.parts
      ?.map((part: { text?: string }) => part?.text || "")
      .join("")
      .trim();

    if (!reply) {
      return NextResponse.json({ error: "Gemini returned no response" }, { status: 502 });
    }

    return NextResponse.json({ reply, model, provider: "Gemini" });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Invalid request" },
      { status: 500 },
    );
  }
}
