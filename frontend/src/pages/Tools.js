import React from "react";
import { motion } from "framer-motion";
import chatgpt from "../images/tools/ChatGPT.svg";
import figma from "../images/tools/Figma.svg";
import framer_motion from "../images/tools/Framer-Motion.svg";
import Git from "../images/tools/Git.svg";
import mongoDB from "../images/tools/MongoDB.svg";
import postman from "../images/tools/Postman.svg";
import tailwindCSS from "../images/tools/TailwindCSS.svg";
import VS_code from "../images/tools/VS-Code.svg";
import bootstap from "../images/tools/Bootstrap.svg";

const Tools = () => {
  return (
    <>
      <div className=" h-screen md:px-24 px-3 flex flex-col items-center justify-center gap-8  ">
        <motion.div className=" text-center h-20 md:h-14 md:text-3xl text-lg font-redhat font-semibold text-yellow-400 mt-64 md:mt-0">
          These are the tools that fuel my development journey
        </motion.div>
        {/* <div className="flex justify-center items-center"> */}
        <div className=" md:h-1/2 md:w-5/6 h-[800px] w-60  md:grid md:grid-cols-3 md:pl-24 md:items-center md:gap-4 flex flex-col justify-center items-center gap-6">
          <motion.div className="bg-white h-16 py-2 flex w-56 px-4  items-center gap-6 rounded-lg">
            <img src={chatgpt} alt="ChatGPT" className="h-11" />
            <p className="text-xl font-semibold font-redhat">ChatGPT</p>
          </motion.div>
          <motion.div className="bg-white h-16 py-2 flex w-56 px-4  items-center gap-6 rounded-lg">
            <img src={Git} alt="Git" className="h-11" />
            <p className="text-xl font-semibold font-redhat">Git</p>
          </motion.div>
          <motion.div className="bg-white h-16 py-2 flex w-56 px-4  items-center gap-6 rounded-lg">
            <img src={framer_motion} alt="FramerMotion" className="h-11" />
            <p className="text-xl font-semibold font-redhat">FrameMotion</p>
          </motion.div>
          <motion.div className="bg-white h-16 py-2 flex w-56 px-4  items-center gap-6 rounded-lg">
            <img src={figma} alt="Figma" className="h-11" />
            <p className="text-xl font-semibold font-redhat">Figma</p>
          </motion.div>
          <motion.div className="bg-white h-16 py-2 flex w-56 px-4  items-center gap-6 rounded-lg">
            <img src={mongoDB} alt="MongoDB" className="h-11" />
            <p className="text-xl font-semibold font-redhat">MongoDB</p>
          </motion.div>
          <motion.div className="bg-white h-16 py-2 flex w-56 px-4  items-center gap-6 rounded-lg">
            <img src={postman} alt="Postman" className="h-11" />
            <p className="text-xl font-semibold font-redhat">Postman</p>
          </motion.div>
          <motion.div className="bg-white h-16 py-2 flex w-56 px-4  items-center gap-4 rounded-lg">
            <img src={tailwindCSS} alt="tailwindCSS" className="h-11" />
            <p className="text-xl font-semibold font-redhat ">TailwindCSS</p>
          </motion.div>
          <motion.div className="bg-white h-16 py-2 flex w-56 px-4  items-center gap-6 rounded-lg">
            <img src={VS_code} alt="VScode" className="h-11" />
            <p className="text-xl font-semibold font-redhat">VSCode</p>
          </motion.div>
          <motion.div className="bg-white h-16 py-2 flex w-56 px-4  items-center gap-6 rounded-lg">
            <img src={bootstap} alt="BootStrap" className="h-11" />
            <p className="text-xl font-semibold font-redhat">BootStrap</p>
          </motion.div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Tools;
