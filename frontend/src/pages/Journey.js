// import React from "react";
// import navigation from "../images/navigation.png";
// import education from "../images/education_hat.png";
// import svvv_logo from "../images/svvv.png";
// import aknk_logo from "../images/School_logo.png";

// function Journey() {
//   return (
//     <>
//       <div className="h-screen w-full md:pt-24 pt-16 ">
//         <div className="h-full w-full flex justify-center">
//           <div className="h-full md:w-3/4 w-full flex flex-col md:pl-14 pl-0 gap-4 ">
//             <div className="flex pl-3 md:pl-0 mt-6 items-center gap-2">
//               <img src={education} alt="Education_hat" className="size-14 " />
//               <h1 className="text-pink-600 font-heading text-3xl md:text-5xl">
//                 EDUCATION
//               </h1>
//             </div>
//             <div className="h-full w-full flex md:items-center items-start md:ml-4 border-l-2">
//               <div className=" h-9/10 md:w-3/4 w-full flex flex-col md:gap-10 gap-5 md:ml-10 ml-0">
//                 <div className="md:h-32 md:w-3/4 w-full flex flex-col gap-1 shadow-sm shadow-slate-700">
//                   <div className="md:size-10 size-8 shadow-sm shadow-slate-700 rounded-full ml-2 mt-2 flex justify-center items-center">
//                     <img
//                       src={svvv_logo}
//                       alt="svvv-logo"
//                       className="md:size-8 size-6 "
//                     />
//                   </div>
//                   <p className="font-para font-semibold text-white ml-2 ">
//                     Shri Vaishnav Vidyapeeth Vishwavidyalaya
//                     <span className="text-white font-mono text-sm">
//                       (2021-2025)
//                     </span>
//                   </p>
//                   <p className="text-white font-para md:text-sm text-xs ml-2 ">
//                     Bachelor's Degree, Computer Science and Engineering
//                   </p>
//                   <div className="flex items-center gap-1 ml-2 ">
//                     <img src={navigation} alt="navigation" className="size-3" />
//                     <p className="text-white font-para text-[12px]">
//                       Indore, India
//                     </p>
//                   </div>
//                 </div>
//                 <div className=" h-32 md:w-3/4 w-full flex flex-col gap-1 shadow-sm shadow-slate-700">
//                   <div className="md:size-10 size-8 shadow-sm shadow-slate-700 rounded-full ml-2 mt-2 flex justify-center items-center">
//                     <img
//                       src={aknk_logo}
//                       alt="School-logo"
//                       className="md:size-8 size-6"
//                     />
//                   </div>
//                   <p className="font-para font-semibold text-white ml-2 ">
//                     Arvind Kumar Nitin Kumar Higher Secondary School
//                     <span className="text-white font-mono text-sm">
//                       (2020-2018)
//                     </span>
//                   </p>
//                   <p className="text-white font-para md:text-sm text-xs ml-2 ">
//                     Secondary School, MPBSE
//                   </p>
//                   <div className="flex items-center gap-1 ml-2 ">
//                     <img src={navigation} alt="navigation" className="size-3" />
//                     <p className="text-white font-para text-[12px]">
//                       Khandwa, India
//                     </p>
//                   </div>
//                 </div>
//                 <div className="shadow-sm shadow-slate-700 h-32 md:w-3/4 w-full flex flex-col gap-1">
//                   <div className="md:size-10 size-8 shadow-sm shadow-slate-700 rounded-full ml-2 mt-2 flex justify-center items-center">
//                     <img
//                       src={aknk_logo}
//                       alt="School-logo"
//                       className="md:size-8 size-6"
//                     />
//                   </div>
//                   <p className="font-para font-semibold text-white ml-2 ">
//                     Arvind Kumar Nitin Kumar Higher Secondary School
//                     <span className="text-white font-mono text-sm">
//                       (2018-2016)
//                     </span>
//                   </p>
//                   <p className="text-white font-para md:text-sm text-xs ml-2 ">
//                     High School, MPBSE
//                   </p>
//                   <div className="flex items-center gap-1 ml-2 ">
//                     <img src={navigation} alt="navigation" className="size-3" />
//                     <p className="text-white font-para text-[12px]">
//                       Khandwa, India
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Journey;


import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import navigation from "../images/navigation.png";
import education from "../images/education_hat.png";
import svvv_logo from "../images/svvv.png";
// import ardent_logo from "../images/ardent.png";
// import internship_logo from "../images/internship.png";

function Journey() {
  const containerRef = useRef(null);

  // Scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const journeyData = [
    {
      title: "MERN Stack Intern",
      org: "Ardent Technology",
      year: "(2025)",
      desc: "Worked on real-world MERN stack projects, REST APIs & UI.",
      location: "Indore, India",
      logo: svvv_logo,
    },
    {
      title: "MERN Stack Trainee",
      org: "Ardent Technology",
      year: "(2024)",
      desc: "Hands-on training in MongoDB, Express, React & Node.js.",
      location: "Indore, India",
      logo: svvv_logo,
    },
    {
      title: "Bachelor of Technology (CSE)",
      org: "Shri Vaishnav Vidyapeeth Vishwavidyalaya",
      year: "(2021 – 2025)",
      desc: "Computer Science and Engineering.",
      location: "Indore, India",
      logo: svvv_logo,
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen w-full md:pt-24 pt-16">
      <div className="w-full flex justify-center">
        <div className="md:w-4/5 w-full flex flex-col gap-8">

          {/* Heading */}
          <div className="flex items-center gap-3 pl-4 md:pl-0">
            <img src={education} alt="Journey" className="size-14" />
            <h1 className="text-pink-600 font-heading text-3xl md:text-5xl">
              JOURNEY
            </h1>
          </div>

          {/* Timeline */}
          <div className="relative w-full">

            {/* Center Line */}
            <div className="absolute left-1/2 top-0 w-[2px] h-full bg-white/20" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-1/2 top-0 w-[2px] bg-pink-600 origin-top"
            />

            {/* Items */}
            <div className="flex flex-col gap-16 mt-10">
              {journeyData.map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className={`relative w-full flex ${
                      isLeft ? "justify-start" : "justify-end"
                    }`}
                  >
                    {/* Dot */}
                    <span className="absolute left-1/2 -translate-x-1/2 top-6 
                                     h-4 w-4 bg-pink-600 rounded-full z-10" />

                    {/* Card */}
                    <div
                      className="bg-black/60 backdrop-blur-md rounded-xl 
                                 shadow-md shadow-slate-700 p-4 w-[90%] md:w-[45%]
                                 hover:shadow-pink-500/40 transition-all duration-300"
                    >
                      {/* Logo */}
                      <div className="size-10 rounded-full bg-black shadow-md 
                                      shadow-pink-500/30 flex justify-center items-center mb-2">
                        <img src={item.logo} alt="logo" className="size-6" />
                      </div>

                      <p className="text-white font-semibold">
                        {item.org}{" "}
                        <span className="text-sm font-mono">{item.year}</span>
                      </p>

                      <p className="text-pink-500 text-sm">{item.title}</p>

                      <p className="text-white text-sm mt-1">{item.desc}</p>

                      <div className="flex items-center gap-1 mt-2">
                        <img src={navigation} alt="location" className="size-3" />
                        <p className="text-xs text-white">{item.location}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Journey;
