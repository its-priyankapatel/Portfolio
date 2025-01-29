import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import priyanka from "../images/pinku_patel.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Trigger every time it enters the viewport
  const mainControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible"); // Start animation when in view
    } else {
      mainControl.start("hidden"); // Reset animation when out of view
    }
  }, [isInView, mainControl]);
  return (
    <>
      <div className=" h-screen w-full flex md:flex-row flex-col items-center md:justify-center justify-start md:pt-24 pt-16 md:gap-36 gap-5">
        <div
          className=" md:h-80  w-full md:w-1/2 flex justify-center bg-sky-400 "
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControl}
          transition={{ duration: 1, delay: 0.25 }}
        >
          <p className="font-heading text-white text-3xl flex flex-col gap-2">
            <span>A</span>
            <span>B</span>
            <span>O</span>
            <span>U</span>
            <span>T</span>
          </p>
          <p className=" md:text-base text-sm font-redhat text-white text-center md:text-left">
            I am a passionate and motivated individual with a strong foundation
            in programming, starting with C and C++, which enhanced my
            problem-solving skills and understanding of core concepts. My
            curiosity for web development led me to learn HTML and CSS, enabling
            me to design responsive and visually appealing websites. I enjoy
            exploring the MERN stack, leveraging React.js for interactive
            interfaces and Node.js for back-end development. Continuously driven
            by a love for learning new technologies, I am dedicated to building
            projects that address real-world challenges and look forward to
            connecting to innovate together🚀
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
