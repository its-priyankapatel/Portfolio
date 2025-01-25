import React from "react";
import About from "./pages/About";
import { Element } from "react-scroll";
import Tools from "./pages/Tools";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <>
      <div className="md:px-24 px-2 min-h-screen h-auto bg-stone-900  selection:bg-yellow-400 selection:text-black ">
        <Navbar />
        <Home />
        <Element name="aboutSection">
          <About />
        </Element>
        <Element name="toolSection">
          <Tools />
        </Element>
        <Footer />
      </div>
    </>
  );
};

export default App;
