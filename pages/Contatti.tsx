import Head from "next/head";
import { motion } from "framer-motion";
import { useState } from "react";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";

import Link from "next/link";

export default function Contatti() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>OP | contatti</title>
      </Head>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        className=" bg-stone-200"
      >
        <section className="flex flex-col ">
          <nav className="h-[8vh] flex items-center py-8  ">
            <Link
              className="ml-10 md:ml-20 font-cabinet_black hover:text-orange-400 transition-all duration-300 ease-out"
              href={"/"}
            >
              HOME
            </Link>
          </nav>
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, delay: 0.5, ease: "easeOut" }}
            exit={{ opacity: 1 }}
            className="bg-stone-200 h-[84vh] w-full flex flex-col lg:flex-row items-center justify-evenly"
          >
            <div className="flex flex-col items-start w-[25rem]">
              <h2 className="text-5xl font-cabinet_black text-stone-800">
                Ecco <br /> i miei
                <span className=" text-orange-500"> contatti</span>
              </h2>
              <h3 className=" text-slate-600 text-lg font-cabinet_medium ">
                tel, e-mail, cv.
              </h3>
            </div>
            <div className="grid gap-10 grid-cols-1 grid-rows-4">
              <div className="h-[6rem] w-[25rem] flex flex-col items-start justify-center p-2 rounded-xl hover:border-b-4 hover:pb-6 transition-all duration-300 ease-out border-slate-600 cursor-pointer">
                <a
                  href="tel:+393920099497"
                  className=" text-lg font-cabinet_medium"
                >
                  Numero di telefono
                </a>
                <p className="text-2xl font-cabinet_black">+393920099497</p>
              </div>
              <div className="h-[6rem] w-[25rem] flex flex-col items-start justify-center p-2 rounded-xl hover:border-b-4 hover:pb-6 transition-all duration-300 ease-out border-slate-600 cursor-pointer">
                <p className=" text-lg font-cabinet_medium">Indirizzo e-mail</p>
                <a
                  href="mailto:olivieropetrucci.work@gmail.com"
                  className="text-2xl font-cabinet_black"
                >
                  olivieropetrucci.work@gmail.com
                </a>
              </div>
              <div className="h-[6rem] w-[25rem] flex flex-col items-start justify-center p-2 rounded-xl hover:border-b-4 hover:pb-6 transition-all duration-300 ease-out border-slate-600 cursor-pointer">
                <p className=" text-lg font-cabinet_medium">
                  Scarica il mio Curriculum Vitae
                </p>
                <p className="text-2xl font-cabinet_black">CV</p>
              </div>
              <div className="h-[6rem] w-[25rem] flex flex-col items-start justify-center p-2 ">
                <p className=" text-lg font-cabinet_medium">Social Network</p>
                <div className="flex flex-row items-end h-20">
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
            </div>
          </motion.div>
          <footer className="h-[8vh] text-xs flex items-center justify-center">
            Created by Oliviero Petrucci
          </footer>
        </section>
      </motion.main>
    </div>
  );
}
