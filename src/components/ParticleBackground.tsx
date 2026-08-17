"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { COUNT, scatteredCloud, sphere, torus, helix, football, funnel, lerp } from "@/lib/particleShapes";

function Particles() {
    const pointsRef = useRef<THREE.Points>(null);
    const geometryRef = useRef<THREE.BufferGeometry>(null);

    // The sequence of shapes the particles morph through as you scroll
    // from the top of the page to the bottom. Add/remove/reorder entries
    // here to change the journey — each pair of neighbors gets an equal
    // share of the total scroll distance.
    const shapes = useMemo(
        () => [scatteredCloud(), sphere(), torus(), helix(), football(), funnel(), scatteredCloud()],
        []
    );
    const current = useMemo(() => new Float32Array(COUNT * 3), []);

    useFrame(() => {
        const scrollTop = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;

        const segmentCount = shapes.length - 1;
        const scaled = progress * segmentCount;
        const segmentIndex = Math.min(Math.floor(scaled), segmentCount - 1);
        const localT = scaled - segmentIndex;

        const from = shapes[segmentIndex];
        const to = shapes[segmentIndex + 1];

        for (let i = 0; i < COUNT * 3; i++) {
            current[i] = lerp(from[i], to[i], localT);
        }

        if (geometryRef.current) {
            geometryRef.current.attributes.position.needsUpdate = true;
        }
        if (pointsRef.current) {
            pointsRef.current.rotation.y += 0.0005;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry ref={geometryRef}>
                <bufferAttribute
                    attach="attributes-position"
                    count={COUNT}
                    array={current}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial size={0.04} color="#20d12f" transparent opacity={0.4} />
        </points>
    );
}

export default function ParticleBackground() {
    return (
        <div className="fixed inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <Particles />
            </Canvas>
        </div>
    );
}
