"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import "./solar.css";

const planets = [
  { name: "Mercury", size: .42, distance: 7, color: 0x9a968e, speed: .030, type: "Rocky planet" },
  { name: "Venus", size: .68, distance: 10, color: 0xd9a35d, speed: .023, type: "Rocky planet" },
  { name: "Earth", size: .78, distance: 14, color: 0x2f78c7, speed: .018, type: "Terrestrial planet" },
  { name: "Mars", size: .58, distance: 18, color: 0xc75c3e, speed: .014, type: "Rocky planet" },
  { name: "Jupiter", size: 1.75, distance: 25, color: 0xc89b73, speed: .009, type: "Gas giant" },
  { name: "Saturn", size: 1.45, distance: 33, color: 0xd5bc86, speed: .0065, type: "Gas giant" },
  { name: "Uranus", size: 1.0, distance: 41, color: 0x75ced9, speed: .0045, type: "Ice giant" },
  { name: "Neptune", size: .98, distance: 49, color: 0x4268c9, speed: .0035, type: "Ice giant" },
];

export default function SolarSystemPage() {
  const mount = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState("Sun");

  useEffect(() => {
    if (!mount.current) return;
    const host = mount.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020208);

    const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, .1, 500);
    camera.position.set(0, 24, 58);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(innerWidth, innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    host.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = .05;
    controls.minDistance = 6;
    controls.maxDistance = 120;
    controls.target.set(0, 0, 0);

    scene.add(new THREE.AmbientLight(0x536078, .08));
    const sunLight = new THREE.PointLight(0xffffff, 260, 300);
    scene.add(sunLight);

    const starsGeo = new THREE.BufferGeometry();
    const stars = new Float32Array(5000 * 3);
    for (let i = 0; i < stars.length; i += 3) {
      stars[i] = (Math.random() - .5) * 420;
      stars[i + 1] = (Math.random() - .5) * 420;
      stars[i + 2] = (Math.random() - .5) * 420;
    }
    starsGeo.setAttribute("position", new THREE.BufferAttribute(stars, 3));
    scene.add(new THREE.Points(starsGeo, new THREE.PointsMaterial({ color: 0xffffff, size: .08 })));

    const sun = new THREE.Mesh(
      new THREE.SphereGeometry(3.2, 64, 64),
      new THREE.MeshBasicMaterial({ color: 0xffa51f })
    );
    scene.add(sun);

    for (const [radius, opacity] of [[3.55, .12], [4.0, .055], [4.6, .025]] as const) {
      scene.add(new THREE.Mesh(
        new THREE.SphereGeometry(radius, 48, 32),
        new THREE.MeshBasicMaterial({ color: 0xff7518, transparent: true, opacity, side: THREE.BackSide, blending: THREE.AdditiveBlending, depthWrite: false })
      ));
    }

    const objects: { pivot: THREE.Group; mesh: THREE.Mesh; speed: number; name: string }[] = [];

    planets.forEach((p, index) => {
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(p.distance - .012, p.distance + .012, 160),
        new THREE.MeshBasicMaterial({ color: 0x697286, transparent: true, opacity: .18, side: THREE.DoubleSide })
      );
      ring.rotation.x = Math.PI / 2;
      scene.add(ring);

      const pivot = new THREE.Group();
      pivot.rotation.y = index * .72;
      scene.add(pivot);

      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(p.size, 48, 32),
        new THREE.MeshStandardMaterial({ color: p.color, roughness: .82 })
      );
      mesh.position.x = p.distance;
      pivot.add(mesh);

      if (p.name === "Saturn") {
        const rings = new THREE.Mesh(
          new THREE.RingGeometry(p.size * 1.35, p.size * 2.25, 128),
          new THREE.MeshStandardMaterial({ color: 0xd8c49a, transparent: true, opacity: .8, side: THREE.DoubleSide, roughness: 1 })
        );
        rings.rotation.x = Math.PI / 2.25;
        mesh.add(rings);
      }

      if (p.name === "Earth") {
        const atmosphere = new THREE.Mesh(
          new THREE.SphereGeometry(p.size * 1.07, 48, 32),
          new THREE.MeshBasicMaterial({ color: 0x3d9bff, transparent: true, opacity: .08, side: THREE.BackSide, blending: THREE.AdditiveBlending })
        );
        mesh.add(atmosphere);
        const moonPivot = new THREE.Group();
        mesh.add(moonPivot);
        const moon = new THREE.Mesh(new THREE.SphereGeometry(.22, 24, 24), new THREE.MeshStandardMaterial({ color: 0xaaaaaa, roughness: 1 }));
        moon.position.x = 1.35;
        moonPivot.add(moon);
        objects.push({ pivot: moonPivot, mesh: moon, speed: .055, name: "Moon" });
      }

      objects.push({ pivot, mesh, speed: p.speed, name: p.name });
    });

    const beltGeo = new THREE.BufferGeometry();
    const belt = new Float32Array(1200 * 3);
    for (let i = 0; i < 1200; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 21 + Math.random() * 3.2;
      belt[i * 3] = Math.cos(a) * r;
      belt[i * 3 + 1] = (Math.random() - .5) * .45;
      belt[i * 3 + 2] = Math.sin(a) * r;
    }
    beltGeo.setAttribute("position", new THREE.BufferAttribute(belt, 3));
    const asteroidBelt = new THREE.Points(beltGeo, new THREE.PointsMaterial({ color: 0x8d7860, size: .035 }));
    scene.add(asteroidBelt);

    const resize = () => {
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    };
    addEventListener("resize", resize);

    let raf = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      sun.rotation.y += .002;
      objects.forEach(o => {
        o.pivot.rotation.y += o.speed;
        o.mesh.rotation.y += .006;
      });
      asteroidBelt.rotation.y += .0005;
      starsGeo.attributes.position.needsUpdate = false;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("resize", resize);
      controls.dispose();
      renderer.dispose();
      host.removeChild(renderer.domElement);
    };
  }, []);

  const focusPlanet = (name: string) => setSelected(name);

  return (
    <main className="cosmos-page">
      <div ref={mount} className="cosmos-canvas" />
      <nav className="cosmos-nav">
        <a href="/" className="brand">GOKUL<span>.AI</span></a>
        <div className="nav-actions"><a href="/">Portfolio</a><a href="#explore">Explore</a></div>
      </nav>

      <section className="cosmos-hero">
        <div className="hero-copy">
          <span className="eyebrow">GOKUL AI / 3D LAB</span>
          <h1>EXPLORE<br /><em>THE COSMOS.</em></h1>
          <p>A cinematic interactive solar-system experiment built directly into the Gokul AI portfolio.</p>
          <a href="#explore" className="explore-btn">ENTER EXPERIENCE ↓</a>
        </div>
      </section>

      <section id="explore" className="planet-section">
        <div className="planet-card">
          <span className="eyebrow">CURRENT OBJECT</span>
          <h2>{selected}</h2>
          <p>{selected === "Sun" ? "The star at the center of our solar system." : selected === "Moon" ? "Earth's natural satellite, orbiting our planet." : planets.find(p => p.name === selected)?.type ?? "Solar-system object"}</p>
          <div className="stats"><span>OBJECT</span><strong>{selected}</strong></div>
          <div className="stats"><span>MODE</span><strong>REAL-TIME 3D</strong></div>
          <div className="stats"><span>CONTROL</span><strong>DRAG / PINCH</strong></div>
        </div>

        <div className="planet-menu">
          {['Sun', ...planets.map(p => p.name), 'Moon'].map(name => (
            <button key={name} className={selected === name ? 'active' : ''} onClick={() => focusPlanet(name)}>{name}</button>
          ))}
        </div>
      </section>

      <div className="interaction-hint">DRAG TO ORBIT · PINCH / WHEEL TO ZOOM</div>
    </main>
  );
}
