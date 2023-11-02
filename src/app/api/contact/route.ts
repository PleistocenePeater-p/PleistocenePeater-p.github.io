import sgMail from "@sendgrid/mail"
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from 'next/server';

const sendgridApiKey = process.env.SENDGRID_KEY || "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";
if (sendgridApiKey) {
    sgMail.setApiKey(sendgridApiKey);
  } else {
    console.error("API Key error");
  }

// type ResponseData = {
//     name?: string,
//     email?: string,
//     msg?: string,
//     success: boolean
// }

// export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
//     if (req.method ==== "POST") {
//         try {
//             await sgMail.send({
//             to: "alex@fullstack-alex.com", // Your email where you'll receive emails
//             from: "alex@fullstack-alex.com", // your website email address here
//             subject: `[From Contact form]: ${req.body.subject}`,
//             html: `New mail from ${req.body.fullname}, email is: ✉️${req.body.email}. Message: ${req.body.message}`,
//             });
//         } catch (error: any) {
//             // console.log(error);
//             return res.status(error.statusCode || 500).json({ error: error.message });
//         }

//         return res.status(200).json({ error: "" });
//     }
// }


//From SendGrid.com in TypeScript
// const sendgridApiKey = process.env.SENDGRID_API_KEY;
// if (sendgridApiKey) {
//     sgMail.setApiKey(sendgridApiKey);
//   } else {
//     console.error("API Key error");
//   }

// ============Colby Fayock============
//"Detected default export in api/contact/route.ts. Export a named export for each HTTP method instead"
//"No HTTP methods exported in api/contact/route.ts. Export a named export for each HTTP method"
// export default async (req: NextApiRequest, res: NextApiResponse) => {
//     const body = JSON.parse(req.body);
  
//     const message = `
//       Name: ${body.name}\r\n
//       Email: ${body.email}\r\n
//       Message: ${body.message}
//     `;
  
//     await sgMail.send({
//       to: 'to.name@email.com',
//       from: 'from.name@email.com',
//       subject: 'New Message!',
//       text: message,
//       html: message.replace(/\r\n/g, '<br>'),
//     });
  
//     res.status(200).json({ status: 'Ok' });
//   };

// ============Dave Gray============
// type ContactData = {
//     name?: string,
//     email?: string,
//     msg?: string,
// }

// export async function POST(request: Request) {
//     const data: ContactData = await request.json()
//     console.log("data: ", data)

//     const {name, email, msg} = data

//     return NextResponse.json({ name, email, msg })
// }

// ============Covalence============
// type Data = {
//     success: boolean;
// }

export async function POST(req: NextApiRequest, res: NextApiResponse) {
//<ResponseData>
    console.log("Data, server side: ", req.body)
    if (req.method === "POST") {
        const body = req.body || {};
        const name = req.body.name || "";
        const email = req.body.email || "";
        const msg = req.body.msg || "";

        try {
            await sgMail.send({
                to: "alex@fullstack-alex.com", //recipient
                from: "alex@fullstack-alex.com", //verified sender
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