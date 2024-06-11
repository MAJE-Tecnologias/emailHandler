const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

console.log(process.env.SMTP_MAIL);
console.log(process.env.SMTP_PASS);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASS
    }
});

const sendEmail = expressAsyncHandler(async (req, res) => {
    const { email, subject, message } = req.body;
    console.log(email, subject, message);

    var mailOptions = {
        from: process.env.SMTP_MAIL,
        to: email,
        subject: subject,
        text: message // Use 'text' em vez de 'message'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.status(500).send({ error: 'Failed to send email' });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send({ message: 'Email sent successfully' });
        }
    });
});

module.exports = { sendEmail };
