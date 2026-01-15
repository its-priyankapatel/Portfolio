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
      <div className="px-6 md:px-10 lg:px-24 min-h-screen h-auto bg-black  selection:bg-pink-600 selection:text-black ">
        <CustomCursor />
        <Navbar />
        <Home />
        <About />
        <Journey />
        <Tools />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
