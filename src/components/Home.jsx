import React from "react";
import {HiArrowNarrowRight} from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p>Hi, my name is</p>
        <h1> Amanuel Tedros</h1>
        <h2>I am a full stack develope.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At inventore
          rem aut magni odio nisi, officia eligendi, neque voluptatibus veniam
          beatae sint. Odit, at dicta. Laborum omnis excepturi inventore
          nostrum.
        </p>
      </div>
    </div>
  );
};

export default Home;
