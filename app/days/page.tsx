export default function DaysPage() {
  return (
    <main className="page daily-builds theme-light" style={{ minHeight: "100vh" }}>
      <nav className="nav">
        <a className="logo" href="/" aria-label="Gokul AI home">GOKUL<span className="logo-dot">.AI</span></a>
        <div className="navlinks"><a className="button secondary" href="/">← Back</a><a href="/">Portfolio</a></div>
        <div className="days-nav-actions"><span className="eyebrow">DAILY BUILDS</span></div>
      </nav>

      <section className="section" style={{ paddingTop: 28 }}>
        <div className="eyebrow">DAILY BUILDS · DAY ONE</div>
        <h1 style={{ fontFamily: "'Plus Jakarta Sans'", fontSize: "clamp(48px,8vw,92px)", lineHeight: 0.95, letterSpacing: "-.07em", margin: "18px 0" }}>One useful idea.<br />Shipped daily.</h1>
        <p className="days-muted" style={{ maxWidth: 680, lineHeight: 1.8 }}>Each build starts with a real problem, a focused core experience, and a website + Android companion that can grow into a business.</p>
      </section>

      <section className="section" style={{ paddingTop: 20, paddingBottom: 80 }}>
        <a href="/days/day-01" style={{ textDecoration: "none" }}>
          <article className="feature large" style={{ minHeight: 360, padding: 32, borderRadius: 28 }}>
            <div className="eyebrow">DAY 01 · OFFLINE-FIRST LOCAL EXCHANGE</div>
            <h2 style={{ margin: "18px 0 12px", fontSize: "clamp(34px,6vw,64px)", letterSpacing: "-.05em" }}>PocketRelay</h2>
            <p className="days-muted" style={{ maxWidth: 680, lineHeight: 1.8, margin: 0 }}>Small help, right moment. A trusted relay board for tiny errands that are too small for a full service, but too important to forget.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 22 }}><span className="tag">Website</span><span className="tag">Android</span><span className="tag">Offline-first</span><span className="tag">MVP shipped</span></div>
          </article>
        </a>
      </section>

      <footer className="footer"><span>© 2026 GOKUL.AI · DAILY BUILDS</span><span>DAY ONE LIVE</span><a href="/">BACK TO PORTFOLIO ↑</a></footer>
    </main>
  );
}
