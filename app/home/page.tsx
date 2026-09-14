"use client";

import Link from "next/link";
import { useState } from "react";
import "./home.css";

const quick = [
  ["About", "Who I am", "/#about"],
  ["Skills", "What I build with", "/#skills"],
  ["Projects", "My work & experiments", "/#projects"],
  ["AI", "Ask Gokul AI", "/#assistant"],
  ["Daily Builds", "Website + app progress", "/days"],
  ["Contact", "Let's build together", "/#contact"],
];

const more = [
  ["Profile", "About Gokul, education and vision", "/#about"],
  ["Settings", "Theme, app and preferences", "/settings"],
  ["Download App", "Get the Android companion", "https://github.com/gokulmaniraj2008-collab/Gokul-aibot/releases/latest/download/Gokul-AI.apk"],
  ["GitHub", "Explore the source and projects", "https://github.com/gokulmaniraj2008-collab"],
];

export default function HomeDashboard() {
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <main className="home-dashboard">
      <header className="home-header">
        <Link className="home-brand" href="/">
          <span className="home-brand-mark">G<span>AI</span></span>
          <span><b>GOKUL</b><small>.AI</small></span>
        </Link>
        <button className="profile-button" onClick={() => setMoreOpen(true)} aria-label="Open profile and more options">
          <span>G</span>
        </button>
      </header>

      <section className="home-hero">
        <div className="home-status"><i /> ONLINE · GOKUL.AI</div>
        <p className="home-kicker">WELCOME BACK</p>
        <h1>Build. Learn.<br /><em>Keep moving.</em></h1>
        <p className="home-subtitle">Your home for Gokul's profile, projects, AI, daily builds and everything being built next.</p>
        <div className="home-actions">
          <Link href="/#projects" className="home-primary">Explore My Work <span>→</span></Link>
          <Link href="/#assistant" className="home-secondary">Ask Gokul AI ✦</Link>
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-head"><span>QUICK ACCESS</span><small>Everything in one place</small></div>
        <div className="quick-grid">
          {quick.map(([title, desc, href], i) => (
            <Link className="quick-card" href={href} key={title}>
              <span className="quick-number">0{i + 1}</span>
              <b>{title}</b>
              <small>{desc}</small>
              <span className="quick-arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-feature-row">
        <Link href="/days" className="home-feature build-feature">
          <span>DAILY BUILDS</span>
          <h2>Build something<br /><em>every day.</em></h2>
          <p>Follow website and Android app progress from idea to shipped build.</p>
          <b>View daily progress →</b>
        </Link>
        <Link href="/#assistant" className="home-feature ai-feature">
          <span>PERSONAL AI</span>
          <h2>Ask anything<br /><em>about Gokul.</em></h2>
          <p>Projects, skills, vision, technology and the story behind the builds.</p>
          <b>Open Gokul AI →</b>
        </Link>
      </section>

      <section className="home-profile-card">
        <div className="profile-avatar">G<span>AI</span></div>
        <div><span>PROFILE</span><h2>Gokul S.</h2><p>AI-focused builder · Agricultural Engineering · RVS TCC</p></div>
        <Link href="/#about">View profile →</Link>
      </section>

      <section className="home-section recommendations">
        <div className="home-section-head"><span>RECOMMENDED</span><small>Start here</small></div>
        <div className="recommend-list">
          <Link href="/#projects"><b>01</b><span><strong>Explore projects</strong><small>See AGRIBOT, FarmPlug AI and other builds.</small></span><i>→</i></Link>
          <Link href="/#skills"><b>02</b><span><strong>View capabilities</strong><small>AI, full-stack, IoT, robotics and product building.</small></span><i>→</i></Link>
          <Link href="/days"><b>03</b><span><strong>Follow daily builds</strong><small>Website and app progress, releases and experiments.</small></span><i>→</i></Link>
        </div>
      </section>

      <footer className="home-footer"><span>© 2026 GOKUL.AI</span><span>INDIA · BUILDING FROM IDEAS</span></footer>

      <nav className="home-bottom-nav" aria-label="Main navigation">
        <Link className="active" href="/home"><span>⌂</span>Home</Link>
        <Link href="/#projects"><span>◆</span>Work</Link>
        <Link href="/#assistant"><span>✦</span>AI</Link>
        <Link href="/#contact"><span>◎</span>Contact</Link>
        <button onClick={() => setMoreOpen(true)}><span>•••</span>More</button>
      </nav>

      {moreOpen && <div className="more-backdrop" onClick={() => setMoreOpen(false)}>
        <aside className="more-sheet" onClick={e => e.stopPropagation()}>
          <div className="sheet-handle" />
          <div className="sheet-head"><div><span>GOKUL.AI</span><h2>More</h2></div><button onClick={() => setMoreOpen(false)}>×</button></div>
          <div className="more-list">
            {more.map(([title, desc, href]) => href.startsWith("http") ? (
              <a key={title} href={href} target="_blank" rel="noreferrer"><span className="more-icon">{title === "Download App" ? "↓" : "⌘"}</span><span><b>{title}</b><small>{desc}</small></span><i>↗</i></a>
            ) : <Link key={title} href={href}><span className="more-icon">{title === "Settings" ? "⚙" : "◎"}</span><span><b>{title}</b><small>{desc}</small></span><i>→</i></Link>)}
          </div>
        </aside>
      </div>}
    </main>
  );
}
