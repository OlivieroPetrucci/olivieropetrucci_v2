import Head from "next/head";
import { motion } from "framer-motion";
import { useState } from "react";
import autoritratto from "../public/imgs/autoritratto.jpg";
import dev_svg from "../public/imgs/programming.svg";
import pol_svg from "../public/imgs/polaroid.svg";

import Image from "next/image";
import Link from "next/link";

export default function DigitalCreations() {
  return (
    <>
      <Head>
        <title>Oliviero Petrucci</title>
      </Head>
      <div className="w-screen bg-stone-200"></div>
    </>
  );
}
