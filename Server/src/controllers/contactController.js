const { sendContactEmail } = require("../services/emailService");
const { saveContactMessage, listContactMessages } = require("../services/contactService");

exports.getContact = async (_req, res, next) => {
  try {
    res.json({ message: "Contact endpoint is active" });
  } catch (err) {
    next(err);
  }
};

exports.listMessages = async (_req, res, next) => {
  try {
    const messages = await listContactMessages();
    res.json(messages);
  } catch (err) {
    next(err);
  }
};

exports.sendContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({ message: "email and message are required" });
    }

    const savedMessage = await saveContactMessage({ name, email, subject, message });
    await sendContactEmail({ name, email, subject, message });

    res.status(201).json({ message: "Email sent successfully", contact: savedMessage });
  } catch (err) {
    next(err);
  }
};
