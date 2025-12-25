import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import signature from "../images/signature.png";
const Navbar = () => {
  return (
    <>
      <nav className=" flex  md:items-center justify-between md:h-24 h-12  pt-2 bg-black sticky top-0 z-10">
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
          <div className="h-full w-20 flex  justify-center items-center gap-2 md:gap-6">
            <motion.div animate={{ y: [-70, 0] }} transition={{ delay: 0.5 }}>
              <a
                href="https://www.linkedin.com/in/priyanka-patel-6006a0235"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-lg md:text-3xl text-white cursor-pointer hover:scale-110 duration-75" />
              </a>
            </motion.div>
            <motion.div animate={{ y: [-70, 0] }} transition={{ delay: 0.75 }}>
              <a
                href="https://github.com/its-priyankapatel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-lg md:text-3xl text-white cursor-pointer hover:scale-110 duration-75" />
              </a>
            </motion.div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
