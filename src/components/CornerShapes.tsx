"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

type MorphingShapeProps = {
    position: [number, number, number];
    scale: number;
    color: string;
    rotationSpeed: number;
};

// Three separate meshes (sphere, cube, pyramid) sharing one position.
// On each frame we compute scroll progress, figure out which two shapes
// are "between," and crossfade their scale + opacity — one shrinking out,
// the next growing in. That's the morph illusion, since true vertex
// interpolation between different geometry types isn't possible.
function MorphingShape({ position, scale, color, rotationSpeed }: MorphingShapeProps) {
    const sphereRef = useRef<THREE.Mesh>(null);
    const cubeRef = useRef<THREE.Mesh>(null);
    const pyramidRef = useRef<THREE.Mesh>(null);

    useFrame(() => {
        const scrollTop = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;

        // 3 shapes = 2 segments: sphere -> cube, then cube -> pyramid
        const segmentCount = 2;
        const scaled = progress * segmentCount;
        const segmentIndex = Math.min(Math.floor(scaled), segmentCount - 1);
        const localT = scaled - segmentIndex;

        const shapeAmount = [0, 0, 0]; // sphere, cube, pyramid
        shapeAmount[segmentIndex] = 1 - localT;
        shapeAmount[segmentIndex + 1] = localT;

        const refs = [sphereRef, cubeRef, pyramidRef];
        refs.forEach((ref, i) => {
            if (!ref.current) return;
            const amount = shapeAmount[i];
            ref.current.scale.setScalar(amount * scale);
            ref.current.rotation.y += rotationSpeed;
            ref.current.rotation.x += rotationSpeed * 0.5;
            const mat = ref.current.material as THREE.MeshBasicMaterial;
            mat.opacity = amount * 0.5;
        });
    });

    return (
        <group position={position}>
            <mesh ref={sphereRef}>
                <sphereGeometry args={[1, 16, 16]} />
                <meshBasicMaterial color={color} wireframe transparent opacity={0} />
            </mesh>
            <mesh ref={cubeRef}>
                <boxGeometry args={[1.4, 1.4, 1.4]} />
                <meshBasicMaterial color={color} wireframe transparent opacity={0} />
            </mesh>
            <mesh ref={pyramidRef}>
                {/* radialSegments = 4 turns a cone into a square-based pyramid */}
                <coneGeometry args={[1.2, 1.6, 4]} />
                <meshBasicMaterial color={color} wireframe transparent opacity={0} />
            </mesh>
        </group>
    );
}

export default function CornerShapes() {
    return (
        // pointer-events-none so this decorative layer never blocks clicks
        // on your actual page content sitting above it
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 6] }}>
                {/* North — top, pushed back slightly, largest */}
                <MorphingShape position={[0, 2.6, -1]} scale={0.9} color="#ffffff" rotationSpeed={0.004} />
                {/* South — bottom, pulled forward, smallest */}
                <MorphingShape position={[0, -2.6, 1]} scale={0.5} color="#ffffff" rotationSpeed={0.006} />
                {/* East — right, mid-depth */}
                <MorphingShape position={[3.6, 0, 0.4]} scale={0.7} color="#ffffff" rotationSpeed={0.005} />
                {/* West — left, mid-depth, opposite offset */}
                <MorphingShape position={[-3.6, 0, -0.4]} scale={0.6} color="#ffffff" rotationSpeed={0.0045} />
            </Canvas>
        </div>
    );
}
