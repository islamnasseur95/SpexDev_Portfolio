// let nodemailer = require("nodemailer");
import nodemailer from "nodemailer"
// -------

export async function handler(req, res) {

    if (req.method === 'POST') {
        const { fullName, email, subject, message } = req.body;
    
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER, // My email address
            pass: process.env.EMAIL_PASS, // My email password
          },
        });
    
        const mailOptions = {
          from: email, // Set the sender as the email provided in the form
          to: process.env.DESTINATION_EMAIL, // Destination email address
          subject: `about: ${subject}`,
          text: `Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`,
        };
    
        try {
          await transporter.sendMail(mailOptions);
          res.status(200).json({ success: true });
        } catch (error) {
          console.error('Error sending email:', error);
          res.status(500).json({ success: false, error: 'Error sending email' });
        }
      } else {
        res.status(405).json({ message: 'Method not allowed' });
      }

        //     sendMail(
        //         fullName,
        //         email,
        //         subject,
        //         message
        //     )
        // res.status(200).json({ 
        //     success: true,
        //     message: "Sent successfully !!"
        //  });
} 