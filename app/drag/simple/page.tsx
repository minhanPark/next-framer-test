"use client";

import { useState } from "react";
import { Reorder } from "framer-motion";

const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];

const initialItems2 = [
  "😊일베베",
  "🐱이베베",
  "🐱‍🚀삼베베",
  "🎅사베베",
  "🥙오베베",
];

const Page = () => {
  const [items, setItems] = useState(initialItems);
  const [items2, setItems2] = useState(initialItems2);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF008C",
      }}
    >
      <Reorder.Group
        axis="y"
        values={items}
        onReorder={setItems}
        style={{ marginRight: "12px" }}
      >
        {items.map((item) => (
          <Reorder.Item
            key={item}
            value={item}
            style={{ padding: 8, backgroundColor: "white", margin: "8px" }}
            drag
          >
            {item}
          </Reorder.Item>
        ))}
      </Reorder.Group>

      <Reorder.Group
        axis="y"
        values={items2}
        onReorder={setItems2}
        style={{ marginRight: "12px" }}
      >
        {items2.map((item) => (
          <Reorder.Item
            key={item}
            value={item}
            style={{ padding: 8, backgroundColor: "white", margin: "8px" }}
            drag
          >
            {item}
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};

export default Page;
