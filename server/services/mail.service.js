import sgMail from "@sendgrid/mail";

const rawKey = process.env.SENDGRID_API_KEY || "";
const cleanKey = rawKey.replace(/\s+/g, ""); // removes \n, spaces, etc.

sgMail.setApiKey(cleanKey);

export const sendMail = async ({ to, subject, html, attachments }) => {
  console.log("📧 Sending email to:", to);

  await sgMail.send({
    to,
    from: "Movie Tickets <shounakkumbhakar@gmail.com>",
    replyTo: "shounakkumbhakar@gmail.com",
    subject,
    html,
    attachments,
  });

  console.log("✅ Email sent via SendGrid");
};