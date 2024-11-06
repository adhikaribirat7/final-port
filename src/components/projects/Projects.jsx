import React from "react";

function Projects() {
  const services = [
    {
      title: "e-commerce Website",
      description:
        "Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.",
        link:'https://check-in-vercel-birat-adhikaris-projects.vercel.app/'
    },
    {
      title: "Personal Portfolio",
      description:
        "Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.",
        link:'https://portfolio-react-birat-adhikaris-projects.vercel.app/'
    },
    {
      title: "Figma Designs",
      description:
        "Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.",
        link:''
    },
  ];

  return (
    <section id='projects' className="mt-20 text-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-costume-color ">
            Here Are some of my projects
          </h2>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {services.map((service, index) => (
            <a href={service.link} key={index} target="_blank" rel="noopener noreferrer" >
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                {/* Icon can go here if needed */}
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {service.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
