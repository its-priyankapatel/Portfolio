import React from "react";
import About from "./pages/About";
import Tools from "./pages/Tools";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="snap-container md:px-24 px-2 min-h-screen h-auto bg-black  selection:bg-yellow-400 selection:text-black ">
        <Navbar />
        <div className="snap-page">
          <Home />
        </div>
        <div className="snap-page">
          <About />
        </div>
        <div className="snap-page">
          <Tools />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
