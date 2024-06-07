import React from "react";
import { Link } from "react-router-dom";
import imageone from "./../../pictures/imageone.png";
import Smallone from "./../../pictures/Smallone.png";
import Smalltwo from "./../../pictures/Smalltwo.png";
import Smallt from "./../../pictures/Smallt.png";
import Smallf from "./../../pictures/Smallf.png";

const News = () => {
  return (
    <div className="w-full h-full px-4 md:px-24">
      <div className="hidden md:flex justify-between mt-6 md:mt-12">
        <div className="h-10 rounded-lg bg-violet-100 flex items-center gap-2 px-4">
          <p className="font-normal">⚡ ️Trending Now:</p>
          <p>CBSE Class 12 Physics Question Paper 2024 Set 3</p>
          <Link to="" className="ml-20 font-medium text-violet-900">
            Check Now
          </Link>
        </div>
        <div className="flex">
          <div className="flex flex-wrap gap-2 font-normal">
            <p className="border hover:bg-gray-200 border-gray-400 px-2 py-1 rounded-lg text-center">
              All News
            </p>
            <p className="border border-gray-400 hover:bg-gray-200 px-2 py-1 rounded-lg text-center">
              Admission Alert
            </p>
            <p className="border border-gray-400 hover:bg-gray-200 px-2 py-1 rounded-lg text-center">
              College News
            </p>
            <p className="border border-gray-400 hover:bg-gray-200 px-2 py-1 rounded-lg text-center">
              Exam News
            </p>
            <p className="border border-gray-400 hover:bg-gray-200 px-2 py-1 rounded-lg text-center">
              Latest News
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-12 md:mt-24 justify-between">
        <div className="mb-8 md:mb-0 md:w-2/3 lg:w-[60%]">
          <img className="w-full md:w-[45rem]" src={imageone} alt="Main News" />
          <p className="text-blue-900 font-bold text-xl md:text-2xl mt-4 md:mt-8">
            Chitkara University MBA Admission Open; <br /> Check Direct List...
          </p>
          <p className="text-gray-400 font-light text-xs mt-2">
            20 Sep 2023, 8:00pm
          </p>
          <p className="mt-4 md:mt-6 font-thin">
            New Delhi: The State Common Entrance Test Cell, Government of
            Maharashtra, has issued the admit cards for the MArch, MHMCT,
            BEd, MEd, and MPEd Courses on February 27, 2024. To download the
            document... READ
          </p>
        </div>
        <div className="md:w-1/3 lg:w-[35%]">
          <p className="font-semibold text-xl md:text-2xl italic text-purple-900 mb-4 md:mb-8">
            THE BIG STORIES
          </p>
          <div className="flex flex-col gap-4">
            {[Smallone, Smalltwo, Smallt, Smallf].map((image, index) => (
              <div key={index} className="flex items-center gap-4">
                <img
                  className="w-[6rem] md:w-[9rem]"
                  src={image}
                  alt={`Story ${index + 1}`}
                />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-sm md:text-base">
                    What is the latest program that you are <br /> offering in
                    your institute...
                  </p>
                  <p className="text-gray-700 text-xs md:text-sm">
                    Lucknow Public College of Professional <br /> Studies...
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm">
                    ⏱️ 27 Dec 2020
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border border-yellow-300 mt-16 mb-10 rounded-md bg-yellow-50">
        <h1 className="text-xl text-yellow-400 italic pl-10 mt-4 font-semibold">FEATURED NEWS</h1>
        <div className="flex flex-col md:flex-row justify-evenly py-8">
          <div className="mb-4 md:mb-0">
            <p className="font-semibold text-sm md:text-base">
              What is the latest program that you are <br /> offering in your
              institute...
            </p>
            <p className="text-gray-700 text-xs md:text-sm">
              Lucknow Public College of Professional <br /> Studies...
            </p>
            <p className="text-gray-500 text-xs md:text-sm">⏱️ 27 Dec 2020</p>
          </div>
          <div className="mb-4 md:mb-0">
            <p className="font-semibold text-sm md:text-base">
              What is the latest program that you are <br /> offering in your
              institute...
            </p>
            <p className="text-gray-700 text-xs md:text-sm">
              Lucknow Public College of Professional <br /> Studies...
            </p>
            <p className="text-gray-500 text-xs md:text-sm">⏱️ 27 Dec 2020</p>
          </div>
          <div className="mb-4 md:mb-0">
            <p className="font-semibold text-sm md:text-base">
              What is the latest program that you are <br /> offering in your
              institute...
            </p>
            <p className="text-gray-700 text-xs md:text-sm">
              Lucknow Public College of Professional <br /> Studies...
            </p>
            <p className="text-gray-500 text-xs md:text-sm">⏱️ 27 Dec 2020</p>
          </div>
          <div className="">
            <p className="font-semibold text-sm md:text-base">
              What is the latest program that you are <br /> offering in your
              institute...
            </p>
            <p className="text-gray-700 text-xs md:text-sm">
              Lucknow Public College of Professional <br /> Studies...
            </p>
            <p className="text-gray-500 text-xs md:text-sm">⏱️ 27 Dec 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
