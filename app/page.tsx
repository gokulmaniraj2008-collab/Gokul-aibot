"use client";

import { useState } from "react";

const projects = [
  ["AgriBot", "Smart agriculture robot with sensors, automation and cloud monitoring."],
  ["AI Assistant", "A personal assistant designed to organize ideas, tasks and projects."],
  ["Web Projects", "Modern responsive websites and experiments built with React and Next.js."],
];

export default function Home() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("Hi! I'm Gokul's personal AI assistant. Ask me about Gokul, projects, skills or goals.");
  const [loading, setLoading] = useState(false);

  async function ask(e: React.FormEvent) {
    e.preventDefault();
    const text = message.trim();
    if (!text || loading) return;

    setLoading(true);
    setReply("Thinking...");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await response.json();
      setReply(data.reply || data.error || "Sorry, I couldn't generate a response.");
    } catch {
      setReply("Unable to reach the AI backend. Please try again.");
    } finally {
      setLoading(false);
      setMessage("");
    }
  }

  return (
    <main className="page">
      <nav className="nav"><div className="logo">GOKUL.AI</div><a className="pill" href="#assistant">Ask AI</a></nav>
      <section className="hero">
        <div><div className="eyebrow">Personal portfolio · Builder · Entrepreneur</div><h1>Build. Learn.<br/>Create.</h1><p>Welcome to Gokul's personal space on the web — a portfolio that also works as an AI-powered assistant.</p><div className="actions"><a className="button" href="#projects">Explore work</a><a className="button secondary" href="#assistant">Talk to AI</a></div></div>
        <div className="card"><div className="orb">G</div><p style={{color:'#aaa',lineHeight:1.6}}>A simple home for ideas, projects, skills and the next big thing.</p></div>
      </section>
      <section className="section" id="projects"><div className="eyebrow">Selected work</div><h2>Projects</h2><div className="grid">{projects.map(([name,desc])=><article className="item" key={name}><h3>{name}</h3><p>{desc}</p></article>)}</div></section>
      <section className="section" id="assistant"><div className="chat card"><div className="eyebrow">Personal AI</div><h2>Ask Gokul AI</h2><p style={{color:'#aaa',lineHeight:1.6}}>{reply}</p><form className="chatbox" onSubmit={ask}><input value={message} onChange={e=>setMessage(e.target.value)} placeholder="Ask something..." aria-label="Ask the assistant" disabled={loading}/><button className="button" type="submit" disabled={loading}>{loading ? "Thinking..." : "Send"}</button></form></div></section>
      <footer className="footer">© 2026 Gokul · Built with Next.js</footer>
    </main>
  );
}
