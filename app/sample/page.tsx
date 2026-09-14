import "./sample.css";

const projects = [
  ["AgriBot AI", "Smart agriculture robotics, IoT and AI."],
  ["FarmPlug AI", "Market intelligence for farmers and FPOs."],
  ["Gokul AI", "Personal AI portfolio and assistant."],
] as const;

export default function SamplePage() {
  return (
    <main className="sample-page">
      <header className="sample-header">
        <nav className="wrap sample-nav">
          <a className="brand" href="/">GOKUL<em>.AI</em></a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="nav-cta" href="#work">Explore Work ↗</a>
        </nav>
      </header>

      <section className="hero-sample">
        <div className="wrap hero-content">
          <div className="eyebrow">CREATIVE DEVELOPER · AI BUILDER</div>
          <h1>BUILDING<br /><span>DIGITAL</span><br />PRODUCTS.</h1>
          <p className="hero-sub">AI-focused full-stack builder creating practical products across software, smart agriculture, robotics and product engineering.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">View Projects →</a>
            <a className="btn btn-ghost" href="/">Back to Portfolio</a>
          </div>
          <div className="hero-meta">
            <div><span className="k">FOCUS</span><span className="v">AI / WEB / IoT</span></div>
            <div><span className="k">BASED IN</span><span className="v">INDIA · 2026</span></div>
            <div><span className="k">STATUS</span><span className="v">BUILDING</span></div>
          </div>
        </div>
      </section>

      <div className="marquee"><div className="marquee-track"><span>AI ENGINEERING</span><span className="hl">✦</span><span>FULL-STACK DEVELOPMENT</span><span className="hl">✦</span><span>ROBOTICS & IoT</span><span className="hl">✦</span><span>SMART AGRICULTURE</span><span className="hl">✦</span><span>AI ENGINEERING</span><span className="hl">✦</span><span>FULL-STACK DEVELOPMENT</span></div></div>

      <section className="section" id="about">
        <div className="wrap">
          <div className="section-head"><div className="eyebrow">01 / ABOUT</div><h2>Technology should<br />solve real problems.</h2><p>I build end-to-end products where software, AI and real-world engineering meet.</p></div>
          <div className="about-grid"><div><p>From architecture and databases to interfaces, AI assistants and deployment, the goal is simple: turn ideas into useful working products.</p><p>This sample demonstrates the dark purple, orange and magenta visual language from the CSS you provided.</p></div><div className="stat-row"><div className="stat"><div className="num">04</div><div className="lbl">Core projects</div></div><div className="stat"><div className="num">18</div><div className="lbl">Skills</div></div><div className="stat"><div className="num">AI</div><div className="lbl">Main focus</div></div></div></div>
        </div>
      </section>

      <section className="section" id="work">
        <div className="wrap">
          <div className="section-head"><div className="eyebrow">02 / SELECTED WORK</div><h2>Things built.</h2><p>A compact project showcase using the same visual system.</p></div>
          <div className="events-grid">{projects.map(([name, desc], i) => <article className="event-card" key={name}><div><div className="tag">PROJECT 0{i + 1}</div><h3>{name}</h3><p className="desc">{desc}</p></div><div className="foot"><span>GOKUL.AI</span><span>↗</span></div></article>)}</div>
        </div>
      </section>

      <section className="section contact-sample" id="contact">
        <div className="wrap"><div className="eyebrow">03 / NEXT</div><h2>Have an idea?<br /><span>Let&apos;s build it.</span></h2><a className="btn btn-primary" href="/">Back to Gokul AI →</a></div>
      </section>

      <footer><div className="wrap foot-grid"><div className="foot-brand">GOKUL.AI</div><div className="foot-links"><a href="/">Portfolio</a><a href="#work">Projects</a><a href="#contact">Contact</a></div><div className="foot-note">© 2026 GOKUL.AI · DESIGN SAMPLE</div></div></footer>
    </main>
  );
}
