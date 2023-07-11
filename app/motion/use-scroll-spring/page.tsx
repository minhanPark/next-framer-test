"use client";

import { motion, useScroll, useSpring } from "framer-motion";

import LoremIpsum from "../use-scroll/LoremIpsum";
import "../use-scroll/style.css";

const Page = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
    restDelta: 0.001,
  });
  // scaleX를 찍어도 motionValue가 달라지지는 않고
  // spring 애니메이션이 적용된다.
  console.log(scaleX);

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <h1>
        <code>useScroll</code> with spring smoothing
      </h1>
      <LoremIpsum />
    </>
  );
};

export default Page;
