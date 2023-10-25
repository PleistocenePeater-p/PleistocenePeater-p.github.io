import type { NextApiRequest, NextApiResponse } from 'next'
 
const sgMail = require("@sendgrid/mail")
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Data", req.body);
  const body = JSON.parse(req.body);

  // using Twilio SendGrid's v3 Node.js Library
  // https://github.com/sendgrid/sendgrid-nodejs
  
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Msg: ${body.msg}`;

    await sgMail.send({
        to: 'to.alex@fullstack-alex.com', //recipient
        from: 'from.alex@fullstack-alex.com', //verified sender
        subject: 'New Message!',
        text: message,
        html: message.replace(/\r\n/g, '<br>'),
      });

  res.status(200).json({ status: "Ok" });
}