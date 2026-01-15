import c_programming from "../images/Technologies/c_programming.png";
import cpp from "../images/Technologies/cpp.png";
import htmlTechnology from "../images/Technologies/htmlTechnology.png";
import css from "../images/Technologies/css-3.png";
import javaScript from "../images/Technologies/js.png";
import react from "../images/Technologies/react.png";
import node from "../images/Technologies/node.png";
import java from "../images/Technologies/java.png";
import { motion } from 'framer-motion';

const Technologies = () => {
  const technology = [
    { name: "C", image: c_programming },
    { name: "C++", image: cpp },
    { name: "Java", image: java },
    { name: "HTML", image: htmlTechnology },
    { name: "CSS", image: css },
    { name: "JavaScript", image: javaScript },
    { name: "ReactJS", image: react },
    { name: "NodeJS", image: node },
  ];

  return (
    <section className="w-full mt-36 py-12">
      <h1 className="text-3xl md:text-5xl font-heading text-pink-600 text-left mb-10">
        Technical Skills
      </h1>

      <div className="max-w-7xl mx-auto px-4">
        <div
          className="
            grid 
            grid-cols-2 
            md:grid-cols-4 
            lg:grid-cols-8
            gap-6
          "
        >
          {technology.map((tech, index) => (
            <div

              key={index}
              className="
              border
              border-zinc-700
                aspect-square
                flex 
                items-center 
                justify-center 
                rounded-xl
                hover:scale-105 
                transition-transform 
                duration-300
              "
            >
              <motion.img
                animate={{
                  y: [-10, 10],
                  rotate: [-1, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "mirror"
                }}
                src={tech.image}
                alt={tech.name}
                className="h-[60%] w-[60%] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
