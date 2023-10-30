"use client"

import { FormEvent, useState } from "react";
import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";

const initState = {
    name: "",
    email: "",
    msg: "",
}

export default function ContactForm() {
    const [data, setData] = useState(initState)
    const router = useRouter()

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(JSON.stringify(data))
    const { name, email, msg } = data
    try {
        const r = await fetch ("http://localhost:3000/api/contact", {
            method: "POST",
            body: JSON.stringify({
                name, 
                email, 
                msg,
            }),
            headers: {
                "content-type": "application/json",
            }
        });

        const res = await r.json();
        if (res.success) {
            alert("Email sent")
        } else {
            throw new Error();
        }

    } catch (error: any) {
        console.error("Error", error)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      {/* <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input name='name' maxLength={100} required className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input name='phone' className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                </div>
            </div> */}
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Name</label>
        <input
        //   onChange={(e) => setName(e.target.value)}
          name="name"
          maxLength={100}
          required
          className="border-2 rounded-lg p-3 flex border-gray-300"
          type="text"
        />
      </div>
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Email</label>
        <input
        //   onChange={(e) => setEmail(e.target.value)}
          name="email"
          maxLength={100}
          required
          className="border-2 rounded-lg p-3 flex border-gray-300"
          type="email"
        />
      </div>
      {/* <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Subject</label>
                <input name='subject' maxLength={100} required className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
            </div> */}
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Message</label>
        <textarea
        //   onChange={(e) => setMsg(e.target.value)}
          name="message"
          minLength={10}
          maxLength={500}
          required
          className="border-2 rounded-lg p-3 border-gray-300"
          rows={6}
        ></textarea>
      </div>
      <button className="w-full p-4 text-gray-100 mt-4">Send</button>
    </form>
  );
};
