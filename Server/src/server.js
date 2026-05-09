const mongoose = require("mongoose");
const app = require("./app");
const { DATABASE_URL, FALLBACK_DATABASE_URL, PORT } = require("./config");
const { log } = require("./utils/logger");

const start = async () => {
  if (!DATABASE_URL) {
    console.error("DATABASE_URL not set in .env");
    process.exit(1);
  }

  try {
    try {
      await mongoose.connect(DATABASE_URL, { family: 4, serverSelectionTimeoutMS: 30000 });
      log("Connected to MongoDB");
    } catch (primaryErr) {
      if (!FALLBACK_DATABASE_URL) {
        throw primaryErr;
      }

      console.error("Primary MongoDB connection failed. Trying fallback DATABASE_URL...");
      await mongoose.connect(FALLBACK_DATABASE_URL, {
        family: 4,
        serverSelectionTimeoutMS: 10000,
      });
      log("Connected to fallback MongoDB");
    }

    app.listen(Number(PORT), () => {
      log(`Server listening on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server", err);
    process.exit(1);
  }
};

start();
