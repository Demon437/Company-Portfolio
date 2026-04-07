const nodemailer = require("nodemailer");

const sendEmail = async (data) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "New Project Inquiry 🚀",

        // ✅ HTML FORMAT (IMPORTANT)
        html: `
      <h2>New Contact Inquiry</h2>

      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company || "N/A"}</p>
      <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
      <p><strong>Service:</strong> ${data.service || "N/A"}</p>
      <p><strong>Budget:</strong> ${data.budget || "N/A"}</p>

      <hr/>

      <p><strong>Project Details:</strong></p>
      <p>${data.message}</p>
    `,
    });
};

module.exports = sendEmail;