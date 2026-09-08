"use client";

import { useMemo, useState } from "react";

const moods = [
  { name: "Monsoon Calm", note: "Soft rhythm for quiet ideas.", colors: ["#2E4057", "#7B9E89", "#D7E3FC", "#F4F1DE"], prompt: "Design a tiny room where rain becomes background music." },
  { name: "Sunlit Citrus", note: "Bright energy with a playful edge.", colors: ["#FFB703", "#FB8500", "#8ECAE6", "#023047"], prompt: "Create a poster for a one-day festival of small wins." },
  { name: "Forest Signal", note: "Grounded, warm, and quietly bold.", colors: ["#283618", "#606C38", "#FEFAE0", "#BC6C25"], prompt: "Imagine a field guide for noticing useful details." },
  { name: "Night Studio", note: "Focused contrast for late ideas.", colors: ["#111827", "#374151", "#F59E0B", "#F3F4F6"], prompt: "Sketch a dashboard that makes one hard task feel lighter." },
];

export default function MuseBoardPage() {
  const [index, setIndex] = useState(0);
  const [saved, setSaved] = useState<string[]>([]);
  const mood = useMemo(() => moods[index], [index]);
  const next = () => setIndex((value) => (value + 1) % moods.length);
  const toggleSave = () => setSaved((items) => items.includes(mood.name) ? items.filter((item) => item !== mood.name) : [...items, mood.name]);

  return (
    <main className="page">
      <style>{`*{box-sizing:border-box}.page{min-height:100vh;background:#f7f4ef;color:#1d2421;padding:18px 16px 44px;font-family:Inter,system-ui,sans-serif}.shell{max-width:960px;margin:auto}.top{display:flex;justify-content:space-between;align-items:center;margin-bottom:34px}.back{color:#6a726e;text-decoration:none;font-size:13px}.tag{font-size:11px;font-weight:900;letter-spacing:.14em;color:#8d6b45}.hero{display:grid;grid-template-columns:1.02fr .98fr;gap:18px;align-items:stretch}.copy,.board{background:#fffdf9;border:1px solid #e6dfd4;border-radius:28px;box-shadow:0 16px 40px rgba(86,73,51,.07)}.copy{padding:30px}.eyebrow{font-size:11px;letter-spacing:.15em;font-weight:900;color:#a56c35}.copy h1{font-size:clamp(44px,8vw,84px);line-height:.92;letter-spacing:-5px;margin:14px 0 16px}.copy h1 span{color:#d97941}.copy p{color:#707873;line-height:1.7;max-width:450px}.actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:24px}.button{border:0;border-radius:999px;padding:13px 18px;font-weight:800;cursor:pointer}.primary{background:#1d2421;color:#fffdf9}.secondary{background:#efe7db;color:#5e4f3e}.board{padding:18px;display:flex;flex-direction:column;justify-content:space-between}.boardtop{display:flex;justify-content:space-between;align-items:center}.boardtop strong{font-size:13px}.boardtop span{font-size:12px;color:#8c948e}.swatches{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:18px 0}.swatch{min-height:150px;border-radius:20px;display:flex;align-items:flex-end;padding:10px;color:#fff;font-size:11px;font-weight:800;letter-spacing:.08em}.swatch:nth-child(3),.swatch:nth-child(4){color:#24302a}.prompt{padding:16px 16px 18px;border-radius:20px;background:#f3efe8}.prompt small{display:block;font-size:10px;font-weight:900;letter-spacing:.12em;color:#9a7650;margin-bottom:7px}.prompt p{margin:0;line-height:1.55;font-size:14px}.footer{margin-top:16px;display:flex;justify-content:space-between;align-items:center;color:#79827c;font-size:12px}.saved{margin-top:34px}.saved h2{font-size:18px;margin:0 0 12px}.empty{padding:16px 18px;border:1px dashed #d8d0c5;border-radius:16px;color:#8a908a;font-size:13px}@media(max-width:760px){.hero{grid-template-columns:1fr}.copy{padding:24px}.copy h1{letter-spacing:-4px}.swatch{min-height:110px}}`}</style>
      <div className="shell">
        <div className="top"><a className="back" href="/days">← Daily Builds</a><div className="tag">DAY 08 · CREATIVE EXPERIENCE</div></div>
        <section className="hero">
          <div className="copy"><div className="eyebrow">MOODBOARD GENERATOR</div><h1>Make room for <span>good ideas.</span></h1><p>MuseBoard turns a mood into a compact creative direction: a palette, a tone, and one prompt worth exploring.</p><div className="actions"><button className="button primary" onClick={next}>Shuffle mood ↗</button><button className="button secondary" onClick={toggleSave}>{saved.includes(mood.name) ? "Saved ✓" : "Save mood"}</button></div></div>
          <div className="board"><div className="boardtop"><strong>{mood.name}</strong><span>{mood.note}</span></div><div className="swatches">{mood.colors.map((color) => <div key={color} className="swatch" style={{background:color}}>{color}</div>)}</div><div className="prompt"><small>CREATIVE PROMPT</small><p>{mood.prompt}</p></div><div className="footer"><span>{index + 1} of {moods.length} moods</span><span>{saved.length} saved</span></div></div>
        </section>
        <section className="saved"><h2>Your saved directions</h2>{saved.length ? <div className="empty">{saved.join(" · ")}</div> : <div className="empty">Save a mood to keep it in your pocket for later.</div>}</section>
      </div>
    </main>
  );
}
