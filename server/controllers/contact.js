require("dotenv").config();
const nodemailer = require("nodemailer");

const PASSWORD = process.env.password;

const contactForm = (req, res) => {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "nodemaileryassin@gmail.com",
      pass: PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.From_Email,
    to: process.env.To_Email,
    subject: `Message from ${req.body.name}`,
    text: req.body.message,
    html: `
    <h1 style="text-align:center">HIAB</h1>
    <p>------------You have a new contact request------------</p>
    <h3>Contact details</h3>
    <ul>
    <li style="margin-bottom:5px;">Name : ${req.body.name}</li>
    <li>Email : ${req.body.email}</li>
    </ul>

    <h3>Message</h3>
    <p>- ${req.body.message}</p>

    `,
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log(info);
      res.send();
    }
  });
};

module.exports = contactForm;
