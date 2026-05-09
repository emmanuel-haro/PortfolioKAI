const { Router } = require("express");
const contactController = require("../controllers/contactController");
const { requireApiKey } = require("../middleware/apiKey");

const router = Router();

router.get("/", contactController.getContact);
router.get("/messages", requireApiKey, contactController.listMessages);
router.post("/", contactController.sendContact);

module.exports = router;
