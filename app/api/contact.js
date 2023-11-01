import sendMail from "../lib/mailService";


export default async function handler(req, res) {
    
    if(req.method === 'POST') {
        const { name, email, subject, message } = req.body
            sendMail(
                name,
                email,
                subject,
                message
            )
        res.status(200).json({ 
            success: true,
            message: "Sent successfully !!"
         });
    } else {
        res.status(405).json({ message: "Method not allowed !"});
    }
} 