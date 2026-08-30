import Link from 'next/link';
import PortfolioNav from '@/components/PortfolioNav';

const projects = [
  ['Gokul AI','Main Gokul AI portfolio and AI product platform.','Next.js · AI · Supabase','gokul-aibot','Gokul-aibot','/'],
  ['AGRI-WORLD','Mobile-first 3D agricultural simulation combining farming, robotics, intelligent systems and interactive learning.','React · TypeScript · Three.js · Supabase','agri-world','AGRI-WORLD','/projects/agri-world'],
  ['AGRIBOT','Smart agriculture robotics platform with ESP32, sensors, automation and irrigation control.','Robotics · IoT · Agriculture','agribot','AGRIBOT','/projects/agri-bot'],
  ['Test Car','Vehicle and motor-control prototype.','Robotics · Embedded · Prototype','test-car','Test-car',''],
  ['Car Test 2','Second vehicle-control and testing prototype.','Robotics · Embedded · Prototype','car-test-2','Car-test-2',''],
  ['Startup Skill Test','Startup and product skill experimentation platform.','Startup · Product · Web','startup-skill-test','Startup-skill-test-',''],
  ['RVS Agri Engg','Agricultural engineering project and information platform.','Agriculture · Education · Web','rvs-agri-engg','RVS-AGRI-ENGG',''],
  ['Money Tracker','Personal finance tracking application.','Web · Finance','money-tracker','Money-tracker-',''],
  ['DRYNN','Digital-first custom apparel and streetwear brand experience.','Next.js · Supabase · Cloudinary','drynn','DRYNN',''],
  ['BLAST Symposium 2026','Symposium and event web platform.','Events · Web · Product','blast-symposium-2026','Blast-symposium-2026',''],
  ['E-commerce V2','E-commerce storefront and product experience.','E-commerce · Web','e-commerce-v2','E-commerce-v2',''],
  ['The Big Project','Large project and product experiment.','Web · Product','the-big-project','The-big-project-',''],
  ['GKFXL','Startup and technology ecosystem.','Next.js · Supabase · TypeScript','gkfxl','GKFXL',''],
  ['GGE','AI-powered guidance platform.','Next.js · AI · Tailwind CSS','gge','SRWP',''],
  ['GKFXL Government','Government information and technology project.','Web · Information','gk-fxl-government-j3mo','gk-fxl-government',''],
  ['Samvidhan AI','AI-focused information and application project.','AI · Web · Product','samvidhan-ai-si9t','samvidhan-ai',''],
] as const;

const VERCEL_TEAM = 'gokulmaniraj2008-collabs-projects';
const GITHUB_OWNER = 'gokulmaniraj2008-collab';

export default function Projects() {
  return (
    <main className="page">
      <PortfolioNav />
      <section className="section page-hero">
        <div className="eyebrow">PROJECTS</div>
        <h1>Selected work &amp; Vercel projects.</h1>
        <p className="lead">Software, robotics, agriculture and product experiments, with direct GitHub and Vercel links.</p>

        <div className="grid">
          {projects.map(([name, description, stack, slug, repo, details]) => (
            <article className="item" key={slug}>
              <h3>{name}</h3>
              <p>{description}</p>
              <p><strong>{stack}</strong></p>
              <div className="project-actions">
                <a className="project-link" href={`https://vercel.com/${VERCEL_TEAM}/${slug}`} target="_blank" rel="noopener noreferrer">Vercel ↗</a>
                <a className="project-link" href={`https://github.com/${GITHUB_OWNER}/${repo}`} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                {details && <Link className="project-link" href={details}>Details ↗</Link>}
              </div>
            </article>
          ))}
        </div>
      </section>
      <footer className="footer">© 2026 Gokul · GOKUL.AI</footer>
    </main>
  );
}
