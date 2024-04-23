import Image from "next/image";
import Link from "next/link";
export default function Footer() {
    return (
      <>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          <div>
          <div className="flex items-center text-white text-xl sm:text-3xl cursor-pointer">
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
            <div className="flex space-x-3 mt-4">
              <div><Link href={"/"}>
                <Image className="h-11 w-32"
                  src={"/img/play-store.png"}
                  alt=""
                  width={100}
                  height={100}
                ></Image>
              </Link></div>
              <div><Link href={"/"}>
                <Image className="h-11 w-32"
                  src={"/img/app-store.png"}
                  alt=""
                  width={100}
                  height={100}
                ></Image>
              </Link></div>
            </div>
          </div>
          <div>
            <h2 className="text-green-600 text-lg font-bold mb-4 uppercase">About</h2>
            <ul>
              <li>
                <Link
                  href={'/'}
                  className="hover:text-gray-400 transition-colors duration-300 uppercase"
                >
                  trust and safety
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="hover:text-gray-400 transition-colors duration-300 uppercase"
                >
                  community
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="hover:text-gray-400 transition-colors duration-300 uppercase"
                >
                  press
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="hover:text-gray-400 transition-colors duration-300 uppercase"
                >
                  blog
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="hover:text-gray-400 transition-colors duration-300 uppercase"
                >
                  careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-green-600 text-lg font-bold mb-4 uppercase">Resources</h2>
            <div className="flex space-x-4">
            <ul>
              <li>
                <Link
                  href={'/'}
                  className="hover:text-gray-400 transition-colors duration-300 uppercase"
                >
                  health
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="hover:text-gray-400 transition-colors duration-300 uppercase"
                >
                  dog training
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="hover:text-gray-400 transition-colors duration-300 uppercase"
                >
                  dog grooming
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="hover:text-gray-400 transition-colors duration-300 uppercase"
                >
                  breeds
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="hover:text-gray-400 transition-colors duration-300 uppercase"
                >
                  dog names
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="hover:text-gray-400 transition-colors duration-300 uppercase"
                >
                  dog senses
                </Link>
              </li>
            </ul>
            </div>
          </div>
          <div>
          <h2 className="text-green-600 text-lg font-bold mb-4 uppercase">lifestyles</h2>
          <ul>
              <li>
                <Link
                  href={'/'}
                  className="hover:text-gray-400 transition-colors duration-300 uppercase"
                >
                  dog beaches
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="hover:text-gray-400 transition-colors duration-300 uppercase"
                >
                  dog campgrounds
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="hover:text-gray-400 transition-colors duration-300 uppercase"
                >
                  dog parks
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="hover:text-gray-400 transition-colors duration-300 uppercase"
                >
                  dog trails
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
        <p className="bg-black text-white text-center text-sm font-bold py-4 uppercase">
        © 2024  All Rights Reserved.
      </p>
      </>
    );
  }