const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const portfolioRoutes = require("./routes/portfolioRoutes");
const contactRoutes = require("./routes/contactRoutes");
const { errorHandler } = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/portfolio", portfolioRoutes);
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => res.json({ ok: true }));

app.use(errorHandler);

module.exports = app;
