import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import navigation from "../images/navigation.png";
import education from "../images/education_hat.png";
import svvv_logo from "../images/svvv.png";
import ardent_logo from "../images/ardent.png"
import internship_logo from "../images/vyanwebs.jpg";

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
      title: "MERN Stack Trainee",
      org: "Vyanwebs Technology Pvt. Ltd.",
      year: "(Sept 2025 - Dec 2025)",
      desc: "Hands-on training in MongoDB, Express, React & Node.js.",
      location: "Indore, India",
      logo: internship_logo,
    },
    {
      title: "MERN Stack Intern",
      org: "Ardent Computech Pvt. Ltd.",
      year: "(July 2024 - Aug 2024)",
      desc: "Worked on real-world MERN stack projects, REST APIs & UI.",
      location: "Indore, India",
      logo: ardent_logo,
    },
    {
      title: "Bachelor of Technology (CSE)",
      org: "Shri Vaishnav Vidyapeeth Vishwavidyalaya",
      year: "(July 2021 - June 2025)",
      desc: "Computer Science and Engineering.",
      location: "Indore, India",
      logo: svvv_logo,
    }
  ];

  return (
    <div ref={containerRef} className="h-auto w-full mt-16 md:mt-32 py-4">
      <div className="w-full flex justify-center">
        <div className="w-full flex flex-col gap-8">

          {/* Heading */}
          <div className="flex items-center gap-3">
            <img src={education} alt="Journey" className="size-14" />
            <h1 className="text-pink-600 font-heading text-3xl md:text-5xl">
              Journey
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
                    className={`relative w-full flex ${isLeft ? "justify-start" : "justify-end"
                      }`}
                  >
                    {/* Dot */}
                    <span className="absolute left-1/2 -translate-x-1/2 top-6 
                                     h-4 w-4 bg-pink-600 rounded-full z-2" />

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
