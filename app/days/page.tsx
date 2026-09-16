const days = [
  ["Day 01", "PocketRelay", "Offline-first local exchange", "/days/day-01"],
  ["Day 12", "DecisionDeck", "Decision scoring utility", "/days/day-12"],
  ["Day 13", "PromptPocket", "AI prompt workbench", "/days/day-13"],
];

export default function DaysPage() {
  return (
    <main className="page daily-builds theme-light" style={{ minHeight: "100vh" }}>
      <nav className="nav">
        <a className="logo" href="/" aria-label="Gokul AI home">GOKUL<span className="logo-dot">.AI</span></a>
        <div className="navlinks"><a className="button secondary" href="/">← Back</a><a href="/">Portfolio</a></div>
        <div className="days-nav-actions"><span className="eyebrow">DAILY BUILDS</span></div>
      </nav>

      <section className="section" style={{ paddingTop: 28 }}>
        <div className="eyebrow">DAILY BUILDS · ARCHIVE</div>
        <h1 style={{ fontFamily: "'Plus Jakarta Sans'", fontSize: "clamp(48px,8vw,92px)", lineHeight: 0.95, letterSpacing: "-.07em", margin: "18px 0" }}>One useful idea.<br />Shipped daily.</h1>
        <p className="days-muted" style={{ maxWidth: 680, lineHeight: 1.8 }}>Each build starts with a real problem, a focused core experience, and a mobile-friendly interface that can grow into a bigger product.</p>
      </section>

      <section className="section" style={{ paddingTop: 20, paddingBottom: 80, display: "grid", gap: 18 }}>
        {days.map(([day, title, category, href], index) => (
          <a key={day} href={href} style={{ textDecoration: "none" }}>
            <article className="feature large" style={{ minHeight: index === days.length - 1 ? 360 : 240, padding: 32, borderRadius: 28 }}>
              <div className="eyebrow">{day} · {category.toUpperCase()}</div>
              <h2 style={{ margin: "18px 0 12px", fontSize: "clamp(34px,6vw,64px)", letterSpacing: "-.05em" }}>{title}</h2>
              <p className="days-muted" style={{ maxWidth: 680, lineHeight: 1.8, margin: 0 }}>{index === days.length - 1 ? "A lightweight prompt workbench for tightening instructions before you paste them into an AI workflow." : index === 1 ? "A practical decision scorer using impact, effort, and confidence." : "Small help, right moment. A trusted relay board for tiny errands that are too small for a full service, but too important to forget."}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 22 }}><span className="tag">Website</span><span className="tag">Mobile friendly</span><span className="tag">MVP shipped</span></div>
            </article>
          </a>
        ))}
      </section>

      <footer className="footer"><span>© 2026 GOKUL.AI · DAILY BUILDS</span><span>DAY 13 LIVE</span><a href="/">BACK TO PORTFOLIO ↑</a></footer>
    </main>
  );
}
