"use client";

import { motion, useScroll } from "framer-motion";

import LoremIpsum from "./LoremIpsum";

import "./style.css";

const Page = () => {
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress);
  return (
    <>
      <h1>useCrollDeme</h1>
      <LoremIpsum />
    </>
  );
};

export default Page;
