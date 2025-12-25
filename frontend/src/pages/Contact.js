import React from "react";

const Contact = () => {
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
      console.log(data);
      if (data.success) {
        alert("Email send successfully");
      } else {
        alert("Error in sending  Email");
      }
    } catch (err) {
      console.log(err);
      alert("Error in sending email");
    }
  };
  return (
    <>
      <div className="h-screen w-full md:pt-24 pt-16">
        <div className="h-full w-full md:justify-center justify-start items-center gap-5 flex flex-col">
          <div className="md:h-36 h-60 md:w-3/5 w-full flex flex-col items-center px-2 md:px-0 gap-3">
            <p className="font-heading text-3xl md:text-5xl text-pink-600">
              Get In Touch
            </p>
            <p className="text-white font-para">
              ✨Let’s connect and create something amazing together!💡 Whether
              you have a question, a collaboration idea, or just want to say
              hello👋, I’d love to hear from you. 📩Drop me a message, and let’s
              start a conversation!
            </p>
          </div>

          {/* ✅ FORM STARTS */}
          <form
            onSubmit={handleSubmit}
            className="md:h-60 h-80 md:w-[850px] w-80 flex flex-col justify-center gap-4 items-center rounded-sm"
          >
            <div className="flex md:flex-row flex-col md:gap-10 gap-5 justify-center">
              <input
                type="text"
                name="name"
                placeholder="Enter Full Name"
                required
                className="h-11 md:w-96 w-72 border-none outline-none rounded-md pl-3 bg-slate-900 text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                required
                className="h-11 md:w-96 w-72 border-none outline-none rounded-md pl-3 bg-slate-900 text-white"
              />
            </div>
            <textarea
              name="message"
              placeholder="Write your message here..."
              required
              className="md:w-[810px] w-72 md:h-32 h-28 border-none outline-none rounded-md pl-3 pt-2 bg-slate-900 text-white resize-none"
            ></textarea>
            <button
              type="submit"
              className="border-2 border-pink-600 text-pink-600 font-para h-10 w-32 rounded-md hover:bg-pink-600 hover:text-black"
            >
              Send Message
            </button>
          </form>
          {/* ✅ FORM ENDS */}
        </div>
      </div>
    </>
  );
};

export default Contact;
