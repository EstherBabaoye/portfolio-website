import { Link } from "react-router-dom";
import HeroImage from "../assets/IMG_8306.JPG"; // Adjust path if different

export const Hero = () => {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-[#e0f2fe]">
      {/* Image Side */}
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src={HeroImage}
          alt="Hero of Babaoye Esther"
        />
      </div>

      {/* Text Side */}
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-[#1f2937] uppercase rounded-full bg-[#facc15]">
            Welcome
          </p>
          <h2 className="mb-5 font-sans text-4xl font-bold tracking-tight text-[#1f2937] sm:text-5xl sm:leading-none">
            Hi, I'm Babaoye Esther
            <br className="hidden md:block" />
            <span className="inline-block text-[#3b82f6]">
              Frontend Developer & Designer
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            I bring ideas to life with code, crafting intuitive, responsive, and
            aesthetic web experiences using React and Tailwind CSS.
          </p>
          <div className="flex items-center">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#3b82f6] hover:bg-blue-700 focus:shadow-outline focus:outline-none"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center font-semibold text-[#1f2937] transition-colors duration-200 hover:text-[#facc15]"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
