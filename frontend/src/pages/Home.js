import React from "react";
import priyanka from "../images/pinku_yellow.jpg";
import { motion } from "framer-motion";

const Home = () => {
  const openResume = () => {
    window.open(
      "https://www.dropbox.com/scl/fi/j73xb3eqp7737lhtfgkb7/Priyanka-Patel-Resume.pdf?rlkey=b7sj5nmbe5hd97kivbkh7806l&st=rptsh149&dl=0",
      "_blank"
    );
  };
  return (
    <>
      <div className="h-screen w-full ">
        <div className="md:px-24 px-3 pt-6 md:pt-10 h-full  ">
          <div className=" h-auto md:h-96 flex flex-col-reverse md:flex-row md:justify-between items-center mt-2 md:mt-20 ">
            <div className=" w-64 md:w-1/2  text-center md:text-left ">
              <motion.p
                className="font-roboto text-3xl md:text-5xl mt-6 md:mt-4 text-yellow-400 font-semibold"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                HELLO, I AM PRIYANKA PATEL
              </motion.p>
              <motion.p
                className="font-redhat font-extrabold text-2xl md:text-4xl mt-12 md:mt-16 text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                Think it, build it, live it
              </motion.p>
              <motion.p
                className="font-sans text-md md:text-lg   text-white mt-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                Welcome to my portfolio! This is where my creativity meets code.
                Explore my work, see my skills in action, and get to know my
                journey. I am excited to share what I have built with you.
              </motion.p>
            </div>
            <div className="w-40 md:w-1/3 mt-12 md:mt-0">
              <img
                src={priyanka}
                alt="priyanka patel"
                className="size-40 md:size-80  border-2 border-white rounded-full select-none"
              />
            </div>
          </div>
          <div className="w-full text-center md:text-left mt-10 md:mt-0">
            <motion.button
              className="mx-auto h-8 w-24 md:h-10 md:w-38 bg-yellow-400 rounded-sm font-redhat font-bold select-none"
              onClick={() => {
                openResume();
              }}
              whileTap={{ scale: 0.9 }}
              whileHover={{
                scale: 1.05, // Scale the image on hover
                rotate: -1, // Add rotation effect
                transition: { duration: 0.1 }, // Smooth hover transition
              }}
            >
              Resume
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
