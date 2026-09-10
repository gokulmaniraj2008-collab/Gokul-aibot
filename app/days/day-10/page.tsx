"use client";

import { useMemo, useState } from "react";

const initialBills = [
  { id: 1, name: "Phone plan", amount: 699, due: "Sep 12", status: "Upcoming", tone: "soon" },
  { id: 2, name: "Streaming", amount: 299, due: "Sep 15", status: "Autopay", tone: "auto" },
  { id: 3, name: "Internet", amount: 999, due: "Sep 21", status: "Upcoming", tone: "soon" },
  { id: 4, name: "Gym membership", amount: 799, due: "Sep 28", status: "Planned", tone: "planned" },
];

const styles = `*{box-sizing:border-box}.page{min-height:100vh;background:#f4f7f2;color:#17231d;padding:20px 16px 56px;font-family:Inter,system-ui,sans-serif}.shell{max-width:960px;margin:auto}.top{display:flex;justify-content:space-between;gap:12px;align-items:center;margin-bottom:30px}.back{color:#68766d;text-decoration:none;font-size:13px}.badge{font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#5e8b6f;background:#dfeee1;border-radius:999px;padding:8px 10px}.hero{display:grid;gap:14px}.eyebrow{font-size:11px;font-weight:900;letter-spacing:.16em;color:#6e8975}.hero h1{font-size:clamp(42px,8vw,76px);line-height:.94;letter-spacing:-4px;margin:0;max-width:760px}.hero h1 em{font-style:normal;color:#3d8a5c}.hero p{max-width:640px;color:#6c7b72;line-height:1.7;margin:0;font-size:15px}.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:30px 0}.stat{background:#fff;border:1px solid #dbe6dc;border-radius:20px;padding:18px}.stat span{display:block;color:#738179;font-size:12px}.stat strong{display:block;font-size:28px;letter-spacing:-1px;margin-top:8px}.panel{background:#fff;border:1px solid #dbe6dc;border-radius:24px;padding:20px}.panel-head{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:16px}.panel-head h2{font-size:18px;margin:0}.panel-head span{font-size:12px;color:#839087}.bill-list{display:grid;gap:10px}.bill{display:grid;grid-template-columns:1fr auto auto;gap:12px;align-items:center;border:1px solid #e6ede7;border-radius:16px;padding:14px}.bill h3{margin:0 0 5px;font-size:15px}.bill p{margin:0;color:#7a887f;font-size:12px}.amount{font-weight:900;font-size:17px}.pill{font-size:11px;font-weight:800;border-radius:999px;padding:7px 9px}.soon{color:#9b6b24;background:#fff0cc}.auto{color:#3b7d59;background:#def2e1}.planned{color:#637487;background:#e7edf3}.form{display:grid;grid-template-columns:1.2fr .8fr auto;gap:10px;margin-top:18px}.input{width:100%;border:1px solid #dbe6dc;border-radius:12px;padding:12px 13px;background:#fbfdfb;font:inherit}.button{border:0;border-radius:12px;padding:12px 16px;background:#275f3b;color:#fff;font-weight:800;cursor:pointer}.tip{margin-top:14px;padding:14px 16px;border-radius:16px;background:#edf6ed;color:#5f7565;font-size:13px;line-height:1.5}@media(max-width:680px){.stats{grid-template-columns:1fr}.bill{grid-template-columns:1fr auto}.bill .pill{grid-column:1/-1;justify-self:start}.form{grid-template-columns:1fr 1fr}.form .button{grid-column:1/-1}}`;

export default function BillBloomPage(){
  const [bills, setBills] = useState(initialBills);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const total = useMemo(() => bills.reduce((sum, bill) => sum + bill.amount, 0), [bills]);
  const upcoming = bills.filter((bill) => bill.status !== "Planned").length;

  function addBill(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const numeric = Number(amount);
    if (!name.trim() || !numeric) return;
    setBills((current) => [...current, { id: Date.now(), name: name.trim(), amount: numeric, due: "This month", status: "Planned", tone: "planned" }]);
    setName("");
    setAmount("");
  }

  return <main className="page"><style>{styles}</style><div className="shell"><div className="top"><a className="back" href="/days">← Daily Builds</a><span className="badge">Day 10 · Finance</span></div><header className="hero"><div className="eyebrow">BILLBLOOM · MONTHLY MONEY MAP</div><h1>Keep every bill<br/><em>in plain sight.</em></h1><p>A calm finance utility for planning recurring payments, spotting your monthly baseline, and adding one-off costs before they surprise you.</p></header><section className="stats"><div className="stat"><span>Monthly baseline</span><strong>₹{total.toLocaleString("en-IN")}</strong></div><div className="stat"><span>Upcoming items</span><strong>{upcoming}</strong></div><div className="stat"><span>Budget headroom</span><strong>₹6,201</strong></div></section><section className="panel"><div className="panel-head"><h2>Your month</h2><span>September 2026</span></div><div className="bill-list">{bills.map((bill)=><article className="bill" key={bill.id}><div><h3>{bill.name}</h3><p>Due {bill.due}</p></div><div className="amount">₹{bill.amount.toLocaleString("en-IN")}</div><span className={`pill ${bill.tone}`}>{bill.status}</span></article>)}</div><form className="form" onSubmit={addBill}><input className="input" placeholder="Add a bill or goal" value={name} onChange={(e)=>setName(e.target.value)} /><input className="input" type="number" min="1" placeholder="Amount" value={amount} onChange={(e)=>setAmount(e.target.value)} /><button className="button" type="submit">Add item</button></form><div className="tip">Tip: use this page before payday to decide what is fixed, what is flexible, and what can wait.</div></section></div></main>;
}
