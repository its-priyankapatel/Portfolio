import React from "react";
import About from "./pages/About";
import Tools from "./pages/Tools";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import "./App.css";
import Journey from "./pages/Journey";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import CustomCursor from "./Components/Cursor";
import Technologies from "./pages/Technologies";

const App = () => {
  return (
    <>
      <div className="md:px-24 px-2 min-h-screen h-auto bg-black  selection:bg-pink-600 selection:text-black ">
      <CustomCursor />
        <Navbar />
        {/* <div className="snap-page"> */}
        <Home />
        {/* </div> */}
        {/* <div className="snap-page"> */}
        <About />
        {/* </div> */}
        {/* <div className="snap-page"> */}
        <Tools />
        {/* </div> */}
        {/* <div className="snap-page"> */}
        <Technologies/>
        <Journey />
        {/* </div> */}
        {/* <div className="snap-page"> */}
        <Projects />
        {/* </div> */}
        {/* <div className="snap-page"> */}
        <Contact />
        {/* </div> */}
        <Footer />
      </div>
    </>
  );
};

export default App;
