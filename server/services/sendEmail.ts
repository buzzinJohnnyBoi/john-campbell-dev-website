import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { type ContactMessage } from "~/types/contact";

dotenv.config();

export async function sendEmail(message: ContactMessage) {
  const secure = Boolean(process.env.EMAIL_SECURE);
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
    port: Number(process.env.EMAIL_PORT),
    secure: false,
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.RECEIVING_EMAIL,
    subject: message.subject,
    text: `Name: ${message.name}\nEmail: ${message.email}\nMessage: ${message.message}`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Email sent: " + info.response);
        resolve(info);
      }
    });
  });
}
