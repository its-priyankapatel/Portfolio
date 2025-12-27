import React from "react";
import { motion } from "framer-motion";

import c_programming from "../images/Technologies/c_programming.png";
import cpp from "../images/Technologies/cpp.png";
import html from "../images/Technologies/HTML.png";
import css from "../images/Technologies/CSS.png";
import javaScript from "../images/Technologies/JavaScript.png";
import react from "../images/Technologies/React.jpg";
import node from "../images/Technologies/node.png";
import mern from "../images/Technologies/MERN.png";

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
    { name: "C Programming", image: c_programming },
    { name: "C++ Programming", image: cpp },
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "JavaScript", image: javaScript },
    { name: "ReactJS", image: react },
    { name: "NodeJS", image: node },
    { name: "MERN Stack", image: mern },
  ];

  return (
    <div className="w-full py-14">
      <h1 className="text-3xl md:text-5xl font-heading text-pink-600 mb-14">
        Technical Skills
      </h1>

      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-14">
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
                className="relative h-40 w-40 rounded-2xl bg-black flex items-center justify-center"
                whileHover={{
                  boxShadow:
                    "0 0 25px rgba(236,72,153,0.7), inset 0 0 15px rgba(236,72,153,0.4)",
                }}
              >
                {/* Glow Border */}
                <div className="absolute inset-0 rounded-2xl border border-pink-500/40 animate-pulse" />

                {/* Floating Image */}
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 object-contain"
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
