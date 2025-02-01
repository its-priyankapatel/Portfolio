import React from "react";

const Projects = () => {
  return (
    <>
      <div className="h-screen w-full md:pt-24 pt-16">
        <div className=" h-full w-full flex flex-col items-center gap-3">
          <p className="text-5xl font-heading text-pink-600">Projects</p>
          <div className="h-[500px] w-[1100px] flex gap-12 justify-center items-center">
            <div className="bg-gray-800 h-[450px] w-80 flex flex-col items-center gap-3 rounded-sm">
              <div className="h-60 w-72 mt-2 shadow-sm shadow-slate-200"></div>
              <p className="text-2xl font-heading text-pink-600">Project 1</p>
              <p className="text-para text-white pl-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Provident, molestiae officia. Reprehenderit cumque quis
                provident.
              </p>
              <button className="h-8 w-20 rounded-md border border-pink-600 text-pink-600">
                Click Here
              </button>
            </div>
            <div className="bg-gray-800 h-[450px] w-80 flex flex-col items-center gap-3 rounded-sm">
              <div className="shadow-sm shadow-slate-200 h-60 w-72 mt-2"></div>
              <p className="text-2xl font-heading text-pink-600">Project 1</p>
              <p className="text-para text-white pl-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Provident, molestiae officia. Reprehenderit cumque quis
                provident.
              </p>
              <button className="h-8 w-20 rounded-md border border-pink-600 text-pink-600">
                Click Here
              </button>
            </div>
            <div className="bg-gray-800 h-[450px] w-80 flex flex-col items-center gap-3 rounded-sm">
              <div className="shadow-sm shadow-slate-200 h-60 w-72 mt-2"></div>
              <p className="text-2xl font-heading text-pink-600">Project 1</p>
              <p className="text-para text-white pl-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Provident, molestiae officia. Reprehenderit cumque quis
                provident.
              </p>
              <button className="h-8 w-20 rounded-md border border-pink-600 text-pink-600">
                Click Here
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
