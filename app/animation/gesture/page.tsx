"use client";

import { motion } from "framer-motion";

const Page = () => {
  /** variants로 전달하면 hover나 tap 등으로 이름을 전달할 수도 있다. */
  const buttonVariants = {
    hover: {
      scale: 1.2,
      transition: { duration: 0.5 },
    },
    tap: {
      scale: 0.8,
      background: "blue",
    },
  };
  return (
    <>
      <motion.div
        style={{
          width: "100px",
          height: "100px",
          background: "red",
          borderRadius: "50%",
        }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.8, background: "blue" }}
      />
      <hr />
      <motion.div
        style={{
          width: "100px",
          height: "100px",
          background: "red",
          borderRadius: "50%",
        }}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      />
      <hr />
      {/* 부모의 이벤트는 아래로 내려간다.(캡처)
      근데 여기서 자식에게서 막으려고 하면 onPointerDownCapture={(e) => e.stopPropagation()} 등을 사용하면 된다
      버튼 텍스트를 눌러보면 이벤트가 작동되지 않는 것을 확인할 수 있다. */}
      <motion.div
        whileTap={{ scale: 2 }}
        style={{
          width: "100px",
          height: "100px",
          border: "1px solid red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onPointerDownCapture={(e) => e.stopPropagation()}>
          아베베베
        </button>
      </motion.div>
      <hr />
      <motion.div
        style={{
          width: "100px",
          height: "100px",
          border: "1px solid red",
          background: "blue",
        }}
        whileHover={{ scale: 1.2 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
      />
      <hr />
      <motion.input
        style={{
          width: "100px",
          height: "50px",
          border: "1px solid green",
        }}
        whileFocus={{ scale: 1.2 }}
      />
      <hr />
      {/* 이동이 일어났을 때 발생하는 이벤트, 드래그가 아니고 엘리먼트 안에서 끌기라던가 했을 때 */}
      <motion.div
        style={{
          width: "100px",
          height: "50px",
          border: "1px solid orange",
        }}
        onPan={(e, info) => console.log(e, info)}
      />
      <hr />
      <motion.div
        style={{
          width: "100px",
          height: "50px",
          background: "red",
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 500 }}
        whileDrag={{ scale: 1.2 }}
      />
    </>
  );
};

export default Page;
