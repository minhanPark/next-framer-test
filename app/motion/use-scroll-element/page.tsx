"use client";

import "./style.css";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const Page = () => {
  const ref = useRef(null);
  // 기준을 컨테이너로 변경할 수 있다. 원래는 윈도우 viewport 기준이다.
  const { scrollXProgress } = useScroll({ container: ref });
  return (
    <>
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <ul style={{ margin: "100px" }} ref={ref}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
};

export default Page;
