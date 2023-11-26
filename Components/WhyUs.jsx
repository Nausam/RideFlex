import Image from "next/image";
import React from "react";

const WhyUs = () => {
  return (
    <section className="w-full mt-28">
      <div className="flex lg:flex-row flex-col max-w-6xl items-center justify-center gap-20 mx-auto">
        <div className="max-w-lg  lg:text-left text-center p-5">
          <h1 className="text-xl font-medium dark:text-gray-300 text-gray-800 ">
            Why us?
          </h1>
          <h2 className="md:text-4xl text-3xl font-bold dark:text-gray-300 text-gray-800">
            Best valued deals you will ever find
          </h2>
          <p className="mt-5 text-gray-500">
            Choose us for an unparalleled riding experience that blends passion
            with performance. Our commitment to excellence is reflected in our
            diverse fleet of motorcycles, each meticulously crafted for optimal
            speed, comfort, and style. With a legacy of innovation and a
            dedication to pushing boundaries, we offer more than just bikes; we
            provide a gateway to adventure, excitement, and the thrill of the
            open road. Join us in redefining the ride, where every journey
            becomes a memorable and exhilarating exploration.
          </p>
        </div>
        <div className="flex max-w-xl flex-col items-center justify-center gap-5 text-left">
          <div className="flex justify-between items-center gap-5">
            <div>
              <Image
                alt="Hero image"
                src="/assets/images/performance.png"
                width={190}
                height={190}
              />
            </div>
            <div>
              <h2 className="md:text-2xl text-xl font-medium dark:text-gray-300 text-gray-800">
                Unmatched Performance
              </h2>
              <p className="text-gray-500">
                Elevate your ride with motorcycles engineered for unparalleled
                speed and precision.
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center gap-5">
            <div>
              <Image
                alt="Hero image"
                src="/assets/images/diverse.png"
                width={260}
                height={260}
              />
            </div>
            <div>
              <h2 className="md:text-2xl text-xl font-medium dark:text-gray-300 text-gray-800">
                Diverse Fleet, Tailored Experience
              </h2>
              <p className="text-gray-500">
                Choose from our varied lineup designed to cater to different
                riding styles, ensuring a perfect match for every rider.
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center gap-5">
            <div>
              <Image
                alt="Hero image"
                src="/assets/images/innovation.png"
                width={300}
                height={300}
              />
            </div>
            <div>
              <h2 className="md:text-2xl text-xl font-medium dark:text-gray-300 text-gray-800">
                Innovation at the Core
              </h2>
              <p className="text-gray-500">
                Embrace the future of riding with our commitment to cutting-edge
                technology, providing an unmatched adventure on two wheels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
