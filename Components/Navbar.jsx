"use client";

import ThemeButton from "@/Components/ThemeButton";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <nav className="w-full fixed top-0 backdrop-blur-lg z-10">
      <motion.div
        variants={variants}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ amount: 0 }}
        className="flex max-w-6xl mx-auto justify-between m-5 py-2 px-10 items-center"
      >
        <div className="flex items-center gap-3">
          <ThemeButton />
          <div className="flex items-center gap-2">
            <h1 className="font-medium text-2xl dark:text-gray-300 text-gray-800   tracking-wide">
              Ride
              <span>
                <strong className="text-green-600">Flex</strong>
              </span>
            </h1>
          </div>
        </div>
        <div className="lg:flex hidden lg:gap-10 gap-3 text-gray-800 dark:text-gray-300 font-semibold">
          <ul className="flex gap-10">
            <li>
              <Link className="text-md hover:text-green-500" href="#home">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-md tracking-wide hover:text-green-500"
                href="#about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-md tracking-wide hover:text-green-500"
                href="#fleet"
              >
                Fleet
              </Link>
            </li>
            <li>
              <Link
                className="tracking-wide text-md hover:text-green-500"
                href="#testimonials"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                className=" tracking-wide text-md hover:text-green-500"
                href="#footer"
              >
                Help
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 items-center">
          <button className="py-2 px-8 rounded-md font-medium hover:text-green-500 border border-green-200 hover:border-green-500 lg:flex hidden dark:text-gray-300 text-gray-800 tracking-wide transition-all duration-300">
            Sign In
          </button>
          <button className="bg-green-500  border-green-500 border-2 hover:border-green-500 text-white py-2 px-5 rounded-sm text-base font-medium tracking-wide shadow-lg shadow-green-300 hover:shadow:xl hover:shadow-green-400 dark:shadow-md dark:shadow-green-800 dark:hover:shadow-green-800 dark:hover:shadow-lg transition-all duration-300">
            Sign Up
          </button>
          <Image
            alt="hamburger menu"
            className="z-50 cursor-pointer lg:hidden flex"
            width={40}
            height={40}
            src="/assets/icons/hamburger.svg"
            onClick={toggleMenu}
          />
        </div>

        {showMenu ? (
          <motion.div
            variants={variants}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            viewport={{ amount: 0 }}
            className="absolute top-10 right-0 p-10"
          >
            <div className="bg-green-100 dark:bg-gray-800 p-5 rounded-lg flex flex-col items-center shadow-xl">
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    className="text-sm hover:text-green-500 tracking-wide"
                    href="#home"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm hover:text-green-500 tracking-wide"
                    href="#about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm hover:text-green-500 tracking-wide"
                    href="#fleet"
                  >
                    Fleet
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm hover:text-green-500 tracking-wide"
                    href="#testimonials"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm hover:text-green-500 tracking-wide"
                    href="#footer"
                  >
                    Help
                  </Link>
                </li>
              </ul>
              <button className="mt-3 py-2 px-8 rounded-md font-medium hover:text-green-500 border border-green-200 hover:border-green-500  dark:text-gray-300 text-gray-800 tracking-wide transition-all duration-300">
                Sign In
              </button>
            </div>
          </motion.div>
        ) : (
          <></>
        )}
      </motion.div>
    </nav>
  );
};

export default Navbar;
