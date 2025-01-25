import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import signature from "../images/signature.png";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <>
      <nav className=" flex flex-col md:flex-row  md:items-center md:justify-between md:h-24 h-12   bg-stone-900">
        <div>
          <motion.img
            className="h-10 md:h-14 select-none"
            src={signature}
            alt="Priyanka Patel"
            initial={{ y: -120 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
        <div className="flex gap-4 md:gap-10 items-center mt-2 md:mt-0 ">
          <motion.p
            className=" text-white text-sm md:text-lg font-roboto font-semibold hover:text-yellow-400 hover:underline  cursor-pointer"
            animate={{ x: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          >
            <Link to="aboutSection" smooth={true} duration={1500}>
              About
            </Link>
          </motion.p>
          <motion.p
            className=" text-white text-sm md:text-lg font-roboto font-semibold hover:text-yellow-400 hover:underline  cursor-pointer"
            animate={{ x: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
          >
            <Link to="toolSection" smooth={true} duration={1500}>
              Tools
            </Link>
          </motion.p>
          <motion.p
            className=" text-white text-sm md:text-lg font-roboto font-semibold hover:text-yellow-400 hover:underline  cursor-pointer"
            animate={{ x: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
          >
            Skills
          </motion.p>
          <motion.p
            className=" text-white text-sm md:text-lg font-roboto font-semibold hover:text-yellow-400 hover:underline  cursor-pointer"
            animate={{ x: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          >
            Contact
          </motion.p>
          <div className="h-full w-20 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
            <FaLinkedin className="text-lg md:text-2xl text-white cursor-pointer hover:scale-110 duration-75" />
            <FaGithub className="text-lg md:text-2xl text-white cursor-pointer hover:scale-110 duration-75" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
