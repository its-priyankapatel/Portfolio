import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
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
      <div className="md:px-24 px-3 md:mt-20 mt-6 h-screen flex flex-col justify-center border-b-[0.9px] border-double border-yellow-400">
        <div className=" text-yellow-400 md:text-3xl text-2xl  font-redhat font-bold text-center pt-6">
          About me
        </div>

        <motion.div
          className="flex md:mt-10 mt-6 md:h-40 h-80 items-center rounded-lg bg-white bg-opacity-10 "
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: -1000 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControl}
          transition={{ duration: 2, delay: 0.25 }}
        >
          <p className=" text-white md:text-center text-start font-sans md:text-xl text-md tracking-wide px-6">
            I am a passionate and motivated individual with a strong foundation
            in programming, starting with C and C++, which have sharpened my
            problem-solving skills and understanding of core concepts. My
            curiosity in web development led me to learn HTML and CSS, allowing
            me to design responsive and visually appealing websites.
          </p>
        </motion.div>
        <motion.div
          className="flex md:mt-10 mt-6 md:h-40 h-80 items-center rounded-lg bg-white bg-opacity-10"
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: 1000 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControl}
          transition={{ duration: 2, delay: 0.25 }}
        >
          <p className=" text-white md:text-center text-start font-sans md:text-xl text-md tracking-wide px-6 ">
            Beyond coding, I enjoy exploring the MERN stack, where I leverage
            React.js for interactive interfaces and Node.js for back-end
            development. I thrive on learning new technologies and building
            projects that solve real-world challenges. Let’s connect to innovate
            together!
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default About;
