import React from "react";
import signature from "./images/signature.png";
import priyanka from "./images/pinku_yellow.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
const App = () => {
  const openResume = () => {
    window.open(
      "https://www.dropbox.com/scl/fi/j73xb3eqp7737lhtfgkb7/Priyanka-Patel-Resume.pdf?rlkey=b7sj5nmbe5hd97kivbkh7806l&st=rptsh149&dl=0",
      "_blank"
    );
  };
  return (
    <>
      <div className="min-h-screen h-auto bg-stone-900 pb-32">
        <div className="md:px-28 px-3 pt-10 h-full">
          <div className="h-24 flex justify-between w-full ">
            <motion.img
              initial={{ y: -110 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              className="h-10 md:h-14 select-none"
              src={signature}
              alt="Priyanka Patel"
            />
            <motion.div
              initial={{ y: -110 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col gap-3 "
            >
              <FaLinkedin className="text-white text-2xl md:text-3xl cursor-pointer active:scale-110 duration-500" />
              <FaGithub className="text-white text-2xl md:text-3xl cursor-pointer active:scale-110 duration-500" />
            </motion.div>
          </div>
          <div className=" h-auto md:h-96 flex flex-col-reverse md:flex-row md:justify-between items-center mt-2 md:mt-28 ">
            <div className=" w-64 md:w-1/2  text-center md:text-left">
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
            <div className="w-40 md:w-1/3">
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              Resume
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
