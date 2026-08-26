export default function Portfolio() {
  const projects = [
    ["GKFXL", "Startup and technology ecosystem focused on products, tools and business systems.", "Next.js · Supabase · TypeScript"],
    ["GGE", "AI-powered guidance platform for students and rural communities.", "Next.js · AI · Tailwind CSS"],
    ["DRYNN", "Digital-first custom apparel and streetwear brand experience.", "Next.js · Supabase · Cloudinary"],
    ["Santro", "Multi-vendor commerce platform connecting customers, shops and delivery.", "Next.js · Supabase · PostgreSQL"],
    ["StackMonitor AI", "Concept for intelligent monitoring of cloud services, APIs and databases.", "AI · Monitoring · Cloud"],
    ["Smart Agriculture", "Agriculture-focused robotics, IoT and automation work.", "Robotics · AI · IoT"],
  ];

  return (
    <main className="page">
      <nav className="nav">
        <div className="logo">GOKUL.AI</div>
        <a className="pill" href="/">Home</a>
      </nav>

      <section className="hero">
        <div>
          <div className="eyebrow">Founder · Full Stack Developer · AI Engineer</div>
          <h1>GOKUL</h1>
          <p>
            Founder of GKFXL, full stack developer, AI engineer and Agricultural Engineering student.
            I build AI-powered software, SaaS products, robotics, IoT systems and practical technology solutions.
          </p>
          <div className="actions">
            <a className="button" href="https://github.com/gokulmaniraj2008-collab" target="_blank" rel="noreferrer">GitHub Profile</a>
            <a className="button secondary" href="#projects">View Projects</a>
          </div>
        </div>
        <div className="card">
          <div className="eyebrow">Vision</div>
          <h2>Dream · Build · Scale</h2>
          <p style={{color:'#aaa',lineHeight:1.7}}>
            Build globally impactful technology products from India across AI, education, agriculture and automation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="eyebrow">About Me</div>
        <h2>Building technology that matters.</h2>
        <div className="grid">
          <article className="item"><h3>Mission</h3><p>Build useful AI, SaaS, robotics and smart-agriculture solutions for real-world problems.</p></article>
          <article className="item"><h3>Focus</h3><p>Full-stack architecture, databases, REST APIs, AI integration, product design and cloud deployment.</p></article>
          <article className="item"><h3>Learning</h3><p>Advanced Next.js, AI engineering, system design, cloud architecture, PostgreSQL, Docker and DevOps.</p></article>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="eyebrow">Featured Work</div>
        <h2>Projects</h2>
        <div className="grid">
          {projects.map(([name, desc, stack]) => (
            <article className="item" key={name}>
              <h3>{name}</h3>
              <p>{desc}</p>
              <p><strong>{stack}</strong></p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="eyebrow">Tech Stack</div>
        <h2>Tools I build with.</h2>
        <div className="grid">
          {[
            ["Frontend", "HTML · CSS · JavaScript · TypeScript · React · Next.js · Tailwind CSS"],
            ["Backend", "Node.js · Next.js API Routes · REST APIs"],
            ["Database", "PostgreSQL · Supabase · Firebase"],
            ["AI", "OpenAI · Groq · LangChain · Hugging Face · RAG · Prompt Engineering"],
            ["Cloud", "Vercel · Docker · Linux · Git · GitHub · Render · Railway"],
            ["Languages", "JavaScript · TypeScript · Python · C++"],
          ].map(([name, value]) => <article className="item" key={name}><h3>{name}</h3><p>{value}</p></article>)}
        </div>
      </section>

      <section className="section">
        <div className="card">
          <div className="eyebrow">Goals</div>
          <h2>What's next?</h2>
          <p style={{color:'#aaa',lineHeight:1.8}}>
            Build globally recognized software products, grow GKFXL, create impactful AI products,
            modernize agriculture through technology, help students and startups, and contribute to open source.
          </p>
        </div>
      </section>

      <footer className="footer">© 2026 Gokul · GOKUL.AI</footer>
    </main>
  );
}
