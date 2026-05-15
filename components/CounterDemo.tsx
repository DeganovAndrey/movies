"use client";

import { useState } from "react";

export default function CounterDemo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>Текущее значение: {count}</div>
      <button
        className=" p-2 m-1 border rounded-lg p-1 shadow-md hover:shadow-md transition-shadow flex-col justify-between cursor-pointer hover:border-blue-500 hover:bg-slate-10"
        onClick={() => setCount((prev) => prev + 1)}
      >
        +
      </button>
      <button
        className="p-2 m-1 border rounded-lg p-1 shadow-md hover:shadow-md transition-shadow flex-col justify-between cursor-pointer hover:border-blue-500 hover:bg-slate-10"
        onClick={() => setCount((prev) => prev - 1)}
      >
        -
      </button>
      <button
        className="p-2 m-1 border rounded-lg p-1 shadow-md hover:shadow-md transition-shadow flex-col justify-between cursor-pointer hover:border-blue-500 hover:bg-slate-10"
        onClick={() => setCount(0)}
      >
        Сброс
      </button>
    </div>
  );
}
