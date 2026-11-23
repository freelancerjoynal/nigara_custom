"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type Flake = {
  speed: number;
  drift: number;
  phase: number;
};

/**
 * GPU-friendly snowfall rendered with Three.js Points.
 * Loaded only on the client (via next/dynamic with ssr:false) so the static
 * HTML stays light and SEO content is never blocked by WebGL.
 */
export default function SnowGlobeScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let animationFrame = 0;
    let disposed = false;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
    camera.position.set(0, 0, 16);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const count = 850;
    const positions = new Float32Array(count * 3);
    const flakes: Flake[] = [];

    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      flakes.push({
        speed: 0.35 + Math.random() * 0.9,
        drift: 0.08 + Math.random() * 0.32,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // A soft circular sprite keeps flakes looking like snow instead of squares.
    const spriteCanvas = document.createElement("canvas");
    spriteCanvas.width = 64;
    spriteCanvas.height = 64;
    const context = spriteCanvas.getContext("2d");
    if (context) {
      const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, "rgba(255,255,255,1)");
      gradient.addColorStop(0.35, "rgba(235,250,255,0.9)");
      gradient.addColorStop(1, "rgba(190,235,255,0)");
      context.fillStyle = gradient;
      context.fillRect(0, 0, 64, 64);
    }
    const sprite = new THREE.CanvasTexture(spriteCanvas);

    const material = new THREE.PointsMaterial({
      color: 0xeaf9ff,
      size: 0.18,
      map: sprite,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const resize = () => {
      const { clientWidth, clientHeight } = mount;
      if (!clientWidth || !clientHeight) return;
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: 0, y: 0 };
    const onPointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 0.7;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 0.45;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    let lastFrame = performance.now();
    let elapsed = 0;
    const animate = () => {
      if (disposed) return;
      const now = performance.now();
      const delta = Math.min((now - lastFrame) / 1000, 0.05);
      lastFrame = now;
      elapsed += delta;

      for (let i = 0; i < count; i += 1) {
        const flake = flakes[i];
        positions[i * 3 + 1] -= flake.speed * delta * 2.2;
        positions[i * 3] += Math.sin(elapsed * 0.5 + flake.phase) * flake.drift * delta;

        if (positions[i * 3 + 1] < -10) {
          positions[i * 3 + 1] = 10;
          positions[i * 3] = (Math.random() - 0.5) * 30;
        }
        if (positions[i * 3] > 15) positions[i * 3] = -15;
        if (positions[i * 3] < -15) positions[i * 3] = 15;
      }
      geometry.attributes.position.needsUpdate = true;

      camera.position.x += (pointer.x - camera.position.x) * 0.02;
      camera.position.y += (-pointer.y - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(animate);
    };

    const onVisibilityChange = () => {
      window.cancelAnimationFrame(animationFrame);
      if (!document.hidden && !reducedMotion) animate();
    };

    if (reducedMotion) {
      renderer.render(scene, camera);
    } else {
      animate();
      document.addEventListener("visibilitychange", onVisibilityChange);
    }

    return () => {
      disposed = true;
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      resizeObserver.disconnect();
      geometry.dispose();
      material.dispose();
      sprite.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="snow-globe-canvas" />;
}
