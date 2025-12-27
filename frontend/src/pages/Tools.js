import React, { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

// Images
import chatgpt from "../images/tools/ChatGPT.svg";
import figma from "../images/tools/Figma.svg";
import framer_motion from "../images/tools/Framer-Motion.svg";
import Git from "../images/tools/Git.svg";
import mongoDB from "../images/tools/MongoDB.svg";
import postman from "../images/tools/Postman.svg";
import tailwindCSS from "../images/tools/TailwindCSS.svg";
import VS_code from "../images/tools/VS-Code.svg";
import bootstap from "../images/tools/Bootstrap.svg";

const tools = [
  { img: postman, name: "Postman" },
  { img: Git, name: "Git" },
  { img: mongoDB, name: "MongoDB" },
  { img: tailwindCSS, name: "Tailwind CSS" },
  // { img: framer_motion, name: "Framer Motion" },
  { img: figma, name: "Figma" },
  { img: chatgpt, name: "ChatGPT" },
  { img: VS_code, name: "VS Code" },
  { img: bootstap, name: "Bootstrap" },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Tools = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Scroll rotation
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section className="min-h-screen w-auto mt-10">
      <div className="h-full w-3/5 flex flex-col justify-center gap-6">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-heading text-pink-600"
        >
          My ToolKit
        </motion.h1>

        {/* Tools Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-5"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
                whileHover={{
                borderRadius: "24px",
               }}
               transition={{
               duration: 0.3,
               ease: "easeInOut",
              }}
              className="size-36 flex flex-col items-center justify-center gap-3
              rounded-xl border border-zinc-800 bg-black/30 backdrop-blur-md"
            >
              {/* Rotating Icon Container */}
              <motion.div
                // style={{ rotate }}
                className="size-24 rounded-full flex justify-center items-center
                bg-slate-700/20 border border-pink-500
                shadow-[0_0_8px_rgba(236,72,153,0.6)] hover:scale-90 transition-all duration-500"
              >
                <img
                  src={tool.img}
                  alt={tool.name}
                  className="size-10"
                />
              </motion.div>

              <p className="text-gray-300 text-sm font-para">
                {tool.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;
