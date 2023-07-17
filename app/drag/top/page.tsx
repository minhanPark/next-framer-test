"use client";

import { motion } from "framer-motion";

const Page = () => {
  return (
    <>
      <motion.div
        style={{ width: 500, height: 350, backgroundColor: "black" }}
        drag
        // 마우스를 뗐을 때 관성으로 움직이는 것을 막아줌
        dragMomentum={false}
      >
        <motion.div
          style={{
            width: "100%",
            height: 300,
            backgroundColor: "yellow",
          }}
          // 여기도 드래그 이벤트가 적용되는 것을 막아줌
          onPointerDownCapture={(e) => e.stopPropagation()}
        >
          dfdfdfdf
        </motion.div>
      </motion.div>
    </>
  );
};

export default Page;
