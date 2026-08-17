export const COUNT = 20000;
export const SCALE = 0.6;

export function scatteredCloud() {
    const arr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT * 3; i++) {
        arr[i] = (Math.random() - 0.5) * 10 * SCALE;
    }
    return arr;
}

export function sphere() {
    const arr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = 3 * SCALE;
        arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
}

export function torus() {
    const arr = new Float32Array(COUNT * 3);
    const R = 2 * SCALE;
    const r = 0.6 * SCALE;
    for (let i = 0; i < COUNT; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI * 2;
        arr[i * 3] = (R + r * Math.cos(phi)) * Math.cos(theta);
        arr[i * 3 + 1] = (R + r * Math.cos(phi)) * Math.sin(theta);
        arr[i * 3 + 2] = r * Math.sin(phi);
    }
    return arr;
}

export function helix() {
    const arr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
        const t = i / COUNT;
        const strandOffset = i % 2 === 0 ? 0 : Math.PI;
        const angle = t * Math.PI * 10 + strandOffset;
        const radius = 1.2 * SCALE;
        arr[i * 3] = Math.cos(angle) * radius;
        arr[i * 3 + 1] = (t - 0.5) * 6 * SCALE;
        arr[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return arr;
}

export function funnel() {
    const arr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
        const t = i / COUNT;
        const angle = t * Math.PI * 20;
        const radius = t * 4 * SCALE;
        arr[i * 3] = Math.cos(angle) * radius;
        arr[i * 3 + 1] = (t - 0.5) * 6 * SCALE;
        arr[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return arr;
}

// Football: a prolate spheroid — same spherical-coordinate approach as
// sphere(), but with a smaller x/z radius than y radius. That difference
// is what pulls both ends into points while keeping the middle round,
// giving a football/rugby-ball silhouette.
export function football() {
    const arr = new Float32Array(COUNT * 3);
    const a = 1.0 * SCALE; // x/z radius (narrow)
    const b = 2.3 * SCALE; // y radius (elongated, the "length" of the ball)
    for (let i = 0; i < COUNT; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        arr[i * 3] = a * Math.sin(phi) * Math.cos(theta);
        arr[i * 3 + 1] = b * Math.cos(phi);
        arr[i * 3 + 2] = a * Math.sin(phi) * Math.sin(theta);
    }
    return arr;
}

export function lerp(a: number, b: number, t: number) {
    return a + (b - a) * t;
}
