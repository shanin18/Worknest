/* eslint-disable react/no-unknown-property */
import { FaMagnifyingGlass } from "react-icons/fa6";
import bannerImage from "../../assets/images/banner.png";

const Hero = () => {
  return (
    <section className="body-font">
      <div
        className="max-w-7xl mx-auto flex pt-10 pb-24 md:flex-row flex-col items-center"
        bis_skin_checked="1"
      >
        <div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          bis_skin_checked="1"
        >
          <h1 className="title-font text-2xl sm:text-3xl md:text-5xl mb-2 font-bold">
            Find Your Best
          </h1>
          <h2 className="text-lg sm:text-2xl md:text-4xl font-semibold mb-4">
            Job from <span className="text-indigo-600">WorkNest</span>
          </h2>

          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div
            className="flex w-full md:justify-start justify-center items-end"
            bis_skin_checked="1"
          >
            <div className="relative mr-4 w-full" bis_skin_checked="1">
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                className="w-full rounded border border-gray-300 bg-transparent focus:border-indigo-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="flex items-center gap-2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              <FaMagnifyingGlass className="text-white" />
              <span className="text-lg font-medium">Find</span>
            </button>
          </div>
        </div>
        <div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:p-10 sm:pr-0"
          bis_skin_checked="1"
        >
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={bannerImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
