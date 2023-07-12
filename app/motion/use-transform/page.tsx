"use client";

import { useTransform, motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

const Page = () => {
  /** motion.div에 전달할 x 값 */
  const x = useMotionValue(0);
  /** x값이 변경될 때 rotate로 활용할 각이 나오도록 transformf을 사용했다. */
  /** clamp 값이 true면 출력을 제공된 범위 내로 제한하고, false면 범위를 벗어나도 계속 매핑한다. */
  const rotate = useTransform(x, [0, 100], [0, 360], { clamp: false });
  const constraint = useRef(null);

  const x2 = useMotionValue(0);
  /**
   *함수를 활용해서 더 복잡한 식을 구현할 수 있다.
   * 함수에 value에는 x2의 값이 들어온다.
   */
  const y = useTransform(x2, (value) => Math.sin(value / 10) * 10);

  const x3 = useMotionValue(1);
  const y2 = useSpring(2);
  const z = useTransform([x3, y2], ([latestX, latestY]) => latestX * latestY);
  return (
    <>
      <motion.div ref={constraint} style={{ width: "100vw" }}>
        <motion.div
          drag="x"
          dragConstraints={constraint}
          style={{
            width: "200px",
            height: "200px",
            background: "blue",
            // 실제로 x을 연결시켜주고, rotateZ에 변경되는 값을 연결시켜준다.
            x,
            rotateZ: rotate,
          }}
        />
        <hr />
        <motion.div
          drag="x"
          dragConstraints={constraint}
          style={{
            width: "200px",
            height: "200px",
            background: "orange",
            x: x2,
            y,
          }}
        />
        <hr />
        <motion.div
          drag="x"
          dragConstraints={constraint}
          style={{
            width: "200px",
            height: "200px",
            background: "red",
            x: x3,
            y: y2,
            z,
          }}
        />
      </motion.div>
    </>
  );
};

export default Page;
