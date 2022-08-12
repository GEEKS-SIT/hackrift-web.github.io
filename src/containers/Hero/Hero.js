import hero from "../../assets/hero.png";
export default function Hero() {
  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-8 md:py-20 items-center pb-12 md:pb-0; px-12 md:px-12 xl:pl-48">
      <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-4 lg:text-left">
        <h1>
          <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-8xl">
            <span className="block text-darkPurple">48 Hours Hackathon</span>
          </span>
        </h1>
        <p className="mt-3 text-base text-orange-400 font-bold sm:mt-5 sm:text-xl lg:text-lg xl:text-4xl">
          14th - 16th October 2021
        </p>
        <p className="mt-3 text-base font-semibold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-2xl">
          HackRift is weekend-long event where students from Singapore Institute
          of Technology can build products that can impact the citizens of
          Singapore. Think outside of the box!
        </p>
      </div>
      <div className="relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-8 lg:flex lg:items-center">
        <div className="relative md:ml-auto w-full lg:max-w-4xl">
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
}
