"use client";

import "./style.css";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Section = ({ children }: any) => {
  const ref = useRef(null);
  /** once를 true로 주지 않으면 계속 관찰한다 */
  /** viewport에 완전히 들어오면 true를 반환한다. 좀 더 디테일한 설정도 가능하다 */
  const isInView = useInView(ref, { once: true });

  console.log(children, isInView);

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
};

const Page = () => {
  return (
    <>
      <Section>Animate</Section>
      <Section>When</Section>
      <Section>In</Section>
      <Section>View</Section>
    </>
  );
};

export default Page;
