import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    //per user rate limiting can be implemented using user identifier like user id or ip address
    try {
        const { success } = await ratelimit.limit("my-limit-key");
        if (!success) {
            return res.status(429).json({ message: "Too many requests. Please try again later." });
        }
        next();

    }
    catch (error) {
        console.error("Rate Limiter Error:", error);
        res.status(500).json("Internal Server Error");
    }
};
export default rateLimiter;