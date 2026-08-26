export default function Portfolio() {
  const vercelTeam = "https://vercel.com/gokulmaniraj2008-collabs-projects/";
  const projects = [
    ["Gokul AI","Main Gokul AI portfolio and AI product platform.","Next.js · AI · Supabase","gokul-aibot"],
    ["AGRIBOT","Separate smart agriculture robotics platform with ESP32, sensors, automation and irrigation control.","Robotics · IoT · Agriculture","agribot"],
    ["Test Car","Vehicle and motor-control prototype.","Robotics · Embedded · Prototype","test-car"],
    ["Car Test 2","Second vehicle-control and testing prototype.","Robotics · Embedded · Prototype","car-test-2"],
    ["Startup Skill Test","Startup and product skill experimentation platform.","Startup · Product · Web","startup-skill-test"],
    ["RVS Agri Engg","Agricultural engineering project and information platform.","Agriculture · Education · Web","rvs-agri-engg"],
    ["Money Tracker","Personal finance tracking application.","Web · Finance","money-tracker"],
    ["DRYNN","Digital-first custom apparel and streetwear brand experience.","Next.js · Supabase · Cloudinary","drynn"],
    ["BLAST Symposium 2026","Symposium and event web platform.","Events · Web · Product","blast-symposium-2026"],
    ["BLAST Symposium 2026 · Alt","Alternative deployment of the symposium platform.","Events · Web","blast-symposium-2026-6kon"],
    ["E-commerce V2","E-commerce storefront and product experience.","E-commerce · Web","e-commerce-v2"],
    ["E-commerce V2 · Build","Second deployment/build of the e-commerce platform.","E-commerce · Web","e-commerce-v2-b645"],
    ["The Big Project","Large product and application experiment.","Web · Product","the-big-project"],
    ["The Big Project V2","Updated version of the large product experiment.","Web · Product","the-big-project-v2"],
    ["Home","Web home and interface project.","Web · UI","home"],
    ["Gokul","Personal software and web project.","Web · Development","gokul"],
    ["Hasan","Collaborative software project.","Web · Development","hasan"],
    ["Praneesh Project","Collaborative project and prototype.","Web · Prototype","praneesh-project"],
    ["Anti","Software project and experiment.","Development · Prototype","anti"],
    ["Santosh Demo","Demo and prototype application.","Web · Demo","santosh-demo"],
    ["Trackor","Tracking and application project.","Software · Development","trackor"],
    ["Anime","Anime-themed web experiment.","Web · UI · Prototype","anime"],
    ["Flames","Interactive web experiment.","Web · Interactive","flames"],
    ["Flames 1RUR","Alternative Flames deployment.","Web · Interactive","flames-1rur"],
    ["Company","Company website and product experiment.","Web · Business","company"],
    ["Elephant","Software and creative web experiment.","Web · Prototype","elephant"],
    ["Phoenix","Software project and experiment.","Development · Prototype","phoenix"],
    ["Dragon","Software project and experiment.","Development · Prototype","dragon"],
    ["GKFXL","Startup and technology ecosystem focused on products, tools and business systems.","Next.js · Supabase · TypeScript","gkfxl"],
    ["GGE","AI-powered guidance platform for students and rural communities.","Next.js · AI · Tailwind CSS","gge"],
    ["TANNE","Project and product work from the Gokul portfolio.","Web · Product · Development","tanne-95rt"],
    ["GKFXL Government","Government information and technology project.","Web · Information","gk-fxl-government-j3mo"],
    ["GK Xezus","Software and product experiment.","Web · Prototype","gk-xezus"],
    ["Samvidhan AI","AI-focused information and application project.","AI · Web · Product","samvidhan-ai-si9t"]
  ];
  const skills = [["Software","HTML · CSS · JavaScript · TypeScript · React · Next.js · Tailwind CSS · Node.js · REST APIs"],["Database & Cloud","PostgreSQL · Supabase · Firebase · Vercel · Docker · Linux · Git · GitHub"],["AI & ML","OpenAI · Groq · LangChain · Hugging Face · RAG · Prompt Engineering · Machine Learning"],["Hardware & Electronics","ESP32 · ESP32-CAM · Arduino · Sensors · DC Motors · Motor Drivers · Relay & Pump Control · GPS · IoT · Embedded Systems"],["Robotics & Automation","Robot control · Sensor integration · Motor systems · Automation · Hardware–software integration · Prototyping"],["Business & Entrepreneurship","Startup building · Product ideation · MVP development · Business strategy · Product planning · Branding · Business systems"],["Research & Analysis","Technical research · Market research · Product research · Data analysis · System analysis · Technology comparison · Problem solving · Experimentation"],["Languages","JavaScript · TypeScript · Python · C++"]];
  return <main className="page">
    <nav className="nav"><div className="logo"><span className="logo-mark">G</span> GOKUL.AI</div><div className="navlinks"><a href="#home">Home</a><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact</a></div><a className="pill" href="/#assistant">Ask AI</a></nav>
    <section className="hero hero-premium" id="home"><div className="hero-grid"/><div className="hero-content"><div className="hero-badge"><span className="pulse-dot"/> AVAILABLE FOR NEW PROJECTS</div><div className="hero-kicker">BUILDING THE FUTURE OF</div><h1>INTELLIGENT<br/><span>INTERFACES</span></h1><div className="hero-name">G o k u l&nbsp;&nbsp; <b>A I</b></div><p className="hero-description">Minimal, high-performance web products crafted with Next.js and Tailwind CSS.</p><div className="actions"><a className="button hero-primary" href="#projects">Explore Projects</a><a className="button secondary" href="#contact">Contact</a></div><div className="install-label">npm i @gokul/core</div></div></section>
    <section className="section" id="about"><div className="eyebrow">01 · ABOUT ME</div><h2>Building technology that matters.</h2><div className="grid"><article className="item"><h3>Mission</h3><p>Build useful AI, SaaS, robotics and smart-technology solutions for real-world problems.</p></article><article className="item"><h3>Vision</h3><p>Build globally impactful technology products from India across AI, education, agriculture and automation.</p></article></div></section>
    <section className="section" id="education"><div className="eyebrow">Education</div><h2>Engineering + Technology</h2><article className="item"><h3>B.Tech Agricultural Engineering</h3><p>Engineering student combining agriculture, software, AI, IoT and robotics to create practical solutions.</p></article></section>
    <section className="section" id="skills"><div className="eyebrow">02 · SKILLS</div><h2>Software + AI + Hardware + Business + Research</h2><div className="grid">{skills.map(([name,value])=><article className="item" key={name}><h3>{name}</h3><p>{value}</p></article>)}</div></section>
    <section className="section" id="projects"><div className="eyebrow">03 · PROJECTS</div><h2>All Vercel Projects</h2><p className="section-intro">A live portfolio index of the Vercel projects in my workspace. AGRIBOT remains a separate project.</p><div className="grid">{projects.map(([name,desc,stack,slug])=><article className="item" key={slug}><h3>{name}</h3><p>{desc}</p><p><strong>{stack}</strong></p><a className="project-link" href={vercelTeam + slug} target="_blank" rel="noreferrer">Open Vercel ↗</a></article>)}</div></section>
    <section className="section" id="experience"><div className="eyebrow">04 · EXPERIENCE</div><h2>What I do</h2><div className="grid"><article className="item"><h3>Founder</h3><p>GKFXL · building technology and business systems.</p></article><article className="item"><h3>Full Stack Developer</h3><p>Architecture, databases, APIs, UI and cloud deployment.</p></article><article className="item"><h3>AI Engineer</h3><p>AI integration and AI-powered product experiences.</p></article></div></section>
    <section className="section" id="learning"><div className="eyebrow">Currently Learning</div><h2>Always improving.</h2><article className="item"><p>Advanced Next.js · AI Engineering · System Design · Cloud Architecture · PostgreSQL · Docker · DevOps · Machine Learning · LLMs · RAG</p></article></section>
    <section className="section" id="goals"><div className="eyebrow">Goals & Vision</div><h2>Dream · Build · Scale</h2><article className="item"><p>Build globally recognized software products, grow GKFXL, create impactful AI products, modernize agriculture through technology, help students and startups, and contribute to open source.</p></article></section>
    <section className="section" id="github"><div className="eyebrow">GitHub</div><h2>Open source & experiments</h2><p>Explore my repositories, prototypes and ongoing experiments.</p><a className="button" href="https://github.com/gokulmaniraj2008-collab" target="_blank" rel="noreferrer">View GitHub Profile</a></section>
    <section className="section" id="contact"><div className="eyebrow">05 · CONTACT</div><h2>Let's build something.</h2><p>For projects, collaboration or ideas, connect through GitHub.</p><a className="button" href="https://github.com/gokulmaniraj2008-collab" target="_blank" rel="noreferrer">Connect on GitHub</a></section>
    <div className="mobile-nav"><a href="#home"><span>⌂</span>Home</a><a href="#about"><span>◎</span>About</a><a href="#skills"><span>✦</span>Skills</a><a href="#projects"><span>◆</span>Projects</a><a href="#experience"><span>◈</span>Experience</a><a href="#contact"><span>✉</span>Contact</a></div>
    <footer className="footer">© 2026 Gokul · GOKUL.AI</footer>
  </main>;
}