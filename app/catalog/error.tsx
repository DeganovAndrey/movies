"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function CatalogError({ error, reset }: ErrorProps) {
  return (
    <div>
      <h2>Что-то пошло не так</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Попробовать снова</button>
    </div>
  );
}
