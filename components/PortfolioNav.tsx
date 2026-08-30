import Link from 'next/link';

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Skills', '/skills'],
  ['Projects', '/projects'],
  ['Experience', '/experience'],
  ['Education', '/education'],
  ['Achievements', '/achievements'],
  ['Contact', '/contact'],
] as const;

export default function PortfolioNav() {
  return (
    <>
      <nav className="nav" aria-label="Primary navigation">
        <Link className="logo" href="/" aria-label="Gokul AI home">
          <span className="logo-mark">G</span>GOKUL<span className="logo-dot">.AI</span>
        </Link>
        <div className="navlinks">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </div>
        <Link className="nav-cta" href="/resume">Resume ↗</Link>
      </nav>

      <nav className="mobile-nav" aria-label="Mobile navigation">
        <Link href="/"><span>⌂</span>Home</Link>
        <Link href="/about"><span>◎</span>About</Link>
        <Link href="/skills"><span>✦</span>Skills</Link>
        <Link href="/projects"><span>◆</span>Work</Link>
        <Link href="/resume"><span>↗</span>Resume</Link>
      </nav>
    </>
  );
}
