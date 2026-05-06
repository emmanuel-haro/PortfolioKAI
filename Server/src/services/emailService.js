const nodemailer = require("nodemailer");
const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  EMAIL_FROM,
  EMAIL_TO,
  EMAIL_FROM_NAME,
} = require("../config");

const createTransporter = () => {
  if (!SMTP_USER || !SMTP_PASS) {
    throw new Error(
      "Missing email configuration. Set SMTP_USER and SMTP_PASS in .env (for Gmail, SMTP_PASS must be an App Password)."
    );
  }

  const isGmailHost = SMTP_HOST.toLowerCase() === "smtp.gmail.com";
  const mailHost = SMTP_HOST || "smtp.gmail.com";
  const mailPort = Number(SMTP_PORT) || 587;

  if (isGmailHost || !SMTP_HOST) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });
  }

  return nodemailer.createTransport({
    host: mailHost,
    port: mailPort,
    secure: mailPort === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
};

const sendContactEmail = async ({ name, email, subject, message }) => {
  const transporter = createTransporter();
  const fromAddress = EMAIL_FROM || `"${EMAIL_FROM_NAME}" <${SMTP_USER}>`;
  const mailOptions = {
    from: fromAddress,
    to: EMAIL_TO || SMTP_USER,
    subject: subject || `Portfolio contact from ${name || "visitor"}`,
    text: `Name: ${name || "N/A"}\nEmail: ${email || "N/A"}\n\n${message || "No message provided."}`,
    html: `
      <h2>Portfolio Contact Message</h2>
      <p><strong>Name:</strong> ${name || "N/A"}</p>
      <p><strong>Email:</strong> ${email || "N/A"}</p>
      <p><strong>Subject:</strong> ${subject || "No subject"}</p>
      <p><strong>Message:</strong></p>
      <p>${message || "No message provided."}</p>
    `,
    replyTo: email || SMTP_USER,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = {
  sendContactEmail,
};
