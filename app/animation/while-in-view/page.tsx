"use client";

import { motion } from "framer-motion";

const food = [
  ["🍅", "tomato"],
  ["🍊", "orange"],
  ["🍋", "lemon"],
  ["🍐", "?SD?"],
  ["🍏", "apple"],
];

const View = ({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) => {
  const back = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: back[index],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

const Card = ({ character }: { character: string }) => {
  return (
    <motion.div
      style={{
        width: "300px",
        height: "430px",
        borderRadius: "20px",
        backgroundColor: "white",
        boxShadow:
          "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
      initial={{ y: 200, opacity: 0 }}
      whileInView={{
        y: 50,
        transition: { duration: 1 },
        opacity: 1,
      }}
      viewport={{ once: true, amount: 0.6 }}
    >
      <span style={{ fontSize: 150 }}>{character}</span>
    </motion.div>
  );
};

const Page = () => {
  return food.map((item, index) => (
    <View index={index} key={item[1]}>
      <Card character={item[0]} />
    </View>
  ));
};

export default Page;
