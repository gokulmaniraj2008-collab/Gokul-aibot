"use client";

import { useEffect, useState } from "react";

export default function AnimatedLogo() {
  const [ready, setReady] = useState(false);

  useEffect(() => setReady(true), []);

  return (
    <a className={`animated-logo ${ready ? "is-ready" : ""}`} href="#home" aria-label="Gokul AI home">
      <span className="animated-logo-orbit orbit-one" />
      <span className="animated-logo-orbit orbit-two" />
      <span className="animated-logo-core">G<span>AI</span></span>
      <span className="animated-logo-wordmark">GOKUL<span>.AI</span></span>
    </a>
  );
}
