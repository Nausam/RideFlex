import Image from "next/image";

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full">
      <div className="text-center mt-36">
        <h1 className="font-bold md:text-4xl text-2xl md:max-w-full max-w-md mx-auto dark:text-gray-300 tracking-wide">
          Preferred by Thousands of Thrilled Riders
        </h1>
        <h3 className="text-gray-500 mt-5 md:max-w-2xl max-w-sm mx-auto tracking-wide">
          Discover the testimonials of riders who have enthusiastically embraced
          our exceptional features and services, becoming valued members of our
          global community of satisfied motorcycle rental enthusiasts.
        </h3>
      </div>
      <div className="flex flex-col max-w-6xl mx-auto py-2 px-10 items-center p-5">
        <div className="flex w-full items-center justify-center p-10 gap-5 flex-wrap dark:bg-transparent  dark:shadow-none  rounded-lg">
          <div className="flex flex-col justify-center shadow-2xl shadow-slate-300 dark:shadow-slate-900  w-[410px] h-[260px] rounded-md p-5 bg-white dark:bg-transparent">
            <p className="mt-3 md:text-base text-sm dark:text-gray-400 tracking-wide">
              "I've used several similar products in the past, but none of them
              come close to the level of performance and satisfaction I've
              experienced with this one."
            </p>
            <div className="flex items-center gap-4 mt-5">
              <Image
                alt="Profile image"
                className="rounded-full"
                width={50}
                height={50}
                src="/assets/images/profile1.png"
              />
              <div>
                <h2 className="font-medium dark:text-gray-300 tracking-wide">
                  Ms Marvel
                </h2>
                <div className="flex md:space-x-32 space-x-12"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center shadow-2xl shadow-slate-300 dark:shadow-slate-900 w-[410px] h-[260px] rounded-md p-5 bg-white dark:bg-transparent">
            <p className="mt-3 md:text-base text-sm dark:text-gray-400 tracking-wide">
              "This motorcycle rental service has transformed my adventures.
              With its seamless, user-friendly interface and top-notch bikes,
              every ride becomes an exhilarating experience"
            </p>
            <div className="flex items-center gap-4 mt-5">
              <Image
                alt="Profile image"
                className="rounded-full"
                width={50}
                height={50}
                src="/assets/images/profile2.webp"
              />
              <div>
                <h2 className="font-medium dark:text-gray-300 tracking-wide">
                  Shang Chi
                </h2>
                <div className="flex md:space-x-32 space-x-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
