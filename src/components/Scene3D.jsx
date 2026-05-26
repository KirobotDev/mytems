import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function Earth() {
  const meshRef = useRef();

  const [colorMap] = useLoader(THREE.TextureLoader, [
    'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
  ]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0015;

      meshRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.15) * 0.03;
    }
  });

  return (
    <group>
      {/* TERRE */}
      <mesh ref={meshRef} scale={2.4}>
        <sphereGeometry args={[1, 128, 128]} />

        <meshStandardMaterial
          map={colorMap}
          metalness={0.1}
          roughness={0.45}
          emissive="#1e40af"
          emissiveIntensity={0.28}
        />
      </mesh>

      {/* ATMOSPHÈRE LÉGÈRE */}
      <mesh scale={2.46}>
        <sphereGeometry args={[1, 128, 128]} />

        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

function FloatingParticles() {
  const count = 250;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }

    return pos;
  }, []);

  const pointsRef = useRef();

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.02}
        color="#7dd3fc"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function Scene3D() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}
      aria-hidden="true"
      role="presentation"
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
        }}
        style={{
          background: 'transparent',
        }}
      >
        {/* LUMIÈRES */}
        <ambientLight intensity={2.8} />

        <directionalLight
          position={[5, 3, 5]}
          intensity={4}
          color="#ffffff"
        />

        <directionalLight
          position={[-5, -3, 5]}
          intensity={2.5}
          color="#38bdf8"
        />

        <pointLight
          position={[0, 0, 5]}
          intensity={3}
          color="#ffffff"
        />

        <pointLight
          position={[0, 5, -5]}
          intensity={1.5}
          color="#0ea5e9"
        />

        <Suspense fallback={null}>
          <Earth />
        </Suspense>

        <FloatingParticles />

        <Sparkles
          count={60}
          size={2}
          scale={15}
          color="#7dd3fc"
          speed={0.25}
          opacity={0.45}
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.35}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}