// apis/mail.js

const express = require('express');
const nodemailer = require('nodemailer');
const mailRouter = express.Router();

mailRouter.post('/send-email', async (req, res) => {
  const { firstName, lastName, phone, email, position } = req.body;
  console.log('Received request body:', req.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'anushajammula02@gmail.com', // Replace with your Gmail
      pass: 'iikk gxoz cfbg xotn',       // App Password, not Gmail password
    },
  });

  const mailOptions = {
    from: email,
    to: 'pallesathish4044@gmail.com', // Change as needed
    subject: `Message from ${firstName}`,
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Position: ${position}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ message: 'Failed to send email' });
  }
});

module.exports = mailRouter;
