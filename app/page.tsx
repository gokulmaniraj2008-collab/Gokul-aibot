"use client";
import { useState } from "react";

const VERCEL_TEAM="gokulmaniraj2008-collabs-projects";
const projects=[
 ["gokul-aibot","GOKUL.AI portfolio and AI website.","Gokul-aibot"],
 ["agribot","Agriculture robotics and automation project.","AGRIBOT"],
 ["test-car","Robot/car control project.","Test-car"],
 ["car-test-2","Second car testing project.","Car-test-2"],
 ["startup-skill-test","Startup and skills project.","Startup-skill-test-"],
 ["rvs-agri-engg","RVS Agricultural Engineering project.","RVS-AGRI-ENGG"],
 ["money-tracker","Money tracking application.","Money-tracker-"],
 ["drynn","Premium apparel and custom printing platform.","DRYNN"],
 ["blast-symposium-2026-6kon","BLAST Symposium 2026 project variant.","Blast-symposium-2026."],
 ["blast-symposium-2026","BLAST Symposium 2026 project.","Blast-symposium-2026"],
 ["e-commerce-v2-b645","E-commerce V2 deployment variant.","E-commerce-v2"],
 ["e-commerce-v2","E-commerce V2 project.","E-commerce-v2"],
 ["the-big-project-v2","The Big Project V2.","The-big-project-v2"],
 ["the-big-project","The Big Project.","The-big-project-"],
 ["home","Home web project.","Home"],
 ["gokul","Gokul web project.","Gokul"],
 ["hasan","Hasan project.","Hasan-"],
 ["praneesh-project","Praneesh project.","Praneesh-project-"],
 ["anti","Anti project.","anti"],
 ["santosh-demo","Santosh demo project.","Santosh-demo"],
 ["trackor","Trackor project.","Trackor"],
 ["anime","Anime project.","Anime-"],
 ["flames-1rur","Flames project variant.","Flames"],
 ["company","Company project.","Company-"],
 ["elephant","Elephant project.","Elephant-"],
 ["phoenix","Phoenix project.","Phoenix"],
 ["dragon","Dragon project.","Dragon"],
 ["gkfxl","GKFXL startup platform.","GKFXL"],
 ["gge","GGE guidance platform.","SRWP"],
 ["tanne-95rt","TANNE project.","TANNE"],
 ["gk-fxl-government-j3mo","GKFXL government project.","gk-fxl-government"],
 ["flames","Flames project.","Flames-"],
 ["gk-xezus","GkXezus project.","GkXezus"],
 ["samvidhan-ai-si9t","Samvidhan AI project.","samvidhan-ai"],
];
const skills=["Next.js","React","TypeScript","JavaScript","Node.js","Supabase","PostgreSQL","Python","AI Engineering","REST APIs","GitHub","Vercel","IoT & Robotics","Hardware","Business Knowledge","Research & Analysis","UI/UX","Agricultural Engineering"];
export default function Home(){
 const [message,setMessage]=useState(""); const [reply,setReply]=useState("Hi! I'm Gokul's personal AI assistant. Ask me about Gokul, projects, skills or goals."); const [loading,setLoading]=useState(false); const [query,setQuery]=useState("");
 async function ask(e:React.FormEvent){e.preventDefault();const text=message.trim();if(!text||loading)return;setLoading(true);setReply("Thinking...");try{const r=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:text})});const d=await r.json();setReply(d.reply||d.error||"Sorry, I couldn't generate a response.")}catch{setReply("Unable to reach the AI backend. Please try again.")}finally{setLoading(false);setMessage("")}}
 const visibleProjects=projects.filter(([name,,repo])=>`${name} ${repo}`.toLowerCase().includes(query.toLowerCase()));
 return <main className="page">
  <nav className="nav"><a className="logo" href="#home"><span className="logo-mark">G</span>GOKUL.AI</a><div className="navlinks"><a href="#home">Home</a><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#assistant">Ask AI</a><a href="#contact">Contact</a></div></nav>
  <section className="hero" id="home"><div><div className="eyebrow">✨ AVAILABLE FOR NEW PROJECTS</div><h1>BUILDING THE FUTURE OF<br/>INTELLIGENT INTERFACES</h1><h2 style={{color:'#E6C15C'}}>G o k u l &nbsp; A I</h2><p>Minimal, high-performance products crafted with Next.js, AI and modern technology.</p><div className="actions"><a className="button" href="#projects">Explore Projects</a><a className="button secondary" href="#contact">Contact</a></div><code>npm i @gokul/core</code></div><div className="card"><div className="orb">G</div><p>AI · Software · Business · Hardware · Research · Agriculture</p></div></section>
  <section className="section" id="about"><div className="eyebrow">ABOUT</div><h2>Building technology that matters.</h2><p className="lead">I'm Gokul — founder, full-stack developer, AI engineer and Agricultural Engineering student. I build AI software, SaaS, robotics, IoT and smart-agriculture solutions.</p><div className="grid"><article className="item"><h3>Mission</h3><p>Build practical technology for students, startups, businesses, farmers and rural communities.</p></article><article className="item"><h3>Vision</h3><p>Build globally impactful products from India across AI, education, agriculture and automation.</p></article></div></section>
  <section className="section" id="skills"><div className="eyebrow">SKILLS</div><h2>Technical + practical capability.</h2><div className="tags">{skills.map(s=><span key={s}>{s}</span>)}</div></section>
  <section className="section" id="projects"><div className="eyebrow">PROJECTS</div><h2>All 35 Vercel projects.</h2><p className="lead">Every project below is taken from your current Vercel project list and includes its connected GitHub repository plus a direct Vercel project dashboard.</p><input className="project-search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search projects..." aria-label="Search projects"/><p className="project-count">Showing {visibleProjects.length} of {projects.length} projects</p><div className="grid">{visibleProjects.map(([name,desc,repo])=><article className="item" key={name}><h3>{name}</h3><p>{desc}</p><div className="actions"><a className="button secondary" href={`https://github.com/gokulmaniraj2008-collab/${repo}`} target="_blank" rel="noreferrer">GitHub ↗</a><a className="button secondary" href={`https://vercel.com/${VERCEL_TEAM}/${name}`} target="_blank" rel="noreferrer">Vercel ↗</a></div></article>)}</div></section>
  <section className="section" id="experience"><div className="eyebrow">EXPERIENCE</div><h2>Founder · Developer · Builder.</h2><div className="grid"><article className="item"><h3>GKFXL</h3><p>Founder and product builder working across software, AI, business systems and startups.</p></article><article className="item"><h3>Engineering</h3><p>End-to-end development from research and architecture through database, APIs, UI and deployment.</p></article><article className="item"><h3>Hardware & Agriculture</h3><p>Combining agricultural engineering knowledge with robotics, IoT, sensors and automation.</p></article></div></section>
  <section className="section" id="assistant"><div className="chat card"><div className="eyebrow">PERSONAL AI</div><h2>Ask Gokul AI</h2><p style={{color:'#aaa',lineHeight:1.6}}>{reply}</p><form className="chatbox" onSubmit={ask}><input value={message} onChange={e=>setMessage(e.target.value)} placeholder="Ask about Gokul, projects, skills..." disabled={loading}/><button className="button" type="submit" disabled={loading}>{loading?"Thinking...":"Send"}</button></form></div></section>
  <section className="section" id="contact"><div className="eyebrow">CONTACT</div><h2>Let's build something useful.</h2><p className="lead">For projects, collaborations, ideas or technology discussions, get in touch.</p><div className="actions"><a className="button" href="mailto:gokul@example.com">Email Gokul</a><a className="button secondary" href="https://github.com/gokulmaniraj2008-collab" target="_blank" rel="noreferrer">GitHub ↗</a></div></section>
  <div className="mobile-nav"><a href="#home">⌂<span>Home</span></a><a href="#about">◎<span>About</span></a><a href="#skills">✦<span>Skills</span></a><a href="#projects">◆<span>Projects</span></a><a href="#assistant">AI<span>Ask AI</span></a><a href="#contact">✉<span>Contact</span></a></div>
  <footer className="footer">© 2026 Gokul · GOKUL.AI</footer>
 </main>;
}
