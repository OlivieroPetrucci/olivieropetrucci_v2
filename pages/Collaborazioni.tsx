import Head from "next/head";
import { motion } from "framer-motion";
import { useState } from "react";

import cus_stat from "../public/imgs/cus_statale.png";
import cus_mil from "../public/imgs/cus_milano.png";
import catch_solve from "../public/imgs/catch_solve.png";
import gmo_lab from "../public/imgs/gmo_lab.png";
import dilmos from "../public/imgs/dilmos.svg";
import noi from "../public/imgs/noi.svg";
import Image from "next/image";
import Link from "next/link";

export default function Collaborazioni() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>OP | collab</title>
      </Head>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        className=" bg-stone-200"
      >
        <section className="flex flex-col justify-between h-screen">
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
            className="bg-stone-200 md:h-[84vh] w-full flex flex-col lg:flex-row items-center justify-evenly"
          >
            <div className="flex flex-col items-cenetr justify-center h-[22vh]">
              <h2 className="text-4xl md:text-5xl font-cabinet_black text-stone-800">
                Alcune <br /> delle
                <span className=" text-orange-500"> collaborazioni</span>
              </h2>
              <h3 className=" text-slate-600 text-base font-cabinet_medium ">
                I gruppi con cui ho lavorato.
              </h3>
            </div>
            <div className="grid gap-6 md:gap-10 grid-cols-2 md:grid-cols-3 grid-rows-4 md:grid-rows-3 ">
              <div className="h-[5rem] md:h-[8rem] w-[9rem] md:w-[12rem] flex items-center justify-center hover:pb-5 hover:border-b-4 rounded-xl border-slate-500 transition-all duration-300 ease-out cursor-pointer">
                <Image src={dilmos} alt={""} className=""></Image>
              </div>
              <div className="h-[5rem] md:h-[8rem] w-[11rem] md:w-[12rem] flex items-center justify-center text-3xl font-cabinet_black hover:pb-5 hover:border-b-4 rounded-xl border-slate-500 transition-all duration-300 ease-out cursor-pointer">
                Alpha Digital
              </div>
              <div className="h-[5rem] md:h-[8rem] w-[9rem] md:w-[12rem] flex items-center justify-center hover:pb-5 hover:border-b-4 rounded-xl border-slate-500 transition-all duration-300 ease-out cursor-pointer">
                <Image src={cus_stat} alt={""} className="rounded-xl "></Image>
              </div>

              <div className="h-[5rem] md:h-[8rem] w-[9rem] md:w-[12rem] flex items-center justify-center p-4 hover:pb-9 hover:border-b-4 rounded-xl border-slate-500 transition-all duration-300 ease-out cursor-pointer">
                <Image src={gmo_lab} alt={""} className=""></Image>
              </div>
              <div className="h-[5rem] md:h-[8rem] w-[9rem] md:w-[12rem] flex items-center justify-center hover:pb-5 hover:border-b-4 rounded-xl border-slate-500 transition-all duration-300 ease-out cursor-pointer">
                <Image
                  src={catch_solve}
                  alt={""}
                  className="rounded-xl"
                ></Image>
              </div>
              <div className="h-[5rem] md:h-[8rem] w-[9rem] md:w-[12rem] flex items-center justify-center hover:pb-5 hover:border-b-4 rounded-xl border-slate-500 transition-all duration-300 ease-out cursor-pointer">
                <Image src={noi} alt={""} className=""></Image>
              </div>
              <div className="h-[5rem] md:h-[8rem] w-[9rem] md:w-[12rem] "></div>
              <div className="flex items-center justify-center md:hover:pb-5 md:hover:border-b-4 rounded-xl border-slate-500 transition-all duration-300 ease-out">
                <div className="h-[5rem] w-[12rem] flex items-center justify-center bg-slate-400 rounded-2xl p-2  cursor-pointer">
                  <Image src={cus_mil} alt={""} className=" "></Image>
                </div>
              </div>

              <div className="h-[5rem] md:h-[8rem] w-[9rem] md:w-[12rem] "></div>
            </div>
          </motion.div>
          <footer className="h-[8vh]  flex items-center justify-center text-xs ">
            Created by Oliviero Petrucci
          </footer>
        </section>
      </motion.main>
    </div>
  );
}
