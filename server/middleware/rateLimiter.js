import rateLimit from "express-rate-limit";

export const globalLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 2,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res
      .status(429)
      .json({
        message:
          "Too Many Message Send, Please try again later after 10 minutes!",
      });
  },
});
