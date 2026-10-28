"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    const count = 1200;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 60;
      vel[i] = (Math.random() - 0.5) * 0.008;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
      color: 0xffffff, size: 0.08, transparent: true, opacity: 0.6, sizeAttenuation: true,
    });
    const points = new THREE.Points(geo, mat);
    scene.add(points);

    const lineGeo = new THREE.BufferGeometry();
    const lineMax = 3000;
    const linePos = new Float32Array(lineMax * 6);
    lineGeo.setAttribute("position", new THREE.BufferAttribute(linePos, 3));
    lineGeo.setDrawRange(0, 0);
    const lineMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.04 });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lines);

    let mouseX = 0, mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    document.addEventListener("mousemove", onMouseMove);

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const p = geo.attributes.position.array as Float32Array;
      for (let i = 0; i < count * 3; i++) {
        p[i] += vel[i];
        if (p[i] > 30 || p[i] < -30) vel[i] *= -1;
      }
      geo.attributes.position.needsUpdate = true;

      let lc = 0;
      const lp = lineGeo.attributes.position.array as Float32Array;
      const threshold = 4;
      for (let i = 0; i < Math.min(count, 200); i++) {
        for (let j = i + 1; j < Math.min(count, 200); j++) {
          if (lc >= lineMax) break;
          const dx = p[i * 3] - p[j * 3];
          const dy = p[i * 3 + 1] - p[j * 3 + 1];
          const dz = p[i * 3 + 2] - p[j * 3 + 2];
          if (dx * dx + dy * dy + dz * dz < threshold * threshold) {
            const idx = lc * 6;
            lp[idx] = p[i * 3]; lp[idx + 1] = p[i * 3 + 1]; lp[idx + 2] = p[i * 3 + 2];
            lp[idx + 3] = p[j * 3]; lp[idx + 4] = p[j * 3 + 1]; lp[idx + 5] = p[j * 3 + 2];
            lc++;
          }
        }
      }
      lineGeo.attributes.position.needsUpdate = true;
      lineGeo.setDrawRange(0, lc * 2);

      camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
      camera.position.y += (-mouseY * 2 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);
      points.rotation.y += 0.0003;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-40"
    />
  );
}
