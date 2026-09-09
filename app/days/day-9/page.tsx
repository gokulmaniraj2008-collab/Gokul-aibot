"use client";

import { useMemo, useState } from "react";

const initialHabits = [
  { id: 1, name: "Drink water", detail: "8 glasses", done: true },
  { id: 2, name: "Walk outside", detail: "20 minutes", done: false },
  { id: 3, name: "Read a page", detail: "Before bed", done: false },
  { id: 4, name: "Sleep on time", detail: "Before 11:00 PM", done: false },
];

const styles = `*{box-sizing:border-box}.page{min-height:100vh;background:#eef5ef;color:#23332a;padding:20px 16px 48px;font-family:Inter,system-ui,sans-serif}.shell{max-width:760px;margin:auto}.top{display:flex;justify-content:space-between;align-items:center;margin-bottom:34px}.back{color:#6b7b70;text-decoration:none;font-size:13px}.pill{font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#5b725f;background:#dceadf;border-radius:999px;padding:8px 10px}.hero{background:#294b35;color:#eef6ee;border-radius:28px;padding:26px 22px;box-shadow:0 14px 34px rgba(41,75,53,.16)}.eyebrow{font-size:11px;font-weight:900;letter-spacing:.16em;color:#b9d6bd}.hero h1{font-size:clamp(40px,8vw,70px);line-height:.95;letter-spacing:-4px;margin:14px 0 14px}.hero p{margin:0;max-width:520px;color:#d4e5d6;line-height:1.6;font-size:15px}.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:20px}.stat{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.14);border-radius:18px;padding:14px}.stat b{display:block;font-size:28px;letter-spacing:-1px}.stat span{font-size:11px;color:#cfe0d2}.section{margin-top:24px}.section h2{font-size:15px;margin:0 0 12px;letter-spacing:.02em}.habit-list{display:grid;gap:10px}.habit{display:flex;align-items:center;justify-content:space-between;gap:12px;background:#fff;border:1px solid #dce7dd;border-radius:20px;padding:15px 16px;box-shadow:0 8px 22px rgba(56,77,61,.05)}.habit-main{display:flex;align-items:center;gap:12px}.check{width:34px;height:34px;border-radius:12px;border:1px solid #c9d7cb;background:#f5faf5;color:#44764f;font-size:17px;display:grid;place-items:center;cursor:pointer}.check.done{background:#dcefdc;border-color:#a9d0ae}.habit-name{font-weight:800;font-size:15px}.habit-detail{font-size:12px;color:#819085;margin-top:3px}.progress{height:12px;background:#dce7dd;border-radius:999px;overflow:hidden}.progress span{display:block;height:100%;background:#6aa572;border-radius:999px;transition:width .25s}.quote{margin-top:20px;background:#dceadf;border-radius:20px;padding:16px;color:#49614e;font-size:14px;line-height:1.55}.reset{margin-top:18px;border:0;background:#23332a;color:#eef6ee;border-radius:14px;padding:12px 15px;font-weight:800;cursor:pointer}.foot{margin-top:22px;color:#7b8a7f;font-size:12px;text-align:center}@media(max-width:540px){.stats{grid-template-columns:1fr 1fr}.stats .stat:last-child{grid-column:span 2}.habit{padding:14px}.hero h1{letter-spacing:-3px}}`;

export default function HabitGardenPage() {
  const [habits, setHabits] = useState(initialHabits);
  const done = habits.filter((habit) => habit.done).length;
  const percent = Math.round((done / habits.length) * 100);
  const streak = useMemo(() => (done >= 3 ? 4 : done >= 1 ? 2 : 0), [done]);

  function toggleHabit(id: number) {
    setHabits((items) => items.map((habit) => (habit.id === id ? { ...habit, done: !habit.done } : habit)));
  }

  return <main className="page"><style>{styles}</style><div className="shell"><div className="top"><a className="back" href="/days">← Daily Builds</a><span className="pill">Day 09 · Wellness</span></div><section className="hero"><div className="eyebrow">HABITGARDEN</div><h1>Small actions.<br/>Better days.</h1><p>A gentle habit tracker for building momentum without turning your routine into a spreadsheet.</p><div className="stats"><div className="stat"><b>{done}/{habits.length}</b><span>completed today</span></div><div className="stat"><b>{percent}%</b><span>daily progress</span></div><div className="stat"><b>{streak}</b><span>day streak</span></div></div></section><section className="section"><h2>Today’s garden</h2><div className="progress" aria-label={`Progress ${percent}%`}><span style={{ width: `${percent}%` }} /></div><div className="habit-list" style={{ marginTop: 12 }}>{habits.map((habit) => <div className="habit" key={habit.id}><div className="habit-main"><button className={`check ${habit.done ? "done" : ""}`} onClick={() => toggleHabit(habit.id)} aria-label={`Mark ${habit.name} ${habit.done ? "incomplete" : "complete"}`}>{habit.done ? "✓" : ""}</button><div><div className="habit-name">{habit.name}</div><div className="habit-detail">{habit.detail}</div></div></div><span aria-hidden="true">{habit.done ? "🌱" : "○"}</span></div>)}</div></section><div className="quote">“Consistency is a collection of ordinary choices made often.” Keep the next step small enough to start.</div><button className="reset" onClick={() => setHabits(initialHabits)}>Reset today</button><div className="foot">A calm, offline-first daily check-in.</div></div></main>;
}
