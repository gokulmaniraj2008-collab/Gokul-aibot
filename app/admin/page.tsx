"use client";

import { FormEvent, useEffect, useState } from "react";
import { getSupabaseBrowser } from "@/lib/supabase-browser";

const projects = [
  ["GKFXL", "Startup operating system"],
  ["GGE", "AI guidance platform"],
  ["DRYNN", "Premium apparel platform"],
  ["Santro", "Multi-vendor marketplace"],
  ["AgriBot", "Smart agriculture robot"],
];

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [session, setSession] = useState<any>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const supabase = getSupabaseBrowser();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, next) => setSession(next));
    return () => listener.subscription.unsubscribe();
  }, [supabase]);

  async function login(e: FormEvent) {
    e.preventDefault(); setBusy(true); setError("");
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message); else setSession(data.session);
    setBusy(false);
  }

  if (!session) return (
    <main className="admin-page">
      <div className="admin-login">
        <div className="logo"><span className="logo-mark">G</span> GOKUL.AI</div>
        <div className="eyebrow">PRIVATE ADMIN</div>
        <h1>Welcome back.</h1>
        <p>Sign in with your Supabase admin account to manage the portfolio.</p>
        <form onSubmit={login} className="admin-form">
          <input type="email" required placeholder="Admin email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" />
          <input type="password" required placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} autoComplete="current-password" />
          {error && <div className="admin-error">{error}</div>}
          <button className="button" disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button>
        </form>
        <a className="admin-back" href="/">← Back to portfolio</a>
      </div>
    </main>
  );

  return (
    <main className="admin-page">
      <div className="admin-shell">
        <header className="admin-header"><div><div className="eyebrow">GOKUL.AI / ADMIN</div><h1>Dashboard</h1><p>Manage and review your portfolio from one place.</p></div><button className="button secondary" onClick={() => supabase.auth.signOut()}>Sign out</button></header>
        <section className="admin-stats"><div><b>{projects.length}</b><span>Featured projects</span></div><div><b>AI</b><span>Assistant enabled</span></div><div><b>Live</b><span>Portfolio status</span></div></section>
        <section className="admin-card"><div className="eyebrow">PROJECTS</div><h2>Portfolio projects</h2><div className="admin-list">{projects.map(([name, desc]) => <div className="admin-row" key={name}><div><strong>{name}</strong><span>{desc}</span></div><span className="status-pill">Published</span></div>)}</div></section>
        <section className="admin-card"><div className="eyebrow">QUICK ACTIONS</div><h2>Portfolio</h2><div className="actions"><a className="button" href="/">View website</a><a className="button secondary" href="https://github.com/gokulmaniraj2008-collab/Gokul-aibot" target="_blank" rel="noreferrer">GitHub ↗</a></div></section>
      </div>
    </main>
  );
}
