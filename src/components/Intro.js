import React from "react";
import img1 from "../images/edu.jpg"; // Current CEO image
import img2 from "../images/col.jpeg"; // Second CEO image
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="bg-[#e5e5e5] py-8" id="about">
      <div className="flex items-center justify-center mb-6">
        <hr className="border-t border-blue-900 mx-1 w-20" />
        <span className="text-primary text-blue-800 text-1xl md:text-3xl font-semibold">
          About Us
        </span>
        <hr className="border-t border-blue-900 mx-1 flex-grow" />
      </div>

      <div className="m-auto max-w-6xl p-4 md:p-12 h-5/6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* First Image (slightly larger) */}
          <div className="flex flex-col items-center bg-white p-2 rounded-md">
            <img
              src={img1}
              alt="CEO Image 1"
              className="rounded-xl border h-[380px] w-[380px] object-cover shadow-xl"
            />
            <span className="text-gray-900 font-bold text-xl mt-2">
              SANGALO EDWIN ETARUKOT
            </span>
            <span className="font-extrabold opacity-50 text-lg">
              Founder/CEO
            </span>
          </div>

          {/* Second Image */}
          <div className="flex flex-col items-center bg-white p-2 rounded-md">
            <img
              src={img2}
              alt="CEO Image 2"
              className="rounded-xl border h-[360px] w-[360px] object-cover shadow-xl"
            />
            <span className="text-gray-900 font-bold text-xl mt-2 uppercase">
              COLLEEN ROTICH
            </span>
            <span className="font-extrabold opacity-50 text-lg">
              Co-Founder/CTO
            </span>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-8 text-center lg:text-left">
          {/* <h3 className="text-xl text-blue-900 font-bold mb-4">
            Dedicated to forging exceptional systems with unmatched quality.
          </h3> */}
          <p className="text-xl text-gray-600 font-semibold text-center">
            Proficiency defines our software development team, poised to assist
            in realizing applications that resonate with your vision. Entrust us
            with the creation of custom software solutions, ensuring seamless
            automation of your business processes and a significant boost in
            efficiency.
          </p>

          {/* <Link
            to="/contact"
            className="text-white text-center bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group"
          >
            Reach Out
            <svg
              className="w-4 h-4 ml-1 group-hover:translate-x-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Intro;
