import {
  ArrowRightIcon,
  ChartBarIcon,
  CloudArrowUpIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

function Services() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        " Our Services Range From Initial Design To Deployment AnywhereAnytime",
      ],
      typeSpeed: 50,
      loop: true, // Loop the animation
      backSpeed: 30, // Speed of deleting characters
      backDelay: 1500, // Time before starting to delete previous characters
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="w-full  bg-white" id="services">
        <div className="pt-10">
          <h1 className="text-4xl font-bold text-black text-center mb-2">
            Our Services
          </h1>
          <div className="heading-line mb-1"></div>
        </div>
        {/* <!-- START THE CONTENT FOR THE SERVICES  --> */}
        <div className="flex justify-between items-center md:flex-row flex-col py-6 md:gap-0 gap-12 md:px-40 px-12">
          <span
            className="font-bold text-center text-2xl md:w-2/5 h-10"
            ref={el}
          >
            Our Services Range From Initial Design To Deployment Anywhere
            Anytime
          </span>

          <span className="whitespace-normal md:w-2/5">
            Lorem ipsum dolor sit amet consectetur architecto magni, dicta
            maxime laborum temporibus dolorem esse doloremque illo quas nisi
            enim molestias. Tempore ducimus molestiae in dolore enim.
          </span>
        </div>

        {/* <!-- START THE WEB DEVELOPMENT CONTENT services 1 --> */}
        <div className="flex w-full px-8 md:px-24 justify-between items-center py-6 md:flex-row flex-col mt-10">
          <div className="w-full md:w-1/2 px-4 py-4 md:py-0">
            <ChartBarIcon className="w-8 h-8 text-blue-900" />

            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-2 md:mb-4 ">
              Marketing
            </h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
              impedit rem, doloremque autem quibusdam blanditiis harum alias hic
              accusantium maxime atque ratione magni repellat?
            </p>
            <button className="btn mt-4 px-10 py-2 rounded-2xl border border-blue-900 text-black hover:bg-blue-500 hover:text-white transition-all duration-300">
              Learn more{" "}
              <ArrowRightIcon className="h-6 w-6 inline outline outline-transparent bg-blue-800 text-white rounded-2xl " />
            </button>
          </div>

          <div className="w-full md:w-1/2 md:pl-36">
            <img
              src="/images/services/service-1.png"
              alt="Marketing"
              className="w-full h-auto md:w-full"
            />
          </div>
        </div>

        {/* Services -2 */}

        <div className="flex w-full px-8 md:px-24 justify-between items-center py-6 md:flex-row flex-col-reverse md:mt-0 mt-10 ">
          <div className="w-full md:w-1/2 md:pr-36">
            <img
              src="/images/services/service-2.png"
              alt="Web Devlopment"
              className="w-full h-auto md:w-full"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 py-4 md:py-0">
            <CodeBracketIcon className="w-10 h-10 text-blue-900 font-bold" />
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-2 md:mb-4 ">
              Web Development
            </h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
              impedit rem, doloremque autem quibusdam blanditiis harum alias hic
              accusantium maxime atque ratione magni repellat?
            </p>
            <button className="btn mt-4 px-10 py-2 rounded-2xl border border-blue-900 text-black hover:bg-blue-500 hover:text-white transition-all duration-300">
              Learn more{" "}
              <ArrowRightIcon className="h-6 w-6 inline outline outline-transparent bg-blue-800 text-white rounded-2xl " />
            </button>
          </div>
        </div>

        {/* Services 3 */}

        <div className="flex w-full px-8 md:px-24 justify-between items-center py-6 md:flex-row flex-col mt-10 md:mt-0">
          <div className="w-full md:w-1/2 px-4 py-4 md:py-0">
            <CloudArrowUpIcon className="w-12 h-12 text-blue-900" />

            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-2 md:mb-4 ">
              Cloud Hosting
            </h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
              impedit rem, doloremque autem quibusdam blanditiis harum alias hic
              accusantium maxime atque ratione magni repellat?
            </p>
            <button className="btn mt-4 px-10 py-2 rounded-2xl border border-blue-900 text-black hover:bg-blue-500 hover:text-white transition-all duration-300">
              Learn more{" "}
              <ArrowRightIcon className="h-6 w-6 inline outline outline-transparent bg-blue-800 text-white rounded-2xl " />
            </button>
          </div>

          <div className="w-full md:w-1/2 md:pl-36">
            <img
              src="/images/services/service-3.png"
              alt="Cloud Hosting "
              className="w-full h-auto md:w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
