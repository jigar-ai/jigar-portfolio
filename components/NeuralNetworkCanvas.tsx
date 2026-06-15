'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function NeuralNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.set(0, 1.8, 5);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setClearColor(0x000000, 0);

    const ambientLight = new THREE.PointLight(0x7c3aed, 1.4, 18);
    ambientLight.position.set(0, 2, 3);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x48b6ff, 0.9, 18);
    pointLight.position.set(-2, -1, 5);
    scene.add(pointLight);

    const networkGroup = new THREE.Group();
    const nodeGeometry = new THREE.SphereGeometry(0.11, 24, 24);
    const nodeMaterial = new THREE.MeshStandardMaterial({ color: 0x8b5cf6, emissive: 0x3b82f6, roughness: 0.2, metalness: 0.4 });

    const nodes: THREE.Mesh[] = [];
    for (let i = 0; i < 12; i += 1) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      const angle = (i / 12) * Math.PI * 2;
      node.position.set(Math.cos(angle) * 1.6, Math.sin(angle) * 0.9, (i % 3) * -0.6 + 0.2);
      networkGroup.add(node);
      nodes.push(node);
    }

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x6d82ff, transparent: true, opacity: 0.55 });
    const lineGroup = new THREE.Group();

    nodes.forEach((source, index) => {
      const target = nodes[(index + 4) % nodes.length];
      const lineGeometry = new THREE.BufferGeometry().setFromPoints([source.position, target.position]);
      const line = new THREE.Line(lineGeometry, lineMaterial);
      lineGroup.add(line);
    });

    scene.add(networkGroup);
    scene.add(lineGroup);

    const animate = () => {
      networkGroup.rotation.y += 0.003;
      lineGroup.rotation.y -= 0.002;
      nodes.forEach((node, index) => {
        node.position.y = Math.sin(performance.now() * 0.001 + index) * 0.08;
      });
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!canvas) return;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-white/10 bg-black/80">
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-violet-500 opacity-30" />
    </div>
  );
}
