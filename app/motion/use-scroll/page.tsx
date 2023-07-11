"use client";

import { motion, useScroll } from "framer-motion";

import LoremIpsum from "./LoremIpsum";
import "./style.css";

const Page = () => {
  // 값을 찍어보니 객체가 나온다.
  // current, lastUpdated, prev 등도 있고 velocity에 관한 것도 있음.
  // 하지만 스크롤을 움직여도 다시 렌더링이 되지 않는 것을 보면 일반적으로 state로 만들어진건 아니다.
  // 추측컨데 progrss 값은 0 - 1 사이의 값이 나오는 것 같다.
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress);
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <h1>useCrollDeme</h1>
      <LoremIpsum />
    </>
  );
};

export default Page;
