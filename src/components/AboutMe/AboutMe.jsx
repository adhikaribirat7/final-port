import React, { useId } from "react";

import AboutMeContent from "./AboutMeContent";
import Data from "../../data.json";

function AboutMe() {
  return (
    <section id="aboutme" className="mt-10 text-white p-3 grid sm:grid-rows-2 h-full  items-center justify-items-center">
      <div className="pl-7 justify-center items-center sm:w-4/5" id="aboutme">
        <div
          className=""
        >
          <p className="text-4xl text-white  text-costume-color">About me:</p>
          <p className="text-white font-semibold text-lg">
            Hi, my name is Birat Adhikari, i am a Fullstack web developer, UI
            designer, and Mobile developer. I jhave honed my skills in Web
            Development and advance i have core understanding of advance UI
            design principles. Here are the major skills i have.
          </p>
          <p className="mt-10 text-white flex items-center gap-4">
            <span className="text-costume-color font-semibold text-8xl">
              0+
            </span>
            Years of experience. Specialised in building apps, while ensuring a
            seamless web experience for end users.
          </p>
        </div>
      </div>
      <div
        className="grid sm:grid-cols-3 sm:w1/2  gap-4 justify-center items-center"
      >
        {Data["about-me"].map((about) => (
          <AboutMeContent key={useId()} about={about} />
        ))}
      </div>
    </section>
  );
}

export default AboutMe;
// {
//   "name": "Emily Johnson",
//   "age": 28,
//   "email": "emily.johnson@example.com",
//   "skills": ["Angular", "TypeScript", "Sass"]
// }
