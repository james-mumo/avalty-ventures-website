import React from "react";
import img from "../images/edu.jpg";
// import img from "../images/Web-developer.svg";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <>
      <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="about">
        <div
          className="flex flex-col items-center lg:flex-row py-8 justify-between lg:text-left"
          data-aos="fade-up"
        >
          <div className="w-fit items-center flex flex-col lg:mx-4 justify-center border rounded-md p-2 shadow-xl">
            <img
              alt="card img"
              className="float-right rounded-xl border h-[360px] w-[360px]"
              src={img}
            />
            <span className="text-gray-900 font-bold text-xl mt-2">
              SANGALO EDWIN ETARUKOT
            </span>
            <span className="font font-extrabold opacity-50 text-lg">
              Founder/CEO
            </span>
          </div>

          <div
            className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h3 className="text-3xl text-blue-900 font-bold">
              Dedicated to forging exceptional systems with unmatched quality.
            </h3>
            <div>
              <p className="my-3 text-xl text-gray-600 font-semibold">
                Proficiency defines our software development team, poised to
                assist in realizing the applications that resonate with your
                vision.
              </p>
            </div>
            <div>
              <p className="my-3 text-xl text-gray-600 font-semibold">
                Entrust us with the creation of custom software solutions,
                ensuring seamless automation of your business processes and a
                significant boost in efficiency.
              </p>
            </div>

            <Link
              to="/contact"
              className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group"
            >
              Reach Out
              <svg
                className="w-4 h-4 ml-1 group-hover: translate-x-2"
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
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
