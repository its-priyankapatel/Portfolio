import React from "react";
import { motion } from "framer-motion";


const Projects = () => {
  const projects = [
    {
      video: "https://res.cloudinary.com/driqu2cgm/video/upload/v1768499860/project-1_namk16.mp4",
      name: "Food Delivery Application",
      description:
        "A full-stack MERN food delivery platform where users can browse restaurants, explore menus, place orders, and pay securely using Stripe. Includes order tracking and a fully responsive UI.",
      link: "https://tasto.vercel.app/",
    },
    {
      video: "https://res.cloudinary.com/driqu2cgm/video/upload/v1739728639/Campus_Link_b8kkla.3gp",
      name: "University Social Networking Platform",
      description:
        "A centralized university social networking platform enabling seamless communication between students and faculty. Users can share notes, resolve doubts, receive academic updates, and stay informed about university events.",
      link: "https://cl-campus-link.vercel.app",
    },
  ];

  return (
    <section className="w-full h-auto px-4 py-2 mt-32">
      <h1 className="text-4xl md:text-5xl font-heading text-pink-600 mb-12 text-center md:text-left">
        Projects
      </h1>

      <div className="flex flex-col gap-32">
        {projects.map((project, index) => {
          const fromLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${!fromLeft ? "md:flex-row-reverse" : ""
                } gap-14 items-start`}
            >
              {/* VIDEO */}
              <motion.div
                initial={{ opacity: 0, x: fromLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full md:w-1/2"
              >
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-xl border border-gray-200"
                />
              </motion.div>

              {/* CONTENT */}
              <motion.div
                initial={{ opacity: 0, x: fromLeft ? 80 : -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.1,
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full md:w-1/2 flex flex-col items-start"
              >
                <h2 className="text-2xl md:text-3xl font-heading text-pink-600 mb-4">
                  {project.name}
                </h2>

                <p className="text-gray-700 leading-relaxed max-w-xl mb-6">
                  {project.description}
                </p>

                <motion.button
                  onClick={() => window.open(project.link, "_blank")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  // transition={{ type: "spring", stiffness: 250 }}
                  className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full text-sm"
                >
                  View Project
                </motion.button>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

