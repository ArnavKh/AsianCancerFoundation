import nodemailer from "nodemailer";

export const sendThankYouEmail = async (toEmail) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"ACF Donations" <${process.env.EMAIL_USER}>`,
      to: toEmail,
      subject: "🙏 Thank You for Your Donation!",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #f7f5ff; border-radius: 8px;">
          <h2 style="color: #6C4AB6;">Thank You!</h2>
          <p>We sincerely appreciate your generous donation. Your support helps us continue our mission.❤️</p>
          <br/>
          <p style="color:#555;">With gratitude,<br/>Team ACF</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Thank-you email sent to ${toEmail}`);
    return true;
  } catch (error) {
    console.error("❌ Error sending thank-you email:", error);
    return false;
  }
};
