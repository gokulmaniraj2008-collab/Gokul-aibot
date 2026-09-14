"use client";

import Link from "next/link";

export default function WelcomePage() {
  return (
    <main className="welcome-page">
      <div className="welcome-glow glow-one" />
      <div className="welcome-glow glow-two" />

      <section className="welcome-card" aria-labelledby="welcome-title">
        <div className="welcome-mark">G<span>AI</span></div>
        <div className="eyebrow">WELCOME TO GOKUL.AI</div>
        <h1 id="welcome-title">Hi, I’m <span>Gokul.</span></h1>
        <p className="welcome-intro">
          I’m a student, builder and AI-focused developer who loves turning ideas into useful products.
        </p>

        <div className="welcome-points">
          <span>AI & Software</span>
          <span>Robotics & IoT</span>
          <span>Smart Agriculture</span>
          <span>Product Building</span>
        </div>

        <p className="welcome-detail">
          This is my digital space to share who I am, what I build, what I’m learning and where I’m going next.
        </p>

        <Link className="welcome-start" href="/#about">
          Get Started <span>→</span>
        </Link>

        <div className="welcome-meta">
          <span>GOKUL.AI</span>
          <span>INDIA · 2026</span>
        </div>
      </section>
    </main>
  );
}
