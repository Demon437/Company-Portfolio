// ======================= controllers/contactController.js =======================
const Contact = require("../models/contact");
const sendEmail = require("../utils/sendEmail");

exports.createContact = async (req, res) => {
    const data = new Contact(req.body);
    await data.save();

    await sendEmail(req.body);

    res.json({ message: "Message sent successfully" });
};
