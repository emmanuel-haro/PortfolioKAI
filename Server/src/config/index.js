const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || "3000";
const DATABASE_URL = process.env.DATABASE_URL || process.env.MONGODB_URI || "";
const FALLBACK_DATABASE_URL = process.env.FALLBACK_DATABASE_URL || "";
const NODE_ENV = process.env.NODE_ENV || "development";
const JWT_SECRET = process.env.JWT_SECRET || "";
const SMTP_HOST = process.env.SMTP_HOST || "";
const SMTP_PORT = process.env.SMTP_PORT || "";
const SMTP_USER = process.env.SMTP_USER || "";
const SMTP_PASS = process.env.SMTP_PASS || "";
const EMAIL_FROM = process.env.EMAIL_FROM || "";
const EMAIL_TO = process.env.EMAIL_TO || "";
const EMAIL_FROM_NAME = process.env.EMAIL_FROM_NAME || "Portfolio Website";
const API_KEY = process.env.API_KEY || "";
module.exports = {
  PORT,
  DATABASE_URL,
  FALLBACK_DATABASE_URL,
  NODE_ENV,
  JWT_SECRET,
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  EMAIL_FROM,
  EMAIL_TO,
  EMAIL_FROM_NAME,
  API_KEY,
};
