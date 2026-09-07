"use client";

import { useMemo, useState } from "react";

const initialTasks = [
  { label: "Lecture notes", value: 82 },
  { label: "Lab record", value: 64 },
  { label: "Assignment", value: 46 },
  { label: "Revision", value: 28 },
];

export default function DaySevenPage() {
  const [tasks, setTasks] = useState(initialTasks);
  const [active, setActive] = useState("Today");
  const average = useMemo(() => Math.round(tasks.reduce((sum, task) => sum + task.value, 0) / tasks.length), [tasks]);

  const bump = (index: number) => {
    setTasks((current) => current.map((task, taskIndex) => taskIndex === index ? { ...task, value: Math.min(100, task.value + 10) } : task));
  };

  return (
    <main className="page">
      <style jsx>{`*{box-sizing:border-box}.page{min-height:100vh;background:#eef1f5;color:#1d2733;padding:18px 16px 44px;font-family:Inter,system-ui,sans-serif}.shell{max-width:980px;margin:auto}.top{display:flex;justify-content:space-between;align-items:center;gap:12px}.back{color:#5f6b79;text-decoration:none;font-size:13px}.tag{font-size:11px;font-weight:900;letter-spacing:.14em;color:#6e7e90}.hero{margin-top:42px;display:grid;grid-template-columns:1.2fr .8fr;gap:18px}.heroCard,.panel,.task{background:#fff;border:1px solid #dbe1e8;border-radius:24px;box-shadow:0 14px 30px rgba(40,55,75,.07)}.heroCard{padding:28px}.heroCard h1{font-size:clamp(42px,7vw,72px);line-height:.96;letter-spacing:-4px;margin:12px 0}.heroCard h1 span{color:#4e79a7}.heroCard p{color:#697587;line-height:1.65;max-width:520px}.score{padding:24px;display:flex;flex-direction:column;justify-content:space-between;background:#233345;color:#f6f8fb}.score small{color:#b6c4d2;font-weight:800;letter-spacing:.12em}.score strong{font-size:68px;letter-spacing:-4px}.score span{color:#c8d2dc;font-size:13px}.tabs{display:flex;gap:8px;margin:22px 0}.tab{border:1px solid #d4dce5;background:#fff;border-radius:999px;padding:10px 14px;font-size:12px;font-weight:800;color:#667384}.tab.active{background:#4e79a7;color:#fff;border-color:#4e79a7}.grid{display:grid;grid-template-columns:1fr .9fr;gap:18px}.panel{padding:22px}.panel h2{font-size:18px;margin:0 0 18px}.tasks{display:grid;gap:12px}.task{padding:16px;display:grid;grid-template-columns:1fr auto;gap:12px;align-items:center}.task b{font-size:15px}.task small{display:block;color:#7d8793;margin-top:5px}.bar{height:8px;background:#edf1f5;border-radius:999px;margin-top:12px;overflow:hidden}.fill{height:100%;background:#4e79a7;border-radius:999px}.btn{border:0;border-radius:12px;padding:9px 11px;background:#e8eef5;color:#355775;font-weight:900;font-size:12px}.mini{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.mini div{padding:15px;border-radius:18px;background:#f6f8fb}.mini strong{display:block;font-size:25px;letter-spacing:-1px}.mini span{font-size:11px;color:#788494}.tip{margin-top:12px;padding:16px;border-radius:18px;background:#f4efe4;color:#755f39;font-size:13px;line-height:1.5}@media(max-width:720px){.hero,.grid{grid-template-columns:1fr}.heroCard h1{letter-spacing:-3px}.score strong{font-size:56px}.mini{grid-template-columns:1fr 1fr 1fr}}`}</style>
      <div className="shell">
        <div className="top"><a className="back" href="/days">← Daily Builds</a><div className="tag">DAY 07 · DASHBOARD</div></div>
        <section className="hero">
          <div className="heroCard"><div className="tag">CAMPUSPULSE</div><h1>See the week.<br/><span>Shape the work.</span></h1><p>A lightweight student dashboard for tracking study momentum, assignments, and the next small win.</p></div>
          <div className="heroCard score"><small>WEEKLY MOMENTUM</small><strong>{average}%</strong><span>+12% from last week · keep the streak alive</span></div>
        </section>
        <div className="tabs">{["Today","This week","Overview"].map((tab) => <button key={tab} className={`tab ${active === tab ? "active" : ""}`} onClick={() => setActive(tab)}>{tab}</button>)}</div>
        <section className="grid">
          <div className="panel"><h2>{active} focus</h2><div className="tasks">{tasks.map((task, index) => <div className="task" key={task.label}><div><b>{task.label}</b><small>{task.value >= 70 ? "On track" : task.value >= 40 ? "In progress" : "Needs attention"}</small><div className="bar"><div className="fill" style={{ width: `${task.value}%` }} /></div></div><button className="btn" onClick={() => bump(index)}>+10</button></div>)}</div></div>
          <div className="panel"><h2>Quick snapshot</h2><div className="mini"><div><strong>4</strong><span>Open tasks</span></div><div><strong>3</strong><span>Study blocks</span></div><div><strong>86%</strong><span>Attendance</span></div></div><div className="tip">Small progress compounds. Pick one task, move it forward by 10%, and come back tomorrow.</div></div>
        </section>
      </div>
    </main>
  );
}
