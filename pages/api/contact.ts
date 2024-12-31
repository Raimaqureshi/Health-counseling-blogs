
import { NextApiRequest, NextApiResponse } from 'next';  
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, 
      subject: `New Contact Form Submission from ${name}`,
      text: `You have a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch {
      res.status(500).json({ message: 'Error sending email.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
