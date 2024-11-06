import React from "react";

function Service({skill,experience, desc} ) {
  return (
 <>
        <div  className="block sm:h-72 text-white rounded-lg bg-low-priority text-surface shadow-secondary-1 ">
          <div className="p-6">
            <p className=" flex flex-col gap-2">
              <span className="font-semibold text-lg">{skill}</span>
              <span className="font-semibold text-lg">Experience of {experience}</span>
              <span className="font-semibold text-lg">{desc}</span>
            </p>
          </div>
        </div>
 </>

  );
}

export default Service;
