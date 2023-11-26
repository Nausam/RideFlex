import Image from "next/image";

const HowTo = () => {
  return (
    <section className="w-full mt-28">
      <div className="flex flex-col w-full text-center">
        <h1 className="md:text-4xl text-3xl font-bold dark:text-gray-300 text-gray-800 tracking-wide">
          Embark on Your Adventure
        </h1>

        <p className="mt-5 text-gray-500 tracking-wide max-w-full">
          Seamless Motorbike Rentals for Your Ultimate Journey!
        </p>
      </div>
      <div className="flex flex-col max-w-6xl mx-auto">
        <div className="flex flex-col mx-auto items-center justify-center text-center">
          <div className="flex mt-10 lg:justify-between w-full gap-5 flex-wrap items-center justify-center ">
            <div className="max-w-xs mt-5 ">
              <Image
                alt="Hero image"
                src="/assets/images/browse.png"
                width={100}
                height={100}
                className="mx-auto"
              />

              <h2 className="text-2xl font-semibold mt-3 dark:text-gray-300 text-gray-800">
                Browse and Select
              </h2>
              <p className="mt-5 text-center text-gray-500">
                Explore our diverse fleet of motorbikes. Choose your preferred
                model and click "View Details".
              </p>
            </div>

            <div className="max-w-xs mt-5">
              <Image
                alt="Hero image"
                src="/assets/images/available.png"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h2 className="text-2xl font-semibold mt-3 dark:text-gray-300 text-gray-800">
                Check Availability
              </h2>
              <p className="mt-5 text-center text-gray-500">
                Select your rental dates on the booking calendar. Instantly see
                availability and pricing details.
              </p>
            </div>

            <div className="max-w-xs mt-5">
              <Image
                alt="Hero image"
                src="/assets/images/book.png"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h2 className="text-2xl font-semibold mt-3 dark:text-gray-300 text-gray-800">
                Book with Ease
              </h2>
              <p className="mt-5 text-center text-gray-500">
                Fill out a quick booking form with your details. Click "Submit
                Booking" and get ready for an unforgettable ride!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowTo;
