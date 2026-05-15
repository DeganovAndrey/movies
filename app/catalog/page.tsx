import Link from "next/link";

type TMovies = {
  id: string;
  title: string;
  year: number;
};

const movies: TMovies[] = [
  { id: "1", title: "Terminator", year: 1996 },
  { id: "2", title: "Fight Club", year: 1999 },
  { id: "3", title: "Interstellar", year: 2014 },
  { id: "4", title: "Godfather", year: 1972 },
  { id: "5", title: "Pulp Fiction", year: 1994 },
];

export default async function CatalogPage() {
  return (
    <div>
      <h1>PAGE catalog movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/catalog/${movie.id}`}>
              {movie.title}
              {movie.year}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/">to main</Link>
    </div>
  );
}
