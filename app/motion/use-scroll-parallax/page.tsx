"use client";

import "./style.css";
import { motion, useScroll, useSpring } from "framer-motion";
import src1 from "./images/1.jpg";
import src2 from "./images/2.jpg";
import src3 from "./images/3.jpg";
import src4 from "./images/4.jpg";
import src5 from "./images/5.jpg";

const Image = ({ id, idx }: { id: any; idx: number }) => {
  console.log(src1);
  return (
    <section>
      <div className="">
        <img src={id} alt="London skyscraper" />
      </div>
      <motion.h2>{`#00${idx + 1}`}</motion.h2>
    </section>
  );
};

const Page = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      {[src1, src2, src3, src4, src5].map((image, index) => (
        <Image id={image.src} key={image.src} idx={index} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
};

export default Page;
