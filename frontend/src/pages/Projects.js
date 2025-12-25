import React, { useState,useRef } from "react";
import tasto from "./../images/tasto.png";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";


const Projects = () => {
const ref = useRef(null);
const { scrollYProgress } = useScroll({
  target:ref,
  offset:["start end","end start"],
})

  const project=[
    {
      image: tasto,
      name:  "Food Delivery Application",
      description:"A responsive web application that allows users to browse restaurants, explore menus, place food orders, and make secure online payments using the Stripe payment gateway. The platform includes features like order management, restaurant listings, and delivery status updates."
    },
    {
      image:"",
      name: "View Project",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, molestiae officia. Reprehenderit cumque quis provident."
    },
    {
      image:"",
      name: "View Project",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, molestiae officia. Reprehenderit cumque quis provident."
    }
  ]
  return (
    <>
      <div className="h-screen w-full md:pt-24 pt-16">
        {/* <div className="h-full w-full flex flex-col items-center gap-3 bg-pink-200"> */}
          <p className="text-5xl font-heading text-pink-600 text-center">Projects</p>
          <div className="h-auto w-full flex justify-center mt-5">
            <div className="h-[500px] w-[1100px] flex gap-12 justify-center items-center">
            {
             project.map((item,index)=>(
            <div key={index} className="bg-white h-[450px] w-80 flex flex-col items-center gap-3 rounded-2xl">
              <div className="h-48 w-72 mt-2 shadow-sm shadow-slate-200 rounded-lg">
                <a href="https://tasto.vercel.app/" target="_blank" rel="noopener noreferer" className="block w-full h-full">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg"
                />
                </a>
              </div>
              <div className="flex flex-col justify-center items-center gap-3">
                <p className="text-xl font-heading text-pink-600 px-3">
                  {item.name}
                </p>
                <motion.div  ref={ref} style={{ opacity: scrollYProgress }}  className="px-2 h-28 overflow-y-auto no-scrollbar text-black text-left mx-4">
                  {item.description}
                </motion.div>
                <button
                  onClick={() => window.open("https://tasto.vercel.app/")}
                  className="rounded-md text-white bg-pink-600 hover:bg-pink-500 text-sm mt-4 px-4 py-2"
                >
                  View Project
                </button>
              </div>
               </div>
              ))
            }
          </div>
          </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Projects;
