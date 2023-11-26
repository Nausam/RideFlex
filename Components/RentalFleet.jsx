"use client";

import Image from "next/image";
import { useState } from "react";
import { bikeData } from "@/constants/bikeData";

const RentalFleet = () => {
  const [selectedBike, setSelectedBike] = useState("bike_1");

  const handleBikeClick = (bike) => {
    setSelectedBike(bike);
  };

  const currentBike = bikeData[selectedBike];

  return (
    <section id="fleet" className="w-full mt-28">
      <div>
        <div className="flex flex-col justify-center items-center p-5 text-center">
          <h1 className="md:text-4xl text-3xl md:max-w-full max-w-md font-bold dark:text-gray-300 text-gray-800 tracking-wide">
            Our Rental Fleet
          </h1>

          <p className="mt-5 text-gray-500 tracking-wide max-w-full">
            Choose from a wide range of motorbikes to suit your needs.
          </p>
        </div>

        <div className="flex items-center justify-center mx-auto lg:flex-row flex-col">
          <div className="flex lg:flex-col items-center gap-5 flex-wrap justify-center mt-10">
            <button
              onClick={() => handleBikeClick("bike_1")}
              className={`text-gray-800 border dark:border-none dark:text-gray-200 dark:shadow-none dark:bg-slate-800 shadow-lg shadow-slate-200 hover:bg-green-300 w-[200px] py-3 rounded-sm cursor-pointer focus:bg-green-400 dark:bg-opacity-50 transition-all duration-300 dark:hover:bg-green-700 dark:focus:bg-green-600 ${
                selectedBike === "bike1" && "bg-green-400"
              }`}
            >
              Kawasaki
            </button>

            <button
              onClick={() => handleBikeClick("bike_2")}
              className={`text-gray-800 border dark:border-none dark:text-gray-200 shadow-lg shadow-slate-200 dark:shadow-none dark:bg-slate-800 dark:bg-opacity-50 hover:bg-green-300 w-[200px] py-3 rounded-sm cursor-pointer focus:bg-green-400 transition-all duration-300 dark:hover:bg-green-700 dark:focus:bg-green-600 ${
                selectedBike === "bike1" && "bg-green-400"
              }`}
            >
              Ducati
            </button>

            <button
              onClick={() => handleBikeClick("bike_3")}
              className={`text-gray-800 border dark:border-none dark:text-gray-200 shadow-lg shadow-slate-200 dark:shadow-none dark:bg-slate-800 dark:bg-opacity-50 hover:bg-green-300 w-[200px] py-3 rounded-sm cursor-pointer focus:bg-green-400 transition-all duration-300 dark:hover:bg-green-700 dark:focus:bg-green-600 ${
                selectedBike === "bike1" && "bg-green-400"
              }`}
            >
              Honda
            </button>

            <button
              onClick={() => handleBikeClick("bike_4")}
              className={`text-gray-800 border  dark:border-none dark:text-gray-200 shadow-lg shadow-slate-200 dark:shadow-none dark:bg-slate-800 dark:bg-opacity-50 hover:bg-green-300 w-[200px] py-3 rounded-sm cursor-pointer focus:bg-green-400 transition-all duration-300 dark:hover:bg-green-700 dark:focus:bg-green-600 ${
                selectedBike === "bike1" && "bg-green-400"
              }`}
            >
              Aprilia
            </button>

            <button
              onClick={() => handleBikeClick("bike_5")}
              className={`text-gray-800 border dark:border-none dark:text-gray-200 shadow-lg shadow-slate-200 dark:shadow-none dark:bg-slate-800 dark:bg-opacity-50 hover:bg-green-300 w-[200px] py-3 rounded-sm cursor-pointer focus:bg-green-400 transition-all duration-300 dark:hover:bg-green-700 dark:focus:bg-green-600 ${
                selectedBike === "bike1" && "bg-green-400"
              }`}
            >
              KTM
            </button>

            <button
              onClick={() => handleBikeClick("bike_6")}
              className={`text-gray-800 border dark:border-none dark:text-gray-200 shadow-lg shadow-slate-200 dark:shadow-none dark:bg-slate-800 dark:bg-opacity-50 hover:bg-green-300 w-[200px] py-3 rounded-sm cursor-pointer focus:bg-green-400 transition-all duration-300 dark:hover:bg-green-700 dark:focus:bg-green-600 ${
                selectedBike === "bike1" && "bg-green-400"
              }`}
            >
              Suzuki
            </button>
          </div>

          <div className="flex items-center mt-10 md:w-[600px] md:h-[500px]">
            <Image
              alt="Hero image"
              src={`/assets/images/${selectedBike}.png`}
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>

          <div className="flex lg:max-w-sm max-w-6xl flex-col items-center p-5 text-center">
            <h2 className="text-2xl font-bold dark:text-gray-300 text-gray-800">
              {currentBike.name}
            </h2>
            <p className="text-gray-500 mt-2">{currentBike.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentalFleet;
