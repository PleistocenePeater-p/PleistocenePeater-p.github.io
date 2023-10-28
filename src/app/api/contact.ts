import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from "@sendgrid/mail"
 
const API_KEY = process.env.SENDGRID_API_KEY || ""
sgMail.setApiKey(API_KEY);

type Data = {
    success: boolean;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

//   console.log("Data", req.body);
//   const body = JSON.parse(req.body);

//   // using Twilio SendGrid's v3 Node.js Library
//   // https://github.com/sendgrid/sendgrid-nodejs
  
//   const message = `
//     Name: ${body.name}\r\n
//     Email: ${body.email}\r\n
//     Msg: ${body.msg}`;

//     await sgMail.send({
//         to: 'to.alex@fullstack-alex.com', //recipient
//         from: 'from.alex@fullstack-alex.com', //verified sender
//         subject: 'New Message!',
//         text: message,
//         html: message.replace(/\r\n/g, '<br>'),
//       });
    if (req.method === "POST") {
        const body = req.body || {};
        const name = req.body.name || "";
        const email = req.body.email || "";
        const msg = req.body.msg || "";

        try {
            await sgMail.send({
                to: "to.alex@fullstack-alex.com", //recipient
                from: "from.alex@fullstack-alex.com", //verified sender
                subject: "New Message",
                text: msg,
                html: "<strong>Nice.</strong>",
            })
            res.status(200).json({ success: true });
        } catch (e) {
            res.status(500).json({ success: false })
        }
        return;
    }
    res.status(404).json({ success: false });
}