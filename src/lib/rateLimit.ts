import { Redis } from "@upstash/redis";

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const LIMIT = 3;
const WINDOW_SECONDS = 60 * 60 * 24;

export async function checkRateLimit(identifier: string) {
    const key = `agent-limit:${identifier}`;
    const count = await redis.incr(key);

    if (count === 1) {
        await redis.expire(key, WINDOW_SECONDS);
    }

    return {
        allowed: count <= LIMIT,
        remaining: Math.max(0, LIMIT - count),
    };
}