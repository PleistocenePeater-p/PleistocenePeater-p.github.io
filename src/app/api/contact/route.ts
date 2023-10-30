import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from "@sendgrid/mail"
import { NextResponse } from 'next/server';
 
const API_KEY = process.env.SENDGRID_API_KEY || ""
sgMail.setApiKey(API_KEY);

type ContactData = {
    name?: string,
    email?: string,
    msg?: string,
}

export async function POST(request: Request) {
    const data: ContactData = await request.json()
    console.log("data: ", data)

    const {name, email, msg} = data
    return NextResponse.json({ name, email, msg })
}


// type Data = {
//     success: boolean;
// }

// export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

//     if (req.method === "POST") {
//         const body = req.body || {};
//         const name = req.body.name || "";
//         const email = req.body.email || "";
//         const msg = req.body.msg || "";

//         try {
//             await sgMail.send({
//                 to: "to.alex@fullstack-alex.com", //recipient
//                 from: "from.alex@fullstack-alex.com", //verified sender
//                 subject: "New Message",
//                 text: msg,
//                 html: "<strong>Nice.</strong>",
//             })
//             res.status(200).json({ success: true });
//         } catch (e) {
//             res.status(500).json({ success: false })
//         }
//         return;
//     }
//     res.status(404).json({ success: false });
// }