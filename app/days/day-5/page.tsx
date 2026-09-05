"use client";

import { useMemo, useState } from "react";

const initialItems = [
  { name: "Rice", amount: "2 kg", status: "In stock" },
  { name: "Tomatoes", amount: "6", status: "Use soon" },
  { name: "Milk", amount: "1 L", status: "Restock" },
];

export default function PantryPilotPage() {
  const [items, setItems] = useState(initialItems);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const summary = useMemo(() => {
    const restock = items.filter((item) => item.status === "Restock").length;
    const soon = items.filter((item) => item.status === "Use soon").length;
    return { total: items.length, restock, soon };
  }, [items]);

  function addItem() {
    if (!name.trim()) return;
    setItems((current) => [
      ...current,
      { name: name.trim(), amount: amount.trim() || "1", status: "In stock" },
    ]);
    setName("");
    setAmount("");
  }

  function cycleStatus(index: number) {
    const statuses = ["In stock", "Use soon", "Restock"];
    setItems((current) => current.map((item, itemIndex) => {
      if (itemIndex !== index) return item;
      const nextStatus = statuses[(statuses.indexOf(item.status) + 1) % statuses.length];
      return { ...item, status: nextStatus };
    }));
  }

  return (
    <main className="page">
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }
        .page { min-height: 100vh; background: #fffaf2; color: #2e302e; padding: 20px 16px 48px; font-family: Inter, system-ui, sans-serif; }
        .shell { max-width: 820px; margin: 0 auto; }
        .back { color: #75766e; text-decoration: none; font-size: 13px; }
        .eyebrow { margin-top: 42px; font-size: 11px; font-weight: 900; letter-spacing: .16em; color: #9a8a68; }
        h1 { margin: 10px 0 12px; font-size: clamp(44px, 10vw, 84px); line-height: .95; letter-spacing: -4px; }
        h1 em { font-style: normal; color: #a65b36; }
        .intro { max-width: 580px; color: #77766f; line-height: 1.65; }
        .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 30px 0; }
        .stat { background: #f3ead8; border-radius: 18px; padding: 16px; }
        .stat strong { display: block; font-size: 28px; }
        .stat span { color: #817b70; font-size: 12px; }
        .add { display: grid; grid-template-columns: 1fr .7fr auto; gap: 10px; margin-bottom: 18px; }
        input, button { min-height: 48px; border-radius: 14px; border: 1px solid #dfd4c1; padding: 0 14px; font: inherit; }
        input { background: #fffdf8; }
        button { background: #2e302e; color: #fffaf2; border: 0; font-weight: 800; cursor: pointer; }
        .list { display: grid; gap: 10px; }
        .item { display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 16px; background: #fffdf8; border: 1px solid #e7ddcc; border-radius: 18px; }
        .item h2 { margin: 0 0 4px; font-size: 18px; }
        .item p { margin: 0; color: #7e7b73; font-size: 13px; }
        .status { min-width: 92px; background: #f3ead8; color: #6e5944; font-size: 12px; font-weight: 800; }
        .note { margin-top: 24px; padding: 16px; border-radius: 18px; background: #2e302e; color: #fffaf2; font-size: 13px; line-height: 1.5; }
        @media (max-width: 600px) { .grid { grid-template-columns: 1fr; } .add { grid-template-columns: 1fr 1fr; } .add button { grid-column: span 2; } .item { align-items: flex-start; } }
      `}</style>
      <div className="shell">
        <a className="back" href="/days">← Daily Builds</a>
        <div className="eyebrow">DAY 5 · UTILITY</div>
        <h1>Pantry<em>Pilot.</em></h1>
        <p className="intro">A tiny household inventory tool for seeing what is available, what should be used soon, and what belongs on the next shopping list.</p>

        <section className="grid" aria-label="Pantry summary">
          <div className="stat"><strong>{summary.total}</strong><span>Total items</span></div>
          <div className="stat"><strong>{summary.soon}</strong><span>Use soon</span></div>
          <div className="stat"><strong>{summary.restock}</strong><span>Restock</span></div>
        </section>

        <div className="add">
          <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Item name" aria-label="Item name" />
          <input value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="Amount" aria-label="Amount" />
          <button type="button" onClick={addItem}>Add item</button>
        </div>

        <section className="list" aria-label="Pantry items">
          {items.map((item, index) => (
            <article className="item" key={`${item.name}-${index}`}>
              <div><h2>{item.name}</h2><p>{item.amount}</p></div>
              <button className="status" type="button" onClick={() => cycleStatus(index)}>{item.status}</button>
            </article>
          ))}
        </section>
        <div className="note">Tip: tap an item status to cycle through In stock → Use soon → Restock.</div>
      </div>
    </main>
  );
}
