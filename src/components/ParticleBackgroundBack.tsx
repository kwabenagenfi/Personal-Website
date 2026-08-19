"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { COUNT, sphere } from "@/lib/particleShapes";

function ParticlesBack() {
    const pointsRef = useRef<THREE.Points>(null);
    const geometryRef = useRef<THREE.BufferGeometry>(null);

    const base = useMemo(() => {
        const arr = sphere();
        for (let i = 0; i < arr.length; i++) {
            arr[i] *= 1.3 + Math.random() * 0.6;
        }
        return arr;
    }, []);
    const current = useMemo(() => new Float32Array(COUNT * 3), []);

    const lastScroll = useRef(0);
    const speed = useRef(0);

    useFrame(() => {
        const scrollTop = window.scrollY;
        const delta = Math.abs(scrollTop - lastScroll.current);
        lastScroll.current = scrollTop;

        // Smooth the raw per-frame delta into a rolling "speed" value so
        // the reaction ramps up/down instead of jittering frame to frame.
        speed.current = speed.current * 0.9 + delta * 0.1;

        const spread = 1 + speed.current * 0.02;

        for (let i = 0; i < COUNT * 3; i++) {
            current[i] = base[i] * spread;
        }

        if (geometryRef.current) {
            geometryRef.current.attributes.position.needsUpdate = true;
        }
        if (pointsRef.current) {
            pointsRef.current.rotation.y -= 0.0003 + speed.current * 0.00005;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry ref={geometryRef}>
                <bufferAttribute attach="attributes-position" args={[current, 3]} count={COUNT} array={current} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial size={0.04} color="rgb(124, 96, 250)" transparent opacity={0.1} />
        </points>
    );
}

export default function ParticleBackgroundBack() {
    return (
        <div className="fixed inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ParticlesBack />
            </Canvas>
        </div>
    );
}
