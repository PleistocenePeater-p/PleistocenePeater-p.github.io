"use client"

import { FormEvent, useState } from "react";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
        const res = await fetch ("/api/contact", {
            method: "POST",
            body: JSON.stringify({
                name, 
                email, 
                msg,
            }),
            headers: {
                "content-type": "application/json",
            }
        })
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
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
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
