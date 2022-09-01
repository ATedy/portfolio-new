import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-auto">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className=" sm:text-left text-3xl font-bold">
            <p>
              A passionate full stack developer with more interest on backend
              development.{" "}
            </p>
          </div>
          <div>
            <p>
              I have more than 2 years of experience in working and developing
              programs that accelerate efficiency and effectiveness of
              organizations. I have been working in an agile team which gave me
              the experience of collaboration work, team work, meeting
              deadlines. Core technical skills including JavaScript, React,
              Node, Java and SQL/NoSQL databases, learn new technologies as well
              like AWS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
