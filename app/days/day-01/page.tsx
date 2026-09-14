"use client";

import { useEffect, useMemo, useState } from "react";

type Relay = { id: number; title: string; owner: string; status: "open" | "claimed" | "done"; note: string };

const seed: Relay[] = [
  { id: 1, title: "Collect water can from the hostel office", owner: "Arun", status: "open", note: "Before 6:30 PM · 2-minute walk" },
  { id: 2, title: "Pick up the printout for Team FarmPlug", owner: "Meena", status: "claimed", note: "A4, 6 pages · paid already" },
  { id: 3, title: "Return the lab key to security", owner: "Gokul", status: "done", note: "Completed today" },
];

export default function DayOnePage() {
  const [relays, setRelays] = useState<Relay[]>(seed);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("pocketrelay-relays");
    if (saved) setRelays(JSON.parse(saved));
    const sync = () => setOffline(!navigator.onLine);
    sync();
    window.addEventListener("online", sync);
    window.addEventListener("offline", sync);
    return () => { window.removeEventListener("online", sync); window.removeEventListener("offline", sync); };
  }, []);

  useEffect(() => window.localStorage.setItem("pocketrelay-relays", JSON.stringify(relays)), [relays]);

  const openCount = useMemo(() => relays.filter((relay) => relay.status === "open").length, [relays]);

  function addRelay() {
    if (!title.trim()) return;
    setRelays((current) => [{ id: Date.now(), title: title.trim(), owner: "You", status: "open", note: note.trim() || "No deadline added" }, ...current]);
    setTitle("");
    setNote("");
  }

  function advance(id: number) {
    setRelays((current) => current.map((relay) => relay.id !== id ? relay : ({ ...relay, status: relay.status === "open" ? "claimed" : "done" })));
  }

  return (
    <main className="page theme-light" style={{ minHeight: "100vh", background: "linear-gradient(180deg,#fffdf8 0%,#f7f5ee 100%)" }}>
      <nav className="nav">
        <a className="logo" href="/">GOKUL<span className="logo-dot">.AI</span></a>
        <div className="navlinks"><a href="/days">All Builds</a><a className="button secondary" href="/">Portfolio</a></div>
      </nav>

      <section className="section" style={{ paddingTop: 34 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 24, flexWrap: "wrap", alignItems: "end" }}>
          <div style={{ maxWidth: 720 }}>
            <div className="eyebrow">DAY ONE · POCKETRELAY</div>
            <h1 style={{ fontSize: "clamp(46px,8vw,88px)", lineHeight: .94, letterSpacing: "-.07em", margin: "16px 0" }}>Small help.<br />Right moment.</h1>
            <p className="days-muted" style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 650 }}>PocketRelay turns tiny errands into a trusted local exchange. Ask for help, claim a nearby task, and close the loop without losing the context in a noisy group chat.</p>
          </div>
          <div className="feature" style={{ minWidth: 220, padding: 22, borderRadius: 24 }}><div className="eyebrow">TODAY</div><div style={{ fontSize: 46, fontWeight: 800, marginTop: 8 }}>{openCount}</div><div className="days-muted">open relays</div></div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="feature large" style={{ padding: 28, borderRadius: 28 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <div><div className="eyebrow">LIVE BOARD</div><h2 style={{ margin: "10px 0 0" }}>Relay board</h2></div>
            <div style={{ fontSize: 13, fontWeight: 700, padding: "8px 12px", borderRadius: 999, background: offline ? "#fff0ed" : "#ecfdf3", color: offline ? "#b42318" : "#027a48" }}>{offline ? "Offline · saved on device" : "Online · syncing when ready"}</div>
          </div>
          <div style={{ display: "grid", gap: 14, marginTop: 24 }}>
            {relays.map((relay) => (
              <article key={relay.id} style={{ display: "flex", justifyContent: "space-between", gap: 18, flexWrap: "wrap", alignItems: "center", padding: 18, border: "1px solid #e7e1d2", borderRadius: 18, background: "#fff" }}>
                <div><div style={{ fontWeight: 800, fontSize: 18 }}>{relay.title}</div><div className="days-muted" style={{ marginTop: 6 }}>{relay.owner} · {relay.note}</div></div>
                <button className="button" onClick={() => advance(relay.id)}>{relay.status === "open" ? "Claim relay" : relay.status === "claimed" ? "Mark done" : "Completed"}</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 10, paddingBottom: 80 }}>
        <div className="feature" style={{ padding: 28, borderRadius: 28 }}>
          <div className="eyebrow">CREATE A RELAY</div>
          <h2 style={{ margin: "10px 0 6px" }}>Make one small ask</h2>
          <p className="days-muted">The MVP intentionally keeps the action simple: one request, one owner, one clear finish.</p>
          <div style={{ display: "grid", gap: 12, marginTop: 18 }}>
            <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="What do you need help with?" style={{ padding: 14, borderRadius: 14, border: "1px solid #d9d1c1", fontSize: 16 }} />
            <input value={note} onChange={(event) => setNote(event.target.value)} placeholder="Deadline, place, or extra context" style={{ padding: 14, borderRadius: 14, border: "1px solid #d9d1c1", fontSize: 16 }} />
            <button className="button" onClick={addRelay}>Publish relay</button>
          </div>
        </div>
      </section>

      <footer className="footer"><span>© 2026 POCKETRELAY · DAY ONE</span><span>OFFLINE-FIRST MVP</span><a href="/days">ALL BUILDS ↑</a></footer>
    </main>
  );
}
