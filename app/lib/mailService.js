let nodemailer = require("nodemailer");

export default function sendMail() {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PW,
        },
    });

    let mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: email,
        subject: subject,
        text: message
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if(error){
            throw new Error(error);
        } else {
            console.log("Email sent");
            return true;
        }
    })
}