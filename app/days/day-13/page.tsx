"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const ideas = [
  { title: "Campus marketplace", category: "Campus", impact: 9, effort: 5, reach: 8 },
  { title: "Farmer price alert", category: "Agriculture", impact: 10, effort: 6, reach: 9 },
  { title: "Portfolio audit tool", category: "Developer", impact: 7, effort: 3, reach: 6 },
  { title: "Local service finder", category: "Community", impact: 8, effort: 5, reach: 8 },
];

function score(idea: (typeof ideas)[number]) {
  return Math.round((idea.impact * 0.45 + idea.reach * 0.35 + (10 - idea.effort) * 0.2) * 10);
}

export default function Day13() {
  const [budget, setBudget] = useState(5000);
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(ideas[1].title);

  const filtered = useMemo(
    () => ideas.filter((idea) => filter === "All" || idea.category === filter),
    [filter],
  );
  const winner = [...ideas].sort((a, b) => score(b) - score(a))[0];
  const categories = ["All", ...Array.from(new Set(ideas.map((idea) => idea.category)))];

  return (
    <main className="page">
      <style>{styles}</style>
      <div className="shell">
        <header className="topbar">
          <Link href="/days" className="back">← Daily Builds</Link>
          <span className="day">DAY 13 / 30</span>
        </header>

        <section className="hero">
          <div>
            <p className="kicker">LAUNCHBOARD</p>
            <h1>Choose the idea<br /><em>worth building.</em></h1>
            <p className="intro">A lightweight product-decison workspace that scores ideas by impact, reach, and effort before you spend time coding.</p>
          </div>
          <div className="winner">
            <span>TOP SIGNAL</span>
            <strong>{winner.title}</strong>
            <small>{score(winner)} / 100 score</small>
          </div>
        </section>

        <section className="dashboard">
          <div className="panel budget">
            <div className="panel-head"><span>BUILD BUDGET</span><b>₹{budget.toLocaleString("en-IN")}</b></div>
            <input aria-label="Build budget" type="range" min="1000" max="25000" step="500" value={budget} onChange={(e) => setBudget(Number(e.target.value))} />
            <div className="range"><span>₹1K</span><span>₹25K</span></div>
          </div>
          <div className="panel selected">
            <span>SELECTED IDEA</span>
            <strong>{selected}</strong>
            <small>Ready for a focused MVP sprint.</small>
          </div>
        </section>

        <section className="workspace">
          <div className="section-head">
            <div><span className="kicker">01 / IDEA BOARD</span><h2>Compare signals.</h2></div>
            <div className="filters">{categories.map((category) => <button key={category} className={filter === category ? "active" : ""} onClick={() => setFilter(category)}>{category}</button>)}</div>
          </div>

          <div className="cards">
            {filtered.map((idea) => {
              const total = score(idea);
              return (
                <button className={`idea ${selected === idea.title ? "chosen" : ""}`} key={idea.title} onClick={() => setSelected(idea.title)}>
                  <div className="idea-top"><span>{idea.category}</span><b>{total}</b></div>
                  <h3>{idea.title}</h3>
                  <div className="metric"><span>Impact</span><i><u style={{ width: `${idea.impact * 10}%` }} /></i><b>{idea.impact}/10</b></div>
                  <div className="metric"><span>Reach</span><i><u style={{ width: `${idea.reach * 10}%` }} /></i><b>{idea.reach}/10</b></div>
                  <div className="metric"><span>Effort</span><i><u style={{ width: `${idea.effort * 10}%` }} /></i><b>{idea.effort}/10</b></div>
                  <span className="select">{selected === idea.title ? "Selected ✓" : "Select idea →"}</span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="plan">
          <div><span className="kicker">02 / MVP PLAN</span><h2>Turn the decision into action.</h2><p>Keep the first version narrow. Ship one useful workflow, measure it, then expand.</p></div>
          <div className="steps">
            <div><b>01</b><strong>Validate</strong><span>Talk to 5 target users.</span></div>
            <div><b>02</b><strong>Prototype</strong><span>Build the core flow.</span></div>
            <div><b>03</b><strong>Ship</strong><span>Release a testable MVP.</span></div>
          </div>
        </section>

        <footer><span>DAY 13 · LAUNCHBOARD</span><Link href="/">GOKUL.AI ↗</Link></footer>
      </div>
    </main>
  );
}

const styles = `*{box-sizing:border-box}.page{min-height:100vh;background:#f4f1eb;color:#20242a;font-family:Inter,system-ui,sans-serif;padding:22px 16px 60px}.shell{max-width:1080px;margin:auto}.topbar{display:flex;justify-content:space-between;align-items:center}.back{color:#70756f;text-decoration:none;font-size:13px}.day{font:800 11px/1 monospace;letter-spacing:.16em;color:#9a6b55}.hero{display:grid;grid-template-columns:1fr 300px;gap:50px;align-items:end;padding:72px 0 48px}.kicker{font:900 11px/1 monospace;letter-spacing:.18em;color:#b26348}h1{font-size:clamp(50px,8vw,92px);line-height:.92;letter-spacing:-5px;margin:14px 0 24px}h1 em,h2 em{font-style:normal;color:#b65d43}.intro{max-width:610px;color:#747a73;font-size:16px;line-height:1.7}.winner{background:#242a30;color:#f6f1e8;border-radius:28px;padding:26px;display:flex;flex-direction:column;gap:10px;box-shadow:0 20px 50px #252a3018}.winner span{font:800 10px monospace;letter-spacing:.16em;color:#d5a68f}.winner strong{font-size:26px;letter-spacing:-1px}.winner small{color:#aeb5b8}.dashboard{display:grid;grid-template-columns:1fr 1fr;gap:14px}.panel{background:#fffdfa;border:1px solid #ddd8ce;border-radius:22px;padding:22px}.panel-head{display:flex;justify-content:space-between;align-items:center}.panel span,.selected>span{font:800 10px monospace;letter-spacing:.13em;color:#8a8f88}.panel b{font-size:24px}.panel input{width:100%;margin:26px 0 7px;accent-color:#b65d43}.range{display:flex;justify-content:space-between;color:#9b9f99;font-size:11px}.selected{display:flex;flex-direction:column;gap:9px}.selected strong{font-size:24px;letter-spacing:-1px}.selected small{color:#858a83}.workspace{padding:78px 0 52px}.section-head{display:flex;justify-content:space-between;align-items:end;gap:20px;margin-bottom:24px}.section-head h2,.plan h2{font-size:42px;letter-spacing:-2px;margin:12px 0 0}.filters{display:flex;gap:7px;flex-wrap:wrap;justify-content:flex-end}.filters button{border:1px solid #d7d2c9;background:transparent;border-radius:999px;padding:9px 13px;color:#747972;cursor:pointer}.filters .active{background:#242a30;color:#fff;border-color:#242a30}.cards{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}.idea{text-align:left;background:#fffdfa;border:1px solid #ddd8ce;border-radius:22px;padding:22px;color:inherit;cursor:pointer;transition:.2s}.idea:hover,.idea.chosen{transform:translateY(-3px);border-color:#b65d43;box-shadow:0 18px 40px #3d38301a}.idea-top{display:flex;justify-content:space-between;align-items:center}.idea-top span{font:800 10px monospace;letter-spacing:.1em;color:#8d918b;text-transform:uppercase}.idea-top b{width:42px;height:42px;border-radius:50%;display:grid;place-items:center;background:#f0e8df;color:#a5543e}.idea h3{font-size:25px;letter-spacing:-1px;margin:18px 0 22px}.metric{display:grid;grid-template-columns:55px 1fr 36px;gap:9px;align-items:center;margin:10px 0;font-size:11px;color:#858a83}.metric i{height:6px;background:#ebe6dd;border-radius:9px;overflow:hidden}.metric u{display:block;height:100%;background:#b65d43;text-decoration:none;border-radius:9px}.metric b{font-size:10px;text-align:right;color:#626860}.select{display:block;margin-top:20px;font-size:12px;font-weight:800;color:#b65d43}.plan{background:#242a30;color:#f7f2ea;border-radius:30px;padding:32px;display:grid;grid-template-columns:1fr 1.25fr;gap:40px}.plan h2{margin-bottom:14px}.plan p{color:#aeb5b8;line-height:1.6}.steps{display:grid;gap:10px}.steps div{display:grid;grid-template-columns:38px 1fr;column-gap:12px;padding:15px 0;border-bottom:1px solid #ffffff16}.steps b{grid-row:span 2;color:#d7a18a;font:800 11px monospace}.steps strong{font-size:15px}.steps span{font-size:12px;color:#aeb5b8;margin-top:4px}footer{display:flex;justify-content:space-between;margin-top:38px;color:#92978f;font:800 10px monospace;letter-spacing:.12em}footer a{color:inherit;text-decoration:none}@media(max-width:760px){.hero,.dashboard,.plan{grid-template-columns:1fr}.hero{padding-top:52px;gap:30px}h1{letter-spacing:-4px}.cards{grid-template-columns:1fr}.section-head{align-items:flex-start;flex-direction:column}.filters{justify-content:flex-start}.section-head h2,.plan h2{font-size:34px}}@media(max-width:460px){.page{padding-inline:12px}.panel,.idea,.plan{border-radius:18px}.winner{border-radius:20px}h1{font-size:48px}.dashboard{gap:10px}}`;
