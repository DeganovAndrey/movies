"use client";
import { useState } from "react";

interface Movie {
  id: number;
  title: string;
}

interface SearchBarProps {
  movies: Movie[];
}

export default function SearchBar({ movies }: SearchBarProps) {
  const [value, setValue] = useState<string>("");

  const filteredMovie = movies.filter((el) =>
    el.title.includes(value.toLowerCase()),
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <div>
      <input
        className="border rounded-lg p-1 mb-2"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Поиск фильмов..."
      />
      <p className="underline mb-2">Найдено фильмов: {filteredMovie.length}</p>
      <ul>
        {filteredMovie.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
