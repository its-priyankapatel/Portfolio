import React from "react";

const Contact = () => {
  return (
    <>
      <div className=" h-screen w-full md:pt-24 pt-16">
        <div className=" h-full w-full justify-center items-center gap-5 flex flex-col ">
          <div className=" h-36 w-3/5 flex flex-col items-center gap-3">
            <p className="font-heading text-5xl text-pink-600">Get In Touch</p>
            <p className="text-white font-para">
              ✨Let’s connect and create something amazing together!💡 Whether
              you have a question, a collaboration idea, or just want to say
              hello👋,I’d love to hear from you. 📩Drop me a message, and let’s
              start a conversation!
            </p>
          </div>
          <div className=" h-60 w-[850px] flex flex-col justify-center gap-5 items-center bg-slate-800 rounded-sm">
            <div className=" flex gap-10 justify-center">
              <input
                type="text"
                placeholder="Enter Full Name"
                className="h-11 w-96 border-none outline-none rounded-md pl-3 bg-slate-900"
              />
              <input
                type="text"
                placeholder="Enter Email"
                className="h-11 w-96 border-none outline-none rounded-md pl-3 bg-slate-900"
              />
            </div>
            <input
              type="text"
              placeholder="Write your message here..."
              className="w-[810px] h-32 border-none outline-none rounded-md pl-3 bg-slate-900"
            />
          </div>
          <button className=" border-2 border-pink-600 text-pink-600 font-para h-10 w-32 rounded-md">
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
