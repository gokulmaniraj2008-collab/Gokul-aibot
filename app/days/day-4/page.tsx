"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Day4() {
  const [seconds, setSeconds] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(0);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setSeconds((s) => {
      if (s <= 1) { setRunning(false); return 25 * 60; }
      return s - 1;
    }), 1000);
    return () => clearInterval(id);
  }, [running]);

  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <main className="page"><div className="shell">
      <nav><Link href="/days">← Daily builds</Link><span>DAY 04 · PRODUCTIVITY</span></nav>
      <header><p className="eyebrow">TIMEBOX</p><h1>Make the next<br/><em>25 minutes count.</em></h1><p className="intro">A calm focus timer for turning one small task into a finished result.</p></header>
      <section className="timer">
        <div className="ring"><strong>{mins}:{secs}</strong><span>FOCUS SESSION</span></div>
        <div className="actions"><button onClick={() => setRunning(!running)}>{running ? "Pause" : "Start focus"}</button><button className="ghost" onClick={() => {setRunning(false);setSeconds(25*60)}}>Reset</button></div>
      </section>
      <section className="task">
        <div><span className="label">TODAY'S TARGET</span><h2>Finish one meaningful task</h2><p>Put your phone aside, remove one distraction, and work until the timer ends.</p></div>
        <button className="check" onClick={() => setDone(done ? 0 : 1)} aria-label="Mark task complete">{done ? "✓" : "○"}</button>
      </section>
      <div className="stats"><div><strong>{done}</strong><span>TASKS DONE</span></div><div><strong>25m</strong><span>FOCUS BLOCK</span></div><div><strong>1</strong><span>DAY STREAK</span></div></div>
      <footer><span>Small progress is still progress.</span><Link href="/">Home ↗</Link></footer>
    </div><style jsx>{`*{box-sizing:border-box}.page{min-height:100vh;background:#f2f0eb;color:#20242a;padding:20px 16px 50px;font-family:Inter,system-ui,sans-serif}.shell{max-width:820px;margin:auto}nav{display:flex;justify-content:space-between;gap:16px;align-items:center;margin:8px 0 62px;font-size:11px;font-weight:800;letter-spacing:.11em;color:#858981}nav a{color:inherit;text-decoration:none;letter-spacing:0}.eyebrow{font-size:11px;letter-spacing:.2em;font-weight:900;color:#a05d3e;margin:0 0 12px}h1{font-size:clamp(45px,8vw,76px);line-height:.94;letter-spacing:-4px;margin:0 0 20px}h1 em{font-style:normal;color:#a05d3e}.intro{max-width:540px;color:#747a74;line-height:1.7}.timer{margin-top:42px;background:#22272d;color:#f6f2e9;border-radius:30px;padding:38px;display:flex;align-items:center;justify-content:space-between;gap:30px}.ring{width:220px;height:220px;border:1px solid #62676b;border-radius:50%;display:flex;flex-direction:column;justify-content:center;align-items:center}.ring strong{font-size:47px;letter-spacing:-2px}.ring span{font-size:9px;letter-spacing:.17em;color:#aeb2b0;margin-top:5px}.actions{display:flex;flex-direction:column;gap:10px;width:190px}button{border:0;border-radius:14px;padding:15px 18px;font:800 14px inherit;cursor:pointer;background:#e7d6c5;color:#25282b}.ghost{background:transparent;color:#e8e5dc;border:1px solid #555b5f}.task{margin-top:14px;background:#fffdf9;border:1px solid #dedad2;border-radius:24px;padding:24px;display:flex;justify-content:space-between;gap:20px;align-items:center}.label{font-size:10px;font-weight:900;letter-spacing:.14em;color:#a05d3e}.task h2{font-size:24px;letter-spacing:-.7px;margin:9px 0 5px}.task p{margin:0;color:#777b76;line-height:1.5;font-size:14px}.check{width:50px;height:50px;border-radius:50%;font-size:25px;padding:0;background:#eee9e0;color:#555}.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:14px}.stats div{background:#e7e3db;border-radius:18px;padding:19px}.stats strong{display:block;font-size:25px}.stats span{font-size:9px;letter-spacing:.13em;font-weight:900;color:#7d817b}footer{display:flex;justify-content:space-between;margin-top:28px;color:#858981;font-size:12px}footer a{color:#555;text-decoration:none}@media(max-width:600px){nav{margin-bottom:45px}.timer{flex-direction:column;padding:28px 20px}.actions{width:100%}.ring{width:190px;height:190px}.stats{gap:8px}.stats div{padding:15px 12px}h1{letter-spacing:-3px}}`}</style>
    </main>
  );
}
