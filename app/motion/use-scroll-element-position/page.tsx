"use client";

import "./style.css";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const Item = () => {
  const ref = useRef(null);
  // target을 주면 타겟의 ref와 현재화면의 viewport를 비교한다
  // offset을 봤을 때 첫 배열에 [end end]라면 target의 end와 현재화면의 끝 부분이 만나면 0이 된다
  // 뒤에 end start는 target의 end와 현재화면의 윗부분이 만나면 1이 된다.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });
  return (
    <section>
      <div ref={ref}>
        <figure className="progress">
          <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="indicator"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>
      </div>
    </section>
  );
};

const Page = () => {
  return (
    <>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </>
  );
};

export default Page;
