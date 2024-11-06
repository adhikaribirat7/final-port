import React from "react";
import Service from "./Service";
import Data from "../../Data.json";
import { useId } from "react";
function Services() {
  return (
    <>
      <section id="service" className=" mt-10 p-3 text-white h-full grid grid-rows-1 gap-4 items-center justify-items-center">
        <div
          className="pl-7 justify-center items-center sm:w-4/5"
          id="aboutme"
        >
          <p className="text-4xl  text-costume-color">Services:</p>
          <p className="text-white font-semibold text-2xl">
            I have worked on many projects over the course of being a Web
            Developer, here are a few of my live, real-world projects
          </p>
        </div>

        <div
          className="grid sm:grid-cols-3 sm:w1/2 gap-4 justify-center items-center"
        >
          {Data.service.map((service) => (
            <Service
              key={useId()}
              skill={service.skill}
              experience={service.experience}
              desc={service.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
