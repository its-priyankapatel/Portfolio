import React from "react";
import { motion } from "framer-motion";

import c_programming from "../images/Technologies/c_programming.png";
import cpp from "../images/Technologies/cpp.png";
import htmlTechnology from "../images/Technologies/htmlTechnology.png";
import css from "../images/Technologies/css-3.png";
import javaScript from "../images/Technologies/js.png";
import react from "../images/Technologies/react.png";
import node from "../images/Technologies/node.png";
import mern from "../images/Technologies/MERN.png";
import java from "../images/Technologies/java.png";

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const Technologies = () => {
  const technology = [
    { name: "C ", image: c_programming },
    { name: "C++", image: cpp },
    {name:  "Java", image: java},
    { name: "HTML", image: htmlTechnology },
    { name: "CSS", image: css },
    { name: "JavaScript", image: javaScript },
    { name: "ReactJS", image: react },
    { name: "NodeJS", image: node },
    { name: "MERN Stack", image: mern },
  ];

  return (
    <div className="w-full py-36">
      <h1 className="text-3xl md:text-5xl font-heading text-pink-600 mb-14">
        Technical Skills
      </h1>

      <div className="flex jsutify-start xl:justify-center items-center">
        {/* <div className="grid grid-cols-2 xl:grid-cols-9 gap-10 xl:gap-16"> */}
        <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-6 xl:gap-5">
          {technology.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                rotateX: 10,
                rotateY: -10,
                scale: 1.15,
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="flex flex-col items-center gap-4"
            >
              {/* Neon Ring */}
              <motion.div
                className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-2xl bg-black flex items-center justify-center"
                whileHover={{
                  boxShadow:
                    "0 0 2px rgba(236,72,153,0.1)",
                }}
              >
                {/* Glow Border */}
                <div className="absolute inset-0 rounded-2xl border border-zinc-800 animate-pulse" />

                {/* Floating Image */}
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
                  {...floatAnimation}
                />
              </motion.div>

              {/* Text */}
              <motion.p
                className="text-lg font-semibold text-pink-500"
                whileHover={{ letterSpacing: "2px" }}
              >
                {item.name}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
