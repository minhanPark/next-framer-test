"use client";

import { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";

const Accordion = ({ color }: any) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.div
      layout
      style={{ height: isOpen ? "100px" : "500px", background: color }}
      onClick={() => setIsOpen(!isOpen)}
    />
  );
};

const Page = () => {
  //   return (
  //     <LayoutGroup>
  //       <Accordion color="red" />
  //       <Accordion color="blue" />
  //     </LayoutGroup>
  //   );

  // 형제가 레이아웃을 하고 있을 때 다른 형제 컴포넌트는 알지 못한다.
  // 그래서 아래처럼 실행하면 밑에 파란 아코디언이 끊기는 것처럼 이동한다.
  // 레이아웃 그룹을 설정하면 그룹 안에서 레이아웃이 일어나고 있다는 것을 알게되서
  // 부드럽게 작동한다.
  return (
    <>
      <Accordion color="red" />
      <Accordion color="blue" />
    </>
  );
};

export default Page;
