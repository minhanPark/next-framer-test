"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const Framer = () => {
  const conRef = useRef(null);
  return (
    <>
      <motion.div
        style={{
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          background: "red",
        }}
        ref={conRef}
      />
      <motion.div
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "blue",
        }}
        drag
        dragConstraints={conRef}
      />
    </>
  );
};

export default Framer;
