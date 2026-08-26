export default function Portfolio() {
  const projects = [
    ["GKFXL", "Startup and technology ecosystem focused on products, tools and business systems.", "Next.js · Supabase · TypeScript"],
    ["GGE", "AI-powered guidance platform for students and rural communities.", "Next.js · AI · Tailwind CSS"],
    ["DRYNN", "Digital-first custom apparel and streetwear brand experience.", "Next.js · Supabase · Cloudinary"],
    ["Santro", "Multi-vendor commerce platform connecting customers, shops and delivery.", "Next.js · Supabase · PostgreSQL"],
    ["StackMonitor AI", "Concept for intelligent monitoring of cloud services, APIs and databases.", "AI · Monitoring · Cloud"],
  ];
  const skills = [
    ["Software", "HTML · CSS · JavaScript · TypeScript · React · Next.js · Tailwind CSS · Node.js · REST APIs"],
    ["Database & Cloud", "PostgreSQL · Supabase · Firebase · Vercel · Docker · Linux · Git · GitHub"],
    ["AI & ML", "OpenAI · Groq · LangChain · Hugging Face · RAG · Prompt Engineering · Machine Learning"],
    ["Hardware & Electronics", "ESP32 · ESP32-CAM · Arduino · Sensors · DC Motors · Motor Drivers · Relay & Pump Control · GPS · IoT · Embedded Systems"],
    ["Robotics & Automation", "Robot control · Sensor integration · Motor systems · Automation · Hardware–software integration · Prototyping"],
    ["Business & Entrepreneurship", "Startup building · Product ideation · MVP development · Business strategy · Product planning · Branding · Business systems"],
    ["Research & Analysis", "Technical research · Market research · Product research · Data analysis · System analysis · Technology comparison · Problem solving · Experimentation"],
    ["Languages", "JavaScript · TypeScript · Python · C++"],
  ];

  return (
    <main className="page">
      <nav className="nav"><div className="logo">GOKUL.AI</div><div style={{display:'flex',gap:10}}><a className="pill" href="/">Home</a><a className="pill" href="/#assistant">Ask AI</a></div></nav>
      <section className="hero"><div><div className="eyebrow">Founder · Full Stack Developer · AI Engineer</div><h1>GOKUL</h1><p>Founder of GKFXL, full stack developer, AI engineer and Agricultural Engineering student. I build AI-powered software, SaaS products and practical technology solutions.</p><div className="actions"><a className="button" href="#projects">Explore Projects</a><a className="button secondary" href="https://github.com/gokulmaniraj2008-collab" target="_blank" rel="noreferrer">GitHub</a></div></div><div className="card"><div className="orb">G</div><p style={{color:'#aaa',lineHeight:1.7}}>Dream · Build · Scale — technology products from India for a global audience.</p></div></section>

      <section className="section" id="about"><div className="eyebrow">01 · ABOUT ME</div><h2>Building technology that matters.</h2><div className="grid"><article className="item"><h3>Mission</h3><p>Build useful AI, SaaS, robotics and smart-technology solutions for real-world problems.</p></article><article className="item"><h3>Vision</h3><p>Build globally impactful technology products from India across AI, education, agriculture and automation.</p></article></div></section>
      <section className="section" id="education"><div className="eyebrow">02 · EDUCATION</div><h2>Engineering + Technology</h2><article className="item"><h3>B.Tech Agricultural Engineering</h3><p>Engineering student combining agriculture, software, AI, IoT and robotics to create practical solutions.</p></article></section>
      <section className="section" id="skills"><div className="eyebrow">03 · SKILLS</div><h2>Software + AI + Hardware + Business + Research</h2><div className="grid">{skills.map(([name,value])=><article className="item" key={name}><h3>{name}</h3><p>{value}</p></article>)}</div></section>
      <section className="section" id="projects"><div className="eyebrow">04 · PROJECTS</div><h2>Selected work</h2><div className="grid">{projects.map(([name,desc,stack])=><article className="item" key={name}><h3>{name}</h3><p>{desc}</p><p><strong>{stack}</strong></p></article>)}</div></section>
      <section className="section" id="experience"><div className="eyebrow">05 · EXPERIENCE</div><h2>What I do</h2><div className="grid"><article className="item"><h3>Founder</h3><p>GKFXL · building technology and business systems.</p></article><article className="item"><h3>Full Stack Developer</h3><p>Architecture, databases, APIs, UI and cloud deployment.</p></article><article className="item"><h3>AI Engineer</h3><p>AI integration and AI-powered product experiences.</p></article></div></section>
      <section className="section" id="learning"><div className="eyebrow">06 · CURRENTLY LEARNING</div><h2>Always improving.</h2><article className="item"><p>Advanced Next.js · AI Engineering · System Design · Cloud Architecture · PostgreSQL · Docker · DevOps · Machine Learning · LLMs · RAG</p></article></section>
      <section className="section" id="goals"><div className="eyebrow">07 · GOALS</div><h2>Dream · Build · Scale</h2><article className="item"><p>Build globally recognized software products, grow GKFXL, create impactful AI products, modernize agriculture through technology, help students and startups, and contribute to open source.</p></article></section>
      <section className="section" id="github"><div className="eyebrow">08 · GITHUB</div><h2>Open source & experiments</h2><p style={{color:'#aaa',lineHeight:1.7}}>Explore my repositories, prototypes and ongoing experiments.</p><a className="button" href="https://github.com/gokulmaniraj2008-collab" target="_blank" rel="noreferrer">View GitHub Profile</a></section>
      <section className="section" id="contact"><div className="eyebrow">09 · CONTACT</div><h2>Let's build something.</h2><p style={{color:'#aaa',lineHeight:1.7}}>For projects, collaboration or ideas, connect through GitHub.</p><a className="button" href="https://github.com/gokulmaniraj2008-collab" target="_blank" rel="noreferrer">Connect on GitHub</a></section>
      <footer className="footer">© 2026 Gokul · GOKUL.AI</footer>
    </main>
  );
}
