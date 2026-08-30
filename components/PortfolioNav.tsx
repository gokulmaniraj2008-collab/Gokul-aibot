"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Skills", "/skills"],
  ["Projects", "/projects"],
  ["Experience", "/experience"],
  ["Education", "/education"],
  ["Achievements", "/achievements"],
  ["Contact", "/contact"],
] as const;

export default function PortfolioNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    const isDark = saved === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("portfolio-theme", next ? "dark" : "light");
  }

  return (
    <>
      <nav className="nav" aria-label="Primary navigation">
        <Link className="logo" href="/" aria-label="Gokul AI home">
          <span className="logo-mark">G</span>GOKUL<span className="logo-dot">.AI</span>
        </Link>

        <div className="navlinks" data-open={open}>
          {links.map(([label, href]) => (
            <Link key={href} href={href} className={pathname === href ? "active" : ""}>
              {label}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle theme">
            {dark ? "☀" : "☾"}
          </button>
          <Link className="nav-cta" href="/resume">Resume ↗</Link>
          <button className="menu-toggle" type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label="Toggle navigation menu">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      <div className="mobile-nav">
        <Link href="/"><span>⌂</span>Home</Link>
        <Link href="/about"><span>◎</span>About</Link>
        <Link href="/skills"><span>✦</span>Skills</Link>
        <Link href="/projects"><span>◆</span>Work</Link>
        <Link href="/resume"><span>↗</span>Resume</Link>
      </div>
    </>
  );
}
