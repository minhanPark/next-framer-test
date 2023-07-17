"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const items = [
  {
    title: "오늘의 날씨",
    subtitle: "날씨가 너무 맑아서 놀랍습니다.",
    id: "0",
  },
  {
    title: "내일의 날씨",
    subtitle: "비가 좀 그만 왔으면 좋겠습니다.",
    id: "1",
  },
  {
    title: "문학적 소견",
    subtitle: "데이터를 기반해서 판단한다는게 너무 신기하네요",
    id: "2",
  },
  { title: "만화 추천", subtitle: "트릴리온 게임 재밌습니다.", id: "3" },
];

const Page = () => {
  // 하얀색인 부분을 selectedId를 통해서 layoutId를 맞춰주면 레이아웃이 공유되는 것을 확인할 수 있다.
  // 근데 background에 이상한 부분이 나타나는데 그 부분은 어떻게 건드려야 하는지 모르겠음.
  const [selectedId, setSelectedId] = useState<string | null>(null);
  return (
    <>
      <div
        style={{
          background: "blue",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            layoutId={item.id}
            onClick={() => setSelectedId(item.id)}
            className={`bg-white p-4 rounded-xl ${
              index % 2 === 1 ? "w-52" : "w-96"
            } ${index !== 0 ? "mt-3" : ""}`}
          >
            <motion.h5>{item.subtitle}</motion.h5>
            <motion.h2>{item.title}</motion.h2>
          </motion.div>
        ))}
      </div>
      <>
        {selectedId && (
          <motion.div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-brightness-50">
            <motion.div className="relative w-full max-w-2xl max-h-full m-auto">
              <motion.div
                layoutId={selectedId}
                className="relative bg-white rounded-lg shadow dark:bg-gray-700"
              >
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {items[Number(selectedId)].title}
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="staticModal"
                    onClick={() => setSelectedId(null)}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-6 space-y-6">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {items[Number(selectedId)].subtitle}
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation
                    (G.D.P.R.) goes into effect on May 25 and is meant to ensure
                    a common set of data rights in the European Union. It
                    requires organizations to notify users as soon as possible
                    of high-risk data breaches that could personally affect
                    them.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </>
    </>
  );
};

export default Page;
