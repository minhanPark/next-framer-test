"use client";

import "./style.css";
import { useState } from "react";
import { motion } from "framer-motion";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      data-isopen={isOpen}
      initial={{ borderRadius: 50 }}
      className="parent"
      onClick={() => setIsOpen(!isOpen)}
      transition={{ duration: 1 }}
    >
      <motion.div layout className="child" />
    </motion.div>
  );
};

export default Page;
