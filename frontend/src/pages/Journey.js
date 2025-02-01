import React from "react";
import navigation from "../images/navigation.png";
import education from "../images/education_hat.png";
import svvv_logo from "../images/svvv.png";
import aknk_logo from "../images/School_logo.png";
function Journey() {
  return (
    <>
      <div className="h-screen w-full md:pt-24 pt-16 ">
        <div className="h-full w-full flex justify-center">
          <div className="h-full w-3/4 flex flex-col pl-14 gap-4">
            <div className="flex mt-6 bg-black items-center gap-2">
              <img src={education} alt="Education_hat" className="size-14 " />
              <h1 className="text-pink-600 font-heading text-5xl">EDUCATION</h1>
            </div>
            <div className="h-full w-full flex items-center border-l-2 border-gray-600 ml-4">
              <div className=" h-9/10 w-3/4 flex flex-col gap-10 ml-10">
                <div className="h-32 w-3/4 flex flex-col gap-1 shadow-sm shadow-slate-700">
                  <div className="size-10 shadow-sm shadow-slate-700 rounded-full ml-2 mt-2 flex justify-center items-center">
                    <img src={svvv_logo} alt="svvv-logo" className="size-8 " />
                  </div>
                  <p className="font-para font-semibold text-white ml-2 ">
                    Shri Vaishnav Vidyapeeth Vishwavidyalaya
                    <span className="text-white font-mono text-sm">
                      (2021-2025)
                    </span>
                  </p>
                  <p className="text-white font-para text-sm ml-2 ">
                    Bachelor's Degree, Computer Science and Engineering
                  </p>
                  <div className="flex items-center gap-1 ml-2 ">
                    <img src={navigation} alt="navigation" className="size-3" />
                    <p className="text-white font-para text-[12px]">
                      Indore, India
                    </p>
                  </div>
                </div>
                <div className=" h-32 w-3/4 flex flex-col gap-1 shadow-sm shadow-slate-700">
                  <div className="size-10 shadow-sm shadow-slate-700 rounded-full ml-2 mt-2 flex justify-center items-center">
                    <img src={aknk_logo} alt="School-logo" className="size-8" />
                  </div>
                  <p className="font-para font-semibold text-white ml-2 ">
                    Arvind Kumar Nitin Kumar Higher Secondary School
                    <span className="text-white font-mono text-sm">
                      (2020-2018)
                    </span>
                  </p>
                  <p className="text-white font-para text-sm ml-2 ">
                    Secondary School, MPBSE
                  </p>
                  <div className="flex items-center gap-1 ml-2 ">
                    <img src={navigation} alt="navigation" className="size-3" />
                    <p className="text-white font-para text-[12px]">
                      Khandwa, India
                    </p>
                  </div>
                </div>
                <div className="shadow-sm shadow-slate-700 h-32 w-3/4 flex flex-col gap-1">
                  <div className="size-10  shadow-sm shadow-slate-700 rounded-full ml-2 mt-2 flex justify-center items-center">
                    <img src={aknk_logo} alt="School-logo" className="size-8" />
                  </div>
                  <p className="font-para font-semibold text-white ml-2 ">
                    Arvind Kumar Nitin Kumar Higher Secondary School
                    <span className="text-white font-mono text-sm">
                      (2018-2016)
                    </span>
                  </p>
                  <p className="text-white font-para text-sm ml-2 ">
                    High School, MPBSE
                  </p>
                  <div className="flex items-center gap-1 ml-2 ">
                    <img src={navigation} alt="navigation" className="size-3" />
                    <p className="text-white font-para text-[12px]">
                      Khandwa, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Journey;
