import Image from "next/image";
const About = () => {
  return (
    <div className="bg-gray-300 p-6 sm:p-10">
      <div className="bg-white text-gray-700 rounded-2xl w-full">
        <h2 className="text-center uppercase py-3 font-bold md:text-2xl">
          siberian pinscher breed appearance
        </h2>
        <p className="uppercase p-4 md:text-xl">
          the siberian pincher will inherit traits from both of his parent
          breeds; as with all mixed breeds, you can anticipate that he may
          inherit more physical characteristic from one or the other parent
          breeds, or a relative equal combination of traits from each breed on
          the size of his parent breeds. the siberian pinsher will be medium to
          large dog. both breeds have almond shaped eyes and erect triangular
          shaped ears, making it likely that hybrid will as well. the siberian
          husky will have a medium length muzzle and tail that hanges down or
          trails unless the dog is at attention when it will be carrier over his
          back the doberman pinscher is born with a long tail that is often
          altered when the dog is between seven to twelve weeks of age to meet
          the breed standard. both breeds can be seen with a variety of coat
          colors.
        </p>
        <div className="p-8 overflow-hidden">
          <h2 className="text-center uppercase py-3 md:text-2xl">
            eye color possibilities
          </h2>
          <div className=" w-auto sm:w=[40rem] lg:w-[65rem] grid grid-cols-1 sm:grid-cols-3  mx-auto">
            <div className="flex flex-col items-center">
              <Image
                className="w-40 h-32"
                src={"/img/blue-eye.png"}
                alt=""
                width={100}
                height={100}
              ></Image>

              <h2 className="uppercase font-bold text-xl py-2">blue</h2>
            </div>
            <div className=" flex flex-col items-center">
              <Image
                className="w-40 h-32"
                src={"/img/hazel-eye.png"}
                alt=""
                width={100}
                height={100}
              ></Image>

              <h2 className="uppercase font-bold text-xl py-2">hazel</h2>
            </div>
            <div className="flex flex-col items-center">
              <Image
                className="w-40 h-32"
                src={"/img/brown-eye.png"}
                alt=""
                width={100}
                height={100}
              ></Image>

              <h2 className="uppercase font-bold text-xl py-2">brown</h2>
            </div>
          </div>
        </div>
        <div className="p-8 overflow-hidden">
          <h2 className="text-center uppercase py-3 md:text-2xl">
            nose color possibilities
          </h2>
          <div className=" w-auto sm:w=[40rem] lg:w-[65rem] grid grid-cols-1 sm:grid-cols-3  mx-auto">
            <div className="flex flex-col items-center">
              <Image
                className="w-40 h-32"
                src={"/img/nose.png"}
                alt=""
                width={100}
                height={100}
              ></Image>
            </div>
            <div className=" flex flex-col items-center">
              <Image
                className="w-40 h-32"
                src={"/img/nose.png"}
                alt=""
                width={100}
                height={100}
              ></Image>
            </div>
            <div className="flex flex-col items-center">
              <Image
                className="w-40 h-32"
                src={"/img/nose.png"}
                alt=""
                width={100}
                height={100}
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-9">
      <button className="text-white bg-green-600 px-16 py-3 font-bold rounded-lg">Read More</button>
      </div>
    </div>
  );
};

export default About;
