import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [message, setMessage] = useState("");
  

  const CHAR_LIMIT = 300;

  const handleChange = (e) => {
    const text = e.target.value;

    if (text.length <= CHAR_LIMIT) {
      setMessage(text);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", "509f150e-d633-481c-9518-c9773607fa9e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        alert("Email sent successfully");
        
        setMessage(""); // reset textarea
      } else {
        alert("Error in sending email");
      }
    } catch (err) {
      console.error(err);
      alert("Error in sending email");
    }
    finally{
      e.target.name="";
       e.target.email="";
    }
  };

  const charCount = message.length;

  return (
    <div className="h-screen w-full pt-32 sm:pt-48">
      <div className="h-full w-full flex flex-col items-center gap-6">
        {/* HEADER */}
        <div className="w-full max-w-4xl flex flex-col items-center px-2 gap-3">
          <p className="font-heading text-3xl md:text-5xl text-pink-600 ">
            Get In Touch
          </p>
          <p className="text-white font-para text-center">
            Let’s connect and create something amazing together! Whether you
            have a question, a collaboration idea, or just want to say hello,
            I’d love to hear from you.
          </p>
        </div>
        <form
  onSubmit={handleSubmit}
  className="w-full max-w-4xl flex flex-col gap-4 items-center px-4 py-8"
>
  <div className="flex flex-col md:flex-row gap-5 w-full">
    <input
      type="text"
      name="name"
      placeholder="Enter Full Name"
      required
      className="h-11 w-full md:w-1/2 rounded-lg pl-3 bg-slate-900 text-white outline-none"
    />
    <input
      type="email"
      name="email"
      placeholder="Enter Email"
      required
      className="h-11 w-full md:w-1/2 rounded-lg pl-3 bg-slate-900 text-white outline-none"
    />
  </div>

  <textarea
    name="message"
    placeholder="Write your message here..."
    required
    value={message}
    onChange={handleChange}
    className="w-full h-28 md:h-32 rounded-xl px-3 py-2 bg-slate-900 text-white overflow-y-auto no-scrollbar resize-none outline-none"
  />

  <p className="text-xs text-gray-400 self-end">
    {charCount}/{CHAR_LIMIT}
  </p>

  <motion.button
    type="submit"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    disabled={charCount === 0}
    className="border-2 border-pink-600 text-white bg-pink-600 h-10 w-32 md:h-11 md:w-40 rounded-3xl
      hover:bg-pink-700 hover:border-pink-700 transition"
  >
    Send Message
  </motion.button>
</form>

      </div>
    </div>
  );
};

export default Contact;
