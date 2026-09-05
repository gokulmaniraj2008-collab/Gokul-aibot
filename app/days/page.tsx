import Link from "next/link";

const days = [
  { day: "Day 1", title: "FieldNote", category: "Agriculture", description: "A crop watchlist and field-readiness companion for quick daily decisions.", href: "/days/day-1" },
  { day: "Day 2", title: "StudySprint", category: "Education", description: "A focused revision dashboard for planning study sessions and tracking progress.", href: "/days/day-2" },
  { day: "Day 3", title: "RegexLab", category: "Developer Tool", description: "A practical regex workbench for testing patterns, matches, and replacements.", href: "/days/day-3" },
  { day: "Day 4", title: "TimeBox", category: "Productivity", description: "A focused 25-minute timer for turning one small task into a finished result.", href: "/days/day-4" },
  { day: "Day 5", title: "PantryPilot", category: "Utility", description: "A lightweight household inventory tool for tracking stock, use-soon items, and restocking needs.", href: "/days/day-5" },
];

const styles = `
* { box-sizing: border-box; }
.page { min-height: 100vh; background: #f5f3ee; color: #20242a; padding: 24px 16px 56px; font-family: Inter, system-ui, sans-serif; }
.shell { max-width: 920px; margin: auto; }
.back { display: inline-block; color: #777b76; text-decoration: none; font-size: 13px; margin-bottom: 48px; }
.eyebrow { font-size: 11px; font-weight: 900; letter-spacing: .16em; color: #8d9189; }
h1 { font-size: clamp(44px, 8vw, 76px); line-height: .96; letter-spacing: -4px; margin: 12px 0 20px; }
h1 em { font-style: normal; color: #d1663f; }
.intro { max-width: 620px; color: #737870; line-height: 1.7; font-size: 15px; }
.timeline { display: grid; gap: 14px; margin-top: 46px; }
.card { display: grid; grid-template-columns: 68px 1fr 36px; align-items: center; gap: 18px; background: #fffdf9; border: 1px solid #dfdbd3; border-radius: 24px; padding: 22px; text-decoration: none; color: inherit; box-shadow: 0 12px 30px rgba(60,55,48,.05); transition: transform .2s ease; }
.card:hover { transform: translateY(-2px); }
.number { font-size: 31px; font-weight: 900; letter-spacing: -2px; color: #d1663f; }
.meta { display: flex; gap: 8px; flex-wrap: wrap; }
.meta span { font-size: 10px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; color: #8b8e88; background: #f0ece5; border-radius: 999px; padding: 7px 9px; }
.card h2 { font-size: 28px; letter-spacing: -1px; margin: 12px 0 5px; }
.card p { margin: 0; color: #777b74; line-height: 1.55; font-size: 14px; }
.arrow { font-size: 24px; text-align: right; color: #8b8f88; }
.note { display: flex; justify-content: space-between; gap: 16px; margin-top: 24px; padding: 18px 20px; border-radius: 18px; background: #23282f; color: #f5f2eb; font-size: 13px; }
.note span { color: #b9bec3; }
@media (max-width: 560px) { .card { grid-template-columns: 48px 1fr 24px; padding: 18px; gap: 12px; } .number { font-size: 24px; } .card h2 { font-size: 24px; } .note { flex-direction: column; gap: 5px; } h1 { letter-spacing: -3px; } }
`;

export const metadata = { title: "Daily Builds · Gokul" };

export default function DaysPage() {
  return (
    <main className="page">
      <style>{styles}</style>
      <div className="shell">
        <header>
          <Link className="back" href="/">← Home</Link>
          <div className="eyebrow">DAILY BUILDS · ARCHIVE</div>
          <h1>Day by day.<br /><em>One useful idea at a time.</em></h1>
          <p className="intro">A multi-page archive where every daily website has its own page and explores a different practical category.</p>
        </header>
        <section className="timeline" aria-label="Daily builds">
          {days.map((item, index) => (
            <Link href={item.href} className="card" key={item.day}>
              <div className="number">0{index + 1}</div>
              <div className="copy">
                <div className="meta"><span>{item.day}</span><span>{item.category}</span></div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <span className="arrow">↗</span>
            </Link>
          ))}
        </section>
        <div className="note"><strong>More days coming.</strong><span>Each new build gets its own page.</span></div>
      </div>
    </main>
  );
}
