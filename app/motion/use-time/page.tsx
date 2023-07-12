"use client";

import { motion, useTime, useTransform } from "framer-motion";

const Page = () => {
  /** 애니메이션 프레임이 생성된 이후 지속 시간(ms)으로 모든 애니메이션 프레임을 업데이트하는 모션값 */
  const time = useTime();
  const rotate = useTransform(time, [0, 2000], [0, 360], { clamp: false });
  /** 위처럼 하면 계속 돈다 */
  console.log(time);
  return (
    <>
      <motion.div
        style={{
          x: 0,
          width: "200px",
          height: "200px",
          background: "green",
          rotateZ: rotate,
        }}
      />
    </>
  );
};

export default Page;
