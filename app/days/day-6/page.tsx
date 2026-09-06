"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const styles = `
* { box-sizing: border-box; }
.page { min-height: 100vh; background: #111827; color: #f8fafc; padding: 20px 16px 48px; font-family: Inter, system-ui, sans-serif; }
.shell { max-width: 720px; margin: 0 auto; }
.back { display: inline-block; color: #9ca3af; text-decoration: none; font-size: 13px; margin-bottom: 36px; }
.eyebrow { color: #93c5fd; font-size: 11px; font-weight: 900; letter-spacing: .18em; }
h1 { margin: 10px 0 10px; font-size: clamp(42px, 10vw, 76px); line-height: .94; letter-spacing: -4px; }
.sub { color: #cbd5e1; line-height: 1.65; max-width: 560px; }
.panel { margin-top: 28px; background: #1f2937; border: 1px solid #374151; border-radius: 28px; padding: 20px; box-shadow: 0 20px 60px rgba(0,0,0,.2); }
.stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
.stat { background: #111827; border-radius: 18px; padding: 14px; }
.stat span { display: block; color: #9ca3af; font-size: 11px; text-transform: uppercase; letter-spacing: .12em; }
.stat strong { display: block; font-size: 28px; margin-top: 6px; }
.board { margin-top: 18px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
.tile { aspect-ratio: 1; border: 0; border-radius: 18px; background: #334155; color: #e2e8f0; font-size: 24px; font-weight: 900; cursor: pointer; transition: transform .16s ease, background .16s ease; }
.tile:hover { transform: translateY(-2px); }
.tile.active { background: #60a5fa; color: #0f172a; }
.controls { display: flex; gap: 10px; margin-top: 18px; }
.button { flex: 1; border: 0; border-radius: 14px; padding: 14px 16px; font-weight: 900; cursor: pointer; background: #60a5fa; color: #0f172a; }
.button.alt { background: #334155; color: #f8fafc; }
.message { margin-top: 14px; min-height: 24px; color: #bfdbfe; font-size: 14px; }
.note { margin-top: 16px; color: #94a3b8; font-size: 13px; line-height: 1.6; }
@media (max-width: 520px) { .panel { padding: 16px; border-radius: 22px; } .board { gap: 8px; } .tile { border-radius: 14px; font-size: 20px; } }
`;

function nextSequence(length: number) {
  return Array.from({ length }, () => Math.floor(Math.random() * 16));
}

export default function SignalSprintPage() {
  const [sequence, setSequence] = useState<number[]>([]);
  const [userInput, setUserInput] = useState<number[]>([]);
  const [best, setBest] = useState(0);
  const [status, setStatus] = useState("Press Start to watch the pattern.");
  const [active, setActive] = useState<number | null>(null);

  const round = sequence.length;
  const progress = useMemo(() => `${userInput.length}/${round || 0}`, [userInput.length, round]);

  function startGame() {
    const fresh = nextSequence(Math.max(3, round + 1));
    setSequence(fresh);
    setUserInput([]);
    setStatus("Memorize the glowing tiles, then repeat them.");
    let index = 0;
    const timer = window.setInterval(() => {
      setActive(fresh[index]);
      window.setTimeout(() => setActive(null), 480);
      index += 1;
      if (index >= fresh.length) {
        window.clearInterval(timer);
        window.setTimeout(() => setStatus("Your turn."), 520);
      }
    }, 650);
  }

  function tapTile(index: number) {
    if (!sequence.length || status !== "Your turn.") return;
    const next = [...userInput, index];
    setUserInput(next);
    const expected = sequence[next.length - 1];
    if (index !== expected) {
      setStatus("Missed it. Start again and beat your best.");
      setSequence([]);
      setUserInput([]);
      return;
    }
    if (next.length === sequence.length) {
      const newBest = Math.max(best, sequence.length);
      setBest(newBest);
      setStatus("Perfect round. Ready for a longer pattern?");
    }
  }

  return (
    <main className="page">
      <style>{styles}</style>
      <div className="shell">
        <Link className="back" href="/days">← Daily Builds</Link>
        <div className="eyebrow">DAY 6 · GAME</div>
        <h1>Signal<br />Sprint.</h1>
        <p className="sub">A quick memory game for focus breaks. Watch the pattern, repeat it, and build a longer streak one round at a time.</p>
        <section className="panel">
          <div className="stats">
            <div className="stat"><span>Round</span><strong>{round || 0}</strong></div>
            <div className="stat"><span>Progress</span><strong>{progress}</strong></div>
            <div className="stat"><span>Best</span><strong>{best}</strong></div>
          </div>
          <div className="board" aria-label="Memory game board">
            {Array.from({ length: 16 }, (_, index) => (
              <button key={index} className={`tile ${active === index ? "active" : ""}`} onClick={() => tapTile(index)} aria-label={`Tile ${index + 1}`}>
                {index + 1}
              </button>
            ))}
          </div>
          <div className="controls">
            <button className="button" onClick={startGame}>Start round</button>
            <button className="button alt" onClick={() => { setSequence([]); setUserInput([]); setStatus("Press Start to watch the pattern."); }}>Reset</button>
          </div>
          <div className="message" aria-live="polite">{status}</div>
          <div className="note">Designed for short breaks: one minute, one pattern, one small win.</div>
        </section>
      </div>
    </main>
  );
}
