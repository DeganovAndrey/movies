import Link from "next/link";

// type TMovies = {
//   id: string;
//   title: string;
//   year: number;
// };

// const movies: TMovies[] = [
//   { id: "1", title: "Terminator", year: 1996 },
//   { id: "2", title: "Fight Club", year: 1999 },
//   { id: "3", title: "Interstellar", year: 2014 },
//   { id: "4", title: "Godfather", year: 1972 },
//   { id: "5", title: "Pulp Fiction", year: 1994 },
// ];

type Movies = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function CatalogPage() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
  );

  const movies: Movies[] = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">PAGE catalog movies</h1>
      <ul className="grid grid-cols-1 md:grid-col-2 gap-4 mb-6 list-none">
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex-col justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold capitalize mb-2 line-clamp-1">
                {movie.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {" "}
                {movie.body}
              </p>
            </div>
            <Link href={`/catalog/${movie.id}`}>подробнее</Link>
          </li>
        ))}
      </ul>
      <Link href="/">to main</Link>
    </div>
  );
}
