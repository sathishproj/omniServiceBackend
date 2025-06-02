const express = require('express');
const nodemailer = require('nodemailer');
// const cors = require('cors');
const mailRouter = express.Router();


mailRouter.post('/send-email', async (req, res) => {
  // const { name, email, message } = req.body;
  const { firstName, lastName, phone, email, position } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'anushajammula02@gmail.com', // replace with your email
      pass: 'iikk gxoz cfbg xotn',    // use App Password from Gmail
    },
  });

  const mailOptions = {
    from: email,
    to: 'anushajammula11@gmail.com',
    subject: `Message from ${firstName
      
    }`,
    // text: message,
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
    console.error(error);
    res.status(500).send({ message: 'Failed to send email' });
  }
});


module.exports = mailRouter;


