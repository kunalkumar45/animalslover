"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = (): void => {
    setisClick(!isClick);
  };
  return (
    <>
      <nav className="bg-black">
        <div className="h-full mx-auto px-4 sm:px-8">
          <div className="flex flex-wrap items-center justify-between h-16">
            <div className="flex items-center text-white text-xl sm:text-2xl lg:text-3xl cursor-pointer">
              <Link href={"/"}>
                <Image
                  className="h-10  sm:h-16 w-16"
                  src={"/img/logo.png"}
                  alt=""
                  width={100}
                  height={100}
                ></Image>
              </Link>
              Animalslover
            </div>
            <div className="hidden lg:block">
              <div className="ml-4 flex items-center space-x-4">
              <div className=" w-80 md:w-auto flex flex-shrink-0 items-center justify-center rounded-lg h-6">
              <select
                name=""
                id=""
                className=" h-6 md:h-8 bg-blue-600 text-white rounded-tl-lg rounded-bl-lg"
              >
                <option value="all">All</option>
                <option value="all">All</option>
              </select>
              <input
                type="text"
                name=""
                id=""
                className=" w-52 h-6 md:h-8 px-4 border-none block"
                placeholder="Search"
               />
              <div className="bg-blue-600 text-white cursor-pointer rounded-tr-lg rounded-br-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="33"
                  viewBox="0 0 50 50"
                >
                  <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                </svg>
              </div>
            </div>
                <ul className="flex space-x-5">
                  <li className="m-4 text-sm">
                    <Link
                      href={"/"}
                      className="text-white hover:bg-white hover:text-black rounded-lg p-2 uppercase font-bold"
                    >
                      home
                    </Link>
                  </li>
                  <li className="m-4 text-sm">
                    {" "}
                    <Link
                      href={"/"}
                      className="text-white hover:bg-white hover:text-black rounded-lg p-2 uppercase font-bold"
                    >
                      my account
                    </Link>
                  </li>
                  <li className="m-4 text-sm">
                    <Link
                      href={"/"}
                      className="text-white hover:bg-white hover:text-black rounded-lg p-2 uppercase font-bold"
                    >
                      shop
                    </Link>
                  </li>
                  <li className="m-4 text-sm">
                    <Link
                      href={"/"}
                      className="text-white hover:bg-white hover:text-black rounded-lg p-2 uppercase font-bold"
                    >
                      about
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center rounded-md  text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {isClick && (
            <div className="lg:hidden">
              <div className="m-4 flex flex-shrink-0 rounded-lg h-6 w-4">
              <select
                name=""
                id=""
                className="bg-blue-600 text-white rounded-tl-lg rounded-bl-lg"
              >
                <option value="all">All</option>
                <option value="all">All</option>
              </select>
              <input
              className=" px-2 sm:px-3 block w-36 sm:w-44"
                type="text"
                name=""
                id=""
                placeholder="Search"
              />
              <div className="bg-blue-600 text-white cursor-pointer rounded-tr-lg rounded-br-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="25"
                  viewBox="0 0 50 50"
                >
                  <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                </svg>
              </div>
            </div>
              <ul>
                <li className="m-4 text-sm">
                  <Link
                    href={"/"}
                    className="text-white hover:bg-white hover:text-black rounded-lg p-2 uppercase font-bold"
                  >
                    home
                  </Link>
                </li>
                <li className="m-4 text-sm">
                  {" "}
                  <Link
                    href={"/"}
                    className="text-white hover:bg-white hover:text-black rounded-lg p-2 uppercase font-bold"
                  >
                    my account
                  </Link>
                </li>
                <li className="m-4 text-sm">
                  <Link
                    href={"/"}
                    className="text-white hover:bg-white hover:text-black rounded-lg p-2 uppercase font-bold"
                  >
                    shop
                  </Link>
                </li>
                <li className="m-4 pb-6">
                  <Link
                    href={"/"}
                    className="text-white hover:bg-white hover:text-black rounded-lg p-2 uppercase font-bold"
                  >
                    about
                  </Link>
                </li>
              </ul>

            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
