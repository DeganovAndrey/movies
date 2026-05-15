"use client";

import { useState } from "react";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsFavorite((prev) => !prev)}
        className="border rounded-lg p-1 shadow-md hover:shadow-md transition-shadow flex-col justify-between cursor-pointer  hover:border-blue-500 hover:bg-slate-10"
      >
        {isFavorite ? "Убрать из избранного" : "Добавить в избранное"}
      </button>
    </div>
  );
}
