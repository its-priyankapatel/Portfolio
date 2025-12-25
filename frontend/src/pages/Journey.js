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
          <div className="h-full md:w-3/4 w-full flex flex-col md:pl-14 pl-0 gap-4 ">
            <div className="flex pl-3 md:pl-0 mt-6 items-center gap-2">
              <img src={education} alt="Education_hat" className="size-14 " />
              <h1 className="text-pink-600 font-heading text-3xl md:text-5xl">
                EDUCATION
              </h1>
            </div>
            <div className="h-full w-full flex md:items-center items-start md:ml-4 border-l-2">
              <div className=" h-9/10 md:w-3/4 w-full flex flex-col md:gap-10 gap-5 md:ml-10 ml-0">
                <div className="md:h-32 md:w-3/4 w-full flex flex-col gap-1 shadow-sm shadow-slate-700">
                  <div className="md:size-10 size-8 shadow-sm shadow-slate-700 rounded-full ml-2 mt-2 flex justify-center items-center">
                    <img
                      src={svvv_logo}
                      alt="svvv-logo"
                      className="md:size-8 size-6 "
                    />
                  </div>
                  <p className="font-para font-semibold text-white ml-2 ">
                    Shri Vaishnav Vidyapeeth Vishwavidyalaya
                    <span className="text-white font-mono text-sm">
                      (2021-2025)
                    </span>
                  </p>
                  <p className="text-white font-para md:text-sm text-xs ml-2 ">
                    Bachelor's Degree, Computer Science and Engineering
                  </p>
                  <div className="flex items-center gap-1 ml-2 ">
                    <img src={navigation} alt="navigation" className="size-3" />
                    <p className="text-white font-para text-[12px]">
                      Indore, India
                    </p>
                  </div>
                </div>
                <div className=" h-32 md:w-3/4 w-full flex flex-col gap-1 shadow-sm shadow-slate-700">
                  <div className="md:size-10 size-8 shadow-sm shadow-slate-700 rounded-full ml-2 mt-2 flex justify-center items-center">
                    <img
                      src={aknk_logo}
                      alt="School-logo"
                      className="md:size-8 size-6"
                    />
                  </div>
                  <p className="font-para font-semibold text-white ml-2 ">
                    Arvind Kumar Nitin Kumar Higher Secondary School
                    <span className="text-white font-mono text-sm">
                      (2020-2018)
                    </span>
                  </p>
                  <p className="text-white font-para md:text-sm text-xs ml-2 ">
                    Secondary School, MPBSE
                  </p>
                  <div className="flex items-center gap-1 ml-2 ">
                    <img src={navigation} alt="navigation" className="size-3" />
                    <p className="text-white font-para text-[12px]">
                      Khandwa, India
                    </p>
                  </div>
                </div>
                <div className="shadow-sm shadow-slate-700 h-32 md:w-3/4 w-full flex flex-col gap-1">
                  <div className="md:size-10 size-8 shadow-sm shadow-slate-700 rounded-full ml-2 mt-2 flex justify-center items-center">
                    <img
                      src={aknk_logo}
                      alt="School-logo"
                      className="md:size-8 size-6"
                    />
                  </div>
                  <p className="font-para font-semibold text-white ml-2 ">
                    Arvind Kumar Nitin Kumar Higher Secondary School
                    <span className="text-white font-mono text-sm">
                      (2018-2016)
                    </span>
                  </p>
                  <p className="text-white font-para md:text-sm text-xs ml-2 ">
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
