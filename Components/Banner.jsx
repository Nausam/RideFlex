import React from "react";

const Banner = () => {
  return (
    <section className="flex w-full items-center justify-center bg-neutral-800 p-10 mt-28">
      <div className="flex w-full items-center justify-center text-center">
        <h1 className="text-white text-4xl font-bold">
          Save big with our cheap bike rental! <br />{" "}
          <span className="text-xl font-normal">
            Top Airports. Local Suppliers.{" "}
            <span className="text-red-500">24/7</span> Support.
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Banner;
