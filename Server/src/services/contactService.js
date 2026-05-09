const { ContactMessage } = require("../models/contact.model");

const saveContactMessage = async (data) => ContactMessage.create(data);
const listContactMessages = async () => ContactMessage.find().sort({ createdAt: -1 }).exec();

module.exports = {
  saveContactMessage,
  listContactMessages,
};
