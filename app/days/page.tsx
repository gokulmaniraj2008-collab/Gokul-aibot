export default function DaysPage() {
  return (
    <main className="page daily-builds theme-light" style={{ minHeight: "100vh" }}>
      <nav className="nav">
        <a className="logo" href="/" aria-label="Gokul AI home">
          <span className="logo-mark">G</span>GOKUL<span className="logo-dot">.AI</span>
        </a>
        <div className="navlinks">
          <a className="button secondary" href="/" aria-label="Go back to portfolio">← Back</a>
          <a href="/">Portfolio</a>
        </div>
        <div className="days-nav-actions">
          <span className="eyebrow">DAILY BUILDS</span>
        </div>
      </nav>

      <section className="section" style={{ paddingTop: 28 }}>
        <a
          className="button secondary"
          href="/"
          aria-label="Go back to portfolio"
          style={{ display: "inline-flex", marginBottom: 42, textDecoration: "none" }}
        >
          ← Back
        </a>

        <div className="eyebrow">DAILY BUILDS</div>
        <h1
          style={{
            fontFamily: "'Plus Jakarta Sans'",
            fontSize: "clamp(48px,8vw,92px)",
            lineHeight: 0.95,
            letterSpacing: "-.07em",
            margin: "18px 0",
          }}
        >
          Coming Soon.
        </h1>
        <p className="days-muted" style={{ maxWidth: 650, lineHeight: 1.8 }}>
          The new Daily Build cycle starts today at 8:00 PM IST.
          A new original website and matching Android app will be created and shipped from here.
        </p>
      </section>

      <section className="section" style={{ paddingTop: 20, paddingBottom: 80 }}>
        <article
          className="feature large"
          style={{
            minHeight: 360,
            padding: 32,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="eyebrow">NEXT BUILD</div>
          <h2 style={{ margin: "18px 0 12px" }}>Coming Soon</h2>
          <p className="days-muted" style={{ maxWidth: 620, lineHeight: 1.8, margin: 0 }}>
            The previous projects have been cleared. The new cycle has no previous project carried over.
          </p>
          <p style={{ marginTop: 24, fontWeight: 700 }}>Starts today at 8:00 PM IST.</p>
        </article>
      </section>

      <footer className="footer">
        <span>© 2026 GOKUL.AI · DAILY BUILDS</span>
        <span>COMING SOON</span>
        <a href="/">BACK TO PORTFOLIO ↑</a>
      </footer>
    </main>
  );
}
