'use client'
import Image from "next/image";
import { useState } from "react";
const HeroSection = () => {
  
  const images = [
    '/img/dog.jpg',
    '/img/dog1.jpg',
    '/img/dog2.jpg',
    '/img/dog3.jpg',
  ];
  const [currentImage, setcurrentImage] = useState<any>(images[0]);

  return (
    <div className="bg-gray-300">
      <div className="w-full  p-6 sm:p-10 flex flex-col md:space-x-5 md:flex-row">
        <div className="md:w-[50%] w-full mb-7 md:mb-0">
          <div className="flex flex-col items-center">
            <img
              className=" w-[100%] h-[300px] "
              src={currentImage} alt={`Image ${images[0]}`}
              width={100}
              height={100}
            ></img>
          </div>
          <div className="flex space-x-2 justify-around mt-4">
          <Image
              className=" w-[16%] h-[50px] cursor-pointer"
              src={"/img/dog.jpg"}
              alt=""
              width={100}
              height={100}
              onClick={()=>setcurrentImage(images[0])}
            ></Image>
          <Image
              className=" w-[16%] h-[50px] cursor-pointer"
              src={"/img/dog1.jpg"}
              alt=""
              width={100}
              height={100}
              onClick={()=>setcurrentImage(images[1])}
            ></Image>
          <Image
              className=" w-[16%] h-[50px] cursor-pointer"
              src={"/img/dog2.jpg"}
              alt=""
              width={100}
              height={100}
              onClick={()=>setcurrentImage(images[2])}
            ></Image>
          <Image
              className=" w-[16%] h-[50px] cursor-pointer"
              src={"/img/dog3.jpg"}
              alt=""
              width={100}
              height={100}
              onClick={()=>setcurrentImage(images[3])}
            ></Image>
          </div>
        </div>
        <div className="bg-white w-full md:w-[50%] p-4">
          <h2 className=" uppercase font-bold md:text-lg">american bully</h2>
          <p className="text-xs">
            4.2 <span className=" text-gray-600 text-xs"> 8756 Ratings</span>
          </p>
          <ul className=" list-disc py-5 pl-5">
            <li className="uppercase text-sm mb-2 text-gray-600">
              color - black & white
            </li>
            <li className="uppercase text-sm mb-2 text-gray-600">
              quality of breed-high (breed quality full check by our team)
            </li>
            <li className="uppercase text-sm mb-2 text-gray-600">
              43 days old
            </li>
          </ul>
          <p className=" font-semibold">
            Price: <span className=" ml-2 text-red-600">9522/-</span>
          </p>
          <div className="flex py-5">
            <p className="mr-5">Payment Type</p>
            <button className="mr-2 outline outline-gray-400 p-1 text-sm rounded-sm font-semibold">
              Full Payment
            </button>
            <button className="ml-2 outline outline-red-700 bg-red-200 p-1 text-sm font-semibold rounded-sm">
              Partial Cod
            </button>
          </div>
          <div className="flex mt-9">
            <button className="text-white text-xs bg-blue-600 sm:px-8 py-1 px-5 lg:py-2 mr-4 font-bold rounded-lg">
              Add To Cart
            </button>
            <button className="text-white text-xs bg-green-500 sm:px-18 py-2 px-5 lg:py-2 font-bold rounded-lg">
              Ask For More
            </button>
          </div>
        </div>
      </div>
      <div className=" justify-around p-6 sm:p-10 flex flex-col sm:flex-row">
        <button className="uppercase text-white text-xs sm:text-lg bg-green-500 sm:px-18 py-2 px-5 sm:py-3 font-bold rounded-lg mt-10">
          details
        </button>
        <button className="uppercase text-black text-xs sm:text-lg bg-white sm:px-18 py-2 px-5 sm:py-3 font-bold rounded-lg mt-10">
          reviews
        </button>
        <button className="uppercase text-black text-xs sm:text-lg bg-white sm:px-18 py-2 px-5 sm:py-3 font-bold rounded-lg mt-10">
          shipping
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
