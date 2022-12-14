import Head from "next/head";
import { motion } from "framer-motion";
import { useState } from "react";
import autoritratto from "../public/imgs/autoritratto.jpg";
import dev_svg from "../public/imgs/programming.svg";
import pol_svg from "../public/imgs/polaroid.svg";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";

export default function Profilo() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>OP | profilo</title>
      </Head>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        className=" bg-stone-200"
      >
        <section className="flex flex-col ">
          <nav className="h-[8vh] flex items-center py-8 ">
            <Link
              className=" ml-10 md:ml-20 font-cabinet_black hover:text-orange-400 transition-all duration-300 ease-out"
              href={"/"}
            >
              HOME
            </Link>
          </nav>
          <div className="w-full flex flex-col">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.75, delay: 0.5, ease: "easeOut" }}
              exit={{ opacity: 1 }}
              className=" h-[92vh] w-full flex flex-col lg:flex-row items-center justify-evenly"
            >
              <div className="flex flex-col ">
                <h2 className="text-4xl md:text-5xl font-cabinet_black text-stone-800">
                  Ciao,<br></br>
                  sono{" "}
                  <span className=" text-orange-500">Oliviero Petrucci</span>
                </h2>
                <h3 className=" text-slate-600 text-base md:text-lg font-cabinet_medium ">
                  Sviluppatore e fotografo.
                </h3>
                <div className="flex flex-row items-end h-20 pt-10">
                  <a
                    className="hover:pb-2 transition-all duration-300 ease-out"
                    href="https://www.linkedin.com/in/oliviero-petrucci-5ba48b1b7/"
                    target="_blank"
                  >
                    <FaLinkedin className="h-8 w-8 mr-6 " />
                  </a>
                  <a
                    className="hover:pb-2 transition-all duration-300 ease-out"
                    href="https://github.com/OlivieroPetrucci"
                    target="_blank"
                  >
                    <FaGithub className="h-8 w-8 mr-6 " />
                  </a>
                  <a
                    className="hover:pb-2 transition-all duration-300 ease-out"
                    href="https://www.behance.net/olivierpetrucc1"
                    target="_blank"
                  >
                    <FaBehance className="h-8 w-8 " />
                  </a>
                </div>
              </div>

              <div className=" rounded-full w-80 h-80 relative overflow-hidden">
                <Image
                  src={autoritratto}
                  layout="fill"
                  objectFit="cover"
                  alt={""}
                />
              </div>
            </motion.div>

            <div className="h-[60vh] md:h-[80vh] w-[80vw] mx-auto flex flex-col md:flex-row items-center md:items-start justify-center md:justify-evenly">
              <div className="flex flex-col">
                <p className="text-lg w-[60vw] md:w-[40vw] lg:max-w-[26vw] font-cabinet_medium leading-8 text-stone-700 flex flex-col items-center justify-center md:justify-start text-center">
                  <span className=" border-b-2 border-orange-400 text-slate-800 text-xl font-cabinet_bold mb-4 ">
                    Sviluppatore
                  </span>
                  Sono uno sviluppatore freelancer, attualmente studio
                  Informatica per la Comunicazione Digitale all'Universit??
                  Statale di Milano.
                  <br></br> Vorrei specializzarmi in futuro in front-end
                  developing di applicazioni per il web, pi?? in particolare in
                  UI e UX design.
                  <br></br> Sono inoltre un grande appassionato di tecnologia e
                  innovazione.
                </p>
                <div className="hidden md:flex md:h-[30vh] lg:h-[40vh]"></div>
              </div>
              <div className="flex flex-col">
                <div className="hidden md:flex md:h-[20vh]"></div>
                <div className="hidden md:flex md:h-[60vh]  md:w-[40vw]">
                  <Image src={dev_svg} alt={""}></Image>
                </div>
              </div>
            </div>

            <div className="h-[60vh] md:h-[80vh] w-[80vw] mx-auto flex flex-col md:flex-row items-center md:items-start justify-center md:justify-evenly">
              <div className="flex flex-col">
                <p className="text-lg w-[60vw] md:w-[40vw] lg:max-w-[26vw] font-cabinet_medium leading-8 text-stone-700 flex flex-col items-center justify-center md:justify-start text-center">
                  <span className=" border-b-2 border-orange-400 text-slate-800 text-xl font-cabinet_bold mb-4 ">
                    Fotografo
                  </span>
                  Sono un appassionato di fotografia dal 2018, fotografo di
                  professione dal 2019.<br></br> Ho affrontato in questi primi
                  anni diversi ambienti, dai ritratti alla street photography,
                  dalla product design photography alla fotografia sportiva fino
                  ad arrivare all'architettura.<br></br> Ho sempre mantenuto una
                  mia trama stilistica anche se in continua evoluzione.
                </p>
                <div className="hidden md:flex md:h-[30vh] lg:h-[40vh]"></div>
              </div>
              <div className="flex flex-col">
                <div className="hidden md:flex md:h-[20vh]"></div>
                <div className="hidden md:flex md:h-[60vh] md:w-[40vw]">
                  <Image src={pol_svg} alt={""}></Image>
                </div>
              </div>
            </div>
          </div>
          <footer className=" my-10 text-xs flex items-center justify-center">
            Created by Oliviero Petrucci
          </footer>
        </section>
      </motion.main>
    </div>
  );
}
