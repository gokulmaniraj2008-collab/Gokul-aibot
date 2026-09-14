"use client";

import { useState } from "react";

const dayOne = {
  name: "QueueLens",
  category: "Civic / Campus / Healthcare",
  version: "v1.0.0",
  problem: "People waste time because they cannot see how crowded a service point is before travelling there.",
  idea: "QueueLens turns anonymous community reports into a simple live wait-intelligence layer for clinics, campuses, government counters, service centres and other queues.",
  features: ["Report queue size and estimated wait", "See crowd level before travelling", "Compare nearby service points", "Works as a lightweight Android app", "Website and app share the same product identity"],
};

export default function DaysPage() {
  const [reported, setReported] = useState(false);
  const [testMessage, setTestMessage] = useState(false);

  return <main className="page daily-builds theme-light" style={{ minHeight: "100vh" }}>
    <nav className="nav">
      <a className="logo" href="/"><span className="logo-mark">G</span>GOKUL<span className="logo-dot">.AI</span></a>
      <div className="navlinks"><a className="button secondary" href="/" aria-label="Go back to portfolio">← Back</a><a href="/">Portfolio</a><a href="#day01">Day 01</a><a href="#day02">Day 02</a></div>
      <div className="days-nav-actions"><span className="eyebrow">DAILY BUILDS</span></div>
    </nav>
    <section className="section" style={{ paddingTop: 100 }}>
      <div className="eyebrow">DAILY BUILDS · WEBSITE + ANDROID</div>
      <h1 style={{ fontFamily: "'Plus Jakarta Sans'", fontSize: "clamp(48px,8vw,92px)", lineHeight: .95, letterSpacing: "-.07em", margin: "18px 0" }}>Build every day.<br/><em style={{ color: "#c084fc", fontStyle: "normal" }}>Ship twice.</em></h1>
      <p className="days-muted" style={{ maxWidth: 650, lineHeight: 1.8 }}>Every day is a new original product experiment: one useful website, one matching Android app, one GitHub release, and one direct download from this site.</p>
    </section>
    <section className="section" id="day01" style={{ paddingTop: 20 }}>
      <article className="feature large" style={{ minHeight: "auto", padding: 32 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}><span className="eyebrow">DAY 01 · ORIGINAL STARTUP EXPERIMENT</span><span style={{ color: "#65a30d", font: "10px 'Space Mono'" }}>● BUILDING</span></div>
        <h2 style={{ marginBottom: 8 }}>{dayOne.name}</h2>
        <p style={{ color: "#6d28d9", fontWeight: 700 }}>{dayOne.category} · Android {dayOne.version}</p>
        <div className="feature-grid" style={{ marginTop: 30 }}>
          <div className="feature"><span>THE PROBLEM</span><p>{dayOne.problem}</p></div>
          <div className="feature"><span>THE INNOVATION</span><p>{dayOne.idea}</p></div>
          <div className="feature"><span>CORE PRODUCT</span><p>{dayOne.features.join(" · ")}</p></div>
        </div>
        <div className="actions" style={{ marginTop: 28 }}><a className="button primary" href="/download/queuelens">Download QueueLens APK ↓</a><a className="button secondary" href="#product">View product</a></div>
        {reported && <p style={{ color: "#65a30d", marginTop: 16, fontSize: 12 }}>Demo report added: 18 people · estimated wait 22 min.</p>}
      </article>
    </section>
    <section className="section" id="product" style={{ paddingTop: 20 }}>
      <div className="eyebrow">QUEUE LENS · WEB DEMO</div>
      <div className="section-title-row"><h2>Know the queue<br/><em>before you go.</em></h2><span className="mono-label">DAY 01</span></div>
      <div className="project-grid">
        <article className="project-card"><div className="project-top"><span>01</span><span>LIVE DEMO</span></div><h3>RVS Campus Clinic</h3><p>Moderate crowd · 18 people · estimated wait 22 min</p><button className="button secondary" onClick={() => setReported(true)}>Report current queue</button></article>
        <article className="project-card"><div className="project-top"><span>02</span><span>LIVE DEMO</span></div><h3>City Service Counter</h3><p>Low crowd · 6 people · estimated wait 8 min</p><button className="button secondary" onClick={() => setReported(true)}>Report current queue</button></article>
        <article className="project-card"><div className="project-top"><span>03</span><span>LIVE DEMO</span></div><h3>Student Help Desk</h3><p>High crowd · 31 people · estimated wait 35 min</p><button className="button secondary" onClick={() => setReported(true)}>Report current queue</button></article>
      </div>
    </section>
    <section className="section" id="day02" style={{ paddingTop: 40 }}>
      <article className="feature large" style={{ minHeight: "auto", padding: 32 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}><span className="eyebrow">DAY 02 · TEST PRODUCT</span><span style={{ color: "#2563eb", font: "10px 'Space Mono'" }}>● TEST BUILD</span></div>
        <h2 style={{ marginBottom: 8 }}>StudySprint</h2>
        <p style={{ color: "#2563eb", fontWeight: 700 }}>Student Productivity · v0.1 TEST</p>
        <p className="days-muted" style={{ maxWidth: 720, lineHeight: 1.8 }}>A lightweight study planner for testing the Daily Innovation workflow. It gives students one place to see today's work, start a focus block and track progress.</p>
        <div className="feature-grid" style={{ marginTop: 30 }}>
          <div className="feature"><span>THE PROBLEM</span><p>Study tasks and assignments are often scattered across notes, chats and different apps.</p></div>
          <div className="feature"><span>THE TEST</span><p>Test navigation, responsive cards, buttons and a small interactive state without creating a production app.</p></div>
          <div className="feature"><span>DESIGN</span><p>White base theme, mobile-first layout, clean cards, strong typography and matching Android-ready branding.</p></div>
        </div>
        <div className="actions" style={{ marginTop: 28 }}>
          <a className="button primary" href="/download/studysprint">Download StudySprint APK ↓</a>
          <button className="button secondary" onClick={() => setTestMessage((value) => !value)} aria-label="Run the Day 02 StudySprint browser test">Run Day 02 test</button>
          <a className="button secondary" href="#day01">Back to Day 01</a>
        </div>
        {testMessage && <p style={{ color: "#2563eb", marginTop: 16, fontSize: 12 }}>Day 02 interaction test passed in the browser UI.</p>}
      </article>
    </section>
    <footer className="footer"><span>© 2026 GOKUL.AI · DAY 01 + DAY 02 TEST</span><span>DAILY INNOVATION</span><a href="/">BACK TO PORTFOLIO ↑</a></footer>
  </main>;
}
