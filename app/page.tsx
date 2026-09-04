"use client";
import { useMemo, useState } from "react";

const examples = [
  { title: "Email", pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$", sample: "gokul@example.com" },
  { title: "Phone", pattern: "^(?:\\+91|0)?[6-9]\\d{9}$", sample: "9876543210" },
  { title: "Slug", pattern: "[^a-z0-9]+", sample: "Build Better Tools!" },
];

export default function Home() {
  const [pattern, setPattern] = useState(examples[0].pattern);
  const [sample, setSample] = useState(examples[0].sample);
  const [flags, setFlags] = useState("i");
  const [replacement, setReplacement] = useState("[$&]");

  const result = useMemo(() => {
    try {
      const regex = new RegExp(pattern, flags);
      return { ok: true, matches: sample.match(regex) ?? [], replaced: sample.replace(regex, replacement) };
    } catch (error) {
      return { ok: false, error: error instanceof Error ? error.message : "Invalid pattern" };
    }
  }, [pattern, flags, sample, replacement]);

  return <main className="page"><div className="shell">
    <header className="top"><div><div className="brand">Regex<span>Lab</span></div><div className="muted">A tiny workbench for patterns that behave</div></div><div className="chip">Developer tool</div></header>
    <section className="hero"><div><div className="eyebrow">BUILD · TEST · EXPLAIN</div><h1>Make your<br/><em>regex useful.</em></h1><p>Try a pattern against real text, inspect matches, and preview replacements instantly.</p></div><div className="tip"><b>Tip</b><span>Start small. Add edge cases only after the first match looks right.</span></div></section>
    <section className="panel"><div className="head"><div><div className="eyebrow">PATTERN</div><h2>Write the rule</h2></div><span className="muted">/{flags || "…"}</span></div><div className="regex"><span>/</span><input value={pattern} onChange={e=>setPattern(e.target.value)} aria-label="Pattern"/><span>/</span><input className="flags" value={flags} onChange={e=>setFlags(e.target.value)} aria-label="Flags"/></div><div className="examples">{examples.map(x=><button key={x.title} onClick={()=>{setPattern(x.pattern);setSample(x.sample)}}>{x.title}</button>)}</div></section>
    <section className="grid"><div className="panel"><div className="eyebrow">TEST TEXT</div><h2>Give it something real</h2><textarea rows={8} value={sample} onChange={e=>setSample(e.target.value)} aria-label="Test text"/></div><div className="panel dark"><div className="eyebrow light">LIVE RESULT</div>{result.ok ? <><div className="status good">Pattern is valid</div><div className="count"><span>Matches</span><b>{result.matches.length}</b></div><div className="matches">{result.matches.length ? result.matches.map((m,i)=><div className="match" key={i}><span>#{i+1}</span><b>{m}</b></div>) : <div className="empty">No matches yet.</div>}</div></> : <><div className="status bad">Pattern needs fixing</div><div className="error">{result.error}</div></>}</div></section>
    <section className="panel"><div className="head"><div><div className="eyebrow">REPLACE PREVIEW</div><h2>See the transformation</h2></div><span className="muted">Live preview</span></div><div className="replace"><input value={replacement} onChange={e=>setReplacement(e.target.value)} placeholder="Replacement text"/><div>{result.ok ? result.replaced : "Fix the pattern to preview"}</div></div></section>
    <footer><span>RegexLab · no sign-in required</span><span>Mobile-first · fast feedback</span></footer>
    <style jsx>{`*{box-sizing:border-box}.page{min-height:100vh;background:#f6f4ef;color:#20242a;padding:18px 14px 42px;font-family:Inter,system-ui,sans-serif}.shell{max-width:1060px;margin:auto}.top,.head{display:flex;justify-content:space-between;align-items:flex-start;gap:12px}.brand{font-size:25px;font-weight:900;letter-spacing:-1px}.brand span{color:#d1663f}.muted{font-size:12px;color:#8e918c;margin-top:5px}.chip{padding:8px 11px;border:1px solid #ddd8d0;border-radius:999px;font-size:12px;color:#777970;background:#fffdf9}.hero{display:grid;grid-template-columns:1.1fr .9fr;gap:18px;align-items:end;padding:58px 0 24px}.eyebrow{font-size:11px;letter-spacing:.16em;font-weight:900;color:#8b8d86}.hero h1{font-size:clamp(44px,8vw,78px);line-height:.94;letter-spacing:-4px;margin:12px 0}.hero h1 em{font-style:normal;color:#d1663f}.hero p{max-width:620px;color:#6f746d;line-height:1.65}.tip{padding:18px;border-radius:22px;background:#23282f;color:#f4f1eb;display:grid;gap:8px;line-height:1.5}.tip b{color:#f4aa8e;font-size:12px;letter-spacing:.12em;text-transform:uppercase}.panel{background:#fffdf9;border:1px solid #e2ddd5;border-radius:24px;padding:20px;box-shadow:0 14px 32px rgba(78,68,56,.06);margin-bottom:18px}.panel h2{margin:8px 0 16px;font-size:22px}.regex{display:flex;align-items:center;gap:8px;background:#f3efe9;border:1px solid #e2ddd5;border-radius:16px;padding:12px 14px;font-family:ui-monospace,monospace;font-size:18px}.regex input{min-width:0;flex:1;border:0;outline:0;background:transparent;font:inherit}.regex .flags{flex:0 0 42px}.examples{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}.examples button{border:0;background:#efe6dc;border-radius:999px;padding:8px 11px;color:#6f5948}.grid{display:grid;grid-template-columns:1.05fr .95fr;gap:18px}.panel textarea{width:100%;resize:vertical;border:1px solid #e2ddd5;border-radius:16px;padding:13px;font:inherit;line-height:1.55;background:#fbfaf7}.dark{background:#23282f;color:#fffdf8;border-color:#23282f}.light{color:#aeb5bc}.status{display:inline-block;padding:8px 10px;border-radius:999px;font-size:12px;font-weight:800;margin:12px 0 18px}.good{background:#dcefe5;color:#2e6f4f}.bad{background:#f7d9d4;color:#8d3b30}.count{display:flex;justify-content:space-between;align-items:end;border-bottom:1px solid #3b424b;padding-bottom:14px}.count span{color:#aeb5bc;font-size:13px}.count b{font-size:42px}.matches{display:grid;gap:8px;margin-top:14px}.match{display:flex;justify-content:space-between;padding:12px 13px;border-radius:14px;background:#2e353e}.match span,.empty,.error{color:#b7bcc2}.match b{font-family:ui-monospace,monospace;font-size:13px}.error{padding:14px;border-radius:14px;background:#2e353e;font-family:ui-monospace,monospace;font-size:13px}.replace{display:grid;grid-template-columns:.4fr .6fr;gap:12px}.replace input,.replace div{border:1px solid #e2ddd5;border-radius:14px;padding:12px;background:#fbfaf7;font:inherit}.replace div{min-height:46px;line-height:1.5;word-break:break-word}footer{display:flex;justify-content:space-between;color:#989a93;font-size:12px;padding:4px 2px}@media(max-width:760px){.hero,.grid,.replace{grid-template-columns:1fr}.hero{padding-top:38px}}@media(max-width:520px){footer{flex-direction:column;gap:8px}.regex{font-size:16px}}`}</style>
  </div></main>;
}
