import Image from "next/image";
import { MotionDiv } from "./MotionDiv";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Hero = () => {
  return (
    <section className="w-full h-screen mt-48">
      <div className="flex max-w-6xl mx-auto m-5 py-2 px-10 items-center p-5">
        <div className="flex lg:flex-row flex-col items-center mx-auto">
          <MotionDiv
            variants={variants}
            initial={{ opacity: 0, scale: 1.4 }}
            animate={{ opacity: 1, scale: 1.4 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
            viewport={{ amount: 0 }}
            className="lg:hidden flex lg:mt-0 mt-10 z-10"
          >
            <Image
              alt="hero image for smaller devices"
              src="/assets/images/kawasaky-versys-650.png"
              width={800}
              height={800}
            />
          </MotionDiv>

          <MotionDiv
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
            viewport={{ amount: 0 }}
            className="lg:text-left text-center mt-10"
          >
            <h1 className="sm:text-5xl text-3xl dark:text-gray-300 text-gray-800 font-bold tracking-wide">
              <span className="text-green-600">Rev Your Adventure!</span>{" "}
              Motorbike Rentals Await!
            </h1>
            <p className="text-gray-500 mt-5 text-base lg:max-w-md max-w-full tracking-wide">
              Ride the Freedom Where Every Journey is an Epic Escape!
            </p>

            <button className="mt-10 bg-green-500  border-green-500 border-2 hover:border-green-500 text-white py-4 px-10 rounded-sm text-base font-medium tracking-wide shadow-lg shadow-green-300 hover:shadow:xl hover:shadow-green-400 dark:shadow-md dark:shadow-green-800 dark:hover:shadow-green-800 dark:hover:shadow-lg transition-all duration-300">
              Book Now
            </button>
          </MotionDiv>

          <MotionDiv
            variants={variants}
            initial={{ opacity: 0, scale: 1.4 }}
            animate={{ opacity: 1, scale: 1.4 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
            viewport={{ amount: 0 }}
            className="lg:flex hidden lg:mt-0 mt-14"
          >
            <Image
              alt="hero image"
              src="/assets/images/kawasaky-versys-650.png"
              width={1000}
              height={800}
            />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default Hero;
