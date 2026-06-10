const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const portfolioRoutes = require("./routes/portfolioRoutes");
const contactRoutes = require("./routes/contactRoutes");
const { errorHandler } = require("./middleware/errorHandler");

const app = express();

const allowedOrigins = [
  process.env.CLIENT_URL,
  "http://localhost:8080",
  "http://localhost:5173",
  "http://127.0.0.1:8080",
  "http://127.0.0.1:5173",
].filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }
      callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

app.use("/api/portfolio", portfolioRoutes);
app.use("/api/contact", contactRoutes);

app.get("/", (_req, res) => res.json({ ok: true, service: "kai-portfolio-api" }));
app.get("/health", (_req, res) => res.json({ status: "ok" }));

app.use(errorHandler);

module.exports = app;
