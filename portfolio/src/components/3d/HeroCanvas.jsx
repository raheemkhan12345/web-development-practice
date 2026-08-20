import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

// Deterministic Spherical Particle Distribution
function getDeterministicParticles(count) {
  const pos = new Float32Array(count * 3);
  const col = new Float32Array(count * 3);
  const cyan = new THREE.Color("#06b6d4");
  const violet = new THREE.Color("#8b5cf6");

  for (let i = 0; i < count; i++) {
    const phi = Math.acos(1 - 2 * ((i + 0.5) / count));
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    const radius = 2.2 + (((i * 37) % 100) / 100) * 2.3;

    pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    pos[i * 3 + 2] = radius * Math.cos(phi);

    const lerpFactor = ((i * 17) % 100) / 100;
    const mixed = cyan.clone().lerp(violet, lerpFactor);
    col[i * 3] = mixed.r;
    col[i * 3 + 1] = mixed.g;
    col[i * 3 + 2] = mixed.b;
  }
  return [pos, col];
}

// Interactive Floating Particle Starfield/Cloud
function ParticleField({ count = 180 }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => getDeterministicParticles(count), [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.12;
    pointsRef.current.rotation.x += delta * 0.05;

    // React to pointer
    pointsRef.current.rotation.y += (state.pointer.x * 0.5 - pointsRef.current.rotation.y) * 0.05;
    pointsRef.current.rotation.x += (-state.pointer.y * 0.5 - pointsRef.current.rotation.x) * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Futuristic 3D Cyber Core
function CyberCore() {
  const outerIcosahedronRef = useRef();
  const innerSphereRef = useRef();
  const ringRef = useRef();

  useFrame((state, delta) => {
    const { pointer } = state;

    if (outerIcosahedronRef.current) {
      outerIcosahedronRef.current.rotation.x += delta * 0.3;
      outerIcosahedronRef.current.rotation.y += delta * 0.4;
      // Parallax toward cursor
      outerIcosahedronRef.current.position.x = THREE.MathUtils.lerp(
        outerIcosahedronRef.current.position.x,
        pointer.x * 0.6,
        0.05
      );
      outerIcosahedronRef.current.position.y = THREE.MathUtils.lerp(
        outerIcosahedronRef.current.position.y,
        pointer.y * 0.6,
        0.05
      );
    }

    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 3 + state.clock.getElapsedTime() * 0.25;
      ringRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }

    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.y -= delta * 0.2;
    }
  });

  return (
    <group>
      {/* Floating Dynamic Outer Wireframe */}
      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.5}>
        <mesh ref={outerIcosahedronRef}>
          <icosahedronGeometry args={[1.5, 1]} />
          <meshStandardMaterial
            wireframe
            color="#06b6d4"
            emissive="#0891b2"
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>

      {/* Orbiting Cyber Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[2.1, 0.02, 16, 64]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#7c3aed"
          emissiveIntensity={0.8}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Inner Glowing Holographic Sphere */}
      <mesh ref={innerSphereRef}>
        <sphereGeometry args={[0.85, 32, 32]} />
        <MeshDistortMaterial
          color="#4f46e5"
          emissive="#6366f1"
          emissiveIntensity={0.4}
          roughness={0.1}
          metalness={0.9}
          distort={0.35}
          speed={2}
          transparent
          opacity={0.85}
        />
      </mesh>
    </group>
  );
}

const HeroCanvas = () => {
  return (
    <div className="w-full h-full min-h-[380px] sm:min-h-[460px] md:min-h-[540px] relative">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="w-full h-full pointer-events-auto"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 8, 5]} intensity={1.5} color="#ffffff" />
          <pointLight position={[-4, -4, 2]} color="#06b6d4" intensity={2.5} distance={10} />
          <pointLight position={[4, 4, 2]} color="#8b5cf6" intensity={2.5} distance={10} />

          <CyberCore />
          <ParticleField count={160} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
