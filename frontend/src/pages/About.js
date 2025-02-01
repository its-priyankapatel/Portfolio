import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const About = () => {
  return (
    <>
      <div className=" h-screen w-full md:pt-24 pt-16">
        <div className=" h-full w-full flex flex-col items-left md:justify-center justify-start gap-4 px-4 md:pl-24">
          <h1 className="text-3xl md:text-5xl font-heading  text-pink-600 pt-3 md:pt-0">
            About
          </h1>
          <div className=" md:h-80 flex flex-col gap-4 w-full md:w-3/4 ">
            <p className="font-para md:text-lg text-md text-white">
              👋Hey there! I'm a Software Engineer with a knack for crafting
              code and a passion for innovation. I thrive in the world of C,
              C++, and MERN stack, turning ideas into functional, scalable
              solutions.
            </p>
            <p className="font-para md:text-lg text-md text-white">
              But my love for technology isn’t just about writing code—it's
              about building, exploring, and constantly learning. When I’m not
              debugging or optimizing, you'll find me painting my imagination
              onto a canvas or singing my heart out sometimes even while coding
              🎶.
            </p>
            <p className="font-para md:text-lg text-md text-white">
              I believe in blending logic with creativity, and that’s what makes
              my work unique. Let’s build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
