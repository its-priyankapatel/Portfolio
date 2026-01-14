// import React from "react";
// import { motion ,AnimatePresence} from "framer-motion";
// import priyanka from "../images/me.png";
// import { useState, useEffect } from "react";


// const Home = () => {
//   const pdfURL = "/pdf/Priyanka_Patel_Resume.pdf";
//   const openResume = (e) => {
//     e.preventDefault();
//     window.open(pdfURL, "_blank", "noopener,nonreferrer");
//   };
//   const changingTexts = ["Deploy it.", "Scale it.", "Optimize it."];
//   const [index, setIndex] = useState(0);


// useEffect(() => {
//   const interval = setInterval(() => {
//     setIndex((prev) => (prev + 1) % changingTexts.length);
//   }, 2000); // change every 2 seconds

//   return () => clearInterval(interval);
// }, []);


//   return (
//     <>
//       <div className="h-screen w-full pt-12 md:pt-0">
//         <div className="h-full w-full  flex items-center justify-center relative">
//           <div className="w-80 md:w-[60%]  h-full flex flex-col justify-center  gap-6  pb-4 md:pb-0 z-0">
//             <motion.p
//               className="font-heading text-3xl md:text-7xl text-pink-600"
//               initial={{ opacity: 0, y: -30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//             >
//               Hello,
//               <br /> I'm Priyanka Patel
//             </motion.p>
//             {/* <motion.p
//               className="font-para  font-bold text-2xl md:text-4xl  text-white"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.9 }}
//             >
//               Think it, build it, live it
//             </motion.p> */}
//             <motion.p className="font-para font-bold text-2xl md:text-3xl text-white flex gap-2"
//             initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.9 }}
//             >
//     <span>Think it.</span>
//     <span>Build it.</span>

//   <motion.span
//     key={changingTexts[index]}
//     initial={{ width: 0 }}
//     animate={{ width: "auto" }}
//     transition={{ duration: 0.6 }}
//     style={{
//       display: "inline-block",
//       overflow: "hidden",
//       whiteSpace: "nowrap",
//     }}
//     className="text-pink-500"
//   >
//     {changingTexts[index]}
//   </motion.span>

// </motion.p>

//             <motion.p
//               className="font-para text-md md:text-base md:w-5/6  text-white "
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 1.5 }}
//             >
//               Welcome to my portfolio! This is where my creativity meets code.
//               Explore my work, see my skills in action, and get to know my
//               journey. I am excited to share what I have built with you.
//             </motion.p>
//             <motion.button
//               className="h-8 w-28 md:h-10 md:w-32 px-2 text-pink-600 border-pink-600 border-2 rounded-3xl font-para font-extrabold select-none hover:bg-pink-600 hover:text-black"
//               onClick={openResume}
//               whileTap={{ scale: 0.95 }}
//               whileHover={{
//                 scale: 1.1, // Scale the image on hover
//                 transition: { duration: 0.4 }, // Smooth hover transition
//               }}
//             >
//               View Resume
//             </motion.button>
//           </div>
//           <img
//             src={priyanka}
//             alt="priyanka patel"
//             className="md:h-4/5 h-3/5 -rotate-2 select-none md:opacity-60 opacity-15 absolute md:static"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import priyanka from "../images/me.png";

const Home = () => {
  const pdfURL = "/pdf/Priyanka_Patel_Resume.pdf";

  const openResume = (e) => {
    e.preventDefault();
    window.open(pdfURL, "_blank", "noopener,noreferrer");
  };

  const changingTexts = ["Deploy it.", "Scale it.", "Optimize it."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % changingTexts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen w-full pt-5 z-0">
      <div className="h-full w-full flex flex-col-reverse sm:flex-row items-center justify-end sm:justify-center gap-5 relative">

        {/* TEXT SECTION */}
        <div
          className="absolute sm:static
  bottom-28 sm:bottom-auto
  right-0 sm:right-auto
 w-full sm:w-[90%] md:w-[80%]
            lg:w-[70%]
            xl:w-[60%]
            flex flex-col
            justify-center
            gap-4
           
            z-10
          "
        >
          {/* Heading */}
          <motion.p
            className="
              font-heading
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              xl:text-7xl
              text-pink-600
            "
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hello,
            <br /> I'm Priyanka Patel
          </motion.p>

          {/* Tagline */}
          <motion.p
            className="
              font-para
              font-bold
              text-lg
              md:text-xl
              lg:text-3xl
              text-white
              flex gap-2 flex-wrap
            "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span>Think it.</span>
            <span>Build it.</span>

            <motion.span
              key={changingTexts[index]}
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ duration: 0.6 }}
              className="text-pink-500 inline-block overflow-hidden whitespace-nowrap"
            >
              {changingTexts[index]}
            </motion.span>
          </motion.p>

          {/* Description */}
          <motion.p
            className="
              font-para
              text-sm
              sm:text-base
              md:text-lg
              text-white
              md:w-5/6
            "
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            Welcome to my portfolio! This is where my creativity meets code.
            Explore my work, see my skills in action, and get to know my journey.
            I’m excited to share what I’ve built with you.
          </motion.p>

          {/* Button */}
          <motion.button
            className="
              mt-2
              h-8 w-28
              sm:h-9 sm:w-32
              md:h-10 md:w-36
              text-sm md:text-base
              text-pink-600
              border-2 border-pink-600
              rounded-3xl
              font-para font-extrabold
              hover:bg-pink-600 hover:text-black
              select-none
            "
            onClick={openResume}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.08 }}
          >
            View Resume
          </motion.button>
        </div>

        {/* IMAGE SECTION */}
        <img
          src={priyanka}
          alt="Priyanka Patel"
          className="absolute sm:static h-[60%] w-[80%] sm:h-[60%] sm:w-[50%] lg:h-[60%] xl:h-[80%] lg:w-[40%] opacity-40 sm:opacity-20 md:opacity-40 select-none "
        />
      </div>
    </section>
  );
};

export default Home;
