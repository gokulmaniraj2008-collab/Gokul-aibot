"use client";
import { useMemo, useState } from "react";
import "./main-theme.css";

const projects = [
  ["gokul-aibot", "Personal AI portfolio and assistant built with Next.js, TypeScript, Supabase and Vercel.", "Gokul AI"],
  ["agribot", "Agriculture robotics and automation platform combining ESP32, sensors, robotics, AI and a cloud dashboard.", "AgriBot AI"],
  ["farmplug-ai", "AI marketplace intelligence for farmers and FPOs focused on demand, price discovery, buyer matching and market linkages.", "FarmPlug AI"],
  ["gkfxl", "Gokul’s broader builder, startup and product ecosystem vision.", "GKFXL"],
];

const skills = ["Next.js", "React", "TypeScript", "JavaScript", "Node.js", "Supabase", "PostgreSQL", "Python", "AI Engineering", "REST APIs", "GitHub", "Vercel", "IoT & Robotics", "ESP32", "Business", "Research", "UI/UX", "Agricultural Engineering"];
const prompts = ["Who is Gokul?", "What is Gokul building?", "Show me the AgriBot project", "What are Gokul’s strongest skills?"];

export default function Home() {
  // Main portfolio is intentionally dark-only. No theme toggle on this page.
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("Hi! I’m Gokul AI. Ask me about Gokul, his work, projects, skills or vision.");
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  async function ask(textOverride?: string) {
    const text = (textOverride ?? message).trim();
    if (!text || loading) return;
    setLoading(true);
    setReply("Thinking…");
    try {
      const r = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: text }) });
      const d = await r.json();
      setReply(d.reply || d.error || "Sorry, I could not generate a response.");
    } catch {
      setReply("Unable to reach the AI backend. Please try again.");
    } finally {
      setLoading(false);
      setMessage("");
    }
  }

  const visible = useMemo(() => projects.filter(([n, d, r]) => `${n} ${d} ${r}`.toLowerCase().includes(query.toLowerCase())), [query]);

  return <main className="page main-home theme-dark"><div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <nav className="nav"><a className="logo" href="#home"><span className="logo-mark">G</span>GOKUL<span className="logo-dot">.AI</span></a><div className="navlinks"><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#assistant">AI</a><a href="#contact">Contact</a><a href="/days">Daily Builds</a></div><a className="nav-cta" href="#assistant"><span className="pulse"/> Ask AI</a></nav>
    <section className="hero" id="home"><div className="hero-copy"><div className="eyebrow"><span className="status-dot"/> BUILDING & LEARNING</div><h1>BUILDING THE<br/><span>INTELLIGENCE</span><br/>BEHIND TOMORROW.</h1><p className="hero-lead">AI-focused full-stack builder and 2nd-year Agricultural Engineering student at RVS TCC. Gokul builds practical products across AI, software, robotics, IoT, smart agriculture and business.</p><div className="actions"><a className="button primary" href="#projects">Explore work ↗</a><a className="button secondary" href="#assistant">Talk to Gokul AI ✦</a></div><div className="hero-meta"><span>INDIA · 2026</span><span>AI / SOFTWARE / AGRICULTURE</span><span>4 CORE PROJECTS</span></div></div><div className="hero-visual"><div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="core"><div className="core-inner">G<span>AI</span></div></div><div className="float-card card-top"><span>01</span><b>Build</b><small>Ideas → products</small></div><div className="float-card card-bottom"><span>✦</span><b>Gokul AI</b><small>Always learning</small></div></div></section>
    <section className="ticker"><span>AI ENGINEERING</span><i>✦</i><span>FULL-STACK DEVELOPMENT</span><i>✦</i><span>ROBOTICS & IoT</span><i>✦</i><span>SMART AGRICULTURE</span><i>✦</i><span>PRODUCT BUILDING</span></section>
    <section className="section" id="about"><div className="section-head"><div><div className="eyebrow">01 / ABOUT</div><h2>Technology should<br/><em>solve real problems.</em></h2></div><p className="section-intro">Gokul is a 2nd-year Agricultural Engineering student at RVS TCC who builds at the intersection of engineering, AI and product thinking. This portfolio focuses on the projects and capabilities that best represent that direction.</p></div><div className="feature-grid"><article className="feature large"><span>01</span><h3>Build from zero.</h3><p>From architecture and databases to interfaces, AI assistants and deployment, the goal is to ship useful products end-to-end.</p></article><article className="feature"><span>02</span><h3>AI + real-world engineering.</h3><p>Software, robotics, IoT and agricultural engineering are treated as connected systems rather than separate interests.</p></article><article className="feature"><span>03</span><h3>Learn by shipping.</h3><p>Daily builds, GitHub projects and prototypes turn ideas into working experiments and progressively stronger products.</p></article></div></section>
    <section className="section" id="skills"><div className="eyebrow">02 / CAPABILITIES</div><div className="section-title-row"><h2>The stack behind<br/><em>the experiments.</em></h2><span className="mono-label">18 CORE SKILLS</span></div><div className="tags">{skills.map((s, i) => <span key={s}><b>{String(i + 1).padStart(2, "0")}</b>{s}</span>)}</div></section>
    <section className="section" id="projects"><div className="eyebrow">03 / SELECTED WORK</div><div className="section-title-row"><h2>Things <em>built.</em></h2><span className="mono-label">{visible.length} / {projects.length}</span></div><div className="project-toolbar"><p>Focused projects across AI, software, robotics, agriculture and product building.</p><input className="project-search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search projects…" aria-label="Search projects"/></div><div className="project-grid">{visible.map(([name, desc], i) => <article className="project-card" key={name}><div className="project-top"><span>{String(i + 1).padStart(2, "0")}</span><span>PROJECT</span></div><h3>{name.replaceAll("-", " ")}</h3><div className="project-explanation"><span>PROJECT EXPLANATION</span><p>{desc}</p></div></article>)}</div></section>
    <section className="section assistant-section" id="assistant"><div className="assistant-shell"><div className="assistant-copy"><div className="eyebrow">04 / PERSONAL AI</div><h2>Ask<br/><em>Gokul AI.</em></h2><p>A conversational window into Gokul’s profile, projects, skills, technology stack and builder vision.</p><div className="ai-badge"><span className="pulse"/> ONLINE · AI ASSISTANT</div></div><div className="chat-card"><div className="chat-head"><div><span className="avatar">G</span><span><b>Gokul AI</b><small>Personal portfolio assistant</small></span></div><span className="online">●</span></div><div className="chat-message"><span className="mini-avatar">G</span><p>{reply}</p></div><div className="prompt-row">{prompts.map(p => <button key={p} onClick={() => ask(p)} disabled={loading}>{p}</button>)}</div><form className="chatbox" onSubmit={e => { e.preventDefault(); ask(); }}><input value={message} onChange={e => setMessage(e.target.value)} placeholder="Ask anything…" disabled={loading}/><button type="submit" disabled={loading}>{loading ? "…" : "↑"}</button></form><div className="chat-foot">POWERED BY GOKUL.AI · NEXT.JS · SUPABASE · VERCEL</div></div></div></section>
    <section className="section contact-section" id="contact"><div className="eyebrow">05 / CONTACT</div><h2>Have an idea?<br/><em>Let’s build it.</em></h2><div className="contact-row"><p>Open to interesting projects, collaborations, product ideas and conversations about AI, technology, agriculture and building products.</p><div className="actions"><a className="button secondary" href="https://github.com/gokulmaniraj2008-collab" target="_blank" rel="noreferrer">GitHub ↗</a></div></div></section>
    <footer className="footer"><span>© 2026 GOKUL.AI</span><span>BUILT WITH NEXT.JS · SUPABASE · VERCEL · AI</span><span>INDIA</span></footer>
    <div className="mobile-nav"><a href="#home">⌂<span>Home</span></a><a href="#about">◎<span>About</span></a><a href="#skills">✦<span>Skills</span></a><a href="#projects">◆<span>Work</span></a><a href="/days">▦<span>Days</span></a></div>
  </main>;
}
