"use client";
import { useMemo, useState } from "react";

const lessons = [
  { id: 1, subject: "Soil & Water", topic: "Infiltration basics", minutes: 18, level: "Core" },
  { id: 2, subject: "Farm Machinery", topic: "Power transmission", minutes: 24, level: "Core" },
  { id: 3, subject: "Greenhouse Tech", topic: "Ventilation checklist", minutes: 12, level: "Quick" },
  { id: 4, subject: "Agri Economics", topic: "Break-even point", minutes: 20, level: "Practice" },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [completed, setCompleted] = useState<number[]>([2]);
  const [streak, setStreak] = useState(6);

  const filtered = useMemo(
    () => lessons.filter((l) => `${l.subject} ${l.topic}`.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  const toggle = (id: number) => {
    setCompleted((items) => (items.includes(id) ? items.filter((x) => x !== id) : [...items, id]));
  };

  const progress = Math.round((completed.length / lessons.length) * 100);

  return (
    <main className="page">
      <div className="shell">
        <header className="topbar">
          <div>
            <div className="brand">Study<span>Sprint</span></div>
            <div className="sub">A focused revision desk for busy students</div>
          </div>
          <div className="streak"><strong>🔥 {streak}</strong><span>day streak</span></div>
        </header>

        <section className="hero">
          <div>
            <div className="eyebrow">WEDNESDAY · 02 SEPTEMBER 2026</div>
            <h1>Make revision<br /><em>feel lighter.</em></h1>
            <p>Pick a short lesson, finish the loop, and leave with a clearer head than you started with.</p>
          </div>
          <div className="focus-card">
            <div className="label">TODAY’S FOCUS</div>
            <div className="focus-title">Finish one core lesson</div>
            <div className="progress-row"><span>{completed.length} of {lessons.length} complete</span><b>{progress}%</b></div>
            <div className="track"><i style={{ width: `${progress}%` }} /></div>
            <button onClick={() => toggle(1)}>{completed.includes(1) ? "Completed" : "Start next lesson"}</button>
          </div>
        </section>

        <section className="layout">
          <div className="panel lessons-panel">
            <div className="panel-head"><div><div className="eyebrow">YOUR QUEUE</div><h2>Short lessons</h2></div><span className="count">{filtered.length} items</span></div>
            <input className="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search a subject or topic…" />
            <div className="lesson-list">
              {filtered.map((lesson) => (
                <button className={`lesson ${completed.includes(lesson.id) ? "done" : ""}`} key={lesson.id} onClick={() => toggle(lesson.id)}>
                  <span className="dot">{completed.includes(lesson.id) ? "✓" : lesson.id}</span>
                  <span className="lesson-copy"><strong>{lesson.topic}</strong><small>{lesson.subject} · {lesson.level}</small></span>
                  <span className="mins">{lesson.minutes} min</span>
                </button>
              ))}
            </div>
          </div>

          <aside className="side-stack">
            <div className="panel note-panel"><div className="eyebrow">RESET RULE</div><h3>Study small.<br />Return often.</h3><p>When your attention drops, reduce the task before you increase the pressure.</p><div className="quote">“Consistency beats intensity when the semester gets busy.”</div></div>
            <div className="panel stats-panel"><div className="panel-head"><div><div className="eyebrow">THIS WEEK</div><h2>Your rhythm</h2></div><span className="trend">+18%</span></div><div className="bars">{[28, 56, 42, 74, 62, 88, 46].map((h, i) => <div className="bar-col" key={i}><i style={{ height: `${h}%` }} /><small>{["M","T","W","T","F","S","S"][i]}</small></div>)}</div><button className="ghost" onClick={() => setStreak((s) => s + 1)}>Log today’s win</button></div>
          </aside>
        </section>

        <footer><span>StudySprint · education utility</span><span>Built for mobile focus</span></footer>
      </div>
      <style jsx>{`
        :global(*){box-sizing:border-box}:global(body){margin:0;font-family:Inter,system-ui,sans-serif;background:#f5f6fb;color:#1d2433}.page{min-height:100vh;padding:18px 14px 40px;background:radial-gradient(circle at 10% 0%,#fff 0,#f5f6fb 42%,#eef1f8 100%)}.shell{max-width:1080px;margin:auto}.topbar{display:flex;justify-content:space-between;align-items:center;gap:16px}.brand{font-size:25px;font-weight:850;letter-spacing:-1px}.brand span{color:#6457d9}.sub{font-size:12px;color:#7a8293;margin-top:3px}.streak{display:flex;flex-direction:column;align-items:flex-end;gap:2px;color:#7a8293;font-size:12px}.streak strong{font-size:18px;color:#242a3a}.hero{display:grid;grid-template-columns:1.1fr .9fr;gap:18px;align-items:end;padding:56px 0 26px}.eyebrow{font-size:11px;letter-spacing:.16em;font-weight:800;color:#7b8393}.hero h1{font-size:clamp(42px,8vw,76px);line-height:.96;letter-spacing:-4px;margin:12px 0}.hero h1 em{font-style:normal;color:#6457d9}.hero p{max-width:600px;color:#6e7788;line-height:1.65;font-size:16px}.focus-card,.panel{background:rgba(255,255,255,.9);border:1px solid #e3e6f0;border-radius:24px;box-shadow:0 12px 30px rgba(54,67,105,.06)}.focus-card{padding:22px}.label{font-size:11px;letter-spacing:.15em;font-weight:800;color:#7b8393}.focus-title{font-size:24px;font-weight:800;margin:14px 0 18px}.progress-row{display:flex;justify-content:space-between;color:#737c8e;font-size:12px}.progress-row b{color:#252c3a}.track{height:10px;background:#edeff6;border-radius:99px;overflow:hidden;margin:10px 0 18px}.track i{display:block;height:100%;background:#6457d9;border-radius:99px}.focus-card button,.ghost{border:0;border-radius:14px;padding:12px 14px;background:#1e2635;color:white;font-weight:750;cursor:pointer}.layout{display:grid;grid-template-columns:1.25fr .75fr;gap:18px}.panel{padding:20px}.panel-head{display:flex;justify-content:space-between;align-items:flex-start;gap:10px}.panel h2{font-size:22px;margin:8px 0 14px}.count,.trend{font-size:12px;color:#7b8393}.trend{color:#3f9365;font-weight:800}.search{width:100%;padding:13px 14px;border:1px solid #e1e4ee;border-radius:14px;font:inherit;outline:none;margin-bottom:10px}.lesson-list{display:grid;gap:8px}.lesson{width:100%;display:flex;align-items:center;gap:12px;border:1px solid #e5e8f1;background:#fff;border-radius:16px;padding:13px;text-align:left;cursor:pointer}.lesson:hover{border-color:#b9b2f0}.lesson.done{background:#f4f3ff}.dot{width:28px;height:28px;border-radius:10px;background:#ece9ff;color:#6457d9;display:grid;place-items:center;font-weight:800;flex:0 0 auto}.lesson-copy{display:flex;flex-direction:column;gap:3px;min-width:0}.lesson-copy strong{font-size:14px}.lesson-copy small{color:#7b8393;font-size:12px}.mins{margin-left:auto;color:#7b8393;font-size:12px}.side-stack{display:grid;gap:18px}.note-panel{background:#252b3b;color:#fff;border-color:#252b3b}.note-panel .eyebrow{color:#aeb4c6}.note-panel h3{font-size:32px;line-height:1.04;letter-spacing:-1px;margin:12px 0}.note-panel p{color:#c3c8d4;line-height:1.6}.quote{border-top:1px solid #434b60;padding-top:14px;color:#d8dbe4;font-size:13px;line-height:1.5}.bars{display:flex;align-items:end;justify-content:space-between;height:150px;padding:12px 2px 0}.bar-col{height:100%;display:flex;flex-direction:column;justify-content:end;align-items:center;gap:8px;color:#8a92a2;font-size:11px}.bar-col i{display:block;width:18px;border-radius:8px 8px 3px 3px;background:#bcb5f0;min-height:10px}.bar-col:nth-child(3) i,.bar-col:nth-child(6) i{background:#6457d9}.ghost{background:#f1efff;color:#6457d9;margin-top:12px;width:100%}footer{display:flex;justify-content:space-between;color:#8991a0;font-size:12px;padding:20px 2px 0}@media(max-width:760px){.hero,.layout{grid-template-columns:1fr}.hero{padding-top:36px}.focus-card{margin-top:4px}.side-stack{grid-template-columns:1fr 1fr}.note-panel h3{font-size:25px}}@media(max-width:520px){.side-stack{grid-template-columns:1fr}footer{flex-direction:column;gap:8px}}
      `}</style>
    </main>
  );
}
