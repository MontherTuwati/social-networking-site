import { createClient } from "redis";

const redisClient = createClient({
    url: process.env.REDIS_URL,
});

redisClient.on('error', (err) => console.error('Redis Client Error', err));

export const connectRedis = async () => {
    try {
        await redisClient.connect();
        console.log("Connected to Redis");
    } catch (error) {
        console.error("Redis connection error", error);
    }
}

export default redisClient;