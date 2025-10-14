import React from "react";
import { education } from "../../constants"; // Education data import

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[8vw] md:px-[7vw] lg:px-[12vw] font-sans bg-gray-950"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative">
        {/* Vertical Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Timeline Items */}
        {education && education.map((edu, index) => (
          <div key={index} className="mb-16 relative flex sm:items-center">
            
            {/* Circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-purple-600 w-14 h-14 rounded-full flex justify-center items-center z-0">
              {edu.img && (
                <img
                  src={edu.img}
                  alt={edu.school || "school"}
                  className="w-10 h-10 object-contain rounded-full"
                />
              )}
            </div>

            {/* Card */}
            <div
              className={`w-full sm:w-[45%] p-6 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0
                  ? "sm:mr-auto sm:text-right"
                  : "sm:ml-auto sm:text-left"
              }`}
            >
              <h3 className="text-xl font-semibold text-white">
                {edu.degree}
              </h3>
              <h4 className="text-md text-gray-300">{edu.school}</h4>
              <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
              <p className="mt-4 text-gray-400 font-bold">
                Grade: {edu.grade}
              </p>
              <p className="mt-2 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
