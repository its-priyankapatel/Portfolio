import React from "react";
import priyanka from "../images/pinku_yellow.jpg";
import { motion } from "framer-motion";
import priyanka2 from "../images/Priyanka.png";

const Home = () => {
  const pdfURL = "/pdf/Priyanka_Patel_Resume.pdf";
  const openResume = (e) => {
    e.preventDefault();
    window.open(pdfURL, "_blank", "noopener,nonreferrer");
  };
  return (
    <>
      <div className="h-screen w-full md:pt-24 pt-12 ">
        <div className="h-full w-full  flex items-center justify-center relative">
          <div className=" w-80 md:w-[60%]   h-full flex flex-col md:justify-center justify-end gap-6  pb-4 md:pb-0 md:z-0 z-10">
            <motion.p
              className="font-heading text-3xl md:text-7xl text-pink-600 "
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hello,
              <br /> I'm Priyanka Patel
            </motion.p>
            <motion.p
              className="font-para  font-bold text-2xl md:text-4xl  text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Think it, build it, live it
            </motion.p>
            <motion.p
              className="font-para text-md md:text-lg md:w-5/6  text-gray-300 "
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              Welcome to my portfolio! This is where my creativity meets code.
              Explore my work, see my skills in action, and get to know my
              journey. I am excited to share what I have built with you.
            </motion.p>
            <motion.button
              className="h-8 w-28 md:h-10 md:w-32 text-pink-600 border-pink-600 border-2 rounded-md font-para font-extrabold select-none hover:bg-pink-600 hover:text-black"
              onClick={openResume}
              whileTap={{ scale: 0.9 }}
              whileHover={{
                scale: 1.04, // Scale the image on hover
                transition: { duration: 0.4 }, // Smooth hover transition
              }}
            >
              View Resume
            </motion.button>
          </div>
          <img
            src={priyanka2}
            alt="priyanka patel"
            className="h-full -scale-x-100  select-none opacity-60 absolute md:static"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
