const { sendContactEmail } = require("../services/emailService");

exports.sendContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({ message: "email and message are required" });
    }

    await sendContactEmail({ name, email, subject, message });
    res.json({ message: "Email sent successfully" });
  } catch (err) {
    next(err);
  }
};
