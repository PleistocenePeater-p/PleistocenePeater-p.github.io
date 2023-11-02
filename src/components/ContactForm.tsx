"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const initState = {
  name: "",
  email: "",
  msg: "",
};

export default function ContactForm() {
  const [data, setData] = useState(initState);
  const router = useRouter();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("HTMLFormElement Data: ", JSON.stringify(data));
    const { name, email, msg } = data;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          msg,
        }),
      });

      const result = await res.json();
      console.log(result);
    } catch (error: any) {
      console.error("Error", error);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    setData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
  };

  const canSave = [...Object.values(data)].every(Boolean);

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
          className="border-2 rounded-lg p-3 flex border-gray-300"
          type="text"
          required
          name="name"
          pattern="([A-Z])[\w+.]{1,}"
          value={data.name}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Email</label>
        <input
          className="border-2 rounded-lg p-3 flex border-gray-300"
          type="email"
          required
          name="email"
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          value={data.email}
          onChange={handleChange}
        />
      </div>
      {/* <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Subject</label>
                <input name='subject' maxLength={100} required className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
            </div> */}
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Message</label>
        <textarea
          className="border-2 rounded-lg p-3 border-gray-300"
          required
          name="msg"
          maxLength={500}
          rows={6}
          value={data.msg}
          onChange={handleChange}
        ></textarea>
      </div>
      <button className="w-full p-4 text-gray-100 mt-4" disabled={!canSave}>
        Send
      </button>
    </form>
  );
}
