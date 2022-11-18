import Head from "next/head";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Image from "next/image";
import photography from "../public/imgs/photography.jpg";
import digital from "../public/imgs/digital.jpg";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [menu, setMenu] = useState(false);

  function handleMenu() {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  }
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Oliviero Petrucci</title>
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        className="h-screen w-screen flex flex-col md:hidden lg:hidden"
      >
        {menu && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            exit={{ opacity: 1 }}
            className="h-screen w-screen bg-stone-200 absolute z-20 flex flex-col items-start justify-center"
          >
            <ul className="max-w-[26vw] pl-10 font-cabinet_bold text-5xl text-slate-700 scale-y-110 left-20 flex justify-center flex-col flex-grow-0 flex-shrink-0 basis-[26vw]">
              <li className=" mb-[3vh] transform translate-x-0 translate-y-0">
                <Link
                  className=" relative inline-block hover:opacity-80 hover:ml-[0.2vw] transition-all duration-500 ease-out"
                  href="/Profilo"
                >
                  Profilo
                  <span className="text-orange-500 text-sm absolute top-2 opacity-50 -right-6">
                    #1
                  </span>
                </Link>
              </li>
              <li className=" mb-[3vh] transform translate-x-0 translate-y-0">
                <Link
                  className=" relative inline-block hover:opacity-80 hover:ml-[0.2vw] transition-all duration-500 ease-out"
                  href="/Collaborazioni"
                >
                  Collaborazioni
                  <span className="text-orange-500 text-sm absolute top-2 opacity-50 -right-6">
                    #2
                  </span>
                </Link>
              </li>
              <li className=" mb-[1.8vw] transform translate-x-0 translate-y-0">
                <Link
                  className=" relative inline-block hover:opacity-80 hover:ml-[0.2vw] transition-all duration-500 ease-out"
                  href="/Contatti"
                >
                  Contatti
                  <span className="text-orange-500 text-sm absolute top-2 opacity-50 -right-6">
                    #3
                  </span>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}

        <nav className="w-screen absolute top-14 mx-auto z-20 ">
          <div className=" flex items-center justify-between relative">
            {menu && (
              <motion.div
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                onClick={handleMenu}
                className=" bg-slate-600 cursor-pointer absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full h-14 w-14 transition-all duration-400 ease-out"
              >
                <HiOutlineMenuAlt4 className="text-xl text-stone-200" />
              </motion.div>
            )}
            {!menu && (
              <motion.div
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                onClick={handleMenu}
                className=" bg-stone-100 cursor-pointer absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full h-14 w-14 transition-all duration-400 ease-out"
              >
                <HiOutlineMenuAlt4 className="text-xl" />
              </motion.div>
            )}
          </div>
        </nav>

        <div className="h-[50vh] w-full">
          <Image
            className="h-full max-w-full object-cover absolute -top-[50vh]"
            src={photography}
            alt={"photography"}
          ></Image>
        </div>
        <div className="w-screen h-[50vh] absolute flex justify-center top-0 items-center">
          <p className="text-stone-50 text-4xl scale-y-125 tracking-wider font-retrofunk z-10">
            Photography
          </p>
        </div>

        <div className="h-[50vh] w-full">
          <Image
            className="h-[50vh] max-w-full object-fill absolute -bottom-0"
            src={digital}
            alt={"digital"}
          ></Image>
        </div>
        <div className="w-screen h-[50vh] absolute bottom-0 flex justify-center items-center">
          <p className="text-stone-50 text-5xl scale-y-125 tracking-wider font-power_light z-10">
            Digital creations
          </p>
        </div>
      </motion.div>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        className=" hidden md:inline lg:inline"
      >
        <div className=" min-h-screen">
          <nav className="w-full py-10 my-4 mx-auto z-40 fixed">
            <div className=" flex items-center justify-between relative">
              {menu && (
                <motion.div
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  onClick={handleMenu}
                  className=" bg-slate-600 cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full h-16 w-16 hover:h-20 hover:w-20 transition-all duration-400 ease-out"
                >
                  <HiOutlineMenuAlt4 className="text-xl text-stone-200" />
                </motion.div>
              )}
              {!menu && (
                <motion.div
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  onClick={handleMenu}
                  className=" bg-stone-100 cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full h-16 w-16 hover:h-20 hover:w-20 transition-all duration-400 ease-out"
                >
                  <HiOutlineMenuAlt4 className="text-xl" />
                </motion.div>
              )}
            </div>
          </nav>

          <div className="min-h-screen flex ">
            {!menu && (
              <div className="w-[50vw] hover:w-[60vw] relative z-20 overflow-hidden flex items-center justify-center flex-grow-0 flex-shrink hover:flex-shrink-0 basis-[50vw] hover:basis-[60vw] transition-all duration-1000 ease-out">
                {!menu && (
                  <Link
                    href="/Photography"
                    className="block absolute top-0 left-0 w-full h-full z-20"
                  ></Link>
                )}

                <div className="h-[150vh] w-[75vw] hover:w-[100vw] object-cover object-center right-1/2 translate-x-1/2 absolute top-0">
                  <Image
                    className="h-full w-[100vw] object-cover object-center absolute top-1/2 right-1/2 "
                    src={photography}
                    alt={"photography"}
                    layout="fill"
                  ></Image>
                </div>
                <h1 className=" text-5xl scale-y-125 tracking-wider font-retrofunk">
                  {!menu && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      exit={{ opacity: 1 }}
                      className="relative inline-block text-stone-200 transition-all duration-500 ease-out"
                    >
                      Photography
                    </motion.div>
                  )}
                </h1>
              </div>
            )}
            {menu && (
              <div className="w-[50vw] relative z-20 overflow-hidden flex items-center justify-center flex-grow-0 flex-shrink  basis-[50vw]  transition-all duration-1000 ease-out">
                {!menu && (
                  <Link
                    href="/Photography"
                    className="block absolute top-0 left-0 w-full h-full z-20"
                  ></Link>
                )}

                <div className="h-[150vh] w-[75vw] object-cover object-center right-1/2 translate-x-1/2 absolute top-0">
                  <Image
                    className="h-full w-[100vw] object-cover object-center absolute top-1/2 right-1/2 "
                    src={photography}
                    alt={"photography"}
                    layout="fill"
                  ></Image>
                </div>
                <h1 className=" text-5xl scale-y-125 tracking-wider font-retrofunk">
                  {!menu && (
                    <motion.div
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 0 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      exit={{ opacity: 1 }}
                      className="relative inline-block text-stone-100"
                    >
                      Photography
                    </motion.div>
                  )}
                </h1>
              </div>
            )}

            {menu && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 1500 }}
                transition={{ duration: 0.8 }}
                className=" h-screen relative flex flex-col flex-grow flex-shrink basis-auto bg-stone-200"
              >
                <div className=" overflow-hidden h-full flex flex-grow flex-shrink basis-auto items-center justify-center">
                  <ul className="max-w-[26vw] font-cabinet_bold text-5xl text-slate-700 scale-y-110 flex justify-center flex-col flex-grow-0 flex-shrink-0 basis-[26vw]">
                    <li className=" mb-[1.8vw] transform translate-x-0 translate-y-0">
                      <Link
                        className=" relative inline-block hover:opacity-80 hover:ml-[0.2vw] transition-all duration-500 ease-out"
                        href="/Profilo"
                      >
                        Profilo
                        <span className="text-orange-500 text-sm absolute top-2 opacity-50 -right-6">
                          #1
                        </span>
                      </Link>
                    </li>
                    <li className=" mb-[1.8vw] transform translate-x-0 translate-y-0">
                      <Link
                        className=" relative inline-block hover:opacity-80 hover:ml-[0.2vw] transition-all duration-500 ease-out"
                        href="/Collaborazioni"
                      >
                        Collaborazioni
                        <span className="text-orange-500 text-sm absolute top-2 opacity-50 -right-6">
                          #2
                        </span>
                      </Link>
                    </li>
                    <li className=" mb-[1.8vw] transform translate-x-0 translate-y-0">
                      <Link
                        className=" relative inline-block hover:opacity-80 hover:ml-[0.2vw] transition-all duration-500 ease-out"
                        href="/Contatti"
                      >
                        Contatti
                        <span className="text-orange-500 text-sm absolute top-2 opacity-50 -right-6">
                          #3
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
            {!menu && (
              <motion.div
                initial={{ width: 1500 }}
                animate={{ width: 0 }}
                transition={{ duration: 0.8 }}
                className="h-screen relative flex flex-grow flex-shrink basis-auto bg-stone-200 "
              >
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  exit={{ opacity: 1 }}
                  className="h-full flex flex-grow flex-shrink basis-auto items-center justify-center"
                >
                  <ul className="max-w-[26vw] font-cabinet_bold text-5xl text-slate-700 scale-y-110 flex flex-col flex-grow-0 flex-shrink-0 basis-[26vw]">
                    <li className=" mb-[1.8vw] transform translate-x-0 translate-y-0">
                      <a
                        className=" relative inline-block transition-all duration-500 ease-out"
                        href="#"
                      >
                        Profilo
                        <span className="text-orange-500 text-sm absolute top-2 opacity-50 -right-6">
                          #1
                        </span>
                      </a>
                    </li>
                    <li className=" mb-[1.8vw] transform translate-x-0 translate-y-0">
                      <a
                        className=" relative inline-block transition-all duration-500 ease-out"
                        href="#"
                      >
                        Collaborazioni
                        <span className="text-orange-500 text-sm absolute top-2 opacity-50 -right-6">
                          #2
                        </span>
                      </a>
                    </li>
                    <li className=" mb-[1.8vw] transform translate-x-0 translate-y-0">
                      <a
                        className=" relative inline-block transition-all duration-500 ease-out"
                        href="#"
                      >
                        Contatti
                        <span className="text-orange-500 text-sm absolute top-2 opacity-50 -right-6">
                          #3
                        </span>
                      </a>
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            )}
            {!menu && (
              <div className="w-[50vw] hover:w-[60vw] relative z-20 overflow-hidden flex items-center justify-center flex-grow-0 flex-shrink hover:flex-shrink-0 basis-[50vw] hover:basis-[60vw] transition-all duration-1000 ease-out">
                {!menu && (
                  <Link
                    href="/DigitalCreations"
                    className="block absolute top-0 left-0 w-full h-full z-20"
                  ></Link>
                )}

                <div className="h-[100vh] w-[75vw] hover:w-[100vw] object-cover object-center right-1/2 translate-x-1/2 absolute top-0">
                  <Image
                    className="h-full w-[100vw] object-cover object-center absolute top-1/2 right-1/2"
                    src={digital}
                    alt={"digital"}
                    layout="fill"
                  ></Image>
                </div>

                <h1 className=" text-6xl scale-y-125 tracking-wider font-power_light">
                  {!menu && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      exit={{ opacity: 1 }}
                      className="relative inline-block text-stone-100 transition-all duration-500 ease-out"
                    >
                      Digital creations
                    </motion.div>
                  )}
                </h1>
              </div>
            )}
            {menu && (
              <div className="w-[50vw]  relative z-20 overflow-hidden flex items-center justify-center flex-grow-0 flex-shrink basis-[50vw]  transition-all duration-1000 ease-out">
                {!menu && (
                  <Link
                    href="/DigitalCreations"
                    className="block absolute top-0 left-0 w-full h-full z-20"
                  ></Link>
                )}

                <div className="h-[100vh] w-[75vw] object-cover object-center right-1/2 translate-x-1/2 absolute top-0">
                  <Image
                    className="h-full w-[100vw] object-cover object-center absolute top-1/2 right-1/2 "
                    src={digital}
                    alt={"digital"}
                    layout="fill"
                  ></Image>
                </div>

                <h1 className=" text-6xl scale-y-125 tracking-wider font-power_light">
                  {!menu && (
                    <motion.div
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 0 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      exit={{ opacity: 1 }}
                      className="relative inline-block text-stone-100 transition-all duration-500 ease-out"
                    >
                      Digital creations
                    </motion.div>
                  )}
                </h1>
              </div>
            )}
          </div>
        </div>
      </motion.main>
    </div>
  );
}
