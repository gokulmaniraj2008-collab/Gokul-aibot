"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const styles = `*{box-sizing:border-box}.page{min-height:100vh;background:#f7f8f4;color:#1d2523;padding:22px 16px 58px;font-family:Inter,system-ui,sans-serif}.shell{max-width:1040px;margin:auto}.back{display:inline-block;color:#6e7773;text-decoration:none;font-size:13px;margin-bottom:42px}.eyebrow{font-size:11px;font-weight:900;letter-spacing:.16em;color:#75817b}h1{font-size:clamp(46px,8vw,84px);line-height:.93;letter-spacing:-4px;margin:12px 0 18px}h1 em{font-style:normal;color:#6d65d7}.intro{max-width:680px;color:#6f7972;line-height:1.75;font-size:15px}.grid{display:grid;grid-template-columns:1.15fr .85fr;gap:18px;margin-top:34px}.panel{background:#fffdf9;border:1px solid #dfe4dc;border-radius:26px;padding:22px;box-shadow:0 18px 36px rgba(40,50,44,.05)}.panel h2{font-size:20px;letter-spacing:-.7px;margin:0 0 16px}.stack{display:grid;gap:14px}.label{font-size:12px;font-weight:800;color:#6c7670}.input,.select{width:100%;border:1px solid #d7ddd6;border-radius:14px;background:#fbfcf9;padding:13px 14px;font:inherit;color:#1d2523}.range{width:100%}.plan{margin-top:12px;display:grid;gap:10px}.step{display:flex;align-items:center;gap:12px;padding:14px;border-radius:16px;background:#f1f2ff;border:1px solid #e3e4ff}.dot{width:28px;height:28px;border-radius:50%;display:grid;place-items:center;background:#6d65d7;color:#fff;font-weight:900;font-size:13px}.step strong{display:block;font-size:14px}.step span{display:block;color:#6f7972;font-size:12px;margin-top:3px}.meter{display:flex;align-items:end;justify-content:space-between;gap:12px;margin-top:12px;padding:16px;border-radius:18px;background:#242934;color:#f5f4fb}.meter strong{font-size:44px;letter-spacing:-2px;color:#c9c6ff}.pill{font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#6259cf;background:#eceaff;border-radius:999px;padding:8px 10px}.button{margin-top:16px;border:0;border-radius:14px;padding:13px 15px;background:#242934;color:#fff;font-weight:800;cursor:pointer}.muted{color:#717a74;font-size:13px;line-height:1.55}.tip{margin-top:14px;padding:14px 16px;border-radius:16px;background:#f5f0e7;color:#6d665c;font-size:13px;line-height:1.55}@media(max-width:760px){.grid{grid-template-columns:1fr}h1{letter-spacing:-3px}.panel{padding:18px}}`;

export default function SkillMapPage(){
  const [skill,setSkill]=useState("React + TypeScript");
  const [goal,setGoal]=useState("Build one small project");
  const [hours,setHours]=useState(5);
  const plan = useMemo(()=>{
    const base = goal === "Prepare for an interview" ? [
      ["Refresh the core concepts","30 min · notes + flashcards"],
      ["Solve one realistic problem","45 min · timed practice"],
      ["Explain the trade-offs","20 min · speak it out loud"]
    ] : goal === "Ship a portfolio piece" ? [
      ["Define one visible outcome","20 min · write the before/after"],
      ["Build the smallest slice","60 min · one working flow"],
      ["Polish and publish","30 min · README + screenshot"]
    ] : [
      ["Choose one concept","20 min · one focused note"],
      ["Practice with a tiny task","45 min · make it real"],
      ["Review and teach it","15 min · write a short recap"]
    ];
    return base.map(([title,detail],i)=>({title:`${i+1}. ${title}`,detail}));
  },[goal]);
  const score = Math.min(100, Math.round(hours*12 + (goal === "Ship a portfolio piece" ? 12 : goal === "Prepare for an interview" ? 8 : 4)));
  const level = score >= 72 ? "Strong start" : score >= 48 ? "Good momentum" : "Keep it light";
  return <main className="page"><style>{styles}</style><div className="shell"><Link className="back" href="/days">← Daily Builds</Link><div className="eyebrow">DAY 19 · EDUCATION PLANNER</div><h1>Learn with a map.<br/><em>Ship with confidence.</em></h1><p className="intro">SkillMap turns a broad learning goal into one focused session, three practical steps, and a small piece of evidence you can keep.</p><div className="grid"><section className="panel"><h2>Shape your session</h2><div className="stack"><div><div className="label">Skill</div><input className="input" value={skill} onChange={e=>setSkill(e.target.value)} /></div><div><div className="label">Session goal</div><select className="select" value={goal} onChange={e=>setGoal(e.target.value)}><option>Build one small project</option><option>Prepare for an interview</option><option>Ship a portfolio piece</option></select></div><div><div className="label">Time available · {hours} hour{hours===1?"":"s"}</div><input className="range" type="range" min="1" max="8" value={hours} onChange={e=>setHours(Number(e.target.value))}/></div></div><div className="plan">{plan.map((item)=><div className="step" key={item.title}><div className="dot">✓</div><div><strong>{item.title}</strong><span>{item.detail}</span></div></div>)}</div><button className="button" onClick={()=>navigator.clipboard?.writeText(`SkillMap session\nSkill: ${skill}\nGoal: ${goal}\nTime: ${hours} hours\nPlan:\n${plan.map(p=>`- ${p.title} — ${p.detail}`).join("\n")}`)}>Copy study plan</button></section><aside className="panel"><h2>Session snapshot</h2><div className="meter"><div><div className="muted" style={{color:"#b9c0cb"}}>Readiness</div><strong>{score}%</strong><div className="muted" style={{color:"#b9c0cb"}}>{level}</div></div><span className="pill">{goal === "Ship a portfolio piece" ? "Build" : goal === "Prepare for an interview" ? "Practice" : "Learn"}</span></div><div className="tip">A good session ends with evidence: a solved problem, a pushed commit, a screenshot, or a short explanation you can reuse later.</div><p className="muted" style={{marginTop:16}}>Focus on one skill, one session, and one visible outcome. That is enough progress for today.</p></aside></div></div></main>
}
