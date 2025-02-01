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
  const tools = [
    {
      img: postman,
      name: "Postman",
    },
    {
      img: Git,
      name: "Git",
    },
    {
      img: mongoDB,
      name: "MongoDB",
    },
    {
      img: tailwindCSS,
      name: "Tailwind CSS",
    },
    {
      img: framer_motion,
      name: "Framer Motion",
    },
    {
      img: figma,
      name: "Figma",
    },
    {
      img: chatgpt,
      name: "ChatGPT",
    },
    {
      img: VS_code,
      name: "VS Code",
    },
    {
      img: bootstap,
      name: "Bootstrap",
    },
  ];
  return (
    <>
      <div className="h-screen w-full md:pt-24 pt-16">
        <div className=" h-full w-full flex flex-col justify-center gap-6 px-4 md:pl-24 ">
          <p className="font-3xl md:text-5xl font-heading  text-pink-600 pl-24 ">
            My ToolKit
          </p>
          <div className=" h-3/4 w-3/5 grid grid-cols-3 gap-2 select-none pl-24">
            {tools.map((tool, index) => (
              <div
                className="size-36 flex flex-col items-center justify-center gap-1 rounded-md border-[1px] border-zinc-900 "
                key={index}
              >
                <motion.div className="size-24 rounded-full flex justify-center items-center bg-slate-700 bg-opacity-20 border-[1px] border-zinc-700">
                  <motion.img
                    src={tool.img}
                    alt={tool.name}
                    className="size-12"
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 0.5 },
                    }}
                  />
                </motion.div>
                <p className="text-gray-300 text-sm font-para">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;
