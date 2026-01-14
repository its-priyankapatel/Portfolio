// import React, { useEffect, useRef } from "react";
// import { motion, useInView, useAnimation } from "framer-motion";

// const About = () => {
//   return (
//     <>
//       <div className="h-auto w-full pt-10">
//         <div className=" h-full w-full flex flex-col items-left md:justify-center justify-start gap-4">
//           <h1 className="text-3xl md:text-5xl font-heading  text-pink-600 pt-3 md:pt-0">
//             About
//           </h1>
//           <div className=" md:h-80 flex flex-col gap-4 w-full md:w-3/4 ">
//             <p className="font-para md:text-lg text-md text-white">
//               👋Hey there! I'm a Software Engineer with a knack for crafting
//               code and a passion for innovation. I thrive in the world of C,
//               C++, and MERN stack, turning ideas into functional, scalable
//               solutions.
//             </p>
//             <p className="font-para md:text-lg text-md text-white">
//               But my love for technology isn’t just about writing code—it's
//               about building, exploring, and constantly learning. When I’m not
//               debugging or optimizing, you'll find me painting my imagination
//               onto a canvas or singing my heart out sometimes even while coding
//               🎶.
//             </p>
//             <p className="font-para md:text-lg text-md text-white">
//               I believe in blending logic with creativity, and that’s what makes
//               my work unique. Let’s build something amazing together!
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;


import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div ref={ref} className="h-auto w-full pt-5">
      <motion.div
        className="h-full w-full flex flex-col items-left md:justify-center justify-start gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Heading */}
        <motion.h1
          className="text-3xl md:text-5xl font-heading text-pink-600 pt-3 md:pt-0"
          variants={itemVariants}
        >
          About
        </motion.h1>

        {/* Paragraphs */}
        <div className="md:h-80 flex flex-col gap-4 w-full lg:w-3/4 mt-2 lg:mt-4">
          <motion.p
            className="font-para md:text-lg text-md text-white"
            variants={itemVariants}
          >
            👋 Hey there! I'm a Software Engineer with a knack for crafting code
            and a passion for innovation. I thrive in the world of C, C++, and
            MERN stack, turning ideas into functional, scalable solutions.
          </motion.p>

          <motion.p
            className="font-para md:text-lg text-md text-white"
            variants={itemVariants}
          >
            But my love for technology isn’t just about writing code—it's about
            building, exploring, and constantly learning. When I’m not
            debugging or optimizing, you'll find me painting my imagination
            onto a canvas or singing my heart out sometimes even while coding.
          </motion.p>

          <motion.p
            className="font-para md:text-lg text-md text-white"
            variants={itemVariants}
          >
            I believe in blending logic with creativity, and that’s what makes
            my work unique. Let’s build something amazing together!
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
