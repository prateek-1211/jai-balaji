import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ljbon7r",
        "template_940uhcr",
        form.current,
        "SICJUfBBR9ojCWRhH"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
     <div
     data-aos="zoom-in"
    className="max-w-md w-full mx-auto p-6 bg-gray-100 rounded-xl shadow-md">
      <h2 className="text-3xl text-center text-orange-400 font-bold mb-6">Contact Us</h2>
      <from ref={form} onSubmit={sendEmail} action="">
        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="">Your Name</label>
          <input placeholder="name" className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500" required type="text" />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="">Your Email</label>
          <input placeholder="@gmail.com" className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500" required type="email" />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="">Message</label>
          <textarea rows='4' placeholder="Type your message here..." className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500" required type="text" />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-orange-400 text-white font-semibold px-4 py-2 rounded-lg hover:bg-pink-600 focus:outline-white">
            Send me
          </button>
        </div>
      </from>
     </div>
    </>
  );
};

export default Contact;
