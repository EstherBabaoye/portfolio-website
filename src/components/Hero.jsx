import { Link } from "react-router-dom";
import HeroImage from "../assets/IMG_8306.JPG";

export const Hero = () => {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-[#e0f2fe] dark:bg-[#0b0f1a] transition-colors">
      {/* Image Side */}
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        {/* Light-mode wedge (solid white) */}
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block dark:hidden"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>

        {/* Dark-mode wedge (gradient) */}
        <svg
          className="absolute left-0 hidden h-full transform -translate-x-1/2 lg:hidden dark:lg:block"
          viewBox="0 0 100 100"
          preserveAspectRatio="none slice"
        >
          <defs>
            <linearGradient id="darkWedgeGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0f172a" />   {/* deep indigo */}
              <stop offset="100%" stopColor="#111827" /> {/* slate-900 */}
            </linearGradient>
          </defs>
          <path d="M50 0H100L50 100H0L50 0Z" fill="url(#darkWedgeGrad)" />
        </svg>

        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src={HeroImage}
          alt="Portrait of Esther Babaoye"
        />
      </div>

      {/* Text Side */}
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xl font-semibold tracking-wider text-[#1f2937] dark:text-[#0b0f1a] uppercase rounded-full bg-[#facc15]">
            ESTHER BABAOYE
          </p>

          <h2 className="mb-5 font-sans text-4xl font-bold tracking-tight text-[#1f2937] dark:text-white sm:text-5xl sm:leading-none">
            <span className="inline-block text-[#3b82f6] dark:text-indigo-400">
              Full Stack Web Developer & YouTube Scriptwriter
            </span>
          </h2>

          <p className="pr-5 mb-5 text-base text-gray-700 dark:text-gray-300 md:text-lg">
            I help brands grow through clean, scalable web apps — and help creators go viral with scripts that captivate, retain, and convert.
          </p>

          <div className="flex items-center flex-wrap gap-4">
            <Link
              to="/web-projects"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#3b82f6] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 dark:focus:ring-offset-[#0b0f1a]"
            >
              View Dev Work
            </Link>

            <Link
              to="/scripts"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#051d40] hover:bg-[#0f172a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 dark:focus:ring-offset-[#0b0f1a]"
            >
              See Scripts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
