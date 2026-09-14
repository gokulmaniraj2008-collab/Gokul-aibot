'use client';

import { useEffect, useMemo, useState } from 'react';

const initialTasks = [
  { id: 1, title: 'Choose today\'s most important task', done: true },
  { id: 2, title: 'Work for one focused session', done: false },
  { id: 3, title: 'Review what you shipped', done: false },
];

export default function DailyFocus() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');
  const [remaining, setRemaining] = useState(25 * 60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => {
      setRemaining((value) => {
        if (value <= 1) {
          window.clearInterval(timer);
          setRunning(false);
          return 0;
        }
        return value - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [running]);

  const completed = useMemo(() => tasks.filter((task) => task.done).length, [tasks]);
  const progress = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;
  const time = `${String(Math.floor(remaining / 60)).padStart(2, '0')}:${String(remaining % 60).padStart(2, '0')}`;

  function toggleTask(id: number) {
    setTasks((current) => current.map((task) => task.id === id ? { ...task, done: !task.done } : task));
  }

  function addTask() {
    const title = newTask.trim();
    if (!title) return;
    setTasks((current) => [...current, { id: Date.now(), title, done: false }]);
    setNewTask('');
  }

  function resetTimer() {
    setRunning(false);
    setRemaining(25 * 60);
  }

  return (
    <main className="focus-page">
      <div className="focus-glow glow-one" />
      <div className="focus-glow glow-two" />
      <nav className="focus-nav">
        <a href="/" className="brand"><span>G</span> GOKUL.AI</a>
        <a href="/days" className="back">Daily Builds ↗</a>
      </nav>

      <section className="focus-hero">
        <div>
          <p className="kicker">DAY 01 · DAILY APP</p>
          <h1>Focus on what<br /><em>moves you forward.</em></h1>
          <p className="lead">A tiny productivity cockpit for turning one important goal into visible progress.</p>
        </div>
        <div className="score-card">
          <span>TODAY'S PROGRESS</span>
          <strong>{progress}%</strong>
          <div className="progress"><i style={{ width: `${progress}%` }} /></div>
          <small>{completed} of {tasks.length} tasks complete</small>
        </div>
      </section>

      <section className="focus-grid">
        <article className="panel tasks-panel">
          <div className="panel-head"><div><span className="number">01</span><h2>Today's plan</h2></div><span className="count">{tasks.length} TASKS</span></div>
          <div className="task-list">
            {tasks.map((task) => (
              <button className={`task ${task.done ? 'done' : ''}`} key={task.id} onClick={() => toggleTask(task.id)}>
                <span className="check">{task.done ? '✓' : ''}</span><span>{task.title}</span>
              </button>
            ))}
          </div>
          <div className="add-row">
            <input value={newTask} onChange={(e) => setNewTask(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && addTask()} placeholder="Add a task…" />
            <button onClick={addTask}>Add</button>
          </div>
        </article>

        <article className="panel timer-panel">
          <div className="panel-head"><div><span className="number">02</span><h2>Focus timer</h2></div><span className="count">{running ? 'RUNNING' : remaining === 0 ? 'DONE' : 'READY'}</span></div>
          <div className="timer">{time}</div>
          <p>Put the phone down. Work on one thing until the timer ends.</p>
          <div className="timer-actions"><button onClick={() => setRunning(true)} disabled={running || remaining === 0}>Start focus</button><button className="ghost" onClick={resetTimer}>Reset</button></div>
        </article>
      </section>

      <section className="quote"><span>03 / DAILY RULE</span><p>“Small shipped things compound into serious skill.”</p></section>
      <footer><span>DAY 01 · FOCUSFLOW</span><span>BUILT WITH NEXT.JS + TYPESCRIPT</span></footer>

      <style jsx>{`
        .focus-page{min-height:100vh;background:#07050d;color:#f8f5ff;font-family:Inter,system-ui,sans-serif;padding:20px;overflow:hidden;position:relative}.focus-glow{position:fixed;border-radius:50%;filter:blur(100px);opacity:.22;pointer-events:none}.glow-one{width:420px;height:420px;background:#8b5cf6;top:-180px;right:-120px}.glow-two{width:320px;height:320px;background:#ec4899;bottom:-160px;left:-120px}.focus-nav{max-width:1100px;margin:auto;display:flex;justify-content:space-between;align-items:center;padding:14px 0;position:relative;z-index:2}.brand{font-weight:900;letter-spacing:-.04em}.brand span{display:inline-grid;place-items:center;width:32px;height:32px;border:1px solid #a78bfa;border-radius:9px;color:#c4b5fd;margin-right:7px}.back{font-size:12px;color:#aaa}.focus-hero{max-width:1100px;margin:0 auto;padding:90px 0 55px;display:grid;grid-template-columns:1fr 330px;gap:60px;align-items:end}.kicker,.number{font:11px monospace;letter-spacing:.16em;color:#a78bfa}.focus-hero h1{font-size:clamp(48px,7vw,88px);line-height:.94;letter-spacing:-.07em;margin:18px 0}.focus-hero h1 em{color:#c4b5fd;font-style:normal}.lead{color:#999;max-width:570px;line-height:1.7;font-size:16px}.score-card,.panel{background:#100d18dd;border:1px solid #ffffff12;border-radius:22px;box-shadow:0 25px 80px #0008;backdrop-filter:blur(16px)}.score-card{padding:25px}.score-card span,.count{font:9px monospace;letter-spacing:.12em;color:#777}.score-card strong{display:block;font-size:68px;letter-spacing:-.08em;margin:12px 0}.progress{height:7px;background:#211b2c;border-radius:99px;overflow:hidden}.progress i{display:block;height:100%;background:linear-gradient(90deg,#8b5cf6,#ec4899);border-radius:99px;transition:.3s}.score-card small{display:block;color:#777;margin-top:12px}.focus-grid{max-width:1100px;margin:auto;display:grid;grid-template-columns:1.2fr .8fr;gap:16px}.panel{padding:25px}.panel-head{display:flex;justify-content:space-between;align-items:start;border-bottom:1px solid #ffffff0e;padding-bottom:18px}.panel-head h2{font-size:24px;margin:8px 0 0;letter-spacing:-.04em}.task-list{display:grid;gap:8px;margin:20px 0}.task{display:flex;gap:13px;align-items:center;text-align:left;border:1px solid transparent;background:#15111e;color:#ddd;padding:14px;border-radius:13px;cursor:pointer}.task:hover{border-color:#8b5cf655}.task.done{color:#777;text-decoration:line-through}.check{width:22px;height:22px;border:1px solid #6d5b91;border-radius:7px;display:grid;place-items:center;color:#c4b5fd;flex:none}.done .check{background:#7c3aed33}.add-row{display:flex;gap:8px}.add-row input{flex:1;min-width:0;background:#0b0910;border:1px solid #ffffff12;color:#fff;padding:13px;border-radius:11px;outline:0}.add-row input:focus{border-color:#8b5cf688}.add-row button,.timer-actions button{border:0;background:#f5f2ff;color:#0b0810;font-weight:800;padding:0 17px;border-radius:11px;cursor:pointer}.timer-panel{display:flex;flex-direction:column}.timer{font-size:76px;letter-spacing:-.08em;text-align:center;margin:45px 0 10px}.timer-panel p{color:#777;line-height:1.6;text-align:center;font-size:13px}.timer-actions{display:flex;gap:8px;justify-content:center;margin-top:auto;padding-top:25px}.timer-actions button{height:45px}.timer-actions button:disabled{opacity:.45}.timer-actions .ghost{background:#17131f;color:#aaa;border:1px solid #ffffff12}.quote{max-width:1100px;margin:16px auto 0;padding:45px 0}.quote span{font:9px monospace;color:#a78bfa;letter-spacing:.14em}.quote p{font-size:clamp(24px,4vw,42px);max-width:780px;line-height:1.1;letter-spacing:-.05em;margin:14px 0}footer{max-width:1100px;margin:auto;border-top:1px solid #ffffff12;padding:24px 0 8px;display:flex;justify-content:space-between;color:#555;font:9px monospace;letter-spacing:.08em}@media(max-width:760px){.focus-page{padding:14px}.focus-hero{grid-template-columns:1fr;padding:65px 0 35px;gap:30px}.focus-hero h1{font-size:52px}.focus-grid{grid-template-columns:1fr}.timer{font-size:68px}.score-card strong{font-size:56px}footer{display:grid;gap:8px}.back{font-size:11px}}
      `}</style>
    </main>
  );
}
