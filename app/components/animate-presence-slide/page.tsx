"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Back = ({ isHide }: { isHide: boolean }) => {
  return (
    // AnimatePresence는 직계 자식이 리액트에서 리액트 트리에서 사라질 때를 감지해서 exit 속성을
    // 실행시킨다. 그리고 사라진다. 직계자식은 구분이 되도록 키를 들고 있어야 한다.
    // initial={false}를 줘서 첫번째로 같이 렌더링되는 애들의 initial 애니메이션을 막을 수 있다
    <AnimatePresence initial={false}>
      {!isHide && (
        <motion.div
          key="back"
          style={{
            position: "absolute",
            width: "100%",
            height: "100vh",
            backgroundColor: "#FF008C",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          이 글은 사라집니다.
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Page = () => {
  const [isHide, setIsHide] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsHide(true);
    }, 5000);
  }, []);
  return (
    <>
      <Back isHide={isHide} />
      <h1>이것은 뒤에 있는 글입니다.</h1>
    </>
  );
};

export default Page;
