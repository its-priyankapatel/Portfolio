import React from "react";
import { motion ,AnimatePresence} from "framer-motion";
import priyanka from "../images/me.png";
import { useState, useEffect } from "react";


const Home = () => {
  const pdfURL = "/pdf/Priyanka_Patel_Resume.pdf";
  const openResume = (e) => {
    e.preventDefault();
    window.open(pdfURL, "_blank", "noopener,nonreferrer");
  };
  const changingTexts = ["Deploy it.", "Scale it.", "Optimize it."];
  const [index, setIndex] = useState(0);


useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % changingTexts.length);
  }, 2000); // change every 2 seconds

  return () => clearInterval(interval);
}, []);


  return (
    <>
      <div className="h-screen w-full pt-12 md:pt-0">
        <div className="h-full w-full  flex items-center justify-center relative">
          <div className="w-80 md:w-[60%]   h-full flex flex-col justify-center  gap-6  pb-4 md:pb-0 md:z-0 z-10">
            <motion.p
              className="font-heading text-3xl md:text-7xl text-pink-600 "
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hello,
              <br /> I'm Priyanka Patel
            </motion.p>
            {/* <motion.p
              className="font-para  font-bold text-2xl md:text-4xl  text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Think it, build it, live it
            </motion.p> */}
            <motion.p className="font-para font-bold text-2xl md:text-3xl text-white flex gap-2"
            initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
  <span>Think it.</span>
  <span>Build it.</span>

  <motion.span
    key={changingTexts[index]}
    initial={{ width: 0 }}
    animate={{ width: "auto" }}
    transition={{ duration: 0.6 }}
    style={{
      display: "inline-block",
      overflow: "hidden",
      whiteSpace: "nowrap",
    }}
    className="text-pink-500"
  >
    {changingTexts[index]}
  </motion.span>

</motion.p>

            <motion.p
              className="font-para text-md md:text-base md:w-5/6  text-white "
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              Welcome to my portfolio! This is where my creativity meets code.
              Explore my work, see my skills in action, and get to know my
              journey. I am excited to share what I have built with you.
            </motion.p>
            <motion.button
              className="h-8 w-28 md:h-10 md:w-32 px-2 text-pink-600 border-pink-600 border-2 rounded-3xl font-para font-extrabold select-none hover:bg-pink-600 hover:text-black"
              onClick={openResume}
              whileTap={{ scale: 0.95 }}
              whileHover={{
                scale: 1.1, // Scale the image on hover
                transition: { duration: 0.4 }, // Smooth hover transition
              }}
            >
              View Resume
            </motion.button>
          </div>
          <img
            src={priyanka}
            alt="priyanka patel"
            className="md:h-4/5 h-3/5 -rotate-2 select-none md:opacity-60 opacity-15 absolute md:static"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
