import dotenv from 'dotenv';
dotenv.config();

export default async (req, res) => {
  let nodemailer = require('nodemailer');
  const { receiveEmail, name, email, message, topic } = req.body;
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  try {
    await transporter.sendMail({
      from: email,
      to: receiveEmail,
      subject: `Contact form submission from ${email}`,
      html: `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
     <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title></title>
    </head>
    <body>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Topic: ${topic}</p>
      <p>Massage: ${message}</p>
    </body>
    </html>
`,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json();
};
